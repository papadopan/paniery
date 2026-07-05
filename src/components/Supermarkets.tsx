const supermarkets = [
  { name: "Migros", color: "#FF6600", initial: "M" },
  { name: "Coop", color: "#E30613", initial: "C" },
  { name: "Lidl", color: "#0050AA", initial: "L" },
  { name: "Aldi", color: "#00529F", initial: "A" },
  { name: "Denner", color: "#E30613", initial: "D" },
  { name: "Volg", color: "#E30613", initial: "V" },
  { name: "Manor", color: "#1A1A1A", initial: "M" },
  { name: "Globus", color: "#8B1A2E", initial: "G" },
];

export default function Supermarkets() {
  return (
    <section id="supermarkets" className="py-24 px-6 bg-green-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <span className="inline-block text-xs font-semibold uppercase tracking-widest text-green-600 mb-4">
            Coverage
          </span>
          <h2 className="text-4xl lg:text-5xl font-extrabold text-green-900 tracking-tight">
            All your Swiss favourites,
            <br />
            <span className="text-green-700">in one place</span>
          </h2>
          <p className="mt-5 text-lg text-green-800/60 max-w-xl mx-auto leading-relaxed">
            We track prices across the major Swiss supermarkets — and we're constantly
            adding more. More stores means more savings for you.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          {supermarkets.map(({ name, color, initial }) => (
            <div
              key={name}
              className="flex flex-col items-center gap-4 p-6 bg-white rounded-3xl border border-green-100 hover:border-green-200 hover:shadow-md hover:shadow-green-900/5 transition-all group"
            >
              <div
                className="w-14 h-14 rounded-2xl flex items-center justify-center text-white text-xl font-extrabold shadow-sm group-hover:scale-105 transition-transform"
                style={{ backgroundColor: color }}
              >
                {initial}
              </div>
              <p className="text-sm font-semibold text-green-900">{name}</p>
            </div>
          ))}
        </div>

        <p className="text-center mt-8 text-sm text-green-700/50 font-medium">
          + more stores coming soon
        </p>
      </div>
    </section>
  );
}
