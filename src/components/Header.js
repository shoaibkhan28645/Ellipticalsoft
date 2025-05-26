"use client";
import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="py-4 md:py-8 relative z-50">
      <div className="flex justify-between items-center">
        <div className="flex items-center">
          <Link href="/" className="text-xl md:text-2xl font-bold">
            Elliptical Soft
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center">
          <Link href="/payment-network" className="nav-link mr-6 lg:mr-8">
            IT Solutions
          </Link>
          <Link href="/card" className="nav-link mr-6 lg:mr-8">
            Software
          </Link>
          <Link href="/discover" className="nav-link mr-6 lg:mr-8">
            Development
          </Link>
        </nav>

        {/* Desktop CTA Section */}
        <div className="hidden md:flex items-center">
          <Link
            href="/join"
            className="hidden lg:block mr-4 xl:mr-8 hover:underline text-sm"
          >
            Join the 2025 Acquirers Program
          </Link>
          <Link
            href="/news"
            className="border border-black rounded-full px-3 md:px-5 py-2 text-sm flex items-center gap-1 hover:bg-black hover:text-white transition-colors"
          >
            News <span>↗</span>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={toggleMobileMenu}
          className="md:hidden p-2 border border-black rounded-full hover:bg-black hover:text-white transition-colors"
          aria-label="Toggle mobile menu"
        >
          {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden">
          <div className="fixed top-0 right-0 h-full w-80 max-w-[85vw] bg-white shadow-lg z-50">
            <div className="flex justify-between items-center p-6 border-b">
              <span className="text-lg font-bold">Menu</span>
              <button
                onClick={toggleMobileMenu}
                className="p-2 border border-black rounded-full hover:bg-black hover:text-white transition-colors"
                aria-label="Close mobile menu"
              >
                <X size={20} />
              </button>
            </div>
            
            <nav className="p-6">
              <div className="space-y-6">
                <Link 
                  href="/payment-network" 
                  className="block text-lg font-medium hover:text-gray-600 transition-colors"
                  onClick={toggleMobileMenu}
                >
                  IT Solutions
                </Link>
                <Link 
                  href="/card" 
                  className="block text-lg font-medium hover:text-gray-600 transition-colors"
                  onClick={toggleMobileMenu}
                >
                  Software
                </Link>
                <Link 
                  href="/discover" 
                  className="block text-lg font-medium hover:text-gray-600 transition-colors"
                  onClick={toggleMobileMenu}
                >
                  Development
                </Link>
                
                <div className="pt-6 border-t space-y-4">
                  <Link
                    href="/join"
                    className="block text-sm text-gray-600 hover:text-black transition-colors"
                    onClick={toggleMobileMenu}
                  >
                    Join the 2025 Acquirers Program
                  </Link>
                  <Link
                    href="/news"
                    className="inline-flex items-center border border-black rounded-full px-4 py-2 text-sm gap-1 hover:bg-black hover:text-white transition-colors"
                    onClick={toggleMobileMenu}
                  >
                    News <span>↗</span>
                  </Link>
                </div>
              </div>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
}
