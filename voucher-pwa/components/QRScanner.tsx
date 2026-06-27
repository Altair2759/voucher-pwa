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
    <div className="flex justify-center items-center min-h-[60vh]">
 
      <div
        id="reader"
        className="w-full max-w-[400px] border border-slate-300 dark:border-slate-700 rounded-xl shadow-md bg-slate-100 dark:bg-slate-800 p-4"
      />
 
    </div>
  );
};
 
export default QRScanner;