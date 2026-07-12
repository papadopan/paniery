const steps = [
  {
    number: "01",
    title: "Build your basket",
    description:
      "Add products to your basket by searching by name or scanning barcodes. Paniery supports items from Migros, Coop, Lidl, Aldi, Denner, and more.",
  },
  {
    number: "02",
    title: "Compare total prices",
    description:
      "Paniery calculates the total cost of your exact basket at every supermarket near you — so you see the full picture, not just individual item prices.",
  },
  {
    number: "03",
    title: "Pick the best store",
    description:
      "See which store saves you the most today. Factor in your location, stock availability, and personal preferences.",
  },
  {
    number: "04",
    title: "Track your savings",
    description:
      "Every week, Paniery shows you how much you've saved versus shopping without comparing. Small wins, big results over time.",
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-24 px-6 bg-green-900">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <span className="inline-block text-xs font-semibold uppercase tracking-widest text-green-400 mb-4">
            How it works
          </span>
          <h2 className="text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Simple as shopping should be
          </h2>
          <p className="mt-5 text-lg text-green-100/60 max-w-xl mx-auto leading-relaxed">
            No spreadsheets. No switching between 5 apps. Just open Paniery and know
            where to shop.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step) => (
            <div key={step.number} className="relative">
              <div className="flex flex-col gap-5 p-7 bg-green-800/50 rounded-3xl border border-green-700/40 h-full">
                <span className="text-4xl font-extrabold text-green-600/40 leading-none">
                  {step.number}
                </span>
                <div>
                  <h3 className="text-base font-bold text-white mb-2">{step.title}</h3>
                  <p className="text-sm text-green-100/55 leading-relaxed">{step.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
