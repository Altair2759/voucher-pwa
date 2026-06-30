// Install Prompt component created by Mia


"use client";

import { useEffect, useState } from "react";
/*useState--store component state
  useEffect--runs the code when the component loads
*/

//component definition 
export default function InstallPrompt() {
  // Detect Firefox (Firefox does NOT support beforeinstallprompt)
  const isFirefox = typeof navigator !== "undefined" && navigator.userAgent.includes("Firefox");

  //state variables
  const [deferredPrompt, setDeferredPrompt] = useState<any>(null);
  const [showButton, setShowButton] = useState(false);

  //useEffect — Listen for Install Prompt Event
  useEffect(() => {
    if (isFirefox) return; // Firefox will never fire the event

    const handler = (e: any) => {//start handler function
      console.log("beforeinstallprompt fired"); // debug
      e.preventDefault();
      setDeferredPrompt(e);
      setShowButton(true);
    };//end handler function

    window.addEventListener("beforeinstallprompt", handler);

    return () => window.removeEventListener("beforeinstallprompt", handler);
  }, [isFirefox]);//runs once when component mounts

  //installApp function
  const installApp = async () => {
    if (!deferredPrompt) return;//safety check

    deferredPrompt.prompt();//add to homescreen
    const result = await deferredPrompt.userChoice;

    setDeferredPrompt(null);
    setShowButton(false);
  };//end installApp function

  // If Firefox → show a helpful message instead of nothing
  if (isFirefox) {
    return (
      <button
        className="
        fixed top-1 right-4
        px-5 py-2
        text-blue-600 font-semibold
        rounded-xl
        backdrop-blur-xl
        bg-white/20
        border border-white/30
        shadow-lg
        "
      >
        Install App
      </button>
    );
  }

  //conditional rendering of the install button
  if (!showButton) return null;

  //button to trigger the install prompt(button UI)
  return (
    <button
      onClick={installApp}
      className="
      fixed top-1 right-4
      px-5 py-2
      text-blue-600 font-semibold
      rounded-xl
      backdrop-blur-xl
      bg-white/20
      border border-white/30
      shadow-lg
      hover:bg-white/30
      transition
      "//tailwind classes
    >
      Install App
    </button>
  );
}
