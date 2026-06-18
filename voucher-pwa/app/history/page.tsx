// History Page made by Bohlokoa Mokoena

"use client";

// React Hook
import { useState } from "react";


// Reusable Voucher Card Component
import VoucherHistoryCard from "../../components/VoucherHistoryCard";

// Mock Data
// Replace with IndexedDB function when teammate finishes database integration
import { redeemedVouchers } from "../../lib/mockData/redeemedVouchers";

export default function HistoryPage() {
          // React State
          // Stores search text
          const [searchTerm, setSearchTerm] = useState("");

          // Stores selected filter button
          const [filter, setFilter] = useState("All");

          // Filter vouchers by search text and category
          const filteredVouchers = redeemedVouchers.filter((voucher) => {
                    const matchesSearch = voucher.store
                              .toLowerCase()
                              .includes(searchTerm.toLowerCase());

                    const matchesFilter =
                              filter === "All" ||
                              voucher.reward.toLowerCase().includes(filter.toLowerCase());

                    return matchesSearch && matchesFilter;
          });

          return (
                    <div
                              style={{
                                        minHeight: "100vh",
                                        backgroundColor: "#050816",
                                        color: "white",
                                        padding: "20px",
                              }}
                    >
                              {/* Page Header */}
                              <div style={{ marginBottom: "30px" }}>
                                        <h1
                                                  style={{
                                                            fontSize: "36px",
                                                            color: "#60a5fa",
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
                                                  View all redeemed vouchers and rewards
                                        </p>
                              </div>

                              {/* Search Bar */}
                              <div
                                        style={{
                                                  marginBottom: "20px",
                                        }}
                              >
                                        <input
                                                  type="text"
                                                  placeholder="Search vouchers..."
                                                  value={searchTerm}
                                                  onChange={(e) => setSearchTerm(e.target.value)}
                                                  style={{
                                                            width: "100%",
                                                            padding: "12px",
                                                            borderRadius: "10px",
                                                            border: "1px solid #1e3a8a",
                                                            backgroundColor: "#030b1f",
                                                            color: "white",
                                                            fontSize: "16px",
                                                            outline: "none",
                                                            boxSizing: "border-box",
                                                  }}
                                        />
                              </div>

                              {/* Filter Buttons */}
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
                                                            backgroundColor:
                                                                      filter === "All" ? "#2563eb" : "#030b1f",
                                                            color:
                                                                      filter === "All" ? "white" : "#94a3b8",
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
                                                                      filter === "Discount" ? "#2563eb" : "#030b1f",
                                                            color:
                                                                      filter === "Discount" ? "white" : "#94a3b8",
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
                                                                      filter === "Cashback" ? "#2563eb" : "#030b1f",
                                                            color:
                                                                      filter === "Cashback" ? "white" : "#94a3b8",
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
                                                            backgroundColor:
                                                                      filter === "Free" ? "#2563eb" : "#030b1f",
                                                            color:
                                                                      filter === "Free" ? "white" : "#94a3b8",
                                                            cursor: "pointer",
                                                  }}
                                        >
                                                  Free Items
                                        </button>
                              </div>

                              {/* Total Rewards Card */}
                              <div
                                        style={{
                                                  backgroundColor: "#030b1f",
                                                  border: "1px solid #1e3a8a",
                                                  borderRadius: "12px",
                                                  padding: "20px",
                                                  marginBottom: "25px",
                                                  boxShadow: "0 0 8px rgba(30,58,138,0.25)",
                                        }}
                              >
                                        <p style={{ color: "#94a3b8" }}>
                                                  Total Rewards Earned
                                        </p>

                                        <h2
                                                  style={{
                                                            color: "#22c55e",
                                                            fontSize: "32px",
                                                            margin: 0,
                                                  }}
                                        >
                                                  850 Points
                                        </h2>
                              </div>

                              {/* Total Redeemed Card */}
                              <div
                                        style={{
                                                  backgroundColor: "#030b1f",
                                                  border: "1px solid #1e3a8a",
                                                  borderRadius: "12px",
                                                  padding: "20px",
                                                  marginBottom: "25px",
                                                  boxShadow: "0 0 8px rgba(30,58,138,0.25)",
                                        }}
                              >
                                        <p
                                                  style={{
                                                            color: "#94a3b8",
                                                            marginBottom: "5px",
                                                  }}
                                        >
                                                  Total Redeemed
                                        </p>

                                        <h2
                                                  style={{
                                                            color: "#60a5fa",
                                                            fontSize: "32px",
                                                            margin: 0,
                                                  }}
                                        >
                                                  {redeemedVouchers.length} Vouchers
                                        </h2>
                              </div>

                              {/* Voucher History */}
                              {filteredVouchers.length > 0 ? (
                                        filteredVouchers.map((voucher) => (
                                                  <VoucherHistoryCard
                                                            key={voucher.id}
                                                            store={voucher.store}
                                                            reward={voucher.reward}
                                                            date={voucher.date}
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
                                                  <h2 style={{ color: "#60a5fa" }}>
                                                            No vouchers found
                                                  </h2>

                                                  <p style={{ color: "#94a3b8" }}>
                                                            Try a different search term.
                                                  </p>
                                        </div>
                              )}
                    </div>
          );
}