"use client";

import Background, { FogOverlay } from "@/components/Background";
import { motion } from "framer-motion";
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  Send,
  User,
  Building,
  MessageCircle,
  CheckCircle,
  ArrowRight,
  Linkedin,
  Twitter,
  Github,
  Globe,
} from "lucide-react";
import { useState } from "react";
import Link from "next/link";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    service: "",
    budget: "",
    timeline: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setIsSubmitting(false);
    setIsSubmitted(true);
  };

  const contactInfo = [
    {
      icon: Phone,
      title: "Call Us",
      description: "Ready to start your project?",
      contact: "+1 (555) 123-4567",
      action: "tel:+15551234567"
    },
    {
      icon: Mail,
      title: "Email Us", 
      description: "Send us your requirements",
      contact: "hello@devlabyrinth.com",
      action: "mailto:hello@devlabyrinth.com"
    },
    {
      icon: MapPin,
      title: "Visit Us",
      description: "Meet our team in person",
      contact: "123 Tech Street, Digital City, DC 10001",
      action: "https://maps.google.com"
    },
    {
      icon: Clock,
      title: "Business Hours",
      description: "We're here when you need us",
      contact: "Mon-Fri: 9AM-6PM EST",
      action: null
    }
  ];

  const services = [
    "Web Development",
    "Mobile Development", 
    "Cloud Solutions",
    "Cybersecurity",
    "Data Solutions",
    "AI & Automation",
    "Other"
  ];

  const budgetRanges = [
    "Under $10,000",
    "$10,000 - $25,000",
    "$25,000 - $50,000", 
    "$50,000 - $100,000",
    "$100,000+",
    "Let's discuss"
  ];

  const timelines = [
    "ASAP",
    "1-3 months",
    "3-6 months",
    "6-12 months",
    "12+ months",
    "Flexible"
  ];

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-white relative overflow-hidden">
        <div className="relative flex-1">
          <FogOverlay />
          <div className="absolute inset-0 z-0">
            <div className="max-w-7xl mx-auto flex justify-end h-full relative">
              <Background className="absolute top-0 right-0 xl:right-8 2xl:right-16 h-full w-1/4 sm:w-1/3 lg:w-1/3 max-w-md" />
            </div>
          </div>
          
          <div className="relative z-40 pt-32 pb-20 px-4">
            <div className="max-w-2xl mx-auto text-center">
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8 }}
              >
                <div className="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-8">
                  <CheckCircle className="w-10 h-10 text-white" />
                </div>
                <h1 className="text-4xl md:text-5xl font-bold text-[#191919] mb-6">
                  Thank You!
                </h1>
                <p className="text-lg text-[#6b6b6b] mb-8 leading-relaxed">
                  Your message has been received. Our team will review your request and get back to you within 24 hours.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link
                    href="/"
                    className="inline-flex items-center bg-[#191919] text-white rounded-full px-8 py-3 font-medium hover:bg-[#2a2a2a] transition-colors"
                  >
                    Back to Home <ArrowRight className="ml-2 w-5 h-5" />
                  </Link>
                  <Link
                    href="/services"
                    className="inline-flex items-center border border-[#191919] text-[#191919] rounded-full px-8 py-3 font-medium hover:bg-[#191919] hover:text-white transition-colors"
                  >
                    View Services
                  </Link>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    );
  }

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
        <section className="pt-20 pb-16 px-4 relative z-40">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <motion.div
              className="text-center max-w-4xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h3 className="text-[#191919] font-outfit font-medium tracking-wider mb-4 text-xs uppercase">
                GET IN TOUCH
              </h3>
              <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
                <span className="text-[#BDBBBB]">Let's Build</span>{" "}
                <span className="text-[#191919]">Something Amazing</span>
              </h1>
              <p className="text-xl text-[#6b6b6b] mb-12 leading-relaxed max-w-3xl mx-auto">
                Ready to transform your business? Contact our expert team to discuss your project requirements and get a personalized solution.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Contact Information Cards */}
        <section className="py-16 px-4 relative z-40">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
              {contactInfo.map((info, index) => (
                <motion.div
                  key={index}
                  className="bg-white border border-gray-200 rounded-lg p-6 text-center hover:shadow-lg transition-all duration-300"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <div className="w-12 h-12 bg-[#191919] rounded-lg flex items-center justify-center mx-auto mb-4">
                    <info.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-[#191919] mb-2">
                    {info.title}
                  </h3>
                  <p className="text-sm text-[#6b6b6b] mb-3">
                    {info.description}
                  </p>
                  {info.action ? (
                    <a
                      href={info.action}
                      target={info.action.startsWith('http') ? '_blank' : '_self'}
                      rel={info.action.startsWith('http') ? 'noopener noreferrer' : ''}
                      className="text-[#191919] font-medium hover:underline"
                    >
                      {info.contact}
                    </a>
                  ) : (
                    <span className="text-[#191919] font-medium">
                      {info.contact}
                    </span>
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Form */}
        <section className="py-16 px-4 relative z-40">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <motion.div
              className="bg-white border border-gray-200 rounded-2xl p-8 md:p-12 shadow-lg"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-[#191919] mb-4">
                  Start Your Project
                </h2>
                <p className="text-lg text-[#6b6b6b]">
                  Tell us about your project and we'll get back to you within 24 hours
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Personal Information */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-[#191919] mb-2">
                      Full Name *
                    </label>
                    <div className="relative">
                      <User className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-[#6b6b6b]" />
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#191919] focus:border-transparent transition-colors"
                        placeholder="Your full name"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-[#191919] mb-2">
                      Email Address *
                    </label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-[#6b6b6b]" />
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#191919] focus:border-transparent transition-colors"
                        placeholder="your.email@company.com"
                      />
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="company" className="block text-sm font-medium text-[#191919] mb-2">
                      Company Name
                    </label>
                    <div className="relative">
                      <Building className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-[#6b6b6b]" />
                      <input
                        type="text"
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#191919] focus:border-transparent transition-colors"
                        placeholder="Your company name"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-[#191919] mb-2">
                      Phone Number
                    </label>
                    <div className="relative">
                      <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-[#6b6b6b]" />
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#191919] focus:border-transparent transition-colors"
                        placeholder="+1 (555) 123-4567"
                      />
                    </div>
                  </div>
                </div>

                {/* Project Details */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div>
                    <label htmlFor="service" className="block text-sm font-medium text-[#191919] mb-2">
                      Service Interested *
                    </label>
                    <select
                      id="service"
                      name="service"
                      required
                      value={formData.service}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#191919] focus:border-transparent transition-colors"
                    >
                      <option value="">Select a service</option>
                      {services.map((service, index) => (
                        <option key={index} value={service}>
                          {service}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label htmlFor="budget" className="block text-sm font-medium text-[#191919] mb-2">
                      Project Budget
                    </label>
                    <select
                      id="budget"
                      name="budget"
                      value={formData.budget}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#191919] focus:border-transparent transition-colors"
                    >
                      <option value="">Select budget range</option>
                      {budgetRanges.map((budget, index) => (
                        <option key={index} value={budget}>
                          {budget}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label htmlFor="timeline" className="block text-sm font-medium text-[#191919] mb-2">
                      Timeline
                    </label>
                    <select
                      id="timeline"
                      name="timeline"
                      value={formData.timeline}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#191919] focus:border-transparent transition-colors"
                    >
                      <option value="">Select timeline</option>
                      {timelines.map((timeline, index) => (
                        <option key={index} value={timeline}>
                          {timeline}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-[#191919] mb-2">
                    Project Details *
                  </label>
                  <div className="relative">
                    <MessageCircle className="absolute left-3 top-4 w-5 h-5 text-[#6b6b6b]" />
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={6}
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#191919] focus:border-transparent transition-colors resize-none"
                      placeholder="Tell us more about your project requirements, goals, and any specific features you need..."
                    />
                  </div>
                </div>

                {/* Submit Button */}
                <div className="text-center pt-6">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="inline-flex items-center bg-[#191919] text-white rounded-full px-12 py-4 font-medium hover:bg-[#2a2a2a] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-3"></div>
                        Sending Message...
                      </>
                    ) : (
                      <>
                        Send Message <Send className="ml-2 w-5 h-5" />
                      </>
                    )}
                  </button>
                  <p className="text-sm text-[#6b6b6b] mt-4">
                    By submitting this form, you agree to our Terms of Service and Privacy Policy.
                  </p>
                </div>
              </form>
            </motion.div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 px-4 bg-gray-50 relative z-40">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <motion.div
              className="text-center mb-12"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                <span className="text-[#BDBBBB]">Frequently Asked</span>{" "}
                <span className="text-[#191919]">Questions</span>
              </h2>
              <p className="text-lg text-[#6b6b6b]">
                Quick answers to common questions about our services
              </p>
            </motion.div>

            <div className="space-y-6">
              {[
                {
                  question: "How long does a typical project take?",
                  answer: "Project timelines vary based on complexity and scope. Simple websites take 4-6 weeks, while complex applications can take 3-6 months. We provide detailed timelines during our initial consultation."
                },
                {
                  question: "Do you offer ongoing support and maintenance?",
                  answer: "Yes! We offer comprehensive support packages ranging from 3-12 months, including bug fixes, security updates, performance monitoring, and feature enhancements."
                },
                {
                  question: "What is your development process?",
                  answer: "We follow an agile methodology with regular client communication. Our process includes discovery, design, development, testing, and deployment phases with weekly progress updates."
                },
                {
                  question: "Can you work with our existing team?",
                  answer: "Absolutely! We can augment your existing team or work as an extension of your development department. We're experienced in collaborative development environments."
                },
                {
                  question: "Do you sign NDAs and protect intellectual property?",
                  answer: "Yes, we take data security and IP protection seriously. We're happy to sign NDAs and have strict internal policies to protect your confidential information and intellectual property."
                }
              ].map((faq, index) => (
                <motion.div
                  key={index}
                  className="bg-white border border-gray-200 rounded-lg p-6"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <h3 className="text-lg font-semibold text-[#191919] mb-3">
                    {faq.question}
                  </h3>
                  <p className="text-[#6b6b6b] leading-relaxed">
                    {faq.answer}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Social Links */}
        <section className="py-16 px-4 relative z-40">
          <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-2xl md:text-3xl font-bold text-[#191919] mb-6">
                Connect With Us
              </h2>
              <p className="text-lg text-[#6b6b6b] mb-8">
                Follow us on social media for the latest updates and insights
              </p>
              <div className="flex justify-center space-x-6">
                {[
                  { icon: Linkedin, href: "#", label: "LinkedIn" },
                  { icon: Twitter, href: "#", label: "Twitter" },
                  { icon: Github, href: "#", label: "GitHub" },
                  { icon: Globe, href: "#", label: "Website" }
                ].map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-[#191919] rounded-lg flex items-center justify-center text-white hover:bg-[#2a2a2a] transition-colors"
                    aria-label={social.label}
                  >
                    <social.icon className="w-6 h-6" />
                  </a>
                ))}
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </div>
  );
}
