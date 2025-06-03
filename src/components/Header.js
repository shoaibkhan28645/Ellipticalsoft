"use client";
import Link from "next/link";
import { useState, useEffect } from "react";
import { Menu, X, ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMobileMenuOpen]);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const menuVariants = {
    closed: {
      x: "100%",
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 40,
      },
    },
    open: {
      x: 0,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 40,
      },
    },
  };

  const overlayVariants = {
    closed: {
      opacity: 0,
      transition: {
        duration: 0.2,
      },
    },
    open: {
      opacity: 1,
      transition: {
        duration: 0.2,
      },
    },
  };

  const linkVariants = {
    closed: {
      opacity: 0,
      x: 50,
    },
    open: {
      opacity: 1,
      x: 0,
    },
  };

  const navLinks = [
    { href: "/services", label: "Services" },
    { href: "/portfolio", label: "Portfolio" },
    { href: "/blog", label: "Blogs" },
    { href: "/about", label: "About" },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? "bg-white/90 backdrop-blur-md shadow-sm" : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16 md:h-20">
            {/* Logo */}
            <Link
              href="/"
              className="text-xl md:text-2xl font-bold text-[#191919] z-50 relative"
            >
              DevLabyrinth
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="relative text-[#191919] font-medium transition-colors hover:text-[#6b6b6b] group"
                >
                  {link.label}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#191919] transition-all duration-300 group-hover:w-full" />
                </Link>
              ))}
            </nav>

            {/* Desktop CTA */}
            <div className="hidden md:flex items-center space-x-6">
              <Link
                href="/about"
                className="text-sm text-[#6b6b6b] hover:text-[#191919] transition-colors"
              >
                Join Our Team
              </Link>
              <Link
                href="/contact"
                className="bg-[#191919] text-white rounded-full px-6 py-2.5 text-sm font-medium hover:bg-[#2a2a2a] transition-all duration-300 hover:scale-105"
              >
                Get Started
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <motion.button
              onClick={toggleMobileMenu}
              className="md:hidden relative z-50 w-10 h-10 flex items-center justify-center"
              whileTap={{ scale: 0.95 }}
            >
              <div className="relative w-6 h-6">
                <motion.span
                  className="absolute left-0 w-6 h-0.5 bg-[#191919] origin-center"
                  style={{ top: 0 }}
                  animate={{
                    rotate: isMobileMenuOpen ? 45 : 0,
                    y: isMobileMenuOpen ? 11 : 0,
                  }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                />
                <motion.span
                  className="absolute left-0 w-6 h-0.5 bg-[#191919]"
                  style={{ top: "50%", translateY: "-50%" }}
                  animate={{
                    opacity: isMobileMenuOpen ? 0 : 1,
                    scaleX: isMobileMenuOpen ? 0 : 1,
                  }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                />
                <motion.span
                  className="absolute left-0 w-6 h-0.5 bg-[#191919] origin-center"
                  style={{ bottom: 0 }}
                  animate={{
                    rotate: isMobileMenuOpen ? -45 : 0,
                    y: isMobileMenuOpen ? -11 : 0,
                  }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                />
              </div>
            </motion.button>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            {/* Overlay */}
            <motion.div
              className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 md:hidden"
              variants={overlayVariants}
              initial="closed"
              animate="open"
              exit="closed"
              onClick={toggleMobileMenu}
            />

            {/* Menu Panel */}
            <motion.div
              className="fixed top-0 right-0 bottom-0 w-full sm:max-w-sm bg-white shadow-2xl z-50 md:hidden overflow-y-auto mobile-menu-scroll"
              variants={menuVariants}
              initial="closed"
              animate="open"
              exit="closed"
            >
              <div className="flex flex-col h-full">
                {/* Menu Header */}
                <div className="flex items-center justify-between p-6 border-b border-gray-100">
                  <Link
                    href="/"
                    onClick={toggleMobileMenu}
                    className="text-xl font-bold text-[#191919]"
                  >
                    DevLabyrinth
                  </Link>
                  <motion.button
                    onClick={toggleMobileMenu}
                    className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
                    whileTap={{ scale: 0.95 }}
                  >
                    <X className="w-5 h-5 text-[#191919]" />
                  </motion.button>
                </div>

                {/* Navigation Links */}
                <nav className="flex-1 px-6 py-8">
                  <div className="space-y-1">
                    {navLinks.map((link, index) => (
                      <motion.div
                        key={link.href}
                        variants={linkVariants}
                        initial="closed"
                        animate="open"
                        exit="closed"
                        transition={{ delay: index * 0.1 }}
                      >
                        <Link
                          href={link.href}
                          onClick={toggleMobileMenu}
                          className="flex items-center justify-between py-4 text-lg font-medium text-[#191919] hover:text-[#6b6b6b] transition-colors group"
                        >
                          <span>{link.label}</span>
                          <ArrowRight className="w-5 h-5 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
                        </Link>
                      </motion.div>
                    ))}
                  </div>
                </nav>

                {/* CTA Section */}
                <div className="p-6 border-t border-gray-100 space-y-4">
                  <motion.div
                    variants={linkVariants}
                    initial="closed"
                    animate="open"
                    exit="closed"
                    transition={{ delay: 0.3 }}
                  >
                    <Link
                      href="/about"
                      onClick={toggleMobileMenu}
                      className="block text-center text-sm text-[#6b6b6b] hover:text-[#191919] transition-colors py-2"
                    >
                      Join Our Team
                    </Link>
                  </motion.div>

                  <motion.div
                    variants={linkVariants}
                    initial="closed"
                    animate="open"
                    exit="closed"
                    transition={{ delay: 0.4 }}
                  >
                    <Link
                      href="/contact"
                      onClick={toggleMobileMenu}
                      className="block w-full bg-[#191919] text-white text-center rounded-full px-6 py-3 font-medium hover:bg-[#2a2a2a] transition-colors"
                    >
                      Get Started
                    </Link>
                  </motion.div>
                </div>

                {/* Footer Info */}
                <div className="px-6 pb-6">
                  <motion.div
                    className="text-xs text-[#6b6b6b] space-y-2"
                    variants={linkVariants}
                    initial="closed"
                    animate="open"
                    exit="closed"
                    transition={{ delay: 0.5 }}
                  >
                    <p>© 2024 DevLabyrinth. All rights reserved.</p>
                    <p>Transforming ideas into digital reality.</p>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* Spacer for fixed header */}
      <div className="h-16 md:h-20" />
    </>
  );
}
