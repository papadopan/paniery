import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Paniery — Compare Supermarket Prices in Switzerland",
  description:
    "Paniery helps you find the best prices across Swiss supermarkets. Compare Migros, Coop, Lidl, Aldi and more — save money on every grocery run.",
  icons: {
    icon: "/favicon.svg",
  },
  openGraph: {
    title: "Paniery — Compare Supermarket Prices in Switzerland",
    description:
      "Find the best grocery prices across all major Swiss supermarkets. Save money on every shopping trip.",
    type: "website",
    locale: "en_CH",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${poppins.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
