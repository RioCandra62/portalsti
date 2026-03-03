"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();
  const router = useRouter();

  const isHome = pathname === "/";

  const navStyle =
    "text-sm tracking-wide text-[#F7F2EE]/80 hover:text-white transition duration-300";

  return (
    <nav className="sticky top-0 z-50 backdrop-blur-md bg-[#2A1F1A]/90 border-b border-[#4A352C]">
      <div className="max-w-7xl mx-auto flex items-center justify-between h-[80px] px-8">
        {/* LEFT */}
        <div className="flex items-center gap-8">
          {/* {!isHome && (
            <button
              onClick={() => router.back()}
              className="text-[#CBB8A9] hover:text-white transition"
            >
              ← Back
            </button>
          )} */}

          <Link href="/" className={navStyle}>
            Home
          </Link>

          <Link href="/collections" className={navStyle}>
            Collections
          </Link>
        </div>

        {/* CENTER LOGO */}
        <div className="text-center select-none">
          <p className="text-xl tracking-[0.25em] text-[#F3EDE7] font-medium">
            PortalSTI
          </p>
          <p className="text-[10px] tracking-[0.4em] text-[#CBB8A9] uppercase">
            Studio
          </p>
        </div>

        {/* RIGHT */}
        <div className="flex items-center gap-8">
          <Link href="/about" className={navStyle}>
            About
          </Link>

          <Link
            href="/login"
            className="px-4 py-2 border border-[#CBB8A9]/40 rounded-full 
                       text-sm text-[#F7F2EE]
                       hover:bg-[#F7F2EE] hover:text-[#2A1F1A]
                       transition duration-300"
          >
            Login
          </Link>
        </div>
      </div>
    </nav>
  );
}
