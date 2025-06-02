"use client";

import Background, { FogOverlay } from "@/components/Background";
import { motion } from "framer-motion";
import { 
  Code, 
  Smartphone, 
  Cloud, 
  Shield, 
  Zap, 
  Database,
  Globe,
  Cpu,
  LineChart,
  Layers,
  Settings,
  Briefcase,
  ArrowRight,
  CheckCircle
} from "lucide-react";
import { useState, useEffect } from "react";
import Link from "next/link";

export default function ServicesPage() {
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredService, setHoveredService] = useState(null);
  
  useEffect(() => {
    setIsVisible(true);
  }, []);

  const services = [
    {
      icon: Code,
      title: "Web Development",
      description: "Custom web applications built with modern frameworks and technologies for optimal performance.",
      features: ["React/Next.js", "Node.js", "Progressive Web Apps", "Responsive Design"],
      color: "from-blue-500 to-purple-500"
    },
    {
      icon: Smartphone,
      title: "Mobile Development",
      description: "Native and cross-platform mobile applications that deliver exceptional user experiences.",
      features: ["React Native", "Flutter", "iOS/Android", "App Store Deployment"],
      color: "from-green-500 to-teal-500"
    },
    {
      icon: Cloud,
      title: "Cloud Solutions",
      description: "Scalable cloud infrastructure and migration services for modern businesses.",
      features: ["AWS/Azure", "Kubernetes", "Serverless", "Cloud Migration"],
      color: "from-orange-500 to-red-500"
    },
    {
      icon: Shield,
      title: "Cybersecurity",
      description: "Comprehensive security solutions to protect your digital assets and data.",
      features: ["Security Audits", "Penetration Testing", "Compliance", "Monitoring"],
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: Database,
      title: "Data Solutions",
      description: "Advanced data management and analytics to drive informed business decisions.",
      features: ["Big Data", "Data Warehousing", "ETL Pipelines", "Real-time Analytics"],
      color: "from-indigo-500 to-blue-500"
    },
    {
      icon: Zap,
      title: "AI & Automation",
      description: "Intelligent automation and AI solutions to streamline your business processes.",
      features: ["Machine Learning", "Process Automation", "Chatbots", "Predictive Analytics"],
      color: "from-yellow-500 to-orange-500"
    }
  ];

  const processSteps = [
    { 
      number: "01", 
      title: "Discovery", 
      description: "We analyze your requirements and business goals to create a tailored strategy." 
    },
    { 
      number: "02", 
      title: "Design", 
      description: "Our team creates intuitive designs and architectures that align with your vision." 
    },
    { 
      number: "03", 
      title: "Development", 
      description: "We build robust solutions using cutting-edge technologies and best practices." 
    },
    { 
      number: "04", 
      title: "Deployment", 
      description: "Seamless deployment and ongoing support to ensure optimal performance." 
    }
  ];

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
              <h3 className="text-[#191919] font-outfit font-medium tracking-wider mb-4 text-xs uppercase">
                OUR SERVICES
              </h3>
              <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
                <span className="text-[#BDBBBB]">Innovative</span>{" "}
                <span className="text-[#191919]">IT Solutions</span>
              </h1>
              <p className="text-xl text-[#6b6b6b] mb-12 leading-relaxed max-w-3xl mx-auto">
                Transform your business with our comprehensive range of technology services designed to drive growth and innovation.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-20 px-4 relative z-40">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <motion.div
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
              variants={containerVariants}
              initial="hidden"
              animate={isVisible ? "visible" : "hidden"}
            >
              {services.map((service, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="bg-white border border-gray-200 rounded-lg p-8 hover:shadow-xl transition-all duration-300 group relative overflow-hidden"
                  onMouseEnter={() => setHoveredService(index)}
                  onMouseLeave={() => setHoveredService(null)}
                >
                  {/* Gradient Background on Hover */}
                  <div 
                    className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}
                  />
                  
                  <div className="relative z-10">
                    <div className="w-12 h-12 bg-[#191919] rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                      <service.icon className="w-6 h-6 text-white" />
                    </div>
                    
                    <h3 className="text-2xl font-semibold text-[#191919] mb-4">
                      {service.title}
                    </h3>
                    
                    <p className="text-[#6b6b6b] mb-6">
                      {service.description}
                    </p>
                    
                    <ul className="space-y-2 mb-6">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center text-sm text-[#6b6b6b]">
                          <CheckCircle className="w-4 h-4 mr-2 text-[#191919]" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                    
                    <Link 
                      href={`/services/${service.title.toLowerCase().replace(' ', '-')}`}
                      className="inline-flex items-center text-[#191919] font-medium hover:gap-3 transition-all duration-300"
                    >
                      Learn More 
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </Link>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-20 bg-gray-50 relative z-40">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h3 className="text-[#191919] font-outfit font-medium tracking-wider mb-4 text-xs uppercase">
                OUR PROCESS
              </h3>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                <span className="text-[#BDBBBB]">How We</span>{" "}
                <span className="text-[#191919]">Work</span>
              </h2>
              <p className="text-lg text-[#6b6b6b] max-w-3xl mx-auto">
                Our proven methodology ensures successful project delivery from concept to completion.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {processSteps.map((step, index) => (
                <motion.div
                  key={index}
                  className="text-center"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="text-6xl font-bold text-[#BDBBBB] mb-4">
                    {step.number}
                  </div>
                  <h3 className="text-xl font-semibold text-[#191919] mb-3">
                    {step.title}
                  </h3>
                  <p className="text-[#6b6b6b]">
                    {step.description}
                  </p>
                  {index < processSteps.length - 1 && (
                    <div className="hidden lg:block absolute top-1/3 -right-4 text-[#BDBBBB]">
                      <ArrowRight className="w-8 h-8" />
                    </div>
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 relative z-40">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <motion.div
              className="bg-[#191919] rounded-2xl p-12 text-center"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Ready to Transform Your Business?
              </h2>
              <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                Let's discuss how our innovative solutions can help you achieve your goals.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center bg-white text-[#191919] rounded-full px-8 py-3 font-medium hover:bg-gray-100 transition-colors"
              >
                Get Started <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </motion.div>
          </div>
        </section>

        {/* Technologies Section */}
        <section className="py-20 px-4 relative z-40">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <motion.div
              className="text-center mb-12"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h3 className="text-[#191919] font-outfit font-medium tracking-wider mb-4 text-xs uppercase">
                TECHNOLOGIES WE USE
              </h3>
              <div className="flex flex-wrap justify-center gap-4 mt-8">
                {["React", "Next.js", "Node.js", "Python", "AWS", "Docker", "Kubernetes", "PostgreSQL", "MongoDB", "Redis"].map((tech, index) => (
                  <motion.div
                    key={index}
                    className="bg-white border border-gray-200 rounded-lg px-6 py-3 text-[#191919] font-medium hover:bg-[#191919] hover:text-white transition-colors"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.4, delay: index * 0.05 }}
                    viewport={{ once: true }}
                  >
                    {tech}
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </div>
  );
}
