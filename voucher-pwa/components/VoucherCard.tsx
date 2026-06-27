// Voucher card created by Ethan & Tshiamo

"use client";


type VoucherCardProps = {
  id: number;
  title: string;
  description: string;
  expiry: string;
};

export default function VoucherCard({
  id,
  title,
  description,
  expiry,
}: VoucherCardProps) {
  

  return (
    <div className="
        bg-white dark:bg-slate-800
        border border-slate-300 dark:border-slate-700
        rounded-2xl p-6 mb-5 shadow-lg
      "
    >

      <h2 className="text-2xl font-bold text-zinc-900 dark:text-slate-50 mb-3">
        {title}
      </h2>

      <p className="text-lg text-zinc-500 dark:text-slate-400 mb-3">
        {description}
      </p>

      <p className="text-sm text-zinc-500 dark:text-slate-400 mb-4">
        ⏰ Expires: {expiry}
      </p>

      <button
        type="button"
        onClick={() => {location.href = `/vouchers/${id}`}}
        className="
          bg-indigo-600 dark:bg-emerald-500
          text-white rounded-lg px-5 py-3
          text-base font-semibold
          hover:bg-indigo-700 dark:hover:bg-emerald-600
          transition
        "
      >
        View Voucher
      </button>
    </div>
  );
}