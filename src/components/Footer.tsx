import Image from "next/image";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-green-950 text-green-100/50 py-14 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start gap-10">
          <div className="flex flex-col gap-4 max-w-xs">
            <Image
              src="/paniery_logo_dark_mode.svg"
              alt="Paniery"
              width={130}
              height={45}
              className="h-8 w-auto"
            />
            <p className="text-sm leading-relaxed text-green-100/40">
              Compare supermarket prices across Switzerland. Shop smarter, save more — every single week.
            </p>
          </div>

          <div className="flex flex-wrap gap-12">
            <div className="flex flex-col gap-3">
              <p className="text-xs font-semibold uppercase tracking-widest text-green-100/30 mb-1">
                Product
              </p>
              <a href="#features" className="text-sm hover:text-green-100 transition-colors">Features</a>
              <a href="#how-it-works" className="text-sm hover:text-green-100 transition-colors">How it works</a>
              <a href="#supermarkets" className="text-sm hover:text-green-100 transition-colors">Supermarkets</a>
              <a href="#waitlist" className="text-sm hover:text-green-100 transition-colors">Join Waitlist</a>
            </div>

            <div className="flex flex-col gap-3">
              <p className="text-xs font-semibold uppercase tracking-widest text-green-100/30 mb-1">
                Company
              </p>
              <a href="#" className="text-sm hover:text-green-100 transition-colors">About</a>
              <a href="#" className="text-sm hover:text-green-100 transition-colors">Blog</a>
              <a href="#" className="text-sm hover:text-green-100 transition-colors">Contact</a>
            </div>

            <div className="flex flex-col gap-3">
              <p className="text-xs font-semibold uppercase tracking-widest text-green-100/30 mb-1">
                Legal
              </p>
              <a href="#" className="text-sm hover:text-green-100 transition-colors">Privacy Policy</a>
              <a href="#" className="text-sm hover:text-green-100 transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-green-800/40 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-green-100/25">
            © {currentYear} Paniery. All rights reserved. Made with care in Switzerland.
          </p>
          <div className="flex items-center gap-1 text-xs text-green-100/25">
            <span className="w-1.5 h-1.5 rounded-full bg-green-500" />
            <span>Prices updated daily</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
