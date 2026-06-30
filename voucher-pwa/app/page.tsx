// Created by Reggie Vaudin
"use client";

import { useEffect } from "react";
import Button from "@/components/Button";
// React icons for quick action buttons
import { MdOutlineQrCodeScanner } from "react-icons/md";
import { LuTicketPercent } from "react-icons/lu";
import { FaHistory } from "react-icons/fa";
import InstallPrompt from "@/public/InstallPromp";


export default function Home() {
  // Register service worker when app loads (enables PWA/offline support)
  useEffect(() => {
    if ("serviceWorker" in navigator) {
      navigator.serviceWorker
        .register("/service-worker.js")
        .then((registration) => {
          console.log("Service worker registered", registration.scope);
        })
        .catch((error) => {
          console.error("Service worker registration failed", error);
        });
    }
  }, []);


  return (
    <div className="flex flex-col items-center">
      <div className="w-full rounded-b-lg bg-zinc-100 px-4 py-3 mb-15">
        <h1 className="text-xl font-semibold tracking-wide text-black">Voucher PWA</h1>
      </div>
      {/* PWA Install Prompt */}
      <InstallPrompt />
      
      {/* Hero Section */}
      <div className="flex flex-col items-center mb-10">
        <h1 className="text-3xl font-bold mb-4 ">Great deals Just for You</h1>
        <p className="text-zinc-500 mb-6">Find, redeem and manage your vouchers easily.</p>
        {/* Navigate to voucher list */}
        <Button text="Browse Vouchers" onClick={() => {location.href = "/vouchers"}} />
      </div>  
      
      {/* Quick Actions section */}
      <h1 className="text-xl font-semibold">Quick Actions</h1>

      <div className="flex items-center mt-7">
        
        {/* QR Scan / Redeem Voucher */}
        <button onClick={() => {location.href = "/scanner"}} className="flex flex-col justify-center items-center text-center min-w-25 bg-zinc-100 rounded-lg h-40 ml-5 p-2">
          <MdOutlineQrCodeScanner className="text-5xl mb-2"/>
          <h1 className="text-lg">Scan QR</h1>
          <p className="text-zinc-400 text-sm w-20">To Redeem</p>
        </button>
        {/* View voucher history */}
        <button onClick={() => {location.href = "/history"}} className="flex flex-col justify-center items-center text-center min-w-25 bg-zinc-100 rounded-lg h-40 ml-5 px-2">
          <FaHistory className="text-4xl mb-2 mt-2"/>
          <h1 className="text-lg">My History</h1>
          <p className="text-zinc-400 text-sm w-25">View redeemed vouchers</p>
        </button>
        {/* Browse vouchers */}
        <button onClick={() => {location.href = "/vouchers"}} className="flex flex-col justify-center items-center text-center min-w-25 bg-zinc-100 rounded-lg h-40 ml-5 mr-5 p-2">
          <LuTicketPercent className="text-5xl mb-2"/>
          <h1 className="text-lg">Browse</h1>
          <p className="text-zinc-400 text-sm w-20">Browse vouchers</p>
        </button>
      </div>
        

    </div>
  );
}