import {
  ShoppingBasket,
  TrendingDown,
  MapPin,
  Bell,
  BarChart3,
  Zap,
} from "lucide-react";

const features = [
  {
    icon: ShoppingBasket,
    title: "Smart Basket",
    description:
      "Build your grocery list once. Paniery automatically finds each item at every supermarket and calculates the full basket total.",
    color: "text-green-700",
    bg: "bg-green-100",
  },
  {
    icon: TrendingDown,
    title: "Price History",
    description:
      "Track how prices evolve over time. Know when promotions are real deals and when to wait for a better price.",
    color: "text-orange-600",
    bg: "bg-orange-50",
  },
  {
    icon: MapPin,
    title: "Nearby Stores",
    description:
      "Filter by stores near you. No point seeing prices from a Coop on the other side of the city.",
    color: "text-green-700",
    bg: "bg-green-100",
  },
  {
    icon: Bell,
    title: "Price Alerts",
    description:
      "Set a target price for any product and get notified the moment it drops. Never miss a deal again.",
    color: "text-orange-600",
    bg: "bg-orange-50",
  },
  {
    icon: BarChart3,
    title: "Weekly Savings Report",
    description:
      "See exactly how much you saved each week compared to shopping at a single store without comparing.",
    color: "text-green-700",
    bg: "bg-green-100",
  },
  {
    icon: Zap,
    title: "Instant Search",
    description:
      "Search any product by name, brand, or barcode. Scan items directly from your pantry to find the best price in seconds.",
    color: "text-orange-600",
    bg: "bg-orange-50",
  },
];

export default function Features() {
  return (
    <section id="features" className="py-24 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <span className="inline-block text-xs font-semibold uppercase tracking-widest text-green-600 mb-4">
            Features
          </span>
          <h2 className="text-4xl lg:text-5xl font-extrabold text-green-900 tracking-tight">
            Everything you need to
            <br />
            <span className="text-green-700">shop smarter</span>
          </h2>
          <p className="mt-5 text-lg text-green-800/60 max-w-xl mx-auto leading-relaxed">
            Paniery is built around one goal: help you spend less on groceries without
            spending more time planning.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map(({ icon: Icon, title, description, color, bg }) => (
            <div
              key={title}
              className="group p-7 rounded-3xl border border-green-100 hover:border-green-200 hover:shadow-lg hover:shadow-green-900/5 transition-all bg-green-50/40"
            >
              <div className={`w-12 h-12 ${bg} rounded-2xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform`}>
                <Icon className={`w-6 h-6 ${color}`} />
              </div>
              <h3 className="text-base font-bold text-green-900 mb-2">{title}</h3>
              <p className="text-sm text-green-800/60 leading-relaxed">{description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
