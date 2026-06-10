export default function HistoryPage() {
          const redeemedVouchers = [
                    {
                              id: 1,
                              store: "Burger World",
                              reward: "25% Discount",
                              date: "2026-06-07",
                    },
                    {
                              id: 2,
                              store: "Pizza Palace",
                              reward: "Free Drink",
                              date: "2026-06-05",
                    },
          ];

          return (
                    <div
                              style={{
                                        minHeight: "100vh",
                                        backgroundColor: "#050816",
                                        color: "white",
                                        padding: "20px",
                              }}
                    >
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

                              {redeemedVouchers.map((voucher) => (
                                        <div
                                                  key={voucher.id}
                                                  style={{
                                                            border: "1px solid #1e3a8a",
                                                            backgroundColor: "#030b1f",
                                                            padding: "15px",
                                                            marginTop: "15px",
                                                            borderRadius: "12px",
                                                            boxShadow: "0 0 8px rgba(30,58,138,0.25)",
                                                  }}
                                        >
                                                  <h3
                                                            style={{
                                                                      color: "#60a5fa",
                                                                      marginBottom: "10px",
                                                            }}
                                                  >
                                                            {voucher.store}
                                                  </h3>

                                                  <p
                                                            style={{
                                                                      fontSize: "18px",
                                                                      fontWeight: "bold",
                                                            }}
                                                  >
                                                            {voucher.reward}
                                                  </p>

                                                  <div
                                                            style={{
                                                                      display: "inline-block",
                                                                      marginTop: "10px",
                                                                      padding: "4px 10px",
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
                                                            {voucher.date}
                                                  </p>
                                        </div>
                              ))}
                    </div>
          );
}
