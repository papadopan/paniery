"use client";

import Image from "next/image";
import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-green-50/80 backdrop-blur-md border-b border-green-100/60">
      <nav className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2 shrink-0">
          <Image
            src="/paniery_logo_horizontal.svg"
            alt="Paniery"
            width={140}
            height={48}
            priority
            className="h-9 w-auto"
          />
        </a>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-green-900">
          <a href="#features" className="hover:text-green-700 transition-colors">
            Features
          </a>
          <a href="#how-it-works" className="hover:text-green-700 transition-colors">
            How it works
          </a>
          <a href="#supermarkets" className="hover:text-green-700 transition-colors">
            Supermarkets
          </a>
          <a
            href="#waitlist"
            className="ml-2 inline-flex items-center gap-2 bg-green-700 hover:bg-green-800 text-white text-sm font-semibold px-5 py-2.5 rounded-full transition-colors"
          >
            Join Waitlist
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          className="md:hidden text-green-900 p-1"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-green-50 border-t border-green-100 px-6 py-4 flex flex-col gap-4 text-sm font-medium text-green-900">
          <a href="#features" onClick={() => setOpen(false)} className="hover:text-green-700">
            Features
          </a>
          <a href="#how-it-works" onClick={() => setOpen(false)} className="hover:text-green-700">
            How it works
          </a>
          <a href="#supermarkets" onClick={() => setOpen(false)} className="hover:text-green-700">
            Supermarkets
          </a>
          <a
            href="#waitlist"
            onClick={() => setOpen(false)}
            className="self-start bg-green-700 text-white px-5 py-2.5 rounded-full font-semibold"
          >
            Join Waitlist
          </a>
        </div>
      )}
    </header>
  );
}
