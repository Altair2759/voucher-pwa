// Voucher detail page made by Tshiamo

"use client";

import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import { isVoucherRedeemed, saveRedeemedVoucher } from "@/lib/indexedDB/redeemed-vouchers";
import { vouchers } from "@/lib/types/voucher";


export default function VoucherDetailPage() {
  // get voucher ID from URL parameters
  const params = useParams<{ id: string }>();
  const voucherId = Number(params?.id);
  // find matching vouchers
  const voucher = vouchers.find((item) => item.id === voucherId);
  const [isRedeemed, setIsRedeemed] = useState(false);
  const [loading, setLoading] = useState(true);

  // check redemption status when page loads
  useEffect(() => {
    let isMounted = true;

    const checkRedeemedStatus = async () => {
      // Stops loading if voucher is not found
      if (!voucher) {
        if (isMounted) setLoading(false);
        return;
      }

      // Check if voucher is in redeemed voucher storage
      const redeemed = await isVoucherRedeemed(voucher.id);
      if (isMounted) {
        setIsRedeemed(redeemed);
        setLoading(false);
      }
    };

    checkRedeemedStatus();

    return () => {
      isMounted = false;
    };
  }, [voucher]);

  // Display a message if voucher cannot be found
  if (!voucher) {
    return (
      <div className="p-8 min-h-screen bg-zinc-100 dark:bg-slate-900 text-zinc-900 dark:text-slate-50">
        <p className="text-lg">Voucher not found.</p>
        <button
          type="button"
          onClick={() => { location.href = "/vouchers" }}
          className="
            mt-4 px-4 py-2
            bg-indigo-600 dark:bg-emerald-500
            text-white rounded-lg font-semibold
            hover:bg-indigo-700 dark:hover:bg-emerald-600
            transition
          "
        >
          Back to vouchers
        </button>
      </div>
    );
  }

  const handleRedeem = async () => {
    if (isRedeemed || loading) return;
    // Save voucher information to IndexedDB
    try {
      await saveRedeemedVoucher({
        id: voucher.id,
        title: voucher.title,
        description: `${voucher.company} • ${voucher.category}`,
        value: `R${voucher.value}`,
        redeemedAt: new Date().toLocaleString(),
      });
      // update UI to show redeemed status
      setIsRedeemed(true);
    } catch (error) {
      console.error("Failed to redeem voucher", error);
    }
  };

  return (
    <div className="min-h-screen bg-zinc-100 dark:bg-slate-900 p-8 text-zinc-900 dark:text-slate-50">
      
      <button
        type="button"
        onClick={() => { location.href = "/vouchers" }}
        className="
          mb-6 px-4 py-2
          bg-indigo-600 dark:bg-emerald-500
          text-white rounded-lg font-semibold
          hover:bg-indigo-700 dark:hover:bg-emerald-600
          transition
        "
      >
        ← Back
      </button>

      <div
        className="
          max-w-[720px] mx-auto
          bg-white dark:bg-slate-800
          border border-slate-300 dark:border-slate-700
          rounded-2xl p-6 shadow-lg
        "
      >
        <h1 className="text-3xl font-bold mb-3 text-zinc-900 dark:text-slate-50">
          {voucher.title}
        </h1>

        <p className="text-zinc-500 dark:text-slate-400 mb-2">
          <strong>Company:</strong> {voucher.company}
        </p>

        <p className="text-zinc-500 dark:text-slate-400 mb-2">
          <strong>Category:</strong> {voucher.category}
        </p>

        <p className="text-zinc-500 dark:text-slate-400 mb-2">
          <strong>Value:</strong> R{voucher.value}
        </p>

        <p className="text-zinc-500 dark:text-slate-400 mb-2">
          <strong>Quantity:</strong> {voucher.quantity}
        </p>

        <p className="text-zinc-500 dark:text-slate-400 mb-2">
          <strong>Expires:</strong> {voucher.expiryDate}
        </p>

        <p className="text-zinc-500 dark:text-slate-400 mb-6">
          <strong>Code:</strong> {voucher.code}
        </p>

        {isRedeemed ? (
          <p className="text-emerald-500 font-semibold">
            Voucher redeemed successfully.
          </p>
        ) : (
          <button
            type="button"
            onClick={handleRedeem}
            className="
              px-5 py-3
              bg-indigo-600 dark:bg-emerald-500
              text-white rounded-lg font-semibold
              hover:bg-indigo-700 dark:hover:bg-emerald-600
              transition
            "
          >
            Redeem voucher
          </button>
        )}
      </div>
    </div>
  );
}
