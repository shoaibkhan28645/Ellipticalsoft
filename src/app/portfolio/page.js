"use client";

import Background, { FogOverlay } from "@/components/Background";
import { motion } from "framer-motion";
import { 
  ExternalLink, 
  Github, 
  ArrowRight,
  Filter,
  Grid,
  List,
  Sparkles
} from "lucide-react";
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

export default function PortfolioPage() {
  const [isVisible, setIsVisible] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [viewMode, setViewMode] = useState("grid");
  const [hoveredProject, setHoveredProject] = useState(null);
  
  useEffect(() => {
    setIsVisible(true);
  }, []);

  const categories = ["All", "Web Development", "Mobile Apps", "AI Solutions", "Cloud Projects", "E-Commerce"];

  const projects = [
    {
      id: 1,
      title: "FinTech Revolution",
      category: "Web Development",
      description: "A comprehensive financial management platform built with Next.js and Node.js, featuring real-time analytics and secure payment processing.",
      image: "/images/project1.jpg",
      technologies: ["React", "Node.js", "PostgreSQL", "AWS"],
      liveUrl: "#",
      githubUrl: "#",
      color: "from-blue-500 to-purple-500",
      year: "2024",
      client: "Global Finance Corp"
    },
    {
      id: 2,
      title: "HealthConnect Mobile",
      category: "Mobile Apps",
      description: "Cross-platform healthcare application connecting patients with doctors, featuring video consultations and appointment scheduling.",
      image: "/images/project2.jpg",
      technologies: ["React Native", "Firebase", "Node.js", "WebRTC"],
      liveUrl: "#",
      githubUrl: "#",
      color: "from-green-500 to-teal-500",
      year: "2024",
      client: "MediCare Solutions"
    },
    {
      id: 3,
      title: "AI Content Generator",
      category: "AI Solutions",
      description: "Advanced AI-powered content generation platform using GPT-4 and custom ML models for creating high-quality marketing content.",
      image: "/images/project3.jpg",
      technologies: ["Python", "TensorFlow", "React", "FastAPI"],
      liveUrl: "#",
      githubUrl: "#",
      color: "from-purple-500 to-pink-500",
      year: "2023",
      client: "ContentPro Inc"
    },
    {
      id: 4,
      title: "CloudScale Infrastructure",
      category: "Cloud Projects",
      description: "Enterprise-grade cloud infrastructure solution with auto-scaling, monitoring, and disaster recovery capabilities.",
      image: "/images/project4.jpg",
      technologies: ["AWS", "Kubernetes", "Docker", "Terraform"],
      liveUrl: "#",
      githubUrl: "#",
      color: "from-orange-500 to-red-500",
      year: "2023",
      client: "TechScale Systems"
    },
    {
      id: 5,
      title: "E-Market Pro",
      category: "E-Commerce",
      description: "Full-featured e-commerce platform with inventory management, multi-vendor support, and AI-powered recommendations.",
      image: "/images/project5.jpg",
      technologies: ["Next.js", "Stripe", "MongoDB", "Redis"],
      liveUrl: "#",
      githubUrl: "#",
      color: "from-yellow-500 to-orange-500",
      year: "2024",
      client: "Retail Dynamics"
    },
    {
      id: 6,
      title: "Smart City Dashboard",
      category: "Web Development",
      description: "Real-time city management dashboard with IoT integration, traffic monitoring, and resource optimization.",
      image: "/images/project6.jpg",
      technologies: ["Vue.js", "D3.js", "Node.js", "PostgreSQL"],
      liveUrl: "#",
      githubUrl: "#",
      color: "from-indigo-500 to-blue-500",
      year: "2023",
      client: "Metro City Council"
    }
  ];

  const filteredProjects = selectedCategory === "All" 
    ? projects 
    : projects.filter(project => project.category === selectedCategory);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <div className="min-h-screen bg-white relative overflow-hidden">
      <div className="relative flex-1">
        <FogOverlay />
        
        <div className="absolute inset-0 z-0">
          <div className="max-w-7xl mx-auto flex justify-end h-full relative">
            <Background className="absolute top-0 right-0 xl:right-8 2xl:right-16 h-full w-1/4 sm:w-1/3 lg:w-1/3 max-w-md" />
          </div>
        </div>

        {/* Hero Section */}
        <section className="pt-20 pb-20 px-4 relative z-40">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <motion.div
              className="text-center max-w-4xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-gray-100 text-gray-700 mb-6">
                <Sparkles className="w-4 h-4 mr-2" />
                Our Portfolio
              </div>
              
              <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
                <span className="text-[#BDBBBB]">Showcasing</span>{" "}
                <span className="text-[#191919]">Our Work</span>
              </h1>
              <p className="text-xl text-[#6b6b6b] mb-12 leading-relaxed max-w-3xl mx-auto">
                Explore our diverse portfolio of successful projects that have transformed businesses and delivered exceptional results.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Filter Section */}
        <section className="py-8 px-4 relative z-40 sticky top-0 bg-white/80 backdrop-blur-sm border-b border-gray-200">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <div className="flex flex-wrap gap-2">
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                      selectedCategory === category
                        ? "bg-[#191919] text-white"
                        : "bg-gray-100 text-[#6b6b6b] hover:bg-gray-200"
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
              
              <div className="flex items-center gap-2">
                <button
                  onClick={() => setViewMode("grid")}
                  className={`p-2 rounded-lg transition-colors ${
                    viewMode === "grid" ? "bg-[#191919] text-white" : "bg-gray-100 text-[#6b6b6b]"
                  }`}
                >
                  <Grid className="w-5 h-5" />
                </button>
                <button
                  onClick={() => setViewMode("list")}
                  className={`p-2 rounded-lg transition-colors ${
                    viewMode === "list" ? "bg-[#191919] text-white" : "bg-gray-100 text-[#6b6b6b]"
                  }`}
                >
                  <List className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Projects Grid/List */}
        <section className="py-20 px-4 relative z-40">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <motion.div
              className={viewMode === "grid" ? "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" : "space-y-8"}
              variants={containerVariants}
              initial="hidden"
              animate={isVisible ? "visible" : "hidden"}
            >
              {filteredProjects.map((project, index) => (
                <motion.div
                  key={project.id}
                  variants={itemVariants}
                  className={`group relative overflow-hidden bg-white border border-gray-200 rounded-lg transition-all duration-300 hover:shadow-2xl ${
                    viewMode === "list" ? "flex flex-col md:flex-row" : ""
                  }`}
                  onMouseEnter={() => setHoveredProject(project.id)}
                  onMouseLeave={() => setHoveredProject(null)}
                >
                  {/* Project Image */}
                  <div className={`relative overflow-hidden ${
                    viewMode === "list" ? "md:w-1/3" : "h-64"
                  }`}>
                    <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-75`} />
                    {/* Placeholder for actual project image */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="text-white text-2xl font-bold">{project.title}</span>
                    </div>
                    
                    {/* Hover Overlay */}
                    <motion.div
                      className="absolute inset-0 bg-[#191919] flex items-center justify-center gap-4"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: hoveredProject === project.id ? 0.9 : 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <Link
                        href={project.liveUrl}
                        className="p-3 bg-white rounded-full text-[#191919] hover:scale-110 transition-transform"
                      >
                        <ExternalLink className="w-5 h-5" />
                      </Link>
                      <Link
                        href={project.githubUrl}
                        className="p-3 bg-white rounded-full text-[#191919] hover:scale-110 transition-transform"
                      >
                        <Github className="w-5 h-5" />
                      </Link>
                    </motion.div>
                  </div>

                  {/* Project Details */}
                  <div className={`p-6 ${viewMode === "list" ? "md:w-2/3" : ""}`}>
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-sm text-[#6b6b6b]">{project.category}</span>
                      <span className="text-sm text-[#6b6b6b]">{project.year}</span>
                    </div>
                    
                    <h3 className="text-xl font-semibold text-[#191919] mb-2">
                      {project.title}
                    </h3>
                    
                    <p className="text-sm text-[#6b6b6b] mb-1">
                      Client: {project.client}
                    </p>
                    
                    <p className="text-[#6b6b6b] mb-4">
                      {project.description}
                    </p>
                    
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.technologies.map((tech, idx) => (
                        <span
                          key={idx}
                          className="px-3 py-1 bg-gray-100 text-xs text-[#191919] rounded-full"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    
                    <Link
                      href={`/portfolio/${project.id}`}
                      className="inline-flex items-center text-[#191919] font-medium hover:gap-3 transition-all duration-300"
                    >
                      View Case Study
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </Link>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* Load More Button */}
            <motion.div
              className="text-center mt-12"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <button className="inline-flex items-center border border-[#191919] rounded-full px-8 py-3 text-[#191919] font-medium hover:bg-[#191919] hover:text-white transition-colors">
                Load More Projects <ArrowRight className="ml-2 w-5 h-5" />
              </button>
            </motion.div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-20 bg-gray-50 relative z-40">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <motion.div
                className="text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <div className="text-4xl font-bold text-[#191919] mb-2">150+</div>
                <div className="text-[#6b6b6b]">Projects Completed</div>
              </motion.div>
              <motion.div
                className="text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                viewport={{ once: true }}
              >
                <div className="text-4xl font-bold text-[#191919] mb-2">50+</div>
                <div className="text-[#6b6b6b]">Happy Clients</div>
              </motion.div>
              <motion.div
                className="text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <div className="text-4xl font-bold text-[#191919] mb-2">15+</div>
                <div className="text-[#6b6b6b]">Industry Awards</div>
              </motion.div>
              <motion.div
                className="text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
              >
                <div className="text-4xl font-bold text-[#191919] mb-2">98%</div>
                <div className="text-[#6b6b6b]">Client Satisfaction</div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 relative z-40">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <motion.div
              className="bg-[#191919] rounded-2xl p-12"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="max-w-3xl mx-auto text-center">
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                  Have a Project in Mind?
                </h2>
                <p className="text-xl text-gray-300 mb-8">
                  Let's collaborate to bring your vision to life with our expertise and innovation.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link
                    href="/contact"
                    className="inline-flex items-center bg-white text-[#191919] rounded-full px-8 py-3 font-medium hover:bg-gray-100 transition-colors"
                  >
                    Start a Project <ArrowRight className="ml-2 w-5 h-5" />
                  </Link>
                  <Link
                    href="/services"
                    className="inline-flex items-center border border-white text-white rounded-full px-8 py-3 font-medium hover:bg-white hover:text-[#191919] transition-colors"
                  >
                    View Services
                  </Link>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </div>
  );
}
