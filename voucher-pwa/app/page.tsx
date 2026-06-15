// Page were REGGIE VAUDIN Will make the main page what the user sees first
"use client";

import { useEffect } from "react";
import Button from "@/components/Button";
import InstallPrompt from "@/public/InstallPromp";



export default function Home() {
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
    <div className="p-5 flex flex-col items-center">
      <InstallPrompt />
      <h1>Voucher PWA App</h1>
      <p>Welcome to the system</p>
      {/* Example buttons with the Three types of sizes */}
      <Button text="Large" onClick={() => alert("largeButton works!!")} type="large"/>
      <Button text="Meduim" onClick={() => alert("Meduim Button works!!")} type="meduim"/>
      <Button text="Small" onClick={() => alert("Small Button works!!")} type="small"/>
    </div>
  );
}
