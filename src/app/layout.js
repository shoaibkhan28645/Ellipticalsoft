import "./globals.css";

export const metadata = {
  title: "NAKA - The Ultimate Solution for Financial Inclusion",
  description: "NAKA is revolutionising financial accessibility by enabling businesses to offer their customers vital financial services.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="min-h-screen">
        {children}
      </body>
    </html>
  );
}
