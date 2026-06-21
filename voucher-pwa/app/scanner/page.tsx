// Settings page made by Crystal

"use client";
 
import { useEffect } from "react";
 
import QRScanner from "../../components/QRScanner";
 
import {
  requestNotificationPermission,
  showNotification,
} from "../../lib/notifications/push";
 
export default function ScannerPage() {
 
  useEffect(() => {
 
    // Register Service Worker
    if ("serviceWorker" in navigator) {
 
      navigator.serviceWorker
        .register("/service-worker.js")
        .then(() => {
          console.log("Service Worker Registered");
        })
        .catch((error) => {
          console.log(error);
        });
 
    }
 
  }, []);
 
  // QR Scan Success
  const handleScan = (data: string) => {
 
    console.log("Voucher Scanned:", data);
 
    // Mobile vibration
    if (navigator.vibrate) {
      navigator.vibrate(200);
    }
 
    // Show notification
    showNotification(
      "Voucher Scanned",
      `Voucher Code: ${data}`
    );
 
    alert(`Voucher scanned successfully: ${data}`);
  };
 
  // Enable browser notifications
  const enableNotifications = async () => {
 
    const granted =
      await requestNotificationPermission();
 
    if (granted) {
 
      showNotification(
        "Notifications Enabled",
        "You will now receive voucher alerts."
      );
 
    }
 
  };
 
  return (
    <main className="min-h-screen p-4 flex flex-col items-center">
 
      <h1 className="text-3xl font-bold mb-4">
        QR Voucher Scanner
      </h1>
 
      <button
        onClick={enableNotifications}
        className="bg-black text-white px-4 py-2 rounded mb-6"
      >
        Enable Notifications
      </button>
 
      <div className="w-full max-w-md">
        <QRScanner onScanSuccess={handleScan} />
      </div>
 
    </main>
  );
}