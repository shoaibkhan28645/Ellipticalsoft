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
      title: "TechStart Solutions",
      bgColor: "bg-gray-900",
      bgImage:
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
      icon: Code,
      gradient: "from-blue-600/20 to-purple-600/20",
      content: {
        heading:
          "They transformed our startup vision into a powerful SaaS platform that scaled beyond our expectations",
        description:
          "Working with this team was a game-changer for our startup. They didn't just build software; they became true partners in our success. Their expertise in full-stack development and cloud architecture helped us launch 3 months ahead of schedule.",
        buttonText: "View case study",
        details: [
          "50% faster development",
          "Zero downtime deployment",
          "5x user growth in 6 months",
        ],
        client: {
          name: "Sarah Chen",
          role: "CTO & Co-founder",
          company: "TechStart Solutions",
        },
      },
    },
    {
      id: 1,
      title: "Global Finance Corp",
      bgColor: "bg-slate-900",
      bgImage:
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
      icon: Database,
      gradient: "from-emerald-600/20 to-cyan-600/20",
      content: {
        heading:
          "Outstanding AI implementation that revolutionized our data analytics and customer insights",
        description:
          "The machine learning models they developed have given us unprecedented insights into our customer behavior. The ROI was visible within the first quarter of implementation.",
        buttonText: "Read full story",
        technologies: [
          "Machine Learning",
          "Python & TensorFlow",
          "Real-time Analytics",
          "Data Visualization",
          "API Integration",
          "Cloud Infrastructure",
        ],
        client: {
          name: "Michael Rodriguez",
          role: "VP of Data Analytics",
          company: "Global Finance Corp",
        },
      },
    },
    {
      id: 2,
      title: "FinNext Banking",
      bgColor: "bg-teal-900",
      bgImage:
        "https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
      icon: Cloud,
      gradient: "from-teal-600/20 to-blue-600/20",
      content: {
        heading:
          "Seamless fintech solution that modernized our entire banking infrastructure",
        description:
          "They delivered a comprehensive digital banking platform that not only met all regulatory requirements but also provided an exceptional user experience that our customers love.",
        buttonText: "Explore solution",
        achievements: [
          "99.9% uptime achieved",
          "PCI DSS compliant",
          "40% increase in user engagement",
          "Reduced processing time by 60%",
          "5-star app store rating",
          "Award-winning UI/UX design",
        ],
        client: {
          name: "Emma Thompson",
          role: "Head of Digital Innovation",
          company: "FinNext Banking",
        },
      },
    },
    {
      id: 3,
      title: "GreenEnergy Systems",
      bgColor: "bg-amber-900",
      bgImage:
        "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
      icon: Cpu,
      gradient: "from-orange-600/20 to-red-600/20",
      content: {
        heading:
          "Innovative IoT platform that optimized our energy management across 200+ locations",
        description:
          "Their IoT expertise helped us create a unified energy management system that monitors and optimizes energy consumption in real-time. The environmental and cost benefits have been remarkable.",
        buttonText: "View implementation",
        results: [
          "35% energy cost reduction",
          "Real-time monitoring",
          "Predictive maintenance",
          "Carbon footprint tracking",
        ],
        client: {
          name: "David Kumar",
          role: "Chief Technology Officer",
          company: "GreenEnergy Systems",
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
      <div className="min-h-screen flex flex-col">
        {/* Carousel Container */}
        <div className="flex-1 overflow-hidden">
          <div
            className="flex h-screen transition-transform duration-500 ease-out"
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
                  className={`relative ${card.bgColor} overflow-hidden flex-shrink-0 rounded-2xl shadow-2xl`}
                  style={{
                    width: "87vw",
                    height: "92vh",
                    marginTop: "4vh",
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

                  {/* Floating tech elements */}
                  <div className="absolute top-8 right-8 opacity-20">
                    <IconComponent className="w-12 h-12 text-white" />
                  </div>

                  {/* Card Header */}
                  <div className="relative z-10 pt-12 px-6 flex items-center gap-3">
                    <div className="w-4 h-4 rounded-full border border-white flex items-center justify-center">
                      <div className="w-1.5 h-1.5 bg-white rounded-full"></div>
                    </div>
                    <span className="text-white text-lg font-medium">
                      {card.title}
                    </span>
                  </div>

                  {/* Card Content */}
                  <div className="relative z-10 flex flex-col justify-center px-6 pt-8 pb-32">
                    <div className="text-6xl text-white/30 mb-4 font-serif">
                      "
                    </div>
                    <h1 className="text-2xl md:text-3xl font-light text-white mb-6 leading-tight">
                      {card.content.heading}
                    </h1>
                    <p className="text-base text-gray-200 mb-6 leading-relaxed max-w-lg">
                      {card.content.description}
                    </p>

                    {/* Client info */}
                    <div className="mb-8">
                      <div className="text-white font-medium text-lg">
                        {card.content.client.name}
                      </div>
                      <div className="text-gray-300 text-sm">
                        {card.content.client.role}
                      </div>
                      <div className="text-gray-400 text-sm">
                        {card.content.client.company}
                      </div>
                    </div>

                    <button className="bg-transparent border-none text-white text-lg font-medium flex items-center gap-3 mb-8 hover:text-blue-300 transition-colors">
                      {card.content.buttonText}
                      <div className="w-6 h-6 rounded-full border border-white flex items-center justify-center">
                        <ChevronRight className="w-3 h-3 text-white" />
                      </div>
                    </button>
                  </div>

                  {/* Progress Bar - only show on active card */}
                  {isActive && (
                    <div className="absolute bottom-20 left-6 right-6 h-[1px] bg-white/30">
                      <div
                        className="h-full bg-gradient-to-r from-blue-400 to-purple-400"
                        style={{
                          width: `${progress}%`,
                          transition: "width 0.1s linear",
                        }}
                      />
                    </div>
                  )}

                  {/* Navigation buttons - only show on active card */}
                  {isActive && (
                    <div className="absolute bottom-4 left-6 right-6 flex items-center justify-between">
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          handlePrev();
                        }}
                        className="w-12 h-12 rounded-full border border-white/50 flex items-center justify-center bg-white/10 backdrop-blur-sm hover:bg-white/20 transition-colors"
                      >
                        <ChevronLeft className="w-5 h-5 text-white" />
                      </button>

                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          handleNext();
                        }}
                        className="w-12 h-12 rounded-full bg-white flex items-center justify-center shadow-lg hover:bg-gray-100 transition-colors"
                      >
                        <ChevronRight className="w-5 h-5 text-black" />
                      </button>
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

  // Desktop view - expandable cards with tech backgrounds
  return (
    <div
      className="relative w-full h-150 flex overflow-hidden"
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
      <div className="flex h-full w-full gap-1 p-2 relative z-10">
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
                backgroundImage: `url(${card.bgImage})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              {/* Tech gradient overlay */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${card.gradient}`}
              />

              {/* Dark overlay for readability */}
              <div className="absolute inset-0 bg-black/50" />

              {/* Hover overlay with subtle glow */}
              <div
                className={`absolute inset-0 bg-gradient-to-br from-white/10 to-transparent transition-opacity duration-300 ${
                  isHovered ? "opacity-100" : "opacity-0"
                }`}
              />

              {/* Improved Title with Smooth Rotation */}
              <div
                className="absolute"
                style={{
                  right: isActive ? "3rem" : "50%",
                  top: isActive ? "3rem" : "5.5rem",
                  transformOrigin: "center center",
                  transform: isActive
                    ? "translate(0, 0) rotate(0deg)"
                    : "translate(50%, 0) rotate(-90deg)",
                  transition: "all 0.8s cubic-bezier(0.4, 0, 0.2, 1)",
                  zIndex: 10,
                  whiteSpace: "nowrap",
                  width: "10rem",
                }}
              >
                <div className="flex justify-end items-center gap-4">
                  <span className="text-white text-lg font-medium whitespace-nowrap">
                    {card.title}
                  </span>
                  <div className="w-3 h-3 rounded-full border border-white flex items-center justify-center">
                    <span className="text-xs text-white"></span>
                  </div>
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
                  }}
                />
              )}

              {/* Expanded State Content */}
              {isActive && (
                <div className="flex flex-col h-full p-16 text-white relative">
                  {/* Tech icon for active state */}

                  {/* Card Navigation Arrows */}
                  <div className="absolute right-12 bottom-12 flex gap-4 z-10">
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        handlePrev();
                      }}
                      className="w-12 h-12 rounded-full border border-white/30 flex items-center justify-center hover:bg-white/10 transition-colors backdrop-blur-sm"
                    >
                      <ChevronLeft className="w-5 h-5 text-white" />
                    </button>
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        handleNext();
                      }}
                      className="w-12 h-12 rounded-full border border-white/30 flex items-center justify-center hover:bg-white/10 transition-colors backdrop-blur-sm"
                    >
                      <ChevronRight className="w-5 h-5 text-white" />
                    </button>
                  </div>

                  <div className="max-w-4xl mt-20">
                    {/* Quote mark */}
                    <div
                      className={`text-8xl text-white/30 mb-4 font-serif transition-all duration-700 ${
                        isActive
                          ? "opacity-100 translate-y-0 delay-200"
                          : "opacity-0 translate-y-8"
                      }`}
                    >
                      "
                    </div>

                    <h1
                      className={`text-4xl font-light mb-8 leading-tight transition-all duration-700 ${
                        isActive
                          ? "opacity-100 translate-y-0 delay-300"
                          : "opacity-0 translate-y-8"
                      }`}
                    >
                      {card.content.heading}
                    </h1>
                    <p
                      className={`text-xl mb-8 text-gray-300 max-w-3xl transition-all duration-700 ${
                        isActive
                          ? "opacity-100 translate-y-0 delay-[400ms]"
                          : "opacity-0 translate-y-8"
                      }`}
                    >
                      {card.content.description}
                    </p>

                    {/* Client Information */}
                    <div
                      className={`mb-10 transition-all duration-700 ${
                        isActive
                          ? "opacity-100 translate-y-0 delay-500"
                          : "opacity-0 translate-y-8"
                      }`}
                    >
                      <div className="flex items-center gap-4 mb-6">
                        <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm">
                          <span className="text-lg font-bold">
                            {card.content.client.name.charAt(0)}
                          </span>
                        </div>
                        <div>
                          <div className="text-xl font-medium text-white">
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

                    <button
                      className={`bg-white text-black px-8 py-4 rounded-full font-medium flex items-center gap-2 hover:bg-gray-200 transition-all duration-700 mb-16 hover:shadow-lg ${
                        isActive
                          ? "opacity-100 translate-y-0 delay-600"
                          : "opacity-0 translate-y-8"
                      }`}
                    >
                      {card.content.buttonText}
                      <ChevronRight className="w-5 h-5" />
                    </button>

                    {/* Progress Bar with gradient */}
                    <div
                      className={`mb-8 transition-all duration-700 ${
                        isActive ? "opacity-100 delay-[700ms]" : "opacity-0"
                      }`}
                    >
                      <div className="w-64 h-[2px] bg-white/20 relative overflow-hidden rounded-full">
                        <div
                          className="absolute left-0 top-0 h-full bg-gradient-to-r from-blue-400 to-purple-400 rounded-full"
                          style={{
                            width: `${progress}%`,
                            transition: "width 0.1s linear",
                          }}
                        />
                      </div>
                    </div>

                    {/* Dynamic content based on card type */}
                    {card.content.details && (
                      <div
                        className={`transition-all duration-700 ${
                          isActive
                            ? "opacity-100 translate-y-0 delay-[800ms]"
                            : "opacity-0 translate-y-8"
                        }`}
                      >
                        <h3 className="text-2xl font-light mb-6">
                          Key Results
                        </h3>
                        <div className="flex gap-8">
                          {card.content.details.map((detail, index) => (
                            <div
                              key={index}
                              className={`bg-white/10 backdrop-blur-sm px-6 py-3 rounded-lg transition-all duration-500 hover:bg-white/20 ${
                                isActive
                                  ? "opacity-100 scale-100"
                                  : "opacity-0 scale-95"
                              }`}
                              style={{
                                transitionDelay: isActive
                                  ? `${900 + index * 100}ms`
                                  : "0ms",
                              }}
                            >
                              <span className="text-lg font-medium">
                                {detail}
                              </span>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    {card.content.technologies && (
                      <div
                        className={`transition-all duration-700 ${
                          isActive
                            ? "opacity-100 translate-y-0 delay-[800ms]"
                            : "opacity-0 translate-y-8"
                        }`}
                      >
                        <h3 className="text-2xl font-light mb-6 border-b border-gray-600 pb-2">
                          Technologies Used
                        </h3>
                        <div className="grid grid-cols-3 gap-x-12 gap-y-4">
                          {card.content.technologies.map((tech, index) => (
                            <div
                              key={index}
                              className={`text-lg text-gray-300 transition-all duration-500 hover:text-white ${
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
                          ))}
                        </div>
                      </div>
                    )}

                    {card.content.achievements && (
                      <div
                        className={`transition-all duration-700 ${
                          isActive
                            ? "opacity-100 translate-y-0 delay-[800ms]"
                            : "opacity-0 translate-y-8"
                        }`}
                      >
                        <h3 className="text-2xl font-light mb-6 border-b border-gray-600 pb-2">
                          Project Achievements
                        </h3>
                        <div className="grid grid-cols-2 gap-x-12 gap-y-4">
                          {card.content.achievements.map(
                            (achievement, index) => (
                              <div
                                key={index}
                                className={`text-lg text-gray-300 transition-all duration-500 hover:text-white ${
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
                                • {achievement}
                              </div>
                            )
                          )}
                        </div>
                      </div>
                    )}

                    {card.content.results && (
                      <div
                        className={`transition-all duration-700 ${
                          isActive
                            ? "opacity-100 translate-y-0 delay-[800ms]"
                            : "opacity-0 translate-y-8"
                        }`}
                      >
                        <h3 className="text-2xl font-light mb-6 border-b border-gray-600 pb-2">
                          Measurable Results
                        </h3>
                        <div className="flex gap-12">
                          {card.content.results.map((result, index) => (
                            <div
                              key={index}
                              className={`bg-white/10 backdrop-blur-sm px-6 py-4 rounded-lg transition-all duration-500 hover:bg-white/20 ${
                                isActive
                                  ? "opacity-100 scale-100"
                                  : "opacity-0 scale-95"
                              }`}
                              style={{
                                transitionDelay: isActive
                                  ? `${900 + index * 100}ms`
                                  : "0ms",
                              }}
                            >
                              <span className="text-lg font-medium">
                                {result}
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
    </div>
  );
};

export default Testimonials;
