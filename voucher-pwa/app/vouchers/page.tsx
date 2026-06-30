// Voucher Browse Page made by Ethan

import VoucherCard from "@/components/VoucherCard";
import { vouchers } from "@/lib/types/voucher";

export default function VouchersPage() {
  return (
    <div
      className="min-h-screen bg-zinc-100 dark:bg-slate-900 p-8 text-zinc-900 dark:text-slate-50"
    >
      <h1 className="text-center text-4xl font-bold text-zinc-900 dark:text-slate-50 mb-2">
        Available Vouchers
      </h1>

      <p className="text-center text-zinc-500 dark:text-slate-400 text-lg mb-10">
        Browse and redeem amazing deals
      </p>

      <div
        className="max-w-[1000px] mx-auto">
        {vouchers.map((voucher) => (
          <VoucherCard
            key={voucher.id}
            id={voucher.id}
            title={voucher.title}
            description={`${voucher.company} • ${voucher.category}`}
            expiry={voucher.expiryDate}
          />
        ))}
      </div>
    </div>
  );
}