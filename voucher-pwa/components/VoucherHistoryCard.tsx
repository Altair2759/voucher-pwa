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
    <div
      style={{
        border: "1px solid #ffffff",
        backgroundColor: "#e5e5e53b",
        padding: "20px",
        marginBottom: "20px",
        borderRadius: "12px",
        boxShadow: "0 0 8px rgba(30,58,138,0.25)",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          gap: "16px",
        }}
      >
        <div>
          <h3
            style={{
              color: "#000000",
              marginBottom: "10px",
            }}
          >
            {title}
          </h3>

          <p
            style={{
              fontSize: "18px",
              color: "#313131",
              margin: 0,
            }}
          >
            {description}
          </p>
        </div>

        <div
          style={{
            fontSize: "24px",
            fontWeight: "bold",
            color: "#000000",
            whiteSpace: "nowrap",
          }}
        >
          {value}
        </div>
      </div>

      <div
        style={{
          display: "inline-block",
          marginTop: "12px",
          padding: "5px 12px",
          borderRadius: "20px",
          backgroundColor: "#0f172a",
          border: "1px solid #22c55e",
          color: "#22c55e",
        }}
      >
        ✓ Redeemed
      </div>

      <p
        style={{
          marginTop: "12px",
          color: "#94a3b8",
        }}
      >
        Redeemed: {redeemedAt}
      </p>
    </div>
  );
}