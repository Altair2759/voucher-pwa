// Voucher history card created by Bohlokoa

type VoucherHistoryCardProps = {
  title: string;
  description: string;
  value: string;
  redeemedAt: string;
};

export default function VoucherHistoryCard({
  title,
  description,
  value,
  redeemedAt,
}: VoucherHistoryCardProps) {
  return (
    <div className="
      bg-white dark:bg-slate-800
      border border-slate-300 dark:border-slate-700
      p-5 mb-5 rounded-xl shadow-md
    ">

{/*top row*/}
      <div className="flex justify-between items-center gap-4">
        <div>
          <h3 className="text-zinc-900 dark:text-slate-50 mb-2 font-semibold">
            {title}
          </h3>

          <p className="text-lg text-zinc-500 dark:text-slate-400 m-0">
            {description}
          </p>
        </div>

        <div className="text-2xl font-bold text-zinc-900 dark:text-slate-50 whitespace-nowrap">
          {value}
        </div>
      </div>

{/*redeemed badge*/}
      <div className="
        inline-block mt-3 px-3 py-1 rounded-full
        bg-indigo-600 dark:bg-emerald-500
        text-white text-sm font-medium
      ">
        ✓ Redeemed
      </div>

{/*redeemed date*/}
      <p className="mt-3 text-zinc-500 dark:text-slate-400 text-sm">
        Redeemed: {redeemedAt}
      </p>
    </div>
  );
}