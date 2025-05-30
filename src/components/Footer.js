import Link from "next/link";
import { Linkedin, Youtube, Code, Database, Cloud, Shield } from "lucide-react";
import VectorFieldLines from "./common/VectorFieldLines";

export default function Footer() {
  return (
    <footer className="bg-transparent text-white">
      <div className="container">
        {/* Call to Action Card */}
        <div className="bg-[#E3E5E8] flex items-center justify-between rounded-2xl p-6 md:p-10 lg:px-10 lg:py-0 my-8 md:my-12 lg:my-45 relative overflow-hidden">
          <div className="relative z-10 flex flex-col items-center text-left">
            <div className="max-w-2xl">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">
                Ready to get started?
              </h2>
              <p className="text-gray-700 text-base md:text-lg mb-6">
                Contact us to grow your business.
              </p>
              <button className="inline-flex items-center border border-black rounded-full px-6 md:px-8 py-2 md:py-3 cta-button text-black hover:bg-black hover:text-white transition-colors">
                Contact Sales
                <span className="ml-2">↗</span>
              </button>
            </div>
          </div>
          <div className="flex items-center justify-center">
            <VectorFieldLines />
          </div>
        </div>

        {/* Main Footer Content */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 md:gap-8 mb-8 md:mb-12">
          {/* Company Description */}
          <div className="sm:col-span-2 lg:col-span-1 space-y-4 md:space-y-6">
            <div>
              <h2 className="text-base md:text-lg font-medium mb-3 md:mb-4">
                NAKA is the first blockchain-based EMV compatible Payment
                Ecosystem, including Network and Card.
              </h2>
              <p className="text-gray-400 text-sm leading-relaxed">
                NAKA fosters financial inclusion and autonomy by providing vital
                financial services in a user-friendly way.
              </p>
            </div>
            {/* Social Media */}
            <div className="flex space-x-4">
              <Link
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Linkedin className="w-5 h-5" />
              </Link>
              <Link
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Youtube className="w-5 h-5" />
              </Link>
            </div>
          </div>

          {/* Products */}
          <div className="space-y-4">
            <h3 className="text-base md:text-lg font-medium text-white">
              Products
            </h3>
            <ul className="space-y-2 md:space-y-3">
              <li>
                <Link
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors text-sm"
                >
                  Payment Card
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors text-sm"
                >
                  Payment Network
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors text-sm"
                >
                  Payment Acceptance
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div className="space-y-4">
            <h3 className="text-base md:text-lg font-medium text-white">
              Company
            </h3>
            <ul className="space-y-2 md:space-y-3">
              <li>
                <Link
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors text-sm"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors text-sm"
                >
                  NAKA Blog
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors text-sm"
                >
                  Contact Us
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors text-sm"
                >
                  Company Information
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors text-sm"
                >
                  Brand Guidelines
                </Link>
              </li>
            </ul>
          </div>

          {/* Get Started */}
          <div className="space-y-4">
            <h3 className="text-base md:text-lg font-medium text-white">
              Get Started
            </h3>
            <ul className="space-y-2 md:space-y-3">
              <li>
                <Link
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors text-sm"
                >
                  Get Started with NAKA
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors text-sm"
                >
                  Help and FAQ's
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div className="space-y-4">
            <h3 className="text-base md:text-lg font-medium text-white">
              Legal
            </h3>
            <ul className="space-y-2 md:space-y-3">
              <li>
                <Link
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors text-sm"
                >
                  Terms & Conditions
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors text-sm"
                >
                  Cookie Policy
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors text-sm"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors text-sm"
                >
                  Cookie Preferences
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors text-sm"
                >
                  NAKA Card Legal Documents
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors text-sm"
                >
                  QA & IT Security Mgmt. Policy
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors text-sm"
                >
                  Rules on Establishing Internal Reporting Channels
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Featured Articles */}
        <div className="w-full">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 mb-8 md:mb-12 lg:w-2/3 lg:ml-auto">
            <div className="bg-gray-800 rounded-lg overflow-hidden">
              <div className="h-32 md:h-48 bg-gradient-to-br from-blue-500 to-purple-600 relative">
                <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
                  <div className="text-center p-3 md:p-4">
                    <h4 className="text-white font-medium text-xs md:text-sm mb-2">
                      Crypto Payments in El Salvador: How Local Businesses
                      are...
                    </h4>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gray-800 rounded-lg overflow-hidden">
              <div className="h-32 md:h-48 bg-gradient-to-br from-green-500 to-teal-600 relative">
                <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
                  <div className="text-center p-3 md:p-4">
                    <h4 className="text-white font-medium text-xs md:text-sm mb-2">
                      Bridging the Liquidity Gap: How On-Chain Payments Keep...
                    </h4>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gray-800 rounded-lg overflow-hidden md:col-span-2 lg:col-span-1">
              <div className="h-32 md:h-48 bg-gradient-to-br from-orange-500 to-red-600 relative">
                <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
                  <div className="text-center p-3 md:p-4">
                    <h4 className="text-white font-medium text-xs md:text-sm mb-2">
                      Visa & Mastercard Won't Win, Unless You Break...
                    </h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="flex flex-col md:flex-row justify-between items-start pt-6 md:pt-8 space-y-4 md:space-y-0">
          <div className="max-w-2xl">
            <p className="text-gray-400 text-xs leading-relaxed mb-2">
              © 2024-2025 NAKA GLOBAL LTD. All rights reserved.
            </p>
            <p className="text-gray-500 text-xs leading-relaxed">
              All trademarks, logos, and brand names featured on this website
              are the property of their respective owners. Company, product, and
              service names are used solely for identification purposes. Their
              use does not imply endorsement or affiliation.
            </p>
          </div>

          <div className="flex-shrink-0">
            <div className="text-xl md:text-2xl font-bold tracking-wider">
              NAKA
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
