// Settings Page made by Everyone

export default function SettingsPage() {
<<<<<<< HEAD
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

      <section className="mx-auto max-w-md space-y-4">
        <div>
          <h1 className="text-3xl font-bold">Settings</h1>
          <p className="text-gray-600">App information and support</p>
        </div>

        <div className="rounded-xl border bg-white p-4 shadow">
          <h2 className="text-xl font-semibold">Information</h2>

          <div className="mt-4 space-y-4">
            <div>
              <p className="text-sm text-gray-500">App Version</p>
              <p className="font-medium">v1.0.0</p>
            </div>

            <div>
              <p className="text-sm text-gray-500">About App</p>
              <p className="text-gray-700">
                Voucher PWA is a mobile-first app for browsing, saving,
                managing, and redeeming vouchers.
              </p>
            </div>
          </div>
        </div>

        <div className="rounded-xl border bg-white p-4 shadow">
          <h2 className="text-xl font-semibold">Changelog</h2>

          <ul className="mt-3 list-disc space-y-2 pl-5 text-gray-700">
            <li>Added voucher redemption flow</li>
            <li>Added settings page structure</li>
            <li>Added Info/About section</li>
            <li>Added app version and team credits</li>
            <li>Added help and support section</li>
          </ul>
        </div>

        <div className="rounded-xl border bg-white p-4 shadow">
          <h2 className="text-xl font-semibold">Team Credits</h2>

          <div className="mt-3 space-y-3 text-gray-700">
            <p><strong>Mia</strong> — Themes</p>
            <p><strong>Crystal</strong> — Data Management</p>
            <p><strong>Bohlokoa</strong> — Notifications & Vibrations</p>
            <p><strong>Tineille</strong> — Info/About Section</p>
            <p><strong>Ethan & Tshiamo</strong> — UI/UX Polish</p>
            <p><strong>Thandiwe</strong> — Testing & Bug Fixing</p>
            <p><strong>Reggie</strong> — State Management & Documentation</p>
          </div>
        </div>

        <div className="rounded-xl border bg-white p-4 shadow">
          <h2 className="text-xl font-semibold">Help & Support</h2>

          <p className="mt-2 text-gray-700">
            For help, users can contact the project team, check the project
            documentation, or report issues during testing.
          </p>

          <div className="mt-4 space-y-3">
            <button className="w-full rounded-lg bg-blue-600 py-2 text-white">
              Contact Support
            </button>

            <button className="w-full rounded-lg border py-2">
              View Documentation
            </button>

            <button className="w-full rounded-lg border py-2">
              Report an Issue
            </button>
          </div>
        </div>
      </section>


    </div>
  );
}
=======
  const [theme, setTheme] = useState("system");
  const [notifications, setNotifications] = useState(true);

  const clearHistory = () => {
    if (confirm("Clear all history? This cannot be undone.")) {
      console.log("History cleared");
    }
  };

  const exportData = () => {
    console.log("Exporting data...");
  };

  const selectiveDelete = () => {
    console.log("Selective delete triggered");
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-black text-gray-900 dark:text-white p-6">
      
      {/* HEADER */}
      <h1 className="text-2xl font-bold">Settings</h1>
      <p className="text-sm text-gray-500 mt-1">
        Manage your app preferences
      </p>

      {/* ACCOUNT */}
      <Section title="Account">
        <Item label="Profile" onClick={() => console.log("Go to profile")} />
        <Item label="Edit Details" onClick={() => console.log("Edit details")} />
      </Section>

      {/* PREFERENCES */}
      <Section title="Preferences">
        <div className="flex justify-between items-center py-3">
          <span>Theme</span>
          <select
            value={theme}
            onChange={(e) => setTheme(e.target.value)}
            className="bg-white dark:bg-gray-800 border rounded px-2 py-1"
          >
            <option value="system">System</option>
            <option value="light">Light</option>
            <option value="dark">Dark</option>
          </select>
        </div>

        <div className="flex justify-between items-center py-3">
          <span>Notifications</span>
          <input
            type="checkbox"
            checked={notifications}
            onChange={() => setNotifications(!notifications)}
          />
        </div>
      </Section>

      {/* DATA MANAGEMENT */}
      <Section title="Data Management">
        <Item label="Clear History" onClick={clearHistory} danger />
        <Item label="Selective Delete" onClick={selectiveDelete} />
        <Item label="Export Data" onClick={exportData} />
      </Section>

      {/* SUPPORT */}
      <Section title="Support">
        <Item label="Help Center" onClick={() => console.log("Help")} />
        <Item label="Contact Us" onClick={() => console.log("Contact")} />
      </Section>

      {/* ABOUT */}
      <Section title="About">
        <div className="py-3 border-b border-gray-200 dark:border-gray-800">
          <span className="block">App Version</span>
          <span className="text-sm text-gray-500">1.0.0</span>
        </div>

        <div className="py-3">
          <span className="text-sm text-gray-400">
            Changelog coming soon
          </span>
        </div>
      </Section>
    </div>
  );
}

/* ---------- SECTION WRAPPER ---------- */
function Section({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="mt-6 bg-white dark:bg-gray-900 rounded-lg shadow p-4">
      <h2 className="text-sm font-semibold text-gray-500 mb-2 uppercase">
        {title}
      </h2>
      <div>{children}</div>
    </div>
  );
}

/* ---------- ITEM ROW ---------- */
function Item({
  label,
  onClick,
  danger,
}: {
  label: string;
  onClick: () => void;
  danger?: boolean;
}) {
  return (
    <button
      onClick={onClick}
      className={`w-full text-left py-3 border-b border-gray-200 dark:border-gray-800 last:border-none ${
        danger ? "text-red-500" : ""
      }`}
    >
      {label}
    </button>
  );
}
>>>>>>> c9ed62c (Fix setting layout)
