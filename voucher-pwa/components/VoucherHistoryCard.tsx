type VoucherHistoryCardProps = {
          store: string;
          reward: string;
          date: string;
};

export default function VoucherHistoryCard({
          store,
          reward,
          date,
}: VoucherHistoryCardProps) {
          return (
                    <div
                              style={{
                                        border: "1px solid #1e3a8a",
                                        backgroundColor: "#030b1f",
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
                                        }}
                              >
                                        <div>
                                                  <h3
                                                            style={{
                                                                      color: "#60a5fa",
                                                                      marginBottom: "10px",
                                                            }}
                                                  >
                                                            {store}
                                                  </h3>

                                                  <p
                                                            style={{
                                                                      fontSize: "28px",
                                                                      fontWeight: "bold",
                                                                      color: "#ffffff",
                                                                      margin: 0,
                                                            }}
                                                  >
                                                            {reward}
                                                  </p>
                                        </div>

                                        <div
                                                  style={{
                                                            fontSize: "42px",
                                                  }}
                                        >

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
                                        Redeemed: {date}
                              </p>
                    </div>
          );
}