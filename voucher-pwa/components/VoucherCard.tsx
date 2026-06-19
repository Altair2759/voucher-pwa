type VoucherCardProps = {
  title: string;
  description: string;
  expiry: string;
};

export default function VoucherCard({
  title,
  description,
  expiry,
}: VoucherCardProps) {
  return (
    <div
      style={{
        backgroundColor: "#ffffff",
        border: "2px solid #2563eb",
        borderRadius: "16px",
        padding: "24px",
        marginBottom: "20px",
        boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
      }}
    >
      {/* Voucher Title */}
      <h2
        style={{
          color: "#2563eb",
          fontSize: "28px",
          marginBottom: "12px",
        }}
      >
        {title}
      </h2>

      {/* Voucher Description */}
      <p
        style={{
          color: "#000000",
          fontSize: "18px",
          marginBottom: "12px",
        }}
      >
        {description}
      </p>

      {/* Expiry Date */}
      <p
        style={{
          color: "#666666",
          marginBottom: "18px",
          fontSize: "15px",
        }}
      >
        ⏰ Expires: {expiry}
      </p>

      {/* Redeem Button */}
      <button
        style={{
          backgroundColor: "#2563eb",
          color: "#ffffff",
          border: "none",
          borderRadius: "8px",
          padding: "12px 20px",
          fontSize: "16px",
          fontWeight: "bold",
          cursor: "pointer",
        }}
      >
        Redeem Voucher
      </button>
    </div>
  );
}