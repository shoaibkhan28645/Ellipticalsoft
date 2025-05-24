import Link from "next/link";

export default function Header() {
  return (
    <header className="py-8">
      <div className="flex justify-between items-center">
        <div className="flex items-center">
          <Link href="/" className="text-2xl font-bold">
            Elliptical Soft
          </Link>
        </div>

        <nav className="hidden md:flex items-center">
          <Link href="/payment-network" className="nav-link mr-8">
            It Solutions
          </Link>
          <Link href="/card" className="nav-link mr-8">
            Software
          </Link>
          <Link href="/discover" className="nav-link mr-8">
            Development
          </Link>
        </nav>

        <div className="flex items-center">
          <Link
            href="/join"
            className="hidden md:block mr-8 hover:underline text-sm"
          >
            Join the 2025 Acquirers Program
          </Link>
          <Link
            href="/news"
            className="border border-black rounded-full px-5 py-2 text-sm flex items-center gap-1"
          >
            News <span>↗</span>
          </Link>
        </div>
      </div>
    </header>
  );
}
