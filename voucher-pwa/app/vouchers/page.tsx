// Voucher Browse Page made by Ethan

import VoucherCard from "@/components/VoucherCard";
import { vouchers } from "@/lib/types/voucher";

export default function VouchersPage() {
  return (
    <div
      style={{
        backgroundColor: "#ffffff",
        minHeight: "100vh",
        padding: "30px",
      }}
    >
      <h1
        style={{
          color: "Black",
          textAlign: "center",
          fontSize: "42px",
          marginBottom: "10px",
        }}
      >
        Available Vouchers
      </h1>

      <p
        style={{
          textAlign: "center",
          color: "#7d7d7dd3",
          marginBottom: "40px",
          fontSize: "18px",
        }}
      >
        Browse and redeem amazing deals
      </p>

      <div
        style={{
          maxWidth: "1000px",
          margin: "0 auto",
        }}
      >
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