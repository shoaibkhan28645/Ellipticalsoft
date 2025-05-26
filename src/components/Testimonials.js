"use client";
import React, { useState, useEffect, useRef } from "react";
import { ChevronRight, ChevronLeft, Plus, Menu } from "lucide-react";

const Testimonials = () => {
  const [activeCard, setActiveCard] = useState(1);
  const [isAnimating, setIsAnimating] = useState(false);
  const [hoveredCard, setHoveredCard] = useState(null);
  const [progress, setProgress] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const intervalRef = useRef(null);
  const activeCardRef = useRef(activeCard);

  const SLIDE_DURATION = 5000; // 5 seconds per slide

  // Keep activeCardRef in sync
  useEffect(() => {
    activeCardRef.current = activeCard;
  }, [activeCard]);

  const cards = [
    {
      id: 0,
      title: "ELEKS overview",
      bgColor: "bg-gray-600",
      content: {
        heading: "Your trusted partner for guaranteed software delivery",
        description:
          "Combining advanced technology and decades of industry insight, we design and develop bespoke full-cycle solutions tailored to deliver your unique software vision.",
        buttonText: "Learn more",
        awards: [
          "OUTSOURCING 100",
          "IAOP GLOBAL OUTSOURCING",
          "DIGITAL INNOVATION",
        ],
      },
    },
    {
      id: 1,
      title: "Data&AI",
      bgColor: "bg-slate-800",
      content: {
        heading: "Harness the full potential of your data",
        description:
          "Maximize your business potential by delving deeper into your data and gaining invaluable insights into your customers' needs.",
        buttonText: "View service",
        services: [
          "Business intelligence",
          "Artificial intelligence",
          "Machine learning",
          "Data strategy",
          "Intelligent automation",
          "MLOps",
        ],
      },
    },
    {
      id: 2,
      title: "Fintech",
      bgColor: "bg-teal-700",
      content: {
        heading: "Revolutionize financial services",
        description:
          "Build innovative financial solutions that transform how people manage, invest, and transfer money.",
        buttonText: "Explore solutions",
        services: [
          "Digital banking",
          "Payment processing",
          "Blockchain",
          "Risk management",
          "Regulatory compliance",
          "Investment platforms",
        ],
      },
    },
    {
      id: 3,
      title: "Energy",
      bgColor: "bg-amber-800",
      content: {
        heading: "Enable streamlined energy management",
        description:
          "Maximize productivity, increase accessibility, ensure safety, and promote sustainability throughout your energy ecosystem.",
        buttonText: "Explore industry solutions",
        clients: ["GR1gaz", "TecmipFMC", "WASTEER", "NRI"],
      },
    },
  ];

  // Check if mobile
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);

    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // Auto-slide functionality with improved timing
  useEffect(() => {
    clearInterval(intervalRef.current);

    if (!isPaused && !isAnimating) {
      setProgress(0);
      let elapsed = 0;

      intervalRef.current = setInterval(() => {
        elapsed += 50;
        const newProgress = Math.min((elapsed / SLIDE_DURATION) * 100, 100);
        setProgress(newProgress);

        if (elapsed >= SLIDE_DURATION) {
          clearInterval(intervalRef.current);
          // Use the ref to get the current active card value
          setActiveCard((activeCardRef.current + 1) % cards.length);
          setIsAnimating(true);
          setTimeout(() => setIsAnimating(false), 1000);
        }
      }, 50);
    }

    return () => {
      clearInterval(intervalRef.current);
    };
  }, [isPaused, isAnimating, cards.length]);

  const handleCardClick = (cardId) => {
    if (cardId !== activeCard && !isAnimating) {
      clearInterval(intervalRef.current);
      setIsAnimating(true);
      setActiveCard(cardId);
      setProgress(0);
      setTimeout(() => setIsAnimating(false), 1000);
    }
  };

  const handleNext = () => {
    if (!isAnimating) {
      clearInterval(intervalRef.current);
      setIsAnimating(true);
      setActiveCard((prev) => (prev + 1) % cards.length);
      setProgress(0);
      setTimeout(() => setIsAnimating(false), 1000);
    }
  };

  const handlePrev = () => {
    if (!isAnimating) {
      clearInterval(intervalRef.current);
      setIsAnimating(true);
      setActiveCard((prev) => (prev - 1 + cards.length) % cards.length);
      setProgress(0);
      setTimeout(() => setIsAnimating(false), 1000);
    }
  };

  // Mobile view - single card
  if (isMobile) {
    const currentCard = cards[activeCard];

    return (
      <div className="min-h-screen bg-transparent flex flex-col">
        {/* Mobile Header */}
        <header className="bg-white shadow-sm px-4 py-3 flex items-center justify-between">
          <div className="text-blue-600 font-bold text-xl">eleks</div>
          <button className="bg-gray-900 text-white px-4 py-2 rounded-full text-sm flex items-center gap-2">
            Contact us
            <ChevronRight className="w-4 h-4" />
          </button>
        </header>

        {/* Card Container */}
        <div className="flex-1 p-4">
          <div
            className={`relative h-[60vh] ${currentCard.bgColor} rounded-2xl overflow-hidden shadow-lg`}
            onTouchStart={() => setIsPaused(true)}
            onTouchEnd={() => setIsPaused(false)}
          >
            {/* Background image for mobile */}
            <div
              className="absolute inset-0 opacity-30"
              style={{
                backgroundImage:
                  currentCard.id === 1
                    ? 'url("data:image/svg+xml,%3Csvg width="400" height="600" xmlns="http://www.w3.org/2000/svg"%3E%3Cdefs%3E%3CradialGradient id="g1"%3E%3Cstop offset="0%25" style="stop-color:%23ff6b6b;stop-opacity:0.3"%3E%3C/stop%3E%3Cstop offset="100%25" style="stop-color:%23ff6b6b;stop-opacity:0"%3E%3C/stop%3E%3C/radialGradient%3E%3C/defs%3E%3Ccircle cx="200" cy="300" r="150" fill="url(%23g1)"%3E%3C/circle%3E%3C/svg%3E")'
                    : currentCard.id === 3
                    ? 'url("data:image/svg+xml,%3Csvg width="400" height="600" xmlns="http://www.w3.org/2000/svg"%3E%3Cdefs%3E%3Cpattern id="p1" x="0" y="0" width="50" height="50" patternUnits="userSpaceOnUse"%3E%3Ccircle cx="25" cy="25" r="20" fill="%23666" opacity="0.3"%3E%3C/circle%3E%3C/pattern%3E%3C/defs%3E%3Crect width="400" height="600" fill="url(%23p1)"%3E%3C/rect%3E%3C/svg%3E")'
                    : "none",
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            />

            {/* Card Header */}
            <div className="relative z-10 p-4 flex items-center gap-2">
              <div className="w-6 h-6 rounded-full border border-white/50 flex items-center justify-center">
                <span className="text-xs text-white">{currentCard.id + 1}</span>
              </div>
              <span className="text-white text-sm font-medium">
                {currentCard.title}
              </span>
            </div>

            {/* Card Content */}
            <div className="relative z-10 h-full flex flex-col justify-center px-6 pb-16">
              <h1 className="text-2xl font-light text-white mb-4 leading-tight">
                {currentCard.content.heading}
              </h1>
              <p className="text-sm text-gray-200">
                {currentCard.content.description}
              </p>
            </div>

            {/* Progress Bar */}
            <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-white/20">
              <div
                className="h-full bg-white"
                style={{
                  width: `${progress}%`,
                  transition: "width 0.1s linear",
                }}
              />
            </div>

            {/* Navigation buttons */}
            <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
              <button
                onClick={handlePrev}
                className="w-10 h-10 rounded-full border border-white/30 flex items-center justify-center bg-black/20"
              >
                <ChevronLeft className="w-5 h-5 text-white" />
              </button>

              <button
                onClick={handleNext}
                className="w-10 h-10 rounded-full border border-white/30 flex items-center justify-center bg-black/20"
              >
                <ChevronRight className="w-5 h-5 text-white" />
              </button>
            </div>
          </div>
        </div>

        {/* Bottom content */}
        <div className="px-6 py-8">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">
            See how we can help you reach your goals
          </h2>
          <p className="text-gray-600 mb-6">
            Answer three questions to help us match our expertise and software
            solutions to your needs
          </p>

          {/* Question section */}
          <div className="space-y-4">
            <div className="flex items-center gap-2 text-sm text-gray-500">
              <span>1.</span>
              <span>
                What best describes the current state of your software?
              </span>
            </div>
            <button className="w-full p-3 border border-gray-300 rounded-lg flex items-center justify-between text-left">
              <span className="text-gray-400">—</span>
              <ChevronRight className="w-5 h-5 text-gray-400" />
            </button>
          </div>
        </div>
      </div>
    );
  }

  // Desktop view - expandable cards (unchanged)
  return (
    <div
      className="relative w-full h-screen bg-transparent flex overflow-hidden"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Cards Container */}
      <div className="flex h-full w-full gap-1 p-2">
        {cards.map((card, index) => {
          const isActive = activeCard === card.id;
          const isHovered = hoveredCard === card.id && !isActive;

          return (
            <div
              key={card.id}
              onClick={() => handleCardClick(card.id)}
              onMouseEnter={() => setHoveredCard(card.id)}
              onMouseLeave={() => setHoveredCard(null)}
              className={`relative h-full cursor-pointer overflow-hidden ${card.bgColor} rounded-lg group`}
              style={{
                flex: isActive ? "8" : isHovered ? "1.3" : "1",
                transition: "flex 0.8s cubic-bezier(0.4, 0, 0.2, 1)",
                backgroundImage: isActive
                  ? card.id === 1
                    ? 'url("data:image/svg+xml,%3Csvg width="800" height="600" xmlns="http://www.w3.org/2000/svg"%3E%3Cdefs%3E%3CradialGradient id="g1"%3E%3Cstop offset="0%25" style="stop-color:%23ff6b6b;stop-opacity:0.3"%3E%3C/stop%3E%3Cstop offset="100%25" style="stop-color:%23ff6b6b;stop-opacity:0"%3E%3C/stop%3E%3C/radialGradient%3E%3C/defs%3E%3Ccircle cx="400" cy="300" r="200" fill="url(%23g1)"%3E%3C/circle%3E%3C/svg%3E")'
                    : card.id === 3
                    ? 'url("data:image/svg+xml,%3Csvg width="800" height="600" xmlns="http://www.w3.org/2000/svg"%3E%3Cdefs%3E%3Cpattern id="p1" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse"%3E%3Ccircle cx="50" cy="50" r="40" fill="%23666" opacity="0.3"%3E%3C/circle%3E%3C/pattern%3E%3C/defs%3E%3Crect width="800" height="600" fill="url(%23p1)"%3E%3C/rect%3E%3C/svg%3E")'
                    : "none"
                  : "none",
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              {/* Hover overlay */}
              <div
                className={`absolute inset-0 bg-white/5 transition-opacity duration-100 ${
                  isHovered ? "opacity-100" : "opacity-0"
                }`}
              />

              {/* Title - Same element that rotates */}
              <div
                className={`absolute transition-all duration-700 ease-in-out w-45  flex justify-end   ${
                  isActive
                    ? "top-12 right-12 transform rotate-0"
                    : "top-1/8 left-1/2 transform -translate-x-1/2 -translate-y-1/8 -rotate-90 my-8 "
                }`}
              >
                <div className="flex items-center gap-4 ">
                  <span
                    className={`text-white  font-medium whitespace-nowrap transition-all duration-100 ${
                      isActive ? "text-lg" : "text-lg"
                    }`}
                  >
                    {card.title}
                  </span>

                  <div className="w-3 h-3 rounded-full border border-white flex items-center justify-center opacity-0 animate-fadeIn">
                    <span className="text-xs text-white"></span>
                  </div>
                </div>
              </div>

              {/* Plus icon for collapsed state */}
              {!isActive && (
                <Plus
                  className={`absolute bottom-8 left-1/2 -translate-x-1/2 w-8 h-8 text-white/60 transition-all duration-100 ${
                    isHovered ? "scale-125 text-white/80" : "scale-100"
                  } ${isActive ? "opacity-0" : "opacity-100 delay-500"}`}
                />
              )}

              {/* Expanded State Content */}
              {isActive && (
                <div className="flex flex-col h-full p-16 text-white relative">
                  {/* Card Navigation Arrows */}
                  <div className="absolute right-12 bottom-12 flex gap-4 z-10">
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        handlePrev();
                      }}
                      className="w-12 h-12 rounded-full border border-white/30 flex items-center justify-center hover:bg-white/10 transition-colors"
                    >
                      <ChevronLeft className="w-5 h-5 text-white" />
                    </button>
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        handleNext();
                      }}
                      className="w-12 h-12 rounded-full border border-white/30 flex items-center justify-center hover:bg-white/10 transition-colors"
                    >
                      <ChevronRight className="w-5 h-5 text-white" />
                    </button>
                  </div>

                  <div className="max-w-3xl mt-20">
                    <h1
                      className={`text-5xl font-light mb-8 leading-tight transition-all duration-700 ${
                        isActive
                          ? "opacity-100 translate-y-0 delay-300"
                          : "opacity-0 translate-y-8"
                      }`}
                    >
                      {card.content.heading}
                    </h1>
                    <p
                      className={`text-xl mb-10 text-gray-300 max-w-2xl transition-all duration-700 ${
                        isActive
                          ? "opacity-100 translate-y-0 delay-[400ms]"
                          : "opacity-0 translate-y-8"
                      }`}
                    >
                      {card.content.description}
                    </p>

                    <button
                      className={`bg-white text-black px-8 py-4 rounded-full font-medium flex items-center gap-2 hover:bg-gray-200 transition-all duration-700 mb-16 ${
                        isActive
                          ? "opacity-100 translate-y-0 delay-500"
                          : "opacity-0 translate-y-8"
                      }`}
                    >
                      {card.content.buttonText}
                      <ChevronRight className="w-5 h-5" />
                    </button>

                    {/* Progress Bar */}
                    <div
                      className={`mb-8 transition-all duration-700 ${
                        isActive ? "opacity-100 delay-[600ms]" : "opacity-0"
                      }`}
                    >
                      <div className="w-64 h-[2px] bg-white/20 relative overflow-hidden">
                        <div
                          className="absolute left-0 top-0 h-full bg-white"
                          style={{
                            width: `${progress}%`,
                            transition: "width 0.1s linear",
                          }}
                        />
                      </div>
                    </div>

                    {/* Awards Section */}
                    {card.content.awards && (
                      <div
                        className={`transition-all duration-700 ${
                          isActive
                            ? "opacity-100 translate-y-0 delay-[700ms]"
                            : "opacity-0 translate-y-8"
                        }`}
                      >
                        <h3 className="text-2xl font-light mb-6">Awards</h3>
                        <div className="flex gap-8">
                          {card.content.awards.map((award, index) => (
                            <div
                              key={index}
                              className={`w-20 h-20 rounded-full bg-white/10 flex items-center justify-center transition-all duration-500 ${
                                isActive
                                  ? "opacity-100 scale-100"
                                  : "opacity-0 scale-95"
                              }`}
                              style={{
                                transitionDelay: isActive
                                  ? `${800 + index * 100}ms`
                                  : "0ms",
                              }}
                            >
                              <span className="text-xs text-center px-2">
                                {award}
                              </span>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Services Section */}
                    {card.content.services && (
                      <div
                        className={`transition-all duration-700 ${
                          isActive
                            ? "opacity-100 translate-y-0 delay-[700ms]"
                            : "opacity-0 translate-y-8"
                        }`}
                      >
                        <h3 className="text-2xl font-light mb-6 border-b border-gray-600 pb-2">
                          Services
                        </h3>
                        <div className="grid grid-cols-3 gap-x-12 gap-y-4">
                          {card.content.services.map((service, index) => (
                            <div
                              key={index}
                              className={`text-lg text-gray-300 transition-all duration-500 ${
                                isActive
                                  ? "opacity-100 translate-x-0"
                                  : "opacity-0 translate-x-8"
                              }`}
                              style={{
                                transitionDelay: isActive
                                  ? `${800 + index * 50}ms`
                                  : "0ms",
                              }}
                            >
                              {service}
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Clients Section */}
                    {card.content.clients && (
                      <div
                        className={`transition-all duration-700 ${
                          isActive
                            ? "opacity-100 translate-y-0 delay-[700ms]"
                            : "opacity-0 translate-y-8"
                        }`}
                      >
                        <h3 className="text-2xl font-light mb-6 border-b border-gray-600 pb-2">
                          Clients
                        </h3>
                        <div className="flex gap-12">
                          {card.content.clients.map((client, index) => (
                            <div
                              key={index}
                              className={`bg-gray-800 px-6 py-3 rounded-lg transition-all duration-500 ${
                                isActive
                                  ? "opacity-100 scale-100"
                                  : "opacity-0 scale-95"
                              }`}
                              style={{
                                transitionDelay: isActive
                                  ? `${800 + index * 100}ms`
                                  : "0ms",
                              }}
                            >
                              <span className="text-xl font-medium">
                                {client}
                              </span>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Add animation keyframes */}
      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        .animate-fadeIn {
          animation: fadeIn 0.5s ease-out forwards;
          animation-delay: 0.3s;
        }
      `}</style>
    </div>
  );
};

export default Testimonials;
