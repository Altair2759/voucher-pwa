// History Page made by Bohlokoa Mokoena

"use client";

import { useEffect, useState } from "react";
import VoucherHistoryCard from "../../components/VoucherHistoryCard";
import { getRedeemedVouchers, RedeemedVoucher } from "../../lib/indexedDB/redeemed-vouchers";

export default function HistoryPage() {
  // Stores all redeemede vouchers retrieved from IndexedDB
  const [redeemedVouchers, setRedeemedVouchers] = useState<RedeemedVoucher[]>([]);
  // Stores the user's search input
  const [searchTerm, setSearchTerm] = useState("");
  // Stores the currently selected filter category
  const [filter, setFilter] = useState("All");

  // Load redeemed vouchers when the page first renders
  useEffect(() => {
    const loadRedeemedVouchers = async () => {
      const vouchers = await getRedeemedVouchers();
      setRedeemedVouchers(vouchers);
    };

    loadRedeemedVouchers();
  }, []);

  // Filter vouchers based on search text and selected category
  const filteredVouchers = redeemedVouchers.filter((voucher) => {
    const search = searchTerm.toLowerCase();
    // Check if voucher matches search input 
    const matchesSearch =
      voucher.title.toLowerCase().includes(search) ||
      voucher.description.toLowerCase().includes(search) ||
      voucher.value.toLowerCase().includes(search);

    // Check if voucher matches selected filter
    const matchesFilter =
      filter === "All" ||
      voucher.description.toLowerCase().includes(filter.toLowerCase()) ||
      voucher.title.toLowerCase().includes(filter.toLowerCase()) ||
      voucher.value.toLowerCase().includes(filter.toLowerCase());

    return matchesSearch && matchesFilter;
  });

  return (
    <div className="min-h-screen bg-zinc-100 dark:bg-slate-900 text-zinc-900 dark:text-slate-50 p-5">
      
      {/* Page Header */}
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-zinc-900 dark:text-slate-50 mb-1">
          Redemption History
        </h1>
        <p className="text-zinc-500 dark:text-slate-400 text-sm">
          View all redeemed vouchers
        </p>
      </div>

{/* Search bar */}
      <div className="mb-6">
        <input
          type="text"
          placeholder="Search vouchers..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="
        w-full p-3 rounded-xl 
        border border-slate-300 dark:border-slate-700 
        bg-slate-100 dark:bg-slate-800 
        text-zinc-900 dark:text-slate-50 
        text-base outline-none
      "
    />
      </div>

{/* Filter buttons */}
      <div
        className="flex gap-3 mb-6 flex-wrap">
        {["All", "Discount", "Cashback", "Free"].map((category) => (
        <button
          key={category}
          onClick={() => setFilter(category)}
          className={`
            px-4 py-2 rounded-full text-sm font-medium transition 
            ${filter === category 
              ? "bg-indigo-600 dark:bg-emerald-500 text-white"
              : "bg-white dark:bg-slate-800 text-zinc-900 dark:text-slate-50 border border-slate-300 dark:border-slate-700"
          }
        `}
      >
          {category ==="Free" ? "Free Items" : category}
        </button>
      ))}
      </div>

{/*total redeemed vouchers */}
      <div className="bg-white dark:bg-slate-800 border border-slate-300 dark:border-slate-700 rounded-xl p-5 mb-6 shadow-md">
    <p className="text-zinc-900 dark:text-slate-50">Total Redeemed</p>
    <h2 className="text-3xl font-bold text-zinc-900 dark:text-slate-50">
          {redeemedVouchers.length} Vouchers
        </h2>
      </div>

{/*voucher list */}
      {filteredVouchers.length > 0 ? (
        filteredVouchers.map((voucher) => (
          <VoucherHistoryCard
            key={voucher.id}
            title={voucher.title}
            description={voucher.description}
            value={voucher.value}
            redeemedAt={voucher.redeemedAt}
          />
        ))
      ) : (
        <div className="text-center p-10 border border-slate-300 dark:border-slate-700 rounded-xl bg-white dark:bg-slate-800">
          <h2 className="text-indigo-600 dark:text-emerald-500 text-xl font-semibold">No vouchers found</h2>
          <p className="text-zinc-500 dark:text-slate-400">Try a different search term.</p>
        </div>
      )}
    </div>
  );
}