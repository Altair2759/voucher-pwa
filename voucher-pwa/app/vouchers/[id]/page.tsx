"use client";

import Link from "next/link";
import { vouchers } from "@/lib/types/voucher";

export default function VouchersPage() {
  return (
    <div
      style={{
        padding: "30px",
        minHeight: "100vh",
        backgroundColor: "#f5f7fa",
      }}
    >
      <h1
        style={{
          textAlign: "center",
          marginBottom: "30px",
          fontSize: "2.5rem",
        }}
      >
        Available Vouchers
      </h1>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
          gap: "20px",
        }}
      >
        {vouchers.map((voucher) => (
          <div
            key={voucher.title}
            style={{
              background: "#fff",
              borderRadius: "16px",
              padding: "20px",
              boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
              transition: "all 0.3s ease",
              cursor: "pointer",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "translateY(-8px)";
              e.currentTarget.style.boxShadow =
                "0 10px 25px rgba(0,0,0,0.15)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "translateY(0)";
              e.currentTarget.style.boxShadow =
                "0 4px 12px rgba(0,0,0,0.1)";
            }}
          >
            <h2
              style={{
                marginBottom: "10px",
                color: "#1f2937",
              }}
            >
              {voucher.title}
            </h2>

            <p>
              <strong>Company:</strong> {voucher.company}
            </p>

            <p>
              <strong>Category:</strong> {voucher.category}
            </p>

            <p>
              <strong>Value:</strong> R{voucher.value}
            </p>

            <p>
              <strong>Quantity:</strong> {voucher.quantity}
            </p>

            <p>
              <strong>Expires:</strong> {voucher.expiryDate}
            </p>

            <div
              style={{
                display: "flex",
                gap: "10px",
                marginTop: "20px",
              }}
            >
              <Link href={`/vouchers/${voucher.id}`}>
                <button
                  style={{
                    padding: "10px 16px",
                    border: "none",
                    borderRadius: "8px",
                    backgroundColor: "#2563eb",
                    color: "white",
                    cursor: "pointer",
                  }}
                >
                  View Details
                </button>
              </Link>

              <button
                style={{
                  padding: "10px 16px",
                  border: "none",
                  borderRadius: "8px",
                  backgroundColor: "#16a34a",
                  color: "white",
                  cursor: "pointer",
                }}
                onClick={() =>
                  alert(`Voucher "R{voucher.title}" redeemed!`)
                }
              >
                Redeem
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
