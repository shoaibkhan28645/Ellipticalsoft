"use client";

import { useState } from "react";
import Background, { FogOverlay } from "@/components/Background";
import { 
  ChevronDown, 
  HelpCircle, 
  Code2, 
  Shield, 
  Zap, 
  Globe, 
  HeadphonesIcon,
  Clock,
  CreditCard,
  Users,
  Rocket,
  CheckCircle
} from "lucide-react";

export default function FAQPage() {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      category: "General",
      icon: HelpCircle,
      questions: [
        {
          question: "What is DevLabyrinth?",
          answer: "DevLabyrinth is a leading software IT innovator that delivers cutting-edge solutions and services. We specialize in custom software development, cloud solutions, AI integration, and comprehensive IT consulting to help businesses transform digitally."
        },
        {
          question: "How long has DevLabyrinth been in business?",
          answer: "DevLabyrinth has been at the forefront of software innovation for over 8 years. During this time, we've successfully delivered 500+ projects for 200+ global clients, establishing ourselves as a trusted technology partner."
        },
        {
          question: "What industries do you serve?",
          answer: "We serve a diverse range of industries including healthcare, finance, e-commerce, education, manufacturing, and technology startups. Our solutions are tailored to meet the specific needs and challenges of each sector."
        }
      ]
    },
    {
      category: "Services",
      icon: Code2,
      questions: [
        {
          question: "What services does DevLabyrinth offer?",
          answer: "We offer a comprehensive suite of services including custom software development, mobile app development, web development, cloud migration and management, AI/ML integration, DevOps consulting, UI/UX design, and ongoing technical support."
        },
        {
          question: "Do you provide end-to-end project management?",
          answer: "Yes, we provide complete end-to-end project management. From initial consultation and requirement gathering to development, testing, deployment, and post-launch support, we handle every aspect of your project with dedicated project managers ensuring smooth delivery."
        },
        {
          question: "Can you help modernize our legacy systems?",
          answer: "Absolutely! We specialize in legacy system modernization, helping businesses migrate from outdated technologies to modern, scalable solutions. We ensure minimal disruption to your operations while improving performance, security, and maintainability."
        }
      ]
    },
    {
      category: "Technology",
      icon: Rocket,
      questions: [
        {
          question: "What technologies do you work with?",
          answer: "We work with a modern tech stack including React, Next.js, TypeScript, Node.js, Python, AWS, Google Cloud, Docker, Kubernetes, PostgreSQL, MongoDB, and various AI/ML frameworks. We select the best technologies based on your project requirements."
        },
        {
          question: "Do you develop mobile applications?",
          answer: "Yes, we develop native iOS and Android applications as well as cross-platform solutions using React Native and Flutter. Our mobile apps are designed for optimal performance, user experience, and scalability."
        },
        {
          question: "How do you ensure code quality?",
          answer: "We follow industry best practices including code reviews, automated testing, CI/CD pipelines, and adherence to coding standards. Our quality assurance process includes unit testing, integration testing, and comprehensive user acceptance testing."
        }
      ]
    },
    {
      category: "Process",
      icon: Users,
      questions: [
        {
          question: "How does your development process work?",
          answer: "We follow an agile methodology with iterative development cycles. The process includes discovery & planning, design & prototyping, development & testing, deployment, and ongoing support. We maintain transparent communication throughout with regular updates and demos."
        },
        {
          question: "How long does a typical project take?",
          answer: "Project timelines vary based on complexity and scope. A simple web application might take 2-3 months, while enterprise solutions can take 6-12 months. We provide detailed timelines during the planning phase and work efficiently to meet deadlines."
        },
        {
          question: "Do you sign NDAs?",
          answer: "Yes, we understand the importance of confidentiality. We're happy to sign NDAs before discussing your project details. All our team members are bound by strict confidentiality agreements to protect your intellectual property."
        }
      ]
    },
    {
      category: "Support",
      icon: HeadphonesIcon,
      questions: [
        {
          question: "What kind of support do you provide after launch?",
          answer: "We offer comprehensive post-launch support including bug fixes, performance optimization, security updates, feature enhancements, and 24/7 monitoring for critical systems. We have flexible support plans tailored to your needs."
        },
        {
          question: "Do you provide training for our team?",
          answer: "Yes, we provide thorough training to ensure your team can effectively use and maintain the solutions we develop. This includes documentation, video tutorials, hands-on training sessions, and ongoing support during the transition period."
        },
        {
          question: "How quickly do you respond to support requests?",
          answer: "Our response times depend on the severity of the issue. Critical issues are addressed within 2-4 hours, high priority within 24 hours, and standard requests within 48-72 hours. We offer different SLA levels based on your support plan."
        }
      ]
    },
    {
      category: "Pricing",
      icon: CreditCard,
      questions: [
        {
          question: "How do you price your services?",
          answer: "We offer flexible pricing models including fixed-price for well-defined projects, time & materials for evolving requirements, and dedicated team models for long-term engagements. We provide detailed quotes after understanding your specific needs."
        },
        {
          question: "Do you require upfront payment?",
          answer: "We typically work with milestone-based payments. Projects usually start with a 20-30% advance, with subsequent payments tied to deliverables. We're flexible and can discuss payment terms that work best for both parties."
        },
        {
          question: "Can you work within our budget?",
          answer: "We strive to deliver maximum value within your budget constraints. During the discovery phase, we help prioritize features and can suggest phased development approaches to achieve your goals while staying within budget."
        }
      ]
    }
  ];

  const toggleQuestion = (categoryIndex, questionIndex) => {
    const newIndex = `${categoryIndex}-${questionIndex}`;
    setOpenIndex(openIndex === newIndex ? null : newIndex);
  };

  return (
    <div className="min-h-screen bg-white relative overflow-hidden">
      <div className="relative flex-1">
        {/* Fog overlay */}
        <FogOverlay />

        {/* Background element */}
        <div className="absolute inset-0 z-0">
          <div className="max-w-7xl mx-auto flex justify-end h-full relative">
            <Background className="absolute top-0 right-0 xl:right-8 2xl:right-16 h-full w-1/4 sm:w-1/3 lg:w-1/3 max-w-md" />
          </div>
        </div>

        {/* Main content */}
        <div className="relative z-40 max-w-7xl mx-auto px-6 lg:px-8">
          {/* Hero Section */}
          <section className="pt-20 pb-16">
            <div className="text-center max-w-4xl mx-auto">
              <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
                <span className="text-[#BDBBBB]">Frequently Asked</span>{" "}
                <span className="text-[#191919]">Questions</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed max-w-3xl mx-auto">
                Find answers to common questions about our services, process, and how we can help transform your business.
              </p>
              
              {/* Quick Stats */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-12 mb-16">
                <div className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow">
                  <div className="flex items-center justify-center mb-3">
                    <Globe className="w-8 h-8 text-gray-900" />
                  </div>
                  <div className="text-2xl font-bold text-gray-900 mb-1">200+</div>
                  <div className="text-gray-600">Global Clients</div>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow">
                  <div className="flex items-center justify-center mb-3">
                    <Clock className="w-8 h-8 text-gray-900" />
                  </div>
                  <div className="text-2xl font-bold text-gray-900 mb-1">24/7</div>
                  <div className="text-gray-600">Support Available</div>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow">
                  <div className="flex items-center justify-center mb-3">
                    <Shield className="w-8 h-8 text-gray-900" />
                  </div>
                  <div className="text-2xl font-bold text-gray-900 mb-1">100%</div>
                  <div className="text-gray-600">Secure & Reliable</div>
                </div>
              </div>
            </div>
          </section>

          {/* FAQ Categories */}
          <section className="pb-20">
            <div className="max-w-4xl mx-auto">
              {faqs.map((category, categoryIndex) => (
                <div key={categoryIndex} className="mb-12">
                  {/* Category Header */}
                  <div className="flex items-center mb-6">
                    <div className="w-10 h-10 bg-gray-900 rounded-lg flex items-center justify-center mr-4">
                      <category.icon className="w-5 h-5 text-white" />
                    </div>
                    <h2 className="text-2xl font-semibold text-gray-900">
                      {category.category}
                    </h2>
                  </div>

                  {/* Questions */}
                  <div className="space-y-4">
                    {category.questions.map((item, questionIndex) => (
                      <div
                        key={questionIndex}
                        className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:border-gray-300 transition-colors"
                      >
                        <button
                          className="w-full px-6 py-4 text-left flex items-center justify-between focus:outline-none focus:ring-2 focus:ring-gray-900 focus:ring-offset-2"
                          onClick={() => toggleQuestion(categoryIndex, questionIndex)}
                        >
                          <span className="text-lg font-medium text-gray-900 pr-4">
                            {item.question}
                          </span>
                          <ChevronDown
                            className={`w-5 h-5 text-gray-600 flex-shrink-0 transition-transform duration-300 ${
                              openIndex === `${categoryIndex}-${questionIndex}`
                                ? "transform rotate-180"
                                : ""
                            }`}
                          />
                        </button>
                        <div
                          className={`overflow-hidden transition-all duration-300 ${
                            openIndex === `${categoryIndex}-${questionIndex}`
                              ? "max-h-96"
                              : "max-h-0"
                          }`}
                        >
                          <div className="px-6 pb-4">
                            <p className="text-gray-600 leading-relaxed">
                              {item.answer}
                            </p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Contact CTA */}
          <section className="pb-20">
            <div className="max-w-4xl mx-auto">
              <div className="bg-gray-900 rounded-2xl p-8 md:p-12 text-center">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                  Still have questions?
                </h2>
                <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
                  Our team is here to help. Contact us for personalized assistance with your project needs.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a
                    href="/contact"
                    className="inline-flex items-center justify-center px-6 py-3 text-lg font-medium rounded-full bg-white text-gray-900 hover:bg-gray-100 transition-colors"
                  >
                    Contact Sales
                    <span className="ml-2">↗</span>
                  </a>
                  <a
                    href="/services"
                    className="inline-flex items-center justify-center px-6 py-3 text-lg font-medium rounded-full border border-white text-white hover:bg-white hover:text-gray-900 transition-colors"
                  >
                    View Services
                  </a>
                </div>
                
                {/* Features */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-12">
                  <div className="text-center">
                    <CheckCircle className="w-6 h-6 text-green-400 mx-auto mb-2" />
                    <p className="text-gray-300">Free Consultation</p>
                  </div>
                  <div className="text-center">
                    <CheckCircle className="w-6 h-6 text-green-400 mx-auto mb-2" />
                    <p className="text-gray-300">Custom Solutions</p>
                  </div>
                  <div className="text-center">
                    <CheckCircle className="w-6 h-6 text-green-400 mx-auto mb-2" />
                    <p className="text-gray-300">Expert Support</p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
