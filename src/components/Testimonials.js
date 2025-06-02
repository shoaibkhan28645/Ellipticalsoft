"use client";
import React, { useState, useEffect, useRef } from "react";
import {
  ChevronRight,
  ChevronLeft,
  Plus,
  Code,
  Database,
  Cloud,
  Cpu,
  Star,
  Quote,
} from "lucide-react";

const Testimonials = () => {
  const [activeCard, setActiveCard] = useState(1);
  const [isAnimating, setIsAnimating] = useState(false);
  const [hoveredCard, setHoveredCard] = useState(null);
  const [progress, setProgress] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const intervalRef = useRef(null);
  const activeCardRef = useRef(activeCard);

  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);

  const SLIDE_DURATION = 5000; // 5 seconds per slide

  // Minimum swipe distance
  const minSwipeDistance = 50;

  const onTouchStart = (e) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
    setIsPaused(true);
  };

  const onTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;

    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;

    if (isLeftSwipe) {
      handleNext();
    } else if (isRightSwipe) {
      handlePrev();
    }

    setIsPaused(false);
  };

  // Keep activeCardRef in sync
  useEffect(() => {
    activeCardRef.current = activeCard;
  }, [activeCard]);

  const cards = [
    {
      id: 0,
      title: "Alina Russina Mua",
      bgColor: "bg-gray-900",
      bgImage: "/assets/testimonials/testimonials_alina.avif",
      gradient: "from-blue-600/20 to-purple-600/20",
      icon: Star, // Added default icon
      content: {
        heading:
          "DevLabyrint transformed my business with a sleek, user-friendly website.",
        description:
          "Their innovative solutions streamlined my bookings and boosted my online presence. Highly professional and impactful!",
        client: {
          name: "Alina",
          role: "CTO & Co-founder",
          company: "AlinarRussianMua",
        },
      },
    },
    {
      id: 1,
      title: "Swift Rentalz",
      bgColor: "bg-slate-900",
      bgImage: "/assets/testimonials/testimonials_swift.avif",
      gradient: "from-emerald-600/20 to-cyan-600/20",
      icon: Database, // Added default icon
      content: {
        heading:
          "Devlabyrinth streamlined our rental process with a powerful, user-friendly platform.",
        description:
          "Their tailored software streamlined our inventory management and online booking system, making it effortless for customers to rent construction equipment across the USA.",
        client: {
          name: "Syed Najam",
          role: "CTO & Co-founder",
          company: "Swift Rentalz",
        },
      },
    },
    {
      id: 2,
      title: "The Stitch Guys",
      bgColor: "bg-teal-900",
      bgImage: "/assets/testimonials/testimonials_stitchguys.avif",
      gradient: "from-teal-600/20 to-blue-600/20",
      icon: Code, // Added default icon
      content: {
        heading:
          "Devlabyrinth elevated our clothing brand with a sleek e-commerce platform.",
        description:
          "Their innovative solutions simplified our inventory and sales process, boosting our online presence and customer satisfaction!",
        client: {
          name: "Azhar Ijaz",
          role: "Founder",
          company: "The Stitch Guys",
        },
      },
    },
    {
      id: 3,
      title: "Staymate",
      bgColor: "bg-amber-900",
      bgImage: "/assets/testimonials/testimonials_staymate.avif",
      icon: Cpu,
      gradient: "from-orange-600/20 to-red-600/20",
      content: {
        heading:
          "Dev transformed our property management with a seamless platform for Airbnb, Booking.com, and more.",
        description:
          "Their innovative software streamlined bookings and operations, enhancing efficiency and guest satisfaction!",
        client: {
          name: "Kumail Haider",
          role: "CTO",
          company: "Staymate",
        },
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

  // Mobile view - horizontal carousel with partial cards visible
  if (isMobile) {
    return (
      <div className="bg-transparent py-10 min-[414px]:py-12">
        {/* Section Header */}
        <div className="mb-8 text-center px-4">
          <p className="text-sm font-medium text-gray-600 mb-2 uppercase tracking-wider">
            CLIENT TESTIMONIALS
          </p>
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            What Our Clients Say
          </h2>
          <p className="text-base text-gray-600 max-w-2xl mx-auto px-2">
            Hear from companies who've transformed their business with our
            solutions
          </p>
        </div>

        {/* Carousel Container */}
        <div className="flex overflow-hidden">
          <div
            className="flex transition-transform duration-500 ease-out"
            style={{
              transform: `translateX(calc(-${activeCard * 89}vw + 6.5vw))`,
              width: `${cards.length * 89}vw`,
              paddingLeft: "0vw",
            }}
            onTouchStart={onTouchStart}
            onTouchMove={onTouchMove}
            onTouchEnd={onTouchEnd}
          >
            {cards.map((card, index) => {
              const isActive = activeCard === card.id;
              const IconComponent = card.icon;

              return (
                <div
                  key={card.id}
                  className={`relative ${card.bgColor} overflow-hidden flex-shrink-0 rounded-2xl shadow-2xl h-[45vh] min-[375px]:h-[48vh] min-[414px]:h-[42vh]`}
                  style={{
                    width: "87vw",
                    marginBottom: "4vh",
                    marginRight: "2vw",
                    backgroundImage: `url(${card.bgImage})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                  onClick={() => handleCardClick(card.id)}
                >
                  {/* Tech gradient overlay */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${card.gradient}`}
                  />

                  {/* Dark overlay for better text readability */}
                  <div className="absolute inset-0 bg-black/60" />

                  {/* Overlay for non-active cards */}
                  {!isActive && (
                    <div className="absolute inset-0 bg-black/30 z-5"></div>
                  )}

                  {/* Card Header */}
                  <div className="relative z-10 pt-8 min-[414px]:pt-12 px-5 min-[414px]:px-6 flex items-center gap-3">
                    <span className="text-white text-sm min-[414px]:text-base font-medium">
                      {card.title}
                    </span>
                  </div>

                  {/* Card Content */}
                  <div className="relative z-10 flex flex-col justify-center px-5 min-[414px]:px-6 pt-6 min-[414px]:pt-8 pb-16">
                    {/* Responsive heading with better sizing */}
                    <h1 className="text-sm min-[414px]:text-base font-light text-white mb-4 min-[414px]:mb-5 leading-relaxed">
                      {card.content.heading}
                    </h1>

                    {/* Description with responsive sizing */}
                    <p className="text-xs min-[414px]:text-sm text-gray-200 mb-5 min-[414px]:mb-6 leading-relaxed max-w-lg">
                      {card.content.description}
                    </p>

                    {/* Client info with better spacing */}
                    <div className="mt-auto">
                      <div className="text-white font-medium text-sm min-[414px]:text-base">
                        {card.content.client.name}
                      </div>
                      <div className="text-gray-300 text-xs min-[414px]:text-sm mt-1">
                        {card.content.client.role}
                      </div>
                      <div className="text-gray-400 text-xs min-[414px]:text-sm mt-0.5">
                        {card.content.client.company}
                      </div>
                    </div>
                  </div>

                  {/* Progress Bar - only show on active card */}
                  {isActive && (
                    <div className="absolute bottom-5 min-[414px]:bottom-6 left-5 min-[414px]:left-6 right-5 min-[414px]:right-6 h-[1px] bg-white/30">
                      <div
                        className="h-full bg-gradient-to-r from-blue-400 to-purple-400"
                        style={{
                          width: `${progress}%`,
                          transition: "width 0.1s linear",
                        }}
                      />
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    );
  }

  // Desktop view - Two column layout
  return (
    <div className="my-80">
      <div className="max-w-7xl ">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Column - Fixed Content */}
          <div className="lg:sticky lg:top-20">
            <h3 className="text-[#191919] font-outfit font-medium tracking-wider mb-4 text-xs uppercase">
              TESTIMONIALS
            </h3>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-outfit font-bold mb-6 leading-tight">
              <span className="text-[#BDBBBB]">Success </span>
              <span className="text-[#191919] mt-2">Stories That Inspire</span>
            </h2>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Discover how we've helped businesses transform their digital
              presence and achieve remarkable results. From startups to
              enterprises, our solutions drive growth and innovation.
            </p>

            {/* Stats or Features */}
            <div className="grid grid-cols-2 gap-6 mb-8">
              <div>
                <h3 className="text-3xl font-bold text-gray-900 mb-2">95%</h3>
                <p className="text-gray-600">Client Satisfaction</p>
              </div>
              <div>
                <h3 className="text-3xl font-bold text-gray-900 mb-2">50+</h3>
                <p className="text-gray-600">Success Stories</p>
              </div>
              <div>
                <h3 className="text-3xl font-bold text-gray-900 mb-2">3x</h3>
                <p className="text-gray-600">Average ROI</p>
              </div>
              <div>
                <h3 className="text-3xl font-bold text-gray-900 mb-2">24/7</h3>
                <p className="text-gray-600">Support</p>
              </div>
            </div>
          </div>

          {/* Right Column - Expandable Cards */}
          <div
            className="relative h-[600px] lg:h-[700px] flex items-center overflow-hidden rounded-2xl"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            {/* Background pattern */}
            <div className="absolute inset-0 opacity-5">
              <div
                className="w-full h-full"
                style={{
                  backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Ccircle cx='7' cy='7' r='1'/%3E%3Ccircle cx='53' cy='53' r='1'/%3E%3Ccircle cx='30' cy='30' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
                }}
              />
            </div>

            {/* Cards Container */}
            <div className="flex h-120 w-full gap-1 p-2 relative z-10">
              {cards.map((card, index) => {
                const isActive = activeCard === card.id;
                const isHovered = hoveredCard === card.id && !isActive;
                const IconComponent = card.icon;

                return (
                  <div
                    key={card.id}
                    onClick={() => handleCardClick(card.id)}
                    onMouseEnter={() => setHoveredCard(card.id)}
                    onMouseLeave={() => setHoveredCard(null)}
                    className={`relative h-full cursor-pointer overflow-hidden rounded-lg group`}
                    style={{
                      flex: isActive ? "8" : isHovered ? "1.3" : "1",
                      transition: "flex 0.8s cubic-bezier(0.4, 0, 0.2, 1)",
                    }}
                  >
                    {/* Background Image Layer with Blur */}
                    <div
                      className="absolute inset-0"
                      style={{
                        backgroundImage: `url(${card.bgImage})`,
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                        filter: isActive ? "blur(0px)" : "blur(4px)",
                        transition: "filter 0.8s cubic-bezier(0.4, 0, 0.2, 1)",
                      }}
                    />
                    {/* Tech gradient overlay */}
                    <div
                      className={`absolute inset-0 bg-gradient-to-br ${card.gradient} z-10`}
                    />

                    {/* Dark overlay for readability */}
                    <div className="absolute inset-0 bg-black/50 z-20" />

                    {/* Hover overlay with subtle glow */}
                    <div
                      className={`absolute inset-0 bg-gradient-to-br from-white/10 to-transparent transition-opacity duration-300 z-30 ${
                        isHovered ? "opacity-100" : "opacity-0"
                      }`}
                    />

                    {/* Improved Title with Smooth Rotation */}
                    <div
                      className="absolute z-40"
                      style={{
                        right: isActive ? "3rem" : "50%",
                        top: isActive ? "3rem" : "5.5rem",
                        transformOrigin: "center center",
                        transform: isActive
                          ? "translate(0, 0) rotate(0deg)"
                          : "translate(50%, 0) rotate(-90deg)",
                        transition: "all 0.8s cubic-bezier(0.4, 0, 0.2, 1)",
                        zIndex: 100,
                        whiteSpace: "nowrap",
                        width: "10rem",
                      }}
                    >
                      <div className="flex justify-end items-center gap-4">
                        <span
                          className="text-lg font-medium whitespace-nowrap"
                          style={{
                            color: "#FFFFFF",
                            fontWeight: "500",
                            filter: "contrast(1.2) brightness(1.1)",
                            WebkitFontSmoothing: "antialiased",
                            position: "relative",
                            zIndex: 101,
                          }}
                        >
                          {card.title}
                        </span>
                      </div>
                    </div>

                    {/* Plus icon for collapsed state with subtle glow */}
                    {!isActive && (
                      <Plus
                        className={`absolute bottom-8 left-1/2 -translate-x-1/2 w-8 h-8 text-white/60 transition-all duration-300 ${
                          isHovered
                            ? "scale-125 text-white/80 drop-shadow-lg"
                            : "scale-100"
                        }`}
                        style={{
                          opacity: isActive ? 0 : 1,
                          transitionDelay: isActive ? "0ms" : "500ms",
                          zIndex: 50,
                        }}
                      />
                    )}

                    {/* Expanded State Content */}
                    {isActive && (
                      <div className="flex flex-col h-full p-12 text-white relative z-50">
                        <div className="max-w-2xl mt-12">
                          {/* Quote mark */}
                          <div
                            className={`text-3xl text-white/30 mb-1 font-serif transition-all duration-700 ${
                              isActive
                                ? "opacity-100 translate-y-0 delay-200"
                                : "opacity-0 translate-y-8"
                            }`}
                          >
                            "
                          </div>

                          <h1
                            className={`text-1xl font-light mb-6 leading-tight transition-all duration-700 ${
                              isActive
                                ? "opacity-100 translate-y-0 delay-300"
                                : "opacity-0 translate-y-8"
                            }`}
                          >
                            {card.content.heading}
                          </h1>
                          <p
                            className={`text-sm mb-6 text-gray-300 max-w-xl transition-all duration-700 ${
                              isActive
                                ? "opacity-100 translate-y-0 delay-[400ms]"
                                : "opacity-0 translate-y-8"
                            }`}
                          >
                            {card.content.description}
                          </p>

                          {/* Client Information */}
                          <div
                            className={`mb-1 transition-all duration-700 ${
                              isActive
                                ? "opacity-100 translate-y-0 delay-500"
                                : "opacity-0 translate-y-8"
                            }`}
                          >
                            <div className="flex items-center gap-4 mb-3">
                              <div>
                                <div className="text-lg font-medium text-white">
                                  {card.content.client.name}
                                </div>
                                <div className="text-gray-300">
                                  {card.content.client.role}
                                </div>
                                <div className="text-gray-400 text-sm">
                                  {card.content.client.company}
                                </div>
                              </div>
                            </div>
                          </div>

                          {/* Progress Bar with gradient */}
                          <div
                            className={`mb-6 transition-all duration-700 ${
                              isActive
                                ? "opacity-100 delay-[700ms]"
                                : "opacity-0"
                            }`}
                          >
                            <div className="w-48 h-[2px] bg-white/20 relative overflow-hidden rounded-full">
                              <div
                                className="absolute left-0 top-0 h-full bg-gradient-to-r from-[#A6C33E]  to-[#F7C7AD] rounded-full"
                                style={{
                                  width: `${progress}%`,
                                  transition: "width 0.1s linear",
                                }}
                              />
                            </div>
                          </div>

                          {card.content.technologies && (
                            <div
                              className={`transition-all duration-700 ${
                                isActive
                                  ? "opacity-100 translate-y-0 delay-[800ms]"
                                  : "opacity-0 translate-y-8"
                              }`}
                            >
                              <h3 className="text-xl font-light mb-4 border-b border-gray-600 pb-2">
                                Technologies Used
                              </h3>
                              <div className="grid grid-cols-2 gap-x-8 gap-y-2">
                                {card.content.technologies.map(
                                  (tech, index) => (
                                    <div
                                      key={index}
                                      className={`text-base text-gray-300 transition-all duration-500 hover:text-white ${
                                        isActive
                                          ? "opacity-100 translate-x-0"
                                          : "opacity-0 translate-x-8"
                                      }`}
                                      style={{
                                        transitionDelay: isActive
                                          ? `${900 + index * 50}ms`
                                          : "0ms",
                                      }}
                                    >
                                      {tech}
                                    </div>
                                  )
                                )}
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
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
