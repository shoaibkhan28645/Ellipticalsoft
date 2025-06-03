"use client";

import { useState, useEffect } from "react";
import Background, { FogOverlay } from "@/components/Background";
import { 
  Shield, 
  Lock, 
  Eye, 
  Database, 
  Globe,
  Users,
  Cookie,
  Bell,
  UserCheck,
  AlertCircle,
  Mail,
  Calendar,
  Smartphone,
  Server
} from "lucide-react";

export default function PrivacyPage() {
  const [activeSection, setActiveSection] = useState("");
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    
    const handleScroll = () => {
      const sections = document.querySelectorAll("section[id]");
      const scrollPosition = window.scrollY + 200;

      sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        const sectionId = section.getAttribute("id");

        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
          setActiveSection(sectionId);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const sections = [
    { id: "introduction", title: "Introduction", icon: Shield },
    { id: "information", title: "Information We Collect", icon: Database },
    { id: "usage", title: "How We Use Information", icon: Eye },
    { id: "sharing", title: "Information Sharing", icon: Users },
    { id: "cookies", title: "Cookies & Tracking", icon: Cookie },
    { id: "security", title: "Data Security", icon: Lock },
    { id: "rights", title: "Your Rights", icon: UserCheck },
    { id: "children", title: "Children's Privacy", icon: AlertCircle },
    { id: "changes", title: "Policy Changes", icon: Bell },
    { id: "contact", title: "Contact Us", icon: Mail }
  ];

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const privacyPrinciples = [
    {
      icon: Lock,
      title: "Data Minimization",
      description: "We only collect data that's necessary for our services"
    },
    {
      icon: Shield,
      title: "Security First",
      description: "Your data is protected with industry-leading security measures"
    },
    {
      icon: UserCheck,
      title: "User Control",
      description: "You have full control over your personal information"
    },
    {
      icon: Eye,
      title: "Transparency",
      description: "We're clear about how we collect and use your data"
    }
  ];

  return (
    <div className="min-h-screen bg-white relative overflow-hidden">
      <div className="relative flex-1">
        <FogOverlay />

        <div className="absolute inset-0 z-0">
          <div className="max-w-7xl mx-auto flex justify-end h-full relative">
            <Background className="absolute top-0 right-0 xl:right-8 2xl:right-16 h-full w-1/4 sm:w-1/3 lg:w-1/3 max-w-md" />
          </div>
        </div>

        <div className="relative z-40 max-w-7xl mx-auto px-6 lg:px-8">
          {/* Hero Section */}
          <section className="pt-20 pb-16">
            <div className={`text-center max-w-4xl mx-auto transition-all duration-1000 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}>
              <div className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-gray-100 text-gray-700 mb-6">
                <Shield className="w-4 h-4 mr-2" />
                Your Privacy Matters
              </div>
              
              <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
                <span className="text-[#BDBBBB]">Privacy</span>{" "}
                <span className="text-[#191919]">Policy</span>
              </h1>
              
              <p className="text-xl text-gray-600 mb-8 leading-relaxed max-w-3xl mx-auto">
                At DevLabyrinth, we are committed to protecting your privacy and ensuring the security 
                of your personal information. This policy explains how we collect, use, and safeguard your data.
              </p>
              
              <div className="flex items-center justify-center text-gray-500 text-sm">
                <Calendar className="w-4 h-4 mr-2" />
                Effective Date: January 1, 2025
              </div>
            </div>
          </section>

          {/* Privacy Principles */}
          <section className="pb-16">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
              {privacyPrinciples.map((principle, index) => (
                <div key={index} className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow">
                  <div className="w-10 h-10 bg-gray-900 rounded-lg flex items-center justify-center mb-4">
                    <principle.icon className="w-5 h-5 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{principle.title}</h3>
                  <p className="text-sm text-gray-600">{principle.description}</p>
                </div>
              ))}
            </div>
          </section>

          <div className="flex gap-12 pb-20">
            {/* Table of Contents - Sticky Sidebar */}
            <aside className="hidden lg:block w-64 flex-shrink-0">
              <div className="sticky top-24">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Quick Navigation</h3>
                <nav className="space-y-2">
                  {sections.map((section) => (
                    <button
                      key={section.id}
                      onClick={() => scrollToSection(section.id)}
                      className={`w-full text-left px-4 py-2 rounded-lg flex items-center transition-all ${
                        activeSection === section.id
                          ? "bg-gray-900 text-white"
                          : "text-gray-600 hover:bg-gray-100"
                      }`}
                    >
                      <section.icon className="w-4 h-4 mr-3" />
                      <span className="text-sm">{section.title}</span>
                    </button>
                  ))}
                </nav>
              </div>
            </aside>

            {/* Main Content */}
            <div className="flex-1 max-w-3xl">
              <div className="prose prose-lg max-w-none">
                {/* Introduction */}
                <section id="introduction" className="mb-12 scroll-mt-24">
                  <div className="flex items-center mb-4">
                    <div className="w-10 h-10 bg-gray-900 rounded-lg flex items-center justify-center mr-4">
                      <Shield className="w-5 h-5 text-white" />
                    </div>
                    <h2 className="text-2xl font-semibold text-gray-900 m-0">1. Introduction</h2>
                  </div>
                  <div className="space-y-4 text-gray-600">
                    <p>
                      Welcome to DevLabyrinth's Privacy Policy. This policy describes how we collect, use, 
                      and protect your personal information when you use our services, visit our website, 
                      or interact with us in any way.
                    </p>
                    <p>
                      We respect your privacy and are committed to protecting your personal data. This privacy 
                      policy will inform you about how we look after your personal data and tell you about 
                      your privacy rights and how the law protects you.
                    </p>
                    <p>
                      By using our services, you consent to the data practices described in this policy. 
                      If you do not agree with our policies and practices, please do not use our services.
                    </p>
                  </div>
                </section>

                {/* Information We Collect */}
                <section id="information" className="mb-12 scroll-mt-24">
                  <div className="flex items-center mb-4">
                    <div className="w-10 h-10 bg-gray-900 rounded-lg flex items-center justify-center mr-4">
                      <Database className="w-5 h-5 text-white" />
                    </div>
                    <h2 className="text-2xl font-semibold text-gray-900 m-0">2. Information We Collect</h2>
                  </div>
                  <div className="space-y-4 text-gray-600">
                    <p>We collect several types of information from and about users of our services:</p>
                    
                    <h3 className="text-lg font-semibold text-gray-900 mt-6">Personal Information</h3>
                    <ul className="list-disc pl-6 space-y-2">
                      <li>Name and contact information (email address, phone number, mailing address)</li>
                      <li>Billing information (credit card details, billing address)</li>
                      <li>Account credentials (username, password)</li>
                      <li>Professional information (company name, job title, industry)</li>
                      <li>Communications with us (emails, chat logs, support tickets)</li>
                    </ul>

                    <h3 className="text-lg font-semibold text-gray-900 mt-6">Automatically Collected Information</h3>
                    <ul className="list-disc pl-6 space-y-2">
                      <li>Device information (IP address, browser type, operating system)</li>
                      <li>Usage data (pages visited, features used, time spent on site)</li>
                      <li>Location data (country, region, city based on IP address)</li>
                      <li>Cookies and similar tracking technologies</li>
                    </ul>

                    <h3 className="text-lg font-semibold text-gray-900 mt-6">Information from Third Parties</h3>
                    <ul className="list-disc pl-6 space-y-2">
                      <li>Social media profiles (when you connect via social login)</li>
                      <li>Payment processors (transaction confirmations)</li>
                      <li>Analytics providers (aggregated usage statistics)</li>
                    </ul>
                  </div>
                </section>

                {/* How We Use Information */}
                <section id="usage" className="mb-12 scroll-mt-24">
                  <div className="flex items-center mb-4">
                    <div className="w-10 h-10 bg-gray-900 rounded-lg flex items-center justify-center mr-4">
                      <Eye className="w-5 h-5 text-white" />
                    </div>
                    <h2 className="text-2xl font-semibold text-gray-900 m-0">3. How We Use Your Information</h2>
                  </div>
                  <div className="space-y-4 text-gray-600">
                    <p>We use the information we collect for various purposes:</p>
                    
                    <h3 className="text-lg font-semibold text-gray-900 mt-6">Service Delivery</h3>
                    <ul className="list-disc pl-6 space-y-2">
                      <li>Provide, maintain, and improve our services</li>
                      <li>Process transactions and send related information</li>
                      <li>Respond to your comments, questions, and customer service requests</li>
                      <li>Send you technical notices, updates, and support messages</li>
                    </ul>

                    <h3 className="text-lg font-semibold text-gray-900 mt-6">Communication</h3>
                    <ul className="list-disc pl-6 space-y-2">
                      <li>Send promotional communications about new features and services</li>
                      <li>Provide you with news and information we think will interest you</li>
                      <li>Contact you about your account or transactions</li>
                    </ul>

                    <h3 className="text-lg font-semibold text-gray-900 mt-6">Analytics and Improvement</h3>
                    <ul className="list-disc pl-6 space-y-2">
                      <li>Monitor and analyze trends, usage, and activities</li>
                      <li>Personalize and improve your experience</li>
                      <li>Test and develop new features and services</li>
                    </ul>
                  </div>
                </section>

                {/* Information Sharing */}
                <section id="sharing" className="mb-12 scroll-mt-24">
                  <div className="flex items-center mb-4">
                    <div className="w-10 h-10 bg-gray-900 rounded-lg flex items-center justify-center mr-4">
                      <Users className="w-5 h-5 text-white" />
                    </div>
                    <h2 className="text-2xl font-semibold text-gray-900 m-0">4. Information Sharing</h2>
                  </div>
                  <div className="space-y-4 text-gray-600">
                    <p>
                      We do not sell, trade, or rent your personal information to third parties. 
                      We may share your information in the following situations:
                    </p>
                    <ul className="list-disc pl-6 space-y-2">
                      <li><strong>Service Providers:</strong> With vendors who help us provide our services</li>
                      <li><strong>Legal Requirements:</strong> When required by law or to protect our rights</li>
                      <li><strong>Business Transfers:</strong> In connection with mergers or acquisitions</li>
                      <li><strong>Consent:</strong> With your explicit consent for specific purposes</li>
                      <li><strong>Aggregated Data:</strong> Non-identifiable data for analytics and research</li>
                    </ul>
                    <p>
                      All third parties are required to maintain the confidentiality of your information 
                      and are prohibited from using it for any purpose other than providing services to us.
                    </p>
                  </div>
                </section>

                {/* Cookies & Tracking */}
                <section id="cookies" className="mb-12 scroll-mt-24">
                  <div className="flex items-center mb-4">
                    <div className="w-10 h-10 bg-gray-900 rounded-lg flex items-center justify-center mr-4">
                      <Cookie className="w-5 h-5 text-white" />
                    </div>
                    <h2 className="text-2xl font-semibold text-gray-900 m-0">5. Cookies & Tracking Technologies</h2>
                  </div>
                  <div className="space-y-4 text-gray-600">
                    <p>
                      We use cookies and similar tracking technologies to track activity on our service 
                      and hold certain information. Cookies are files with small amounts of data which 
                      may include an anonymous unique identifier.
                    </p>
                    
                    <h3 className="text-lg font-semibold text-gray-900 mt-6">Types of Cookies We Use</h3>
                    <ul className="list-disc pl-6 space-y-2">
                      <li><strong>Essential Cookies:</strong> Required for the website to function properly</li>
                      <li><strong>Analytics Cookies:</strong> Help us understand how visitors use our site</li>
                      <li><strong>Marketing Cookies:</strong> Track visitors across websites for marketing</li>
                      <li><strong>Preference Cookies:</strong> Remember your settings and preferences</li>
                    </ul>
                    
                    <p>
                      You can instruct your browser to refuse all cookies or to indicate when a cookie 
                      is being sent. However, if you do not accept cookies, you may not be able to use 
                      some portions of our service.
                    </p>
                  </div>
                </section>

                {/* Data Security */}
                <section id="security" className="mb-12 scroll-mt-24">
                  <div className="flex items-center mb-4">
                    <div className="w-10 h-10 bg-gray-900 rounded-lg flex items-center justify-center mr-4">
                      <Lock className="w-5 h-5 text-white" />
                    </div>
                    <h2 className="text-2xl font-semibold text-gray-900 m-0">6. Data Security</h2>
                  </div>
                  <div className="space-y-4 text-gray-600">
                    <p>
                      We implement appropriate technical and organizational security measures to protect 
                      your personal information against accidental or unlawful destruction, loss, alteration, 
                      unauthorized disclosure, or access.
                    </p>
                    
                    <h3 className="text-lg font-semibold text-gray-900 mt-6">Our Security Measures Include:</h3>
                    <ul className="list-disc pl-6 space-y-2">
                      <li>Encryption of data in transit and at rest</li>
                      <li>Regular security assessments and audits</li>
                      <li>Access controls and authentication procedures</li>
                      <li>Employee training on data protection</li>
                      <li>Incident response and breach notification procedures</li>
                    </ul>
                    
                    <p>
                      While we strive to protect your personal information, no method of transmission 
                      over the Internet or electronic storage is 100% secure. We cannot guarantee absolute security.
                    </p>
                  </div>
                </section>

                {/* Your Rights */}
                <section id="rights" className="mb-12 scroll-mt-24">
                  <div className="flex items-center mb-4">
                    <div className="w-10 h-10 bg-gray-900 rounded-lg flex items-center justify-center mr-4">
                      <UserCheck className="w-5 h-5 text-white" />
                    </div>
                    <h2 className="text-2xl font-semibold text-gray-900 m-0">7. Your Rights</h2>
                  </div>
                  <div className="space-y-4 text-gray-600">
                    <p>You have certain rights regarding your personal information:</p>
                    
                    <div className="bg-gray-50 rounded-lg p-6 space-y-4">
                      <div className="flex items-start">
                        <Eye className="w-5 h-5 text-gray-700 mt-1 mr-3" />
                        <div>
                          <h4 className="font-semibold text-gray-900">Right to Access</h4>
                          <p className="text-sm">Request copies of your personal data</p>
                        </div>
                      </div>
                      
                      <div className="flex items-start">
                        <Server className="w-5 h-5 text-gray-700 mt-1 mr-3" />
                        <div>
                          <h4 className="font-semibold text-gray-900">Right to Rectification</h4>
                          <p className="text-sm">Request correction of inaccurate data</p>
                        </div>
                      </div>
                      
                      <div className="flex items-start">
                        <AlertCircle className="w-5 h-5 text-gray-700 mt-1 mr-3" />
                        <div>
                          <h4 className="font-semibold text-gray-900">Right to Erasure</h4>
                          <p className="text-sm">Request deletion of your personal data</p>
                        </div>
                      </div>
                      
                      <div className="flex items-start">
                        <Smartphone className="w-5 h-5 text-gray-700 mt-1 mr-3" />
                        <div>
                          <h4 className="font-semibold text-gray-900">Right to Data Portability</h4>
                          <p className="text-sm">Receive your data in a structured format</p>
                        </div>
                      </div>
                    </div>
                    
                    <p>
                      To exercise any of these rights, please contact us using the information provided below. 
                      We may need to verify your identity before processing your request.
                    </p>
                  </div>
                </section>

                {/* Children's Privacy */}
                <section id="children" className="mb-12 scroll-mt-24">
                  <div className="flex items-center mb-4">
                    <div className="w-10 h-10 bg-gray-900 rounded-lg flex items-center justify-center mr-4">
                      <AlertCircle className="w-5 h-5 text-white" />
                    </div>
                    <h2 className="text-2xl font-semibold text-gray-900 m-0">8. Children's Privacy</h2>
                  </div>
                  <div className="space-y-4 text-gray-600">
                    <p>
                      Our services are not intended for children under 13 years of age. We do not 
                      knowingly collect personal information from children under 13. If you are a 
                      parent or guardian and believe your child has provided us with personal information, 
                      please contact us immediately.
                    </p>
                    <p>
                      If we become aware that we have collected personal data from children without 
                      verification of parental consent, we will take steps to remove that information 
                      from our servers.
                    </p>
                  </div>
                </section>

                {/* Policy Changes */}
                <section id="changes" className="mb-12 scroll-mt-24">
                  <div className="flex items-center mb-4">
                    <div className="w-10 h-10 bg-gray-900 rounded-lg flex items-center justify-center mr-4">
                      <Bell className="w-5 h-5 text-white" />
                    </div>
                    <h2 className="text-2xl font-semibold text-gray-900 m-0">9. Changes to This Policy</h2>
                  </div>
                  <div className="space-y-4 text-gray-600">
                    <p>
                      We may update our Privacy Policy from time to time. We will notify you of any 
                      changes by posting the new Privacy Policy on this page and updating the 
                      "Effective Date" at the top of this policy.
                    </p>
                    <p>
                      You are advised to review this Privacy Policy periodically for any changes. 
                      Changes to this Privacy Policy are effective when they are posted on this page. 
                      Your continued use of our services after any changes indicates your acceptance 
                      of the updated policy.
                    </p>
                  </div>
                </section>

                {/* Contact Us */}
                <section id="contact" className="mb-12 scroll-mt-24">
                  <div className="flex items-center mb-4">
                    <div className="w-10 h-10 bg-gray-900 rounded-lg flex items-center justify-center mr-4">
                      <Mail className="w-5 h-5 text-white" />
                    </div>
                    <h2 className="text-2xl font-semibold text-gray-900 m-0">10. Contact Us</h2>
                  </div>
                  <div className="space-y-4 text-gray-600">
                    <p>
                      If you have any questions about this Privacy Policy or our data practices, 
                      please contact our Data Protection Officer:
                    </p>
                    <div className="bg-gray-50 rounded-lg p-6">
                      <h3 className="font-semibold text-gray-900 mb-2">DevLabyrinth Privacy Team</h3>
                      <p className="mb-1">Email: privacy@devlabyrinth.com</p>
                      <p className="mb-1">Phone: +1 (555) 123-4567</p>
                      <p>Address: 123 Tech Street, Silicon Valley, CA 94000</p>
                    </div>
                    <p>
                      For general support inquiries, please visit our <a href="/contact" className="text-gray-900 underline">Contact page</a>.
                    </p>
                  </div>
                </section>
              </div>

              {/* GDPR Notice */}
              <div className="mt-16 bg-gray-900 text-white rounded-2xl p-8">
                <div className="flex items-start">
                  <Globe className="w-6 h-6 mt-1 mr-4 flex-shrink-0 text-blue-400" />
                  <div>
                    <h3 className="text-xl font-semibold mb-2">International Users</h3>
                    <p className="text-gray-300 mb-4">
                      DevLabyrinth complies with applicable data protection laws, including the 
                      General Data Protection Regulation (GDPR) for users in the European Union 
                      and the California Consumer Privacy Act (CCPA) for California residents.
                    </p>
                    <p className="text-gray-300">
                      If you are accessing our services from outside the United States, please be 
                      aware that your information may be transferred to, stored, and processed in 
                      the United States where our servers are located.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
