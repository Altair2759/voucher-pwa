// Settings page made by Mia, Crystal, Tineil
// Settings page styles made by Reggie, Ethan

"use client";
import { useTheme } from "next-themes";
import { useState, useEffect } from "react";
import { IoChevronDown } from "react-icons/io5";

// Using accordion for the open list stuff

export default function SettingsPage() {
  const { setTheme } = useTheme();

  const [openSection, setOpenSection] = useState<string | null>(null);
  const [history, setHistory] = useState<string[]>([]);

  useEffect(() => {
    const stored = localStorage.getItem("voucherHistory");
    if (stored) {
      setHistory(JSON.parse(stored));
    }
  }, []);

  const saveHistory = (newHistory: string[]) => {
    setHistory(newHistory);
    localStorage.setItem("voucherHistory", JSON.stringify(newHistory));
  };

  const clearHistory = () => {
    if (confirm("Are you sure you want to clear ALL history?")) {
      saveHistory([]);
      alert("History cleared successfully.");
    }
  };

  const deleteItem = (index: number) => {
    if (confirm("Delete this voucher from history?")) {
      const newHistory = [...history];
      newHistory.splice(index, 1);
      saveHistory(newHistory);
      alert("Voucher deleted.");
    }
  };

  const exportHistory = () => {
    if (history.length === 0) {
      alert("No history to export.");
      return;
    }
    const blob = new Blob([JSON.stringify(history, null, 2)], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "voucher-history.json";
    a.click();
    URL.revokeObjectURL(url);
    alert("History exported successfully.");
  };

  const toggle = (section: string) => {
    setOpenSection(openSection === section ? null : section);
  };

  return(
    <div className="min-h-screen w-full flex flex-col items-center py-10 px-4">
      <div className="w-full max-w-md space-y-4">

        <h1 className="text-2xl font-bold text-center">Comming Soon</h1>

        {/* Mia Section: Themes */}
        <div className="rounded-2xl bg-white dark:bg-slate-800 shadow-md overflow-hidden">
          <button
            onClick={() => toggle("theme")}
            className="w-full flex justify-between items-center px-5 py-4 font-semibold hover:bg-zinc-100 dark:hover:bg-slate-800 transition"
          >
            Themes
            <span className={`transition ${openSection === "theme" ? "rotate-180" : ""}`}><IoChevronDown /></span>
          </button>

          {openSection === "theme" && (
            <div className="px-5 pb-5 flex gap-3 flex-wrap">
              <button
                onClick={() => setTheme("light")}
                className="px-4 py-2 rounded-lg bg-indigo-600 text-white hover:bg-indigo-700 transition"
              >
                Light
              </button>

              <button
                onClick={() => setTheme("dark")}
                className="px-4 py-2 rounded-lg bg-emerald-500 text-white hover:bg-black transition"
              >
                Dark
              </button>

              <button
                onClick={() => setTheme("system")}
                className="px-4 py-2 rounded-lg bg-zinc-500 text-white hover:bg-zinc-600 transition"
              >
                System
              </button>
            </div>
          )}
        </div>

        {/* Crystal Section: Data management */}
        <div className="rounded-2xl bg-white dark:bg-slate-800 shadow-md overflow-hidden">
          <button
            onClick={() => toggle("data")}
            className="w-full flex justify-between items-center px-5 py-4 font-semibold hover:bg-zinc-100 dark:hover:bg-slate-800 transition"
          >
            Data Management
            <span className={`transition ${openSection === "data" ? "rotate-180" : ""}`}><IoChevronDown /></span>
          </button>

          {openSection === "data" && (
            <div className="px-5 pb-5 flex gap-3 flex-wrap">

              <button
                onClick={clearHistory}
                className="px-4 py-2 rounded-lg bg-red-500 text-white hover:bg-red-600 transition"
              >
                Clear All History
              </button>

              <button
                onClick={exportHistory}
                className="px-4 py-2 rounded-lg bg-blue-500 text-white hover:bg-blue-600 transition"
              >
                Export History
              </button>

            </div>
          )}
        </div>

        {/* Tineile Section: Info/About  */}
        <div className="rounded-2xl bg-white dark:bg-slate-800 shadow-md overflow-hidden">
          <button
            onClick={() => toggle("info")}
            className="w-full flex justify-between items-center px-5 py-4 font-semibold hover:bg-zinc-100 dark:hover:bg-slate-800 transition"
          >
            App information and support
            <span className={`transition ${openSection === "info" ? "rotate-180" : ""}`}><IoChevronDown /></span>
          </button>

          {openSection === "info" && (
            <div className="px-5 pb-5 space-y-4">

              <div>
                <h1 className="font-bold">Information</h1>
                <p>App Version</p>
                <p>v1.0.0</p>
              </div>

              <div>
                <h1 className="font-bold">About App</h1>
                <p>
                  Voucher PWA is a mobile-first app for browsing, saving,
                  managing, and redeeming vouchers.
                </p>
              </div>

              <div>
                <h2 className="font-bold">Changelog</h2>
                <ul className="list-disc ml-5">
                  <li>Added voucher redemption flow</li>
                  <li>Added settings page structure</li>
                  <li>Added Info/About section</li>
                  <li>Added app version and team credits</li>
                  <li>Added help and support section</li>
                </ul>
              </div>

              <div>
                <h2 className="font-bold">Team Credits</h2>
                <p><strong>Mia</strong> — Themes</p>
                <p><strong>Crystal</strong> — Data Management</p>
                <p><strong>Bohlokoa</strong> — Notifications & Vibrations</p>
                <p><strong>Tineille</strong> — Info/About Section</p>
                <p><strong>Ethan & Tshiamo</strong> — UI/UX Polish</p>
                <p><strong>Thandiwe</strong> — Testing & Bug Fixing</p>
                <p><strong>Reggie</strong> — State Management & Documentation</p>
              </div>

              <div className="flex flex-col gap-2">
                <button className="px-3 py-2 rounded-lg bg-zinc-800 text-white hover:bg-black transition">
                  Contact Support
                </button>
                <button className="px-3 py-2 rounded-lg bg-zinc-600 text-white hover:bg-zinc-700 transition">
                  View Documentation
                </button>
                <button className="px-3 py-2 rounded-lg bg-zinc-500 text-white hover:bg-zinc-600 transition">
                  Report an Issue
                </button>
              </div>

            </div>
          )}
        </div>

      </div>
    </div>
  );
}