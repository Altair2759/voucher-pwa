'use client';

import { useState } from 'react';
import { saveRedeemedVoucher } from '@/lib/indexedDB/redeemed-vouchers';

type Voucher = {
  id: number;
  title: string;
  description: string;
  value: string;
  redeemed: boolean;
};

const sampleVouchers: Voucher[] = [
  {
    id: 1,
    title: 'Coffee Voucher',
    description: 'Get one free coffee at selected stores.',
    value: 'Free Coffee',
    redeemed: false,
  },
  {
    id: 2,
    title: 'Pizza Discount',
    description: 'Get 20% off your next pizza order.',
    value: '20% Off',
    redeemed: false,
  },
  {
    id: 3,
    title: 'Movie Ticket Voucher',
    description: 'Save R50 on your next movie ticket.',
    value: 'R50 Off',
    redeemed: false,
  },
];

export default function RedeemPage() {
  const [vouchers, setVouchers] = useState<Voucher[]>(sampleVouchers);

  const handleRedeem = async (id: number) => {
  const selectedVoucher = vouchers.find(
    (voucher) => voucher.id === id
  );

  if (!selectedVoucher) return;

  await saveRedeemedVoucher({
    id: selectedVoucher.id,
    title: selectedVoucher.title,
    description: selectedVoucher.description,
    value: selectedVoucher.value,
    redeemedAt: new Date().toLocaleString(),
  });

  setVouchers((currentVouchers) =>
    currentVouchers.map((voucher) =>
      voucher.id === id
        ? { ...voucher, redeemed: true }
        : voucher
    )
  );
};

  return (
    <main className="min-h-screen p-6">
      <h1 className="text-2xl font-bold mb-2">Redeem Vouchers</h1>

      <p className="mb-6 text-gray-600">
        Choose a voucher and redeem it.
      </p>

      <div className="space-y-4">
        {vouchers.map((voucher) => (
          <section
            key={voucher.id}
            className="rounded-lg border p-4 shadow-sm"
          >
            <h2 className="text-lg font-semibold">{voucher.title}</h2>

            <p className="text-sm text-gray-600">{voucher.description}</p>

            <p className="mt-2 font-medium">Value: {voucher.value}</p>

            {voucher.redeemed ? (
              <p className="mt-3 font-semibold text-green-600">
                Voucher Redeemed
              </p>
            ) : (
              <button
                onClick={() => handleRedeem(voucher.id)}
                className="mt-3 rounded bg-blue-600 px-4 py-2 text-white"
              >
                Redeem
              </button>
            )}
          </section>
        ))}
      </div>
    </main>
  );
}