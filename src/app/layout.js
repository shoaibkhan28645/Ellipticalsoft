import { Outfit } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-outfit",
  display: "swap",
});

export const metadata = {
  title: "DevLabyrinth - Innovative IT Solutions & Software Development",
  description:
    "DevLabyrinth transforms businesses with cutting-edge software development, cloud solutions, AI integration, and comprehensive IT services.",
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 1,
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`min-h-screen  ${outfit.variable}`}>
        <Header />
        <main className="min-h-screen">{children}</main>
        <div className="bg-[#191919] mt-12 md:mt-20 lg:mt-24 z-40">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <Footer />
          </div>
        </div>
      </body>
    </html>
  );
}
