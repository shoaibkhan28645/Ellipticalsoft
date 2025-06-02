"use client";
import React, { useState, useEffect } from "react";

const AchievementsSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [counters, setCounters] = useState({
    projects: 0,
    countries: 0,
    clients: 0,
    experience: 0,
  });

  const achievements = [
    {
      id: "projects",
      label: "Successful Projects",
      value: 50,
      suffix: "+",
    },
    {
      id: "countries",
      label: "Countries Supported",
      value: 12,
      suffix: "+",
    },
    {
      id: "clients",
      label: "Active Clients",
      value: 15,
      suffix: "+",
    },
    {
      id: "experience",
      label: "Years of Enablement Experience",
      value: 5,
      suffix: "+",
    },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const element = document.getElementById("achievements");
      if (element) {
        const rect = element.getBoundingClientRect();
        const isInView = rect.top <= window.innerHeight && rect.bottom >= 0;
        if (isInView && !isVisible) {
          setIsVisible(true);
          startCountAnimation();
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, [isVisible]);

  const startCountAnimation = () => {
    achievements.forEach((achievement) => {
      const duration = 2000;
      const increment = achievement.value / (duration / 16);
      let current = 0;

      const timer = setInterval(() => {
        current += increment;
        if (current >= achievement.value) {
          current = achievement.value;
          clearInterval(timer);
        }
        setCounters((prev) => ({
          ...prev,
          [achievement.id]: Math.floor(current),
        }));
      }, 16);
    });
  };

  return (
    <section
      id="achievements"
      className="relative min-h-[999px] flex justify-center items-center py-20 overflow-hidden "
    >
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80')`,
          }}
        />
        {/* Dark overlay with gradient */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/95 via-black/70 to-black/95" />
      </div>

      <div className=" max-w-7xl mx-auto px-6 lg:px-8 relative z-10 ">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Content - Fixed text colors */}
          <div className="space-y-6">
            <div className="space-y-2">
              <h3 className="text-[#A6C33E] font-outfit font-medium tracking-wider mb-4 text-xs uppercase">
                PIONEERING TRUST AND INNOVATION
              </h3>
              <h2 className="text-4xl lg:text-5xl font-bold text-white">
                <span className="text-[#BDBBBB]">DevLabyrinth </span>
                Achievements
              </h2>
            </div>

            <div className="space-y-4 text-gray-200">
              <p className="text-lg">
                We take pride in empowering businesses worldwide with innovative
                solutions.
              </p>
              <p className="text-lg">
                Devsinc brings an unwavering commitment to excellence, backed by
                a global presence.
              </p>
            </div>

            <button className="bg-[#A6C33E] text-black px-8 py-3 rounded-full font-semibold transition-colors duration-300">
              Get in Touch <span className="ml-2">↗</span>
            </button>
          </div>

          {/* Right Content - Achievement Stats */}
          <div className="grid grid-cols-2 gap-8 lg:gap-12">
            {achievements.map((achievement, index) => (
              <div
                key={achievement.id}
                className={`transform transition-all duration-700 ${
                  isVisible
                    ? "translate-y-0 opacity-100"
                    : "translate-y-10 opacity-0"
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="text-4xl lg:text-5xl font-bold text-[#A6C33E] mb-2">
                  {counters[achievement.id].toLocaleString()}
                  {achievement.suffix}
                </div>
                <p className="text-gray-200 text-lg">{achievement.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AchievementsSection;
