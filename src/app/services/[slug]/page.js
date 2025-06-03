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
  CheckCircle,
  Users,
  Award,
  Lightbulb,
  Target,
  Clock,
  DollarSign,
  Star,
  Quote,
  Play,
  Download,
  Phone,
  Mail,
  MapPin,
  Lock,
  Eye,
} from "lucide-react";
import { useState, useEffect } from "react";
import Link from "next/link";
import { useParams } from "next/navigation";

// Service data configuration
const serviceData = {
  "web-development": {
    icon: Code,
    title: "Web Development",
    subtitle: "Building Modern Web Experiences",
    description: "Transform your business with cutting-edge web applications built using the latest technologies and frameworks for optimal performance and user experience.",
    heroImage: "/api/placeholder/800/500",
    color: "from-blue-500 to-purple-500",
    features: [
      {
        icon: Code,
        title: "Modern Frameworks",
        description: "React, Next.js, Vue.js, and Angular for dynamic user interfaces"
      },
      {
        icon: Database,
        title: "Backend Excellence",
        description: "Node.js, Python, and robust database solutions"
      },
      {
        icon: Smartphone,
        title: "Responsive Design",
        description: "Mobile-first approach ensuring perfect display on all devices"
      },
      {
        icon: Zap,
        title: "Performance Optimized",
        description: "Fast loading times and smooth user interactions"
      }
    ],
    technologies: [
      "React", "Next.js", "Vue.js", "Angular", "Node.js", "Python", 
      "TypeScript", "Tailwind CSS", "MongoDB", "PostgreSQL", "AWS", "Docker"
    ],
    process: [
      {
        step: "01",
        title: "Requirements Analysis",
        description: "We analyze your business needs and technical requirements to create a comprehensive project roadmap."
      },
      {
        step: "02", 
        title: "Design & Prototyping",
        description: "Creating wireframes, mockups, and interactive prototypes to visualize the final product."
      },
      {
        step: "03",
        title: "Development & Testing",
        description: "Building your application with clean, scalable code and rigorous testing protocols."
      },
      {
        step: "04",
        title: "Deployment & Support",
        description: "Launching your application and providing ongoing maintenance and support."
      }
    ],
    caseStudies: [
      {
        title: "E-commerce Platform Transformation",
        description: "Increased conversion rates by 150% for a major retail client",
        metrics: "150% increase in conversions, 60% faster load times",
        image: "/api/placeholder/400/250"
      },
      {
        title: "Healthcare Management System",
        description: "Streamlined patient management for healthcare providers",
        metrics: "40% reduction in administrative time, 99.9% uptime",
        image: "/api/placeholder/400/250"
      }
    ],
    pricing: [
      {
        name: "Starter",
        price: "$5,000",
        duration: "4-6 weeks",
        features: [
          "Up to 5 pages",
          "Responsive design",
          "Basic SEO optimization",
          "Contact form integration",
          "3 months support"
        ],
        popular: false
      },
      {
        name: "Professional",
        price: "$15,000",
        duration: "8-12 weeks", 
        features: [
          "Up to 15 pages",
          "Custom CMS",
          "Advanced SEO",
          "E-commerce integration",
          "Analytics setup",
          "6 months support"
        ],
        popular: true
      },
      {
        name: "Enterprise",
        price: "Custom",
        duration: "12+ weeks",
        features: [
          "Unlimited pages",
          "Custom features",
          "Advanced integrations",
          "Performance optimization",
          "Security implementation",
          "12 months support"
        ],
        popular: false
      }
    ]
  },
  "mobile-development": {
    icon: Smartphone,
    title: "Mobile Development", 
    subtitle: "Native & Cross-Platform Apps",
    description: "Create powerful mobile applications that deliver exceptional user experiences across iOS and Android platforms with cutting-edge technologies.",
    heroImage: "/api/placeholder/800/500",
    color: "from-green-500 to-teal-500",
    features: [
      {
        icon: Smartphone,
        title: "Cross-Platform Development",
        description: "React Native and Flutter for efficient multi-platform deployment"
      },
      {
        icon: Code,
        title: "Native Performance",
        description: "Native iOS and Android development for maximum performance"
      },
      {
        icon: Cloud,
        title: "Cloud Integration",
        description: "Seamless backend integration and cloud services"
      },
      {
        icon: Settings,
        title: "App Store Optimization",
        description: "Complete assistance with app store deployment and optimization"
      }
    ],
    technologies: [
      "React Native", "Flutter", "Swift", "Kotlin", "Dart", "Firebase",
      "AWS Amplify", "Redux", "Node.js", "MongoDB", "PostgreSQL", "Git"
    ],
    process: [
      {
        step: "01",
        title: "App Strategy & Planning",
        description: "Define app objectives, target audience, and feature requirements for optimal market fit."
      },
      {
        step: "02",
        title: "UI/UX Design",
        description: "Create intuitive and engaging user interfaces following platform design guidelines."
      },
      {
        step: "03",
        title: "Development & Integration",
        description: "Build robust applications with seamless third-party integrations and APIs."
      },
      {
        step: "04",
        title: "Testing & Launch",
        description: "Comprehensive testing across devices and app store submission process."
      }
    ],
    caseStudies: [
      {
        title: "Fitness Tracking App",
        description: "10M+ downloads with 4.8-star rating on app stores",
        metrics: "10M+ downloads, 4.8-star rating, 85% user retention",
        image: "/api/placeholder/400/250"
      },
      {
        title: "Financial Management App",
        description: "Simplified personal finance for young professionals",
        metrics: "500K+ active users, 90% user satisfaction",
        image: "/api/placeholder/400/250"
      }
    ],
    pricing: [
      {
        name: "MVP",
        price: "$25,000",
        duration: "8-12 weeks",
        features: [
          "Cross-platform app",
          "5-7 core features",
          "Basic UI/UX design",
          "API integration",
          "App store submission",
          "3 months support"
        ],
        popular: false
      },
      {
        name: "Professional",
        price: "$50,000",
        duration: "16-20 weeks",
        features: [
          "Advanced features",
          "Custom animations",
          "Push notifications",
          "Offline functionality",
          "Analytics integration",
          "6 months support"
        ],
        popular: true
      },
      {
        name: "Enterprise",
        price: "Custom",
        duration: "20+ weeks",
        features: [
          "Complex integrations",
          "Advanced security",
          "Custom backend",
          "Admin dashboard",
          "White-label options",
          "12 months support"
        ],
        popular: false
      }
    ]
  },
  "cloud-solutions": {
    icon: Cloud,
    title: "Cloud Solutions",
    subtitle: "Scalable Infrastructure & Migration",
    description: "Modernize your infrastructure with comprehensive cloud solutions that improve scalability, reduce costs, and enhance business agility.",
    heroImage: "/api/placeholder/800/500",
    color: "from-orange-500 to-red-500",
    features: [
      {
        icon: Cloud,
        title: "Multi-Cloud Strategy",
        description: "AWS, Azure, and Google Cloud expertise for optimal solutions"
      },
      {
        icon: Database,
        title: "Data Migration",
        description: "Seamless migration of your existing systems to the cloud"
      },
      {
        icon: Shield,
        title: "Security & Compliance",
        description: "Enterprise-grade security with industry compliance standards"
      },
      {
        icon: LineChart,
        title: "Cost Optimization",
        description: "Reduce infrastructure costs while improving performance"
      }
    ],
    technologies: [
      "AWS", "Microsoft Azure", "Google Cloud", "Kubernetes", "Docker",
      "Terraform", "Ansible", "Jenkins", "Prometheus", "Grafana", "ELK Stack"
    ],
    process: [
      {
        step: "01",
        title: "Infrastructure Assessment",
        description: "Comprehensive analysis of your current infrastructure and cloud readiness evaluation."
      },
      {
        step: "02",
        title: "Migration Strategy",
        description: "Develop detailed migration plan with minimal downtime and risk mitigation."
      },
      {
        step: "03",
        title: "Implementation",
        description: "Execute migration with proper testing, monitoring, and rollback procedures."
      },
      {
        step: "04",
        title: "Optimization & Monitoring",
        description: "Continuous optimization and 24/7 monitoring for peak performance."
      }
    ],
    caseStudies: [
      {
        title: "Enterprise Cloud Migration",
        description: "Migrated 500-employee company to AWS with zero downtime",
        metrics: "60% cost reduction, 99.99% uptime, 3x faster deployment",
        image: "/api/placeholder/400/250"
      },
      {
        title: "Microservices Architecture",
        description: "Transformed monolithic application to scalable microservices",
        metrics: "10x improved scalability, 50% faster development cycles",
        image: "/api/placeholder/400/250"
      }
    ],
    pricing: [
      {
        name: "Assessment",
        price: "$5,000",
        duration: "2-3 weeks",
        features: [
          "Infrastructure audit",
          "Cloud readiness report",
          "Migration roadmap",
          "Cost analysis",
          "Risk assessment",
          "Strategy consultation"
        ],
        popular: false
      },
      {
        name: "Migration",
        price: "$30,000",
        duration: "12-16 weeks",
        features: [
          "Complete migration",
          "Security implementation",
          "Performance optimization",
          "Staff training",
          "Documentation",
          "6 months support"
        ],
        popular: true
      },
      {
        name: "Managed Services",
        price: "$5,000/month",
        duration: "Ongoing",
        features: [
          "24/7 monitoring",
          "Automated scaling",
          "Security management",
          "Backup & recovery",
          "Performance optimization",
          "Regular reporting"
        ],
        popular: false
      }
    ]
  },
  "cybersecurity": {
    icon: Shield,
    title: "Cybersecurity",
    subtitle: "Comprehensive Security Solutions",
    description: "Protect your digital assets with enterprise-grade cybersecurity solutions designed to safeguard against evolving threats.",
    heroImage: "/api/placeholder/800/500",
    color: "from-purple-500 to-pink-500",
    features: [
      {
        icon: Shield,
        title: "Threat Detection",
        description: "Advanced AI-powered threat detection and response systems"
      },
      {
        icon: Lock,
        title: "Data Protection",
        description: "End-to-end encryption and data loss prevention solutions"
      },
      {
        icon: Eye,
        title: "Security Monitoring",
        description: "24/7 security operations center with real-time monitoring"
      },
      {
        icon: CheckCircle,
        title: "Compliance",
        description: "Meet regulatory requirements with comprehensive compliance frameworks"
      }
    ],
    technologies: [
      "Palo Alto", "Fortinet", "CrowdStrike", "Splunk", "Nessus", "Metasploit",
      "Wireshark", "OWASP", "ISO 27001", "SOC 2", "GDPR", "HIPAA"
    ],
    process: [
      {
        step: "01",
        title: "Security Assessment",
        description: "Comprehensive security audit to identify vulnerabilities and risk factors."
      },
      {
        step: "02",
        title: "Strategy Development",
        description: "Create customized security strategy aligned with business objectives."
      },
      {
        step: "03",
        title: "Implementation",
        description: "Deploy security solutions with minimal business disruption."
      },
      {
        step: "04",
        title: "Monitoring & Response",
        description: "Continuous monitoring with rapid incident response capabilities."
      }
    ],
    caseStudies: [
      {
        title: "Financial Institution Security",
        description: "Implemented zero-trust architecture for major bank",
        metrics: "100% compliance achievement, 90% reduction in security incidents",
        image: "/api/placeholder/400/250"
      },
      {
        title: "Healthcare Data Protection",
        description: "HIPAA-compliant security for healthcare network",
        metrics: "Zero data breaches, 99.9% system availability",
        image: "/api/placeholder/400/250"
      }
    ],
    pricing: [
      {
        name: "Security Audit",
        price: "$10,000",
        duration: "2-4 weeks",
        features: [
          "Vulnerability assessment",
          "Penetration testing",
          "Compliance review",
          "Risk analysis",
          "Detailed report",
          "Remediation plan"
        ],
        popular: false
      },
      {
        name: "Complete Security",
        price: "$75,000",
        duration: "16-24 weeks",
        features: [
          "Full security implementation",
          "Employee training",
          "Incident response plan",
          "Monitoring setup",
          "Compliance certification",
          "12 months support"
        ],
        popular: true
      },
      {
        name: "Managed Security",
        price: "$8,000/month",
        duration: "Ongoing",
        features: [
          "24/7 SOC monitoring",
          "Threat intelligence",
          "Incident response",
          "Regular assessments",
          "Compliance reporting",
          "Security awareness training"
        ],
        popular: false
      }
    ]
  },
  "data-solutions": {
    icon: Database,
    title: "Data Solutions",
    subtitle: "Advanced Analytics & Intelligence",
    description: "Transform raw data into actionable insights with advanced analytics, machine learning, and business intelligence solutions.",
    heroImage: "/api/placeholder/800/500",
    color: "from-indigo-500 to-blue-500",
    features: [
      {
        icon: Database,
        title: "Data Warehousing",
        description: "Scalable data warehouses for centralized data management"
      },
      {
        icon: LineChart,
        title: "Business Intelligence",
        description: "Interactive dashboards and real-time analytics"
      },
      {
        icon: Cpu,
        title: "Machine Learning",
        description: "Predictive analytics and automated decision making"
      },
      {
        icon: Zap,
        title: "Real-time Processing",
        description: "Stream processing for instant data insights"
      }
    ],
    technologies: [
      "Apache Spark", "Hadoop", "Snowflake", "Tableau", "Power BI", "Python",
      "R", "TensorFlow", "Apache Kafka", "Elasticsearch", "Redshift", "BigQuery"
    ],
    process: [
      {
        step: "01",
        title: "Data Discovery",
        description: "Identify and catalog all data sources across your organization."
      },
      {
        step: "02",
        title: "Architecture Design",
        description: "Design scalable data architecture and analytics framework."
      },
      {
        step: "03",
        title: "Implementation",
        description: "Build data pipelines, warehouses, and analytics solutions."
      },
      {
        step: "04",
        title: "Insights & Optimization",
        description: "Generate actionable insights and continuously optimize performance."
      }
    ],
    caseStudies: [
      {
        title: "Retail Analytics Platform",
        description: "Increased sales by 25% through predictive analytics",
        metrics: "25% sales increase, 40% better inventory management",
        image: "/api/placeholder/400/250"
      },
      {
        title: "Manufacturing IoT Analytics",
        description: "Reduced downtime by 60% with predictive maintenance",
        metrics: "60% downtime reduction, $2M annual savings",
        image: "/api/placeholder/400/250"
      }
    ],
    pricing: [
      {
        name: "Data Assessment",
        price: "$8,000",
        duration: "3-4 weeks",
        features: [
          "Data audit",
          "Architecture review",
          "Analytics strategy",
          "ROI analysis",
          "Implementation roadmap",
          "Technology recommendations"
        ],
        popular: false
      },
      {
        name: "Analytics Platform",
        price: "$60,000",
        duration: "16-20 weeks",
        features: [
          "Data warehouse setup",
          "ETL pipeline development",
          "Dashboard creation",
          "ML model development",
          "Training & documentation",
          "6 months support"
        ],
        popular: true
      },
      {
        name: "Enterprise Analytics",
        price: "Custom",
        duration: "24+ weeks",
        features: [
          "Enterprise data lake",
          "Advanced ML/AI models",
          "Real-time processing",
          "Custom integrations",
          "Dedicated team",
          "12 months support"
        ],
        popular: false
      }
    ]
  },
  "ai-automation": {
    icon: Zap,
    title: "AI & Automation",
    subtitle: "Intelligent Business Automation",
    description: "Leverage artificial intelligence and automation to streamline operations, reduce costs, and unlock new business opportunities.",
    heroImage: "/api/placeholder/800/500",
    color: "from-yellow-500 to-orange-500",
    features: [
      {
        icon: Cpu,
        title: "Machine Learning",
        description: "Custom ML models for predictive analytics and automation"
      },
      {
        icon: Zap,
        title: "Process Automation",
        description: "Automate repetitive tasks and business processes"
      },
      {
        icon: Users,
        title: "Chatbots & Virtual Assistants",
        description: "AI-powered customer service and support solutions"
      },
      {
        icon: LineChart,
        title: "Predictive Analytics",
        description: "Forecast trends and make data-driven decisions"
      }
    ],
    technologies: [
      "TensorFlow", "PyTorch", "OpenAI GPT", "Langchain", "Python", "R",
      "Azure AI", "AWS AI/ML", "RPA Tools", "Computer Vision", "NLP", "Deep Learning"
    ],
    process: [
      {
        step: "01",
        title: "Use Case Identification",
        description: "Identify automation opportunities and AI use cases within your business."
      },
      {
        step: "02",
        title: "Proof of Concept",
        description: "Develop and test AI/automation prototypes to validate concepts."
      },
      {
        step: "03",
        title: "Development & Training",
        description: "Build production-ready AI models and automation workflows."
      },
      {
        step: "04",
        title: "Deployment & Scaling",
        description: "Deploy solutions and scale across your organization."
      }
    ],
    caseStudies: [
      {
        title: "Customer Service Automation",
        description: "Reduced response time by 80% with AI chatbots",
        metrics: "80% faster response, 90% automation rate, 95% satisfaction",
        image: "/api/placeholder/400/250"
      },
      {
        title: "Supply Chain Optimization",
        description: "Optimized inventory management with predictive AI",
        metrics: "30% cost reduction, 50% better demand forecasting",
        image: "/api/placeholder/400/250"
      }
    ],
    pricing: [
      {
        name: "AI Strategy",
        price: "$12,000",
        duration: "4-6 weeks",
        features: [
          "AI readiness assessment",
          "Use case identification",
          "ROI analysis",
          "Implementation roadmap",
          "Technology selection",
          "Risk assessment"
        ],
        popular: false
      },
      {
        name: "AI Implementation",
        price: "$80,000",
        duration: "20-24 weeks",
        features: [
          "Custom AI model development",
          "Integration with existing systems",
          "Training & deployment",
          "Performance monitoring",
          "Staff training",
          "6 months support"
        ],
        popular: true
      },
      {
        name: "AI-as-a-Service",
        price: "$10,000/month",
        duration: "Ongoing",
        features: [
          "Managed AI infrastructure",
          "Continuous model improvement",
          "24/7 monitoring",
          "Regular updates",
          "Dedicated support",
          "Custom development"
        ],
        popular: false
      }
    ]
  }
};

export default function ServiceDetailPage() {
  const params = useParams();
  const slug = params.slug;
  const [isVisible, setIsVisible] = useState(false);
  const [activeTab, setActiveTab] = useState("overview");

  useEffect(() => {
    setIsVisible(true);
  }, []);

  // Get service data based on slug
  const service = serviceData[slug];

  // If service not found, show 404
  if (!service) {
    return (
      <div className="min-h-screen bg-white relative overflow-hidden">
        <div className="relative flex-1">
          <FogOverlay />
          <div className="absolute inset-0 z-0">
            <div className="max-w-7xl mx-auto flex justify-end h-full relative">
              <Background className="absolute top-0 right-0 xl:right-8 2xl:right-16 h-full w-1/4 sm:w-1/3 lg:w-1/3 max-w-md" />
            </div>
          </div>
          <div className="relative z-40 pt-20 pb-20 px-4">
            <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
              <h1 className="text-4xl font-bold text-[#191919] mb-4">Service Not Found</h1>
              <p className="text-[#6b6b6b] mb-8">The service you're looking for doesn't exist.</p>
              <Link
                href="/services"
                className="inline-flex items-center bg-[#191919] text-white rounded-full px-8 py-3 font-medium hover:bg-[#2a2a2a] transition-colors"
              >
                Back to Services <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
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
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
              >
                <div className="flex items-center mb-6">
                  <div className={`w-16 h-16 bg-gradient-to-br ${service.color} rounded-lg flex items-center justify-center mr-4`}>
                    <service.icon className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-[#191919] font-outfit font-medium tracking-wider mb-1 text-xs uppercase">
                      SERVICE DETAILS
                    </h3>
                    <h1 className="text-4xl md:text-5xl font-bold text-[#191919]">
                      {service.title}
                    </h1>
                  </div>
                </div>
                
                <h2 className="text-2xl md:text-3xl font-semibold text-[#BDBBBB] mb-6">
                  {service.subtitle}
                </h2>
                
                <p className="text-lg text-[#6b6b6b] mb-8 leading-relaxed">
                  {service.description}
                </p>

                <div className="flex flex-col sm:flex-row gap-4">
                  <Link
                    href="#contact"
                    className="inline-flex items-center bg-[#191919] text-white rounded-full px-8 py-3 font-medium hover:bg-[#2a2a2a] transition-colors"
                  >
                    Get Started <ArrowRight className="ml-2 w-5 h-5" />
                  </Link>
                  <Link
                    href="#pricing"
                    className="inline-flex items-center border border-[#191919] text-[#191919] rounded-full px-8 py-3 font-medium hover:bg-[#191919] hover:text-white transition-colors"
                  >
                    View Pricing <DollarSign className="ml-2 w-5 h-5" />
                  </Link>
                </div>
              </motion.div>

              <motion.div
                className="relative"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <div className="aspect-video bg-gray-100 rounded-lg overflow-hidden">
                  <img
                    src={service.heroImage}
                    alt={service.title}
                    className="w-full h-full object-cover"
                  />
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Navigation Tabs */}
        <section className="py-8 px-4 relative z-40 border-b border-gray-200">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="flex flex-wrap justify-center gap-4">
              {[
                { id: "overview", label: "Overview" },
                { id: "process", label: "Our Process" },
                { id: "technologies", label: "Technologies" },
                { id: "case-studies", label: "Case Studies" },
                { id: "pricing", label: "Pricing" }
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`px-6 py-2 rounded-full font-medium transition-colors ${
                    activeTab === tab.id
                      ? "bg-[#191919] text-white"
                      : "bg-gray-100 text-[#6b6b6b] hover:bg-gray-200"
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Content Sections */}
        <div className="relative z-40">
          {/* Overview Section */}
          {activeTab === "overview" && (
            <section className="py-20 px-4">
              <div className="max-w-7xl mx-auto px-6 lg:px-8">
                <motion.div
                  className="text-center mb-16"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                >
                  <h2 className="text-4xl md:text-5xl font-bold mb-6">
                    <span className="text-[#BDBBBB]">Key</span>{" "}
                    <span className="text-[#191919]">Features</span>
                  </h2>
                  <p className="text-lg text-[#6b6b6b] max-w-3xl mx-auto">
                    Discover what makes our {service.title.toLowerCase()} services exceptional
                  </p>
                </motion.div>

                <motion.div
                  className="grid grid-cols-1 md:grid-cols-2 gap-8"
                  variants={containerVariants}
                  initial="hidden"
                  animate={isVisible ? "visible" : "hidden"}
                >
                  {service.features.map((feature, index) => (
                    <motion.div
                      key={index}
                      variants={itemVariants}
                      className="bg-white border border-gray-200 rounded-lg p-8 hover:shadow-xl transition-all duration-300"
                    >
                      <div className="w-12 h-12 bg-[#191919] rounded-lg flex items-center justify-center mb-6">
                        <feature.icon className="w-6 h-6 text-white" />
                      </div>
                      <h3 className="text-xl font-semibold text-[#191919] mb-4">
                        {feature.title}
                      </h3>
                      <p className="text-[#6b6b6b]">{feature.description}</p>
                    </motion.div>
                  ))}
                </motion.div>
              </div>
            </section>
          )}

          {/* Process Section */}
          {activeTab === "process" && (
            <section className="py-20 px-4 bg-gray-50">
              <div className="max-w-7xl mx-auto px-6 lg:px-8">
                <motion.div
                  className="text-center mb-16"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                >
                  <h2 className="text-4xl md:text-5xl font-bold mb-6">
                    <span className="text-[#BDBBBB]">Our</span>{" "}
                    <span className="text-[#191919]">Process</span>
                  </h2>
                  <p className="text-lg text-[#6b6b6b] max-w-3xl mx-auto">
                    Our proven methodology ensures successful project delivery
                  </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                  {service.process.map((step, index) => (
                    <motion.div
                      key={index}
                      className="text-center relative"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                    >
                      <div className="text-6xl font-bold text-[#BDBBBB] mb-4">
                        {step.step}
                      </div>
                      <h3 className="text-xl font-semibold text-[#191919] mb-3">
                        {step.title}
                      </h3>
                      <p className="text-[#6b6b6b]">{step.description}</p>
                      {index < service.process.length - 1 && (
                        <div className="hidden lg:block absolute top-1/3 -right-4 text-[#BDBBBB]">
                          <ArrowRight className="w-8 h-8" />
                        </div>
                      )}
                    </motion.div>
                  ))}
                </div>
              </div>
            </section>
          )}

          {/* Technologies Section */}
          {activeTab === "technologies" && (
            <section className="py-20 px-4">
              <div className="max-w-7xl mx-auto px-6 lg:px-8">
                <motion.div
                  className="text-center mb-16"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                >
                  <h2 className="text-4xl md:text-5xl font-bold mb-6">
                    <span className="text-[#BDBBBB]">Technologies</span>{" "}
                    <span className="text-[#191919]">We Use</span>
                  </h2>
                  <p className="text-lg text-[#6b6b6b] max-w-3xl mx-auto">
                    Cutting-edge tools and frameworks for optimal results
                  </p>
                </motion.div>

                <div className="flex flex-wrap justify-center gap-4">
                  {service.technologies.map((tech, index) => (
                    <motion.div
                      key={index}
                      className="bg-white border border-gray-200 rounded-lg px-6 py-3 text-[#191919] font-medium hover:bg-[#191919] hover:text-white transition-colors"
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.4, delay: index * 0.05 }}
                    >
                      {tech}
                    </motion.div>
                  ))}
                </div>
              </div>
            </section>
          )}

          {/* Case Studies Section */}
          {activeTab === "case-studies" && (
            <section className="py-20 px-4 bg-gray-50">
              <div className="max-w-7xl mx-auto px-6 lg:px-8">
                <motion.div
                  className="text-center mb-16"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                >
                  <h2 className="text-4xl md:text-5xl font-bold mb-6">
                    <span className="text-[#BDBBBB]">Success</span>{" "}
                    <span className="text-[#191919]">Stories</span>
                  </h2>
                  <p className="text-lg text-[#6b6b6b] max-w-3xl mx-auto">
                    Real results from real clients
                  </p>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  {service.caseStudies.map((study, index) => (
                    <motion.div
                      key={index}
                      className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                    >
                      <div className="aspect-video bg-gray-100">
                        <img
                          src={study.image}
                          alt={study.title}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="p-8">
                        <h3 className="text-2xl font-semibold text-[#191919] mb-4">
                          {study.title}
                        </h3>
                        <p className="text-[#6b6b6b] mb-6">{study.description}</p>
                        <div className="bg-gray-50 rounded-lg p-4">
                          <p className="text-sm font-medium text-[#191919]">Key Results:</p>
                          <p className="text-[#6b6b6b]">{study.metrics}</p>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </section>
          )}

          {/* Pricing Section */}
          {activeTab === "pricing" && (
            <section id="pricing" className="py-20 px-4">
              <div className="max-w-7xl mx-auto px-6 lg:px-8">
                <motion.div
                  className="text-center mb-16"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                >
                  <h2 className="text-4xl md:text-5xl font-bold mb-6">
                    <span className="text-[#BDBBBB]">Transparent</span>{" "}
                    <span className="text-[#191919]">Pricing</span>
                  </h2>
                  <p className="text-lg text-[#6b6b6b] max-w-3xl mx-auto">
                    Choose the package that best fits your needs
                  </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  {service.pricing.map((plan, index) => (
                    <motion.div
                      key={index}
                      className={`bg-white border-2 rounded-lg p-8 relative ${
                        plan.popular 
                          ? "border-[#191919] transform scale-105" 
                          : "border-gray-200"
                      }`}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                    >
                      {plan.popular && (
                        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                          <span className="bg-[#191919] text-white px-4 py-1 rounded-full text-sm font-medium">
                            Most Popular
                          </span>
                        </div>
                      )}

                      <div className="text-center mb-8">
                        <h3 className="text-2xl font-bold text-[#191919] mb-2">
                          {plan.name}
                        </h3>
                        <div className="text-4xl font-bold text-[#191919] mb-2">
                          {plan.price}
                        </div>
                        <p className="text-[#6b6b6b]">{plan.duration}</p>
                      </div>

                      <ul className="space-y-4 mb-8">
                        {plan.features.map((feature, idx) => (
                          <li key={idx} className="flex items-start">
                            <CheckCircle className="w-5 h-5 text-[#191919] mr-3 mt-0.5 flex-shrink-0" />
                            <span className="text-[#6b6b6b]">{feature}</span>
                          </li>
                        ))}
                      </ul>

                      <Link
                        href="#contact"
                        className={`block w-full text-center rounded-full px-8 py-3 font-medium transition-colors ${
                          plan.popular
                            ? "bg-[#191919] text-white hover:bg-[#2a2a2a]"
                            : "border border-[#191919] text-[#191919] hover:bg-[#191919] hover:text-white"
                        }`}
                      >
                        Get Started
                      </Link>
                    </motion.div>
                  ))}
                </div>
              </div>
            </section>
          )}
        </div>

        {/* Contact Section */}
        <section id="contact" className="py-20 px-4 bg-[#191919] relative z-40">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <motion.div
              className="text-center"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Ready to Get Started?
              </h2>
              <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                Let's discuss how our {service.title.toLowerCase()} services can transform your business.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/contact"
                  className="inline-flex items-center bg-white text-[#191919] rounded-full px-8 py-3 font-medium hover:bg-gray-100 transition-colors"
                >
                  Start Your Project <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
                <Link
                  href="/portfolio"
                  className="inline-flex items-center border border-white text-white rounded-full px-8 py-3 font-medium hover:bg-white hover:text-[#191919] transition-colors"
                >
                  View Our Work <Globe className="ml-2 w-5 h-5" />
                </Link>
              </div>

              <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                <div>
                  <Phone className="w-8 h-8 text-white mx-auto mb-4" />
                  <h3 className="text-white font-semibold mb-2">Call Us</h3>
                  <p className="text-gray-300">+1 (555) 123-4567</p>
                </div>
                <div>
                  <Mail className="w-8 h-8 text-white mx-auto mb-4" />
                  <h3 className="text-white font-semibold mb-2">Email Us</h3>
                  <p className="text-gray-300">hello@devlabyrinth.com</p>
                </div>
                <div>
                  <MapPin className="w-8 h-8 text-white mx-auto mb-4" />
                  <h3 className="text-white font-semibold mb-2">Visit Us</h3>
                  <p className="text-gray-300">123 Tech Street, Digital City</p>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </div>
  );
}
