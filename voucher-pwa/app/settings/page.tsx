"use client";
import { useTheme } from "next-themes";

export default function SettingsPage() {
  const { theme, setTheme } = useTheme();
  return (
    <div className="min-h-screen bg-zinc-100 dark:bg-slate-900 p-4 text-zinc-900 dark:text-slate-50 space-y-8">
      {/* Mia Section: Themes */}
<section>
        <h2 className="text-xl font-semibold mb-3">Theme</h2>

        <div className="flex gap-3">
          <button
            onClick={() => setTheme("light")}
            className="
              px-4 py-2 rounded-lg
              bg-indigo-600 dark:bg-emerald-500
              text-white font-medium
              hover:bg-indigo-700 dark:hover:bg-emerald-600
              transition
            "
          >
            Light
          </button>

          <button
            onClick={() => setTheme("dark")}
            className="
              px-4 py-2 rounded-lg
              bg-indigo-600 dark:bg-emerald-500
              text-white font-medium
              hover:bg-indigo-700 dark:hover:bg-emerald-600
              transition
            "
          >
            Dark
          </button>

        
        </div>
      </section>



      {/* Crystal Section: Data management */}




      {/* Bohlokoa Section: Notifications & vibrations */}





      {/* Tineile Section: Info/About  */}




    </div>
  );
}
