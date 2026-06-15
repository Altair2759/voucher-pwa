//top section
"use client";

import { useEffect, useState } from "react";
/*useState--store component state
  useEffect--runs the code when the component loads
*/

//component definition 
export default function InstallPrompt() {
  //state variables
  const [deferredPrompt, setDeferredPrompt] = useState<any>(null);
  const [showButton, setShowButton] = useState(false);

  //useEffect — Listen for Install Prompt Event
  useEffect(() => {
    const handler = (e: any) => {//start andler function
      e.preventDefault();
      setDeferredPrompt(e);
      setShowButton(true);
    };//end handler function

    window.addEventListener("beforeinstallprompt", handler);

    return () => window.removeEventListener("beforeinstallprompt", handler);
  }, []);//empty dependency array means this effect runs once when the component mounts

  //installApp function
  const installApp = async () => {
    if (!deferredPrompt) return;//safety check

    deferredPrompt.prompt();//add to homescreen
    const result = await deferredPrompt.userChoice;

    setDeferredPrompt(null);
    setShowButton(false);
  };//end installApp function

  //conditional rendering of the install button
  if (!showButton) return null;

  //button to trigger the install prompt(button UI)
  return (
    <button
      onClick={installApp}
      className="
      fixed bottom-4 right-4
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
