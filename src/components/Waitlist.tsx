"use client";

import { useState } from "react";
import Image from "next/image";

export default function Waitlist() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!email || !email.includes("@")) {
      setStatus("error");
      return;
    }
    // TODO: wire up to real backend / email service
    setStatus("success");
    setEmail("");
  }

  return (
    <section
      id="waitlist"
      className="py-28 px-6 bg-white"
    >
      <div className="max-w-2xl mx-auto text-center">
        <div className="flex justify-center mb-8">
          <Image
            src="/paniery_icon_transparent.svg"
            alt="Paniery icon"
            width={64}
            height={64}
            className="w-16 h-16"
          />
        </div>

        <h2 className="text-4xl lg:text-5xl font-extrabold text-green-900 tracking-tight mb-5">
          Be the first to know
          <br />
          <span className="text-green-700">when we launch</span>
        </h2>

        <p className="text-lg text-green-800/60 leading-relaxed mb-10">
          Paniery is currently in development. Join the waitlist to get early access,
          exclusive updates, and a chance to shape the app with your feedback.
        </p>

        {status === "success" ? (
          <div className="inline-flex items-center gap-3 bg-green-50 border border-green-200 text-green-700 font-semibold px-6 py-4 rounded-2xl">
            <span className="w-5 h-5 bg-green-700 text-white rounded-full flex items-center justify-center text-xs">✓</span>
            You're on the list! We'll be in touch soon.
          </div>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto"
          >
            <input
              type="email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
                if (status === "error") setStatus("idle");
              }}
              placeholder="your@email.com"
              className={`flex-1 px-5 py-3.5 rounded-full border ${
                status === "error"
                  ? "border-orange-400 ring-2 ring-orange-200"
                  : "border-green-200 focus:border-green-500 focus:ring-2 focus:ring-green-200"
              } bg-green-50 text-green-900 placeholder:text-green-400 outline-none transition-all text-sm font-medium`}
            />
            <button
              type="submit"
              className="shrink-0 bg-green-700 hover:bg-green-800 text-white font-semibold px-7 py-3.5 rounded-full text-sm transition-colors shadow-lg shadow-green-700/20"
            >
              Join Waitlist
            </button>
          </form>
        )}

        {status === "error" && (
          <p className="mt-2 text-xs text-orange-600 font-medium">
            Please enter a valid email address.
          </p>
        )}

        <p className="mt-5 text-xs text-green-700/40 font-medium">
          No spam. Just the good stuff. Unsubscribe anytime.
        </p>

        {/* App store badges placeholders */}
        <div className="flex justify-center gap-4 mt-10">
          <div className="flex items-center gap-2 bg-green-900 text-white px-5 py-3 rounded-2xl opacity-50 cursor-not-allowed select-none">
            <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current" xmlns="http://www.w3.org/2000/svg">
              <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11" />
            </svg>
            <div className="text-left">
              <p className="text-[9px] leading-none opacity-70">Coming soon on</p>
              <p className="text-xs font-semibold leading-tight">App Store</p>
            </div>
          </div>
          <div className="flex items-center gap-2 bg-green-900 text-white px-5 py-3 rounded-2xl opacity-50 cursor-not-allowed select-none">
            <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current" xmlns="http://www.w3.org/2000/svg">
              <path d="M3.18 23.76c.3.17.64.23.99.17L14.43 12 3.99.07c-.34-.06-.68 0-.99.17-.6.35-.99 1-.99 1.83v19.87c0 .82.39 1.48.99 1.82zm14.64-12.86l-2.88-2.88-8.13 8.07 10.99-5.13.02-.06zm0 0" />
            </svg>
            <div className="text-left">
              <p className="text-[9px] leading-none opacity-70">Coming soon on</p>
              <p className="text-xs font-semibold leading-tight">Google Play</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
