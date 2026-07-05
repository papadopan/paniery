import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative pt-32 pb-24 px-6 overflow-hidden bg-green-50">
      {/* Background blobs */}
      <div
        className="absolute -top-32 -right-32 w-[600px] h-[600px] rounded-full opacity-20 pointer-events-none"
        style={{ background: "radial-gradient(circle, #0f6e56 0%, transparent 70%)" }}
      />
      <div
        className="absolute -bottom-24 -left-24 w-[400px] h-[400px] rounded-full opacity-15 pointer-events-none"
        style={{ background: "radial-gradient(circle, #d85a30 0%, transparent 70%)" }}
      />

      <div className="relative max-w-6xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
        {/* Left — copy */}
        <div className="flex flex-col gap-7">
          {/* Badge */}
          <span className="self-start inline-flex items-center gap-2 bg-orange-50 text-orange-600 border border-orange-400/30 text-xs font-semibold px-3.5 py-1.5 rounded-full tracking-wide uppercase">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-600 animate-pulse" />
            Coming Soon to iOS &amp; Android
          </span>

          <h1 className="text-5xl lg:text-6xl font-extrabold text-green-900 leading-tight tracking-tight">
            Shop smarter
            <br />
            <span className="text-green-700">across every</span>
            <br />
            Swiss supermarket.
          </h1>

          <p className="text-lg text-green-800/70 leading-relaxed max-w-lg">
            Paniery compares prices across Migros, Coop, Lidl, Aldi and more — so you always
            know where to get the best deal. Build your basket, compare totals, and save CHF on
            every grocery run.
          </p>

          <div className="flex flex-wrap gap-3 pt-2">
            <a
              href="#waitlist"
              className="inline-flex items-center gap-2 bg-green-700 hover:bg-green-800 text-white font-semibold px-7 py-3.5 rounded-full text-base transition-colors shadow-lg shadow-green-700/20"
            >
              Get Early Access
            </a>
            <a
              href="#features"
              className="inline-flex items-center gap-2 bg-white/80 border border-green-200 hover:border-green-400 text-green-800 font-semibold px-7 py-3.5 rounded-full text-base transition-colors"
            >
              Learn More
            </a>
          </div>

          {/* Social proof placeholders */}
          <div className="flex items-center gap-5 pt-2">
            <div className="flex -space-x-2">
              {["#0F6E56", "#085041", "#178A6B", "#22A880"].map((color, i) => (
                <div
                  key={i}
                  className="w-8 h-8 rounded-full border-2 border-green-50 flex items-center justify-center text-white text-xs font-bold"
                  style={{ background: color }}
                >
                  {["A", "M", "S", "R"][i]}
                </div>
              ))}
            </div>
            <p className="text-sm text-green-800/60 font-medium">
              Join <span className="text-green-700 font-semibold">hundreds</span> on the waitlist
            </p>
          </div>
        </div>

        {/* Right — app mockup */}
        <div className="flex justify-center lg:justify-end">
          <div className="relative">
            {/* Phone frame */}
            <div className="w-72 h-[580px] bg-green-900 rounded-[3rem] shadow-2xl shadow-green-900/40 flex flex-col overflow-hidden border-4 border-green-800/50">
              {/* Status bar */}
              <div className="flex justify-between items-center px-6 py-3 text-green-100/60 text-[10px] font-medium">
                <span>9:41</span>
                <div className="flex gap-1 items-center">
                  <div className="w-3 h-1.5 rounded-sm border border-green-100/40" />
                </div>
              </div>

              {/* App content mockup */}
              <div className="flex-1 bg-green-50 mx-2 mb-2 rounded-[2.5rem] overflow-hidden flex flex-col">
                {/* App header */}
                <div className="bg-green-700 px-5 pt-5 pb-8">
                  <div className="flex items-center justify-between mb-4">
                    <Image
                      src="/paniery_logo_dark_mode.svg"
                      alt="Paniery"
                      width={100}
                      height={34}
                      className="h-7 w-auto"
                    />
                    <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center">
                      <div className="w-4 h-4 rounded-full bg-white/40" />
                    </div>
                  </div>
                  <p className="text-green-100/70 text-xs mb-1">Your basket today</p>
                  <p className="text-white text-2xl font-bold">CHF 47.60</p>
                </div>

                {/* Price comparison cards */}
                <div className="flex-1 px-4 pt-4 pb-4 flex flex-col gap-3">
                  <p className="text-green-900/60 text-xs font-semibold uppercase tracking-wider">
                    Best prices near you
                  </p>

                  {[
                    { store: "Migros", saving: "Best", price: "47.60", badge: "bg-orange-500", rank: 1 },
                    { store: "Coop", saving: "+2.40", price: "50.00", badge: "bg-green-200", rank: 2 },
                    { store: "Lidl", saving: "+0.80", price: "48.40", badge: "bg-yellow-200", rank: 3 },
                  ].map((item) => (
                    <div
                      key={item.store}
                      className={`flex items-center justify-between p-3 rounded-2xl ${
                        item.rank === 1
                          ? "bg-green-700 text-white shadow-md shadow-green-700/30"
                          : "bg-white border border-green-100"
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <div
                          className={`w-8 h-8 rounded-xl flex items-center justify-center text-xs font-bold ${
                            item.rank === 1 ? "bg-white/20 text-white" : "bg-green-50 text-green-700"
                          }`}
                        >
                          {item.store[0]}
                        </div>
                        <div>
                          <p
                            className={`text-xs font-semibold ${
                              item.rank === 1 ? "text-white" : "text-green-900"
                            }`}
                          >
                            {item.store}
                          </p>
                          {item.rank === 1 ? (
                            <span className="text-[9px] bg-orange-500 text-white px-1.5 py-0.5 rounded-full font-semibold">
                              BEST PRICE
                            </span>
                          ) : (
                            <p className="text-[10px] text-green-500">{item.saving} more</p>
                          )}
                        </div>
                      </div>
                      <p
                        className={`text-sm font-bold ${
                          item.rank === 1 ? "text-white" : "text-green-900"
                        }`}
                      >
                        CHF {item.price}
                      </p>
                    </div>
                  ))}

                  {/* Bottom CTA */}
                  <div className="mt-auto pt-2">
                    <div className="bg-green-700/10 rounded-2xl p-3 flex items-center gap-3">
                      <div className="w-8 h-8 bg-green-700 rounded-xl flex items-center justify-center">
                        <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                          <path d="M7 2v10M2 7h10" stroke="white" strokeWidth="2" strokeLinecap="round" />
                        </svg>
                      </div>
                      <p className="text-xs text-green-800 font-medium">Add items to your basket</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating badges */}
            <div className="absolute -left-10 top-24 bg-white shadow-lg shadow-green-900/10 rounded-2xl px-4 py-3 flex items-center gap-3 border border-green-100">
              <div className="w-9 h-9 bg-green-50 rounded-xl flex items-center justify-center">
                <Image
                  src="/paniery_icon_transparent.svg"
                  alt=""
                  width={20}
                  height={20}
                  className="w-5 h-5"
                />
              </div>
              <div>
                <p className="text-xs font-bold text-green-900">Saved CHF 12.40</p>
                <p className="text-[10px] text-green-600">this week</p>
              </div>
            </div>

            <div className="absolute -right-8 bottom-32 bg-white shadow-lg shadow-green-900/10 rounded-2xl px-4 py-3 border border-green-100">
              <p className="text-xs font-bold text-green-900">8 supermarkets</p>
              <p className="text-[10px] text-green-600">covered in Switzerland</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
