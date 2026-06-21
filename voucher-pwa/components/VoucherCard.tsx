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
    <div
      style={{
        backgroundColor: "#cfcfcf90",
        borderRadius: "16px",
        padding: "24px",
        marginBottom: "20px",
        boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
      }}
    >
      <h2
        style={{
          color: "Black",
          fontSize: "28px",
          marginBottom: "12px",
        }}
      >
        {title}
      </h2>

      <p
        style={{
          color: "#6b6b6b",
          fontSize: "18px",
          marginBottom: "12px",
        }}
      >
        {description}
      </p>

      <p
        style={{
          color: "#666666",
          marginBottom: "18px",
          fontSize: "15px",
        }}
      >
        ⏰ Expires: {expiry}
      </p>

      <button
        type="button"
        style={{
          backgroundColor: "black",
          color: "#ffffff",
          border: "none",
          borderRadius: "8px",
          padding: "12px 20px",
          fontSize: "16px",
          fontWeight: "bold",
          cursor: "pointer",
        }}
        onClick={() => {location.href = `/vouchers/${id}`}}
      >
        View Voucher
      </button>
    </div>
  );
}