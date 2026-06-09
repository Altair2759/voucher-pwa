// Navibar components made by REGGIE VAUDIN (Group Leader)

// React icons imported from react icons
import Link from "next/link";
import { FaHome, FaHistory } from "react-icons/fa";
import { MdOutlineQrCodeScanner } from "react-icons/md";
import { IoSettingsOutline } from "react-icons/io5";
import { LuTicketPercent } from "react-icons/lu";


const navItems = [
  { label: "Home", href: "/", icon: FaHome },
  { label: "Vouchers", href: "/vouchers", icon: LuTicketPercent },
  { label: "Scan", href: "/redeem", icon: MdOutlineQrCodeScanner },
  { label: "History", href: "/history", icon: FaHistory },
  { label: "Settings", href: "/settings", icon: IoSettingsOutline },
];

export default function Navbar() {
  return (
    <>
        {/* Mobile app navbar */}
        <nav className="fixed inset-x-0 bottom-0 z-50 border-t border-slate-200 bg-white md:hidden">
            <ul className="mx-auto flex max-w-md items-center justify-around gap-1 px-1 py-2">
            {navItems.map(({ label, href, icon: Icon }) => (
                <li key={href} className="flex-1">
                <Link
                    href={href}
                    className="flex flex-col items-center gap-1 rounded-xl px-1 py-2 text-[10px] font-medium text-slate-700">
                    <Icon className="text-base" />
                    <span>{label}</span>
                </Link>
                </li>
            ))}
            </ul>
        </nav>
        
        {/* Desktop web navbar */}
        <nav className="hidden border-b border-slate-200 bg-white md:block">
            <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
            <Link href="/" className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-900">
                Voucher PWA
            </Link>
            <ul className="flex items-center gap-1">
                {navItems.map(({ label, href, icon: Icon }) => (
                <li key={href}>
                    <Link
                    href={href}
                    className="flex items-center gap-1 rounded-md px-3 py-2 text-sm text-slate-700">
                    <Icon className="text-sm" />
                    <span>{label}</span>
                    </Link>
                </li>
                ))}
            </ul>
            </div>
        </nav>
    </>
  );
}