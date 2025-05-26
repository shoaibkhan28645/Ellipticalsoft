import { Outfit } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-outfit",
  display: "swap",
});

export const metadata = {
  title: "NAKA - The Ultimate Solution for Financial Inclusion",
  description: "NAKA is revolutionising financial accessibility by enabling businesses to offer their customers vital financial services.",
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 1,
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`min-h-screen ${outfit.variable}`}>
        {children}
      </body>
    </html>
  );
}
