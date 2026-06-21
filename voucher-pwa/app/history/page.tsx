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
    <div
      style={{
        minHeight: "100vh",
        backgroundColor: "#ffffff",
        color: "white",
        padding: "20px",
      }}
    >
      <div style={{ marginBottom: "30px" }}>
        <h1
          style={{
            fontSize: "36px",
            color: "#000000",
            marginBottom: "5px",
          }}
        >
          Redemption History
        </h1>

        <p
          style={{
            color: "#94a3b8",
            fontSize: "14px",
          }}
        >
          View all redeemed vouchers
        </p>
      </div>

      <div style={{ marginBottom: "20px" }}>
        <input
          type="text"
          placeholder="Search vouchers..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          style={{
            width: "100%",
            padding: "12px",
            borderRadius: "10px",
            border: "1px solid #ffffff",
            backgroundColor: "#c9c9c964",
            color: "black",
            fontSize: "16px",
            outline: "none",
            boxSizing: "border-box",
          }}
        />
      </div>

      <div
        style={{
          display: "flex",
          gap: "10px",
          marginBottom: "25px",
          flexWrap: "wrap",
        }}
      >
        <button
          onClick={() => setFilter("All")}
          style={{
            padding: "8px 16px",
            borderRadius: "20px",
            border: "none",
            backgroundColor: filter === "All" ? "#2563eb" : "#000000",
            color: filter === "All" ? "white" : "#ffffff",
            cursor: "pointer",
          }}
        >
          All
        </button>

        <button
          onClick={() => setFilter("Discount")}
          style={{
            padding: "8px 16px",
            borderRadius: "20px",
            border: "1px solid #1e3a8a",
            backgroundColor:
              filter === "Discount" ? "#2563eb" : "#000000",
            color: filter === "Discount" ? "white" : "#ffffff",
            cursor: "pointer",
          }}
        >
          Discounts
        </button>

        <button
          onClick={() => setFilter("Cashback")}
          style={{
            padding: "8px 16px",
            borderRadius: "20px",
            border: "1px solid #1e3a8a",
            backgroundColor:
              filter === "Cashback" ? "#2563eb" : "#000000",
            color: filter === "Cashback" ? "white" : "#ffffff",
            cursor: "pointer",
          }}
        >
          Cashback
        </button>

        <button
          onClick={() => setFilter("Free")}
          style={{
            padding: "8px 16px",
            borderRadius: "20px",
            border: "1px solid #1e3a8a",
            backgroundColor: filter === "Free" ? "#2563eb" : "#000000",
            color: filter === "Free" ? "white" : "#ffffff",
            cursor: "pointer",
          }}
        >
          Free Items
        </button>
      </div>

      <div
        style={{
          backgroundColor: "#dadada55",
          border: "1px solid #ffffff",
          borderRadius: "12px",
          padding: "20px",
          marginBottom: "25px",
          boxShadow: "0 0 8px rgba(255, 255, 255, 0.25)",
        }}
      >
        <p style={{ color: "#000000" }}>Total Redeemed</p>

        <h2
          style={{
            color: "#000000",
            fontSize: "32px",
            margin: 0,
          }}
        >
          {redeemedVouchers.length} Vouchers
        </h2>
      </div>

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
        <div
          style={{
            textAlign: "center",
            padding: "40px",
            border: "1px solid #1e3a8a",
            borderRadius: "12px",
            backgroundColor: "#030b1f",
          }}
        >
          <h2 style={{ color: "#60a5fa" }}>No vouchers found</h2>

          <p style={{ color: "#94a3b8" }}>
            Try a different search term.
          </p>
        </div>
      )}
    </div>
  );
}