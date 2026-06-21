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
      <div style={{ padding: "30px" }}>
        <p>Voucher not found.</p>
        <button
          type="button"
          onClick={() => {location.href = "/vouchers"}}
          style={{ marginTop: "12px" }}
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
    <div
      style={{
        minHeight: "100vh",
        backgroundColor: "#ffffff",
        padding: "30px",
      }}
    >
      <button
        type="button"
        onClick={() => {location.href = "/vouchers"}}
        style={{
          marginBottom: "16px",
          padding: "10px 16px",
          border: "none",
          borderRadius: "8px",
          backgroundColor: "#000000",
          color: "#ffffff",
          cursor: "pointer",
        }}
      >
        ← Back
      </button>

      <div
        style={{
          maxWidth: "720px",
          backgroundColor: "#d2d2d26f",
          borderRadius: "16px",
          padding: "24px",
          boxShadow: "0 6px 18px rgba(0,0,0,0.08)",
        }}
      >
        <h1 style={{ fontSize: "2rem", marginBottom: "10px" }}>
          {voucher.title}
        </h1>
        <p style={{ color: "#4b5563", marginBottom: "8px" }}>
          <strong>Company:</strong> {voucher.company}
        </p>
        <p style={{ color: "#4b5563", marginBottom: "8px" }}>
          <strong>Category:</strong> {voucher.category}
        </p>
        <p style={{ color: "#4b5563", marginBottom: "8px" }}>
          <strong>Value:</strong> R{voucher.value}
        </p>
        <p style={{ color: "#4b5563", marginBottom: "8px" }}>
          <strong>Quantity:</strong> {voucher.quantity}
        </p>
        <p style={{ color: "#4b5563", marginBottom: "8px" }}>
          <strong>Expires:</strong> {voucher.expiryDate}
        </p>
        <p style={{ color: "#4b5563", marginBottom: "18px" }}>
          <strong>Code:</strong> {voucher.code}
        </p>

        {isRedeemed ? (
          <p style={{ color: "#16a34a", fontWeight: 700 }}>
            Voucher redeemed successfully.
          </p>
        ) : (
          <button
            type="button"
            onClick={handleRedeem}
            style={{
              padding: "12px 18px",
              border: "none",
              borderRadius: "8px",
              backgroundColor: "#16a34a",
              color: "#fff",
              cursor: "pointer",
            }}
          >
            Redeem voucher
          </button>
        )}
      </div>
    </div>
  );
}
