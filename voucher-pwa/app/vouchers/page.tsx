import VoucherCard from "@/components/VoucherCard";

export default function VouchersPage() {
  return (
    <div
      style={{
        backgroundColor: "#ffffff",
        minHeight: "100vh",
        padding: "30px",
      }}
    >
      {/* Page Header */}
      <h1
        style={{
          color: "#2563eb",
          textAlign: "center",
          fontSize: "42px",
          marginBottom: "10px",
        }}
      >
        Available Vouchers
      </h1>

      {/* Subtitle */}
      <p
        style={{
          textAlign: "center",
          color: "#555",
          marginBottom: "40px",
          fontSize: "18px",
        }}
      >
        Browse and redeem amazing deals
      </p>

      {/* Voucher Container */}
      <div
        style={{
          maxWidth: "1000px",
          margin: "0 auto",
        }}
      >
        <VoucherCard
          title="Free Coffee"
          description="Redeem one free coffee"
          expiry="2026-10-01"
        />

        <VoucherCard
          title="R50 Discount"
          description="Get R50 off your next purchase"
          expiry="2026-12-31"
        />

        <VoucherCard
          title="Free Burger"
          description="Claim a free burger meal"
          expiry="2026-11-15"
        />

        <VoucherCard
          title="20% Off Clothing"
          description="Save 20% on selected fashion items"
          expiry="2026-09-20"
        />

        <VoucherCard
          title="Movie Ticket Deal"
          description="Buy one ticket and get one free"
          expiry="2026-08-31"
        />

        <VoucherCard
          title="Free Data Bundle"
          description="Get 1GB mobile data free"
          expiry="2026-12-01"
        />

        <VoucherCard
          title="Gym Pass"
          description="Enjoy one free gym session"
          expiry="2026-10-20"
        />

        <VoucherCard
          title="Pizza Special"
          description="Large pizza for the price of a medium"
          expiry="2026-09-15"
        />

        <VoucherCard
          title="Free Car Wash"
          description="One complimentary vehicle wash"
          expiry="2026-11-05"
        />

        <VoucherCard
          title="Shopping Voucher"
          description="Receive R100 shopping credit"
          expiry="2026-12-25"
        />
      </div>
    </div>
  );
}