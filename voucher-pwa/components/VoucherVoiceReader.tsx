"use client";

// Import React hook for managing component state
import { useState } from "react";

// Define the props that this component expects
type Props = {
          text: string; // Text that will be read aloud
};

// Main component
export default function VoucherVoiceReader({ text }: Props) {

          // Tracks whether the speech is currently paused
          const [isPaused, setIsPaused] = useState(false);

          // Function to start reading the text
          const speak = () => {

                    // Stop any speech currently playing
                    window.speechSynthesis.cancel();

                    // Create a new speech object using the provided text
                    const speech = new SpeechSynthesisUtterance(text);

                    // Voice settings/vloume
                    speech.rate = 0.9;   // Speaking speed (1 = normal)
                    speech.pitch = 0.8;  // Voice pitch (lower = deeper voice)
                    speech.volume = 0.3; // Volume level (0 to 1)

                    // Start speaking
                    window.speechSynthesis.speak(speech);
          };

          // Function to pause or resume speech
          const pauseResume = () => {

                    // If speech is currently playing, pause it
                    if (!isPaused) {
                              window.speechSynthesis.pause();
                              setIsPaused(true);
                    }
                    // Otherwise, resume the paused speech
                    else {
                              window.speechSynthesis.resume();
                              setIsPaused(false);
                    }
          };

          // Function to completely stop speech
          const stop = () => {

                    // Cancel all speech synthesis
                    window.speechSynthesis.cancel();

                    // Reset pause state
                    setIsPaused(false);
          };

          return (
                    <div
                              style={{
                                        marginTop: "20px",
                                        padding: "20px",
                                        borderRadius: "12px",
                                        backgroundColor: "#f3f4f6",
                              }}
                    >
                              {/* Component heading */}
                              <h3
                                        style={{
                                                  marginBottom: "15px",
                                        }}
                              >
                                        Secret Whisper Mode
                              </h3>

                              {/* Button container */}
                              <div
                                        style={{
                                                  display: "flex",
                                                  gap: "10px",
                                                  flexWrap: "wrap",
                                        }}
                              >

                                        {/* Read Button */}
                                        <button
                                                  onClick={speak}

                                                  // Reduce opacity when mouse hovers
                                                  onMouseEnter={(e) => {
                                                            e.currentTarget.style.opacity = "0.8";
                                                  }}

                                                  // Restore opacity when mouse leaves
                                                  onMouseLeave={(e) => {
                                                            e.currentTarget.style.opacity = "1";
                                                  }}

                                                  style={{
                                                            padding: "10px 16px",
                                                            border: "none",
                                                            borderRadius: "8px",
                                                            backgroundColor: "#2563eb",
                                                            color: "white",
                                                            cursor: "pointer",
                                                            transition: "0.3s ease",
                                                  }}
                                        >
                                                  ▶ Read Voucher
                                        </button>

                                        {/* Pause / Resume Button */}
                                        <button
                                                  onClick={pauseResume}

                                                  onMouseEnter={(e) => {
                                                            e.currentTarget.style.opacity = "0.8";
                                                  }}

                                                  onMouseLeave={(e) => {
                                                            e.currentTarget.style.opacity = "1";
                                                  }}

                                                  style={{
                                                            padding: "10px 16px",
                                                            border: "none",
                                                            borderRadius: "8px",
                                                            backgroundColor: "#f59e0b",
                                                            color: "white",
                                                            cursor: "pointer",
                                                            transition: "0.3s ease",
                                                  }}
                                        >
                                                  {/* Change button text depending on pause state */}
                                                  {isPaused ? "▶ Resume" : "⏸ Pause"}
                                        </button>

                                        {/* Stop Button */}
                                        <button
                                                  onClick={stop}

                                                  onMouseEnter={(e) => {
                                                            e.currentTarget.style.opacity = "0.8";
                                                  }}

                                                  onMouseLeave={(e) => {
                                                            e.currentTarget.style.opacity = "1";
                                                  }}

                                                  style={{
                                                            padding: "10px 16px",
                                                            border: "none",
                                                            borderRadius: "8px",
                                                            backgroundColor: "#dc2626",
                                                            color: "white",
                                                            cursor: "pointer",
                                                            transition: "0.3s ease",
                                                  }}
                                        >
                                                  ⏹ Stop
                                        </button>
                              </div>
                    </div>
          );
}