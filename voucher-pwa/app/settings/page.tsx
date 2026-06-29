export default function SettingsPage() {
  return (
    <main className="min-h-screen bg-gray-50 p-6">
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
    </main>
  );
}