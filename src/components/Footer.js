import Link from "next/link";
import { Linkedin, Youtube, Code, Database, Cloud, Shield } from "lucide-react";
import VectorFieldLines from "./common/VectorFieldLines";

export default function Footer() {
  return (
    <footer className="bg-transparent text-white pb-15">
      <div className="container">
        {/* Call to Action Card */}
        <div className="bg-[#E3E5E8] flex flex-col lg:flex-row lg:items-center lg:justify-between rounded-2xl p-6 md:p-10 lg:px-10 lg:py-0 my-8 md:my-12 lg:my-45 relative overflow-hidden">
          {/* Text Content */}
          <div className="relative z-10 flex flex-col items-start text-left w-full lg:w-auto">
            <div className="max-w-2xl">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">
                Ready to get started?
              </h2>
              <p className="text-gray-700 text-base md:text-lg mb-6">
                Contact us to grow your business.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center border border-black rounded-full px-6 md:px-8 py-2 md:py-3 cta-button text-black hover:bg-black hover:text-white transition-colors"
              >
                Contact Sales
                <span className="ml-2">↗</span>
              </Link>
            </div>
          </div>

          {/* Vector Field Lines */}
          <div className="absolute inset-0 flex items-center justify-end lg:relative lg:inset-auto z-0 lg:z-auto">
            <VectorFieldLines />
          </div>
        </div>

        {/* Main Footer Content */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 md:gap-8 mb-8 md:mb-12">
          {/* Company Description */}
          <div className="sm:col-span-2 lg:col-span-1 space-y-4 md:space-y-6">
            <div>
              <h2 className="text-base md:text-lg font-medium mb-3 md:mb-4">
                DevLabyrint is the leading software IT innovator, delivering
                cutting-edge solutions and services
              </h2>
              <p className="text-gray-400 text-sm leading-relaxed">
                DevLabyrint empowers businesses and individuals by providing
                seamless, scalable technology in a user-friendly way.
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
          <div className="space-y-4"></div>

          {/* Company */}
          <div className="space-y-4">
            <h3 className="text-base md:text-lg font-medium text-white">
              Company
            </h3>
            <ul className="space-y-2 md:space-y-3">
              <li>
                <Link
                  href="/about"
                  className="text-gray-400 hover:text-white transition-colors text-sm"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="text-gray-400 hover:text-white transition-colors text-sm"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  href="/portfolio"
                  className="text-gray-400 hover:text-white transition-colors text-sm"
                >
                  Portfolio
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
                  href="/blog"
                  className="text-gray-400 hover:text-white transition-colors text-sm"
                >
                  Blogs
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors text-sm"
                >
                  FAQ&apos;s
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
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Featured Blogs */}
        <div className="w-full">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 mb-8 md:mb-12 lg:w-2/3 lg:ml-auto">
            <Link href="/blog/future-of-web-development-2025" className="bg-gray-800 rounded-lg overflow-hidden hover:transform hover:scale-105 transition-all duration-300">
              <div className="h-32 md:h-48 bg-gradient-to-br from-blue-500 to-purple-600 relative">
                <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
                  <div className="text-center p-3 md:p-4">
                    <h4 className="text-white font-medium text-xs md:text-sm mb-1">
                      Blog 1
                    </h4>
                    <p className="text-white/80 text-xs hidden md:block">
                      Future of Web Development
                    </p>
                  </div>
                </div>
              </div>
            </Link>

            <Link href="/blog/cloud-migration-complete-guide-2025" className="bg-gray-800 rounded-lg overflow-hidden hover:transform hover:scale-105 transition-all duration-300">
              <div className="h-32 md:h-48 bg-gradient-to-br from-green-500 to-teal-600 relative">
                <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
                  <div className="text-center p-3 md:p-4">
                    <h4 className="text-white font-medium text-xs md:text-sm mb-1">
                      Blog 2
                    </h4>
                    <p className="text-white/80 text-xs hidden md:block">
                      Cloud Migration Guide
                    </p>
                  </div>
                </div>
              </div>
            </Link>

            <Link href="/blog/ai-automation-transforming-business-operations" className="bg-gray-800 rounded-lg overflow-hidden md:col-span-2 lg:col-span-1 hover:transform hover:scale-105 transition-all duration-300">
              <div className="h-32 md:h-48 bg-gradient-to-br from-orange-500 to-red-600 relative">
                <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
                  <div className="text-center p-3 md:p-4">
                    <h4 className="text-white font-medium text-xs md:text-sm mb-1">
                      Blog 3
                    </h4>
                    <p className="text-white/80 text-xs hidden md:block">
                      AI & Automation
                    </p>
                  </div>
                </div>
              </div>
            </Link>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="flex flex-col md:flex-row justify-between items-start pt-6 md:pt-8 space-y-4 md:space-y-0">
          <div className="max-w-2xl">
            <p className="text-gray-400 text-xs leading-relaxed mb-2">
              © 2024-2025 DevLabyrinth. All rights reserved.
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
              DevLabyrinth
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
