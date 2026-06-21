// QR Scanner component made by Crystal

"use client";
 
import React, { useEffect } from "react";
import { Html5QrcodeScanner } from "html5-qrcode";
 
interface QRScannerProps {
  onScanSuccess: (decodedText: string) => void;
}
 
const QRScanner: React.FC<QRScannerProps> = ({
  onScanSuccess,
}) => {
 
  useEffect(() => {
 
    const scanner = new Html5QrcodeScanner(
      "reader",
      {
        fps: 10,
        qrbox: {
          width: 250,
          height: 250,
        },
        rememberLastUsedCamera: true,
      },
      false
    );
 
    scanner.render(
 
      (decodedText) => {
 
        console.log("Scanned:", decodedText);
 
        if (navigator.vibrate) {
          navigator.vibrate(200);
        }
 
        onScanSuccess(decodedText);
 
      },
 
      () => {
        // Ignore scan errors
      }
 
    );
 
    return () => {
 
      scanner.clear().catch((error) => {
        console.log(error);
      });
 
    };
 
  }, [onScanSuccess]);
 
  return (
    <div className="flex justify-center">
 
      <div
        id="reader"
        style={{
          width: "100%",
          maxWidth: "400px",
        }}
      />
 
    </div>
  );
};
 
export default QRScanner;