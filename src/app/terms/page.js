"use client";

import { useState, useEffect } from "react";
import Background, { FogOverlay } from "@/components/Background";
import { 
  FileText, 
  Shield, 
  Users, 
  Globe, 
  AlertCircle,
  CheckCircle,
  Scale,
  Lock,
  Mail,
  Calendar
} from "lucide-react";

export default function TermsPage() {
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
    { id: "acceptance", title: "Acceptance of Terms", icon: FileText },
    { id: "services", title: "Services Description", icon: Globe },
    { id: "use", title: "Use of Services", icon: Users },
    { id: "account", title: "Account Terms", icon: Lock },
    { id: "payment", title: "Payment Terms", icon: Scale },
    { id: "intellectual", title: "Intellectual Property", icon: Shield },
    { id: "limitation", title: "Limitation of Liability", icon: AlertCircle },
    { id: "termination", title: "Termination", icon: Calendar },
    { id: "contact", title: "Contact Information", icon: Mail }
  ];

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
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

        <div className="relative z-40 max-w-7xl mx-auto px-6 lg:px-8">
          {/* Hero Section */}
          <section className="pt-20 pb-16">
            <div className={`text-center max-w-4xl mx-auto transition-all duration-1000 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}>
              <div className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-gray-100 text-gray-700 mb-6">
                <Scale className="w-4 h-4 mr-2" />
                Legal Agreement
              </div>
              
              <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
                <span className="text-[#BDBBBB]">Terms &</span>{" "}
                <span className="text-[#191919]">Conditions</span>
              </h1>
              
              <p className="text-xl text-gray-600 mb-8 leading-relaxed max-w-3xl mx-auto">
                Please read these terms and conditions carefully before using our services. 
                By accessing or using DevLabyrinth's services, you agree to be bound by these terms.
              </p>
              
              <div className="flex items-center justify-center text-gray-500 text-sm">
                <Calendar className="w-4 h-4 mr-2" />
                Last updated: January 2025
              </div>
            </div>
          </section>

          <div className="flex gap-12 pb-20">
            {/* Table of Contents - Sticky Sidebar */}
            <aside className="hidden lg:block w-64 flex-shrink-0">
              <div className="sticky top-24">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Table of Contents</h3>
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
                {/* Acceptance of Terms */}
                <section id="acceptance" className="mb-12 scroll-mt-24">
                  <div className="flex items-center mb-4">
                    <div className="w-10 h-10 bg-gray-900 rounded-lg flex items-center justify-center mr-4">
                      <FileText className="w-5 h-5 text-white" />
                    </div>
                    <h2 className="text-2xl font-semibold text-gray-900 m-0">1. Acceptance of Terms</h2>
                  </div>
                  <div className="space-y-4 text-gray-600">
                    <p>
                      By accessing and using DevLabyrinth's services, you acknowledge that you have read, 
                      understood, and agree to be bound by these Terms and Conditions and all applicable laws 
                      and regulations. If you do not agree with any of these terms, you are prohibited from 
                      using or accessing our services.
                    </p>
                    <p>
                      These terms apply to all visitors, users, and others who access or use our services, 
                      including but not limited to our website, applications, and any software or services we provide.
                    </p>
                  </div>
                </section>

                {/* Services Description */}
                <section id="services" className="mb-12 scroll-mt-24">
                  <div className="flex items-center mb-4">
                    <div className="w-10 h-10 bg-gray-900 rounded-lg flex items-center justify-center mr-4">
                      <Globe className="w-5 h-5 text-white" />
                    </div>
                    <h2 className="text-2xl font-semibold text-gray-900 m-0">2. Services Description</h2>
                  </div>
                  <div className="space-y-4 text-gray-600">
                    <p>
                      DevLabyrinth provides software development, consulting, and IT services including but not limited to:
                    </p>
                    <ul className="list-disc pl-6 space-y-2">
                      <li>Custom software development and design</li>
                      <li>Mobile and web application development</li>
                      <li>Cloud infrastructure and migration services</li>
                      <li>AI/ML integration and development</li>
                      <li>Technical consulting and support</li>
                      <li>System architecture and design</li>
                    </ul>
                    <p>
                      We reserve the right to modify, suspend, or discontinue any aspect of our services 
                      at any time without prior notice. We shall not be liable to you or any third party 
                      for any modification, suspension, or discontinuance of services.
                    </p>
                  </div>
                </section>

                {/* Use of Services */}
                <section id="use" className="mb-12 scroll-mt-24">
                  <div className="flex items-center mb-4">
                    <div className="w-10 h-10 bg-gray-900 rounded-lg flex items-center justify-center mr-4">
                      <Users className="w-5 h-5 text-white" />
                    </div>
                    <h2 className="text-2xl font-semibold text-gray-900 m-0">3. Use of Services</h2>
                  </div>
                  <div className="space-y-4 text-gray-600">
                    <p>You agree to use our services only for lawful purposes and in accordance with these Terms. You agree not to:</p>
                    <ul className="list-disc pl-6 space-y-2">
                      <li>Use our services in any way that violates any applicable federal, state, local, or international law</li>
                      <li>Transmit any material that is defamatory, offensive, or otherwise objectionable</li>
                      <li>Impersonate or attempt to impersonate DevLabyrinth, a DevLabyrinth employee, another user, or any other person or entity</li>
                      <li>Engage in any conduct that restricts or inhibits anyone's use or enjoyment of our services</li>
                      <li>Introduce any viruses, malware, or other destructive code</li>
                      <li>Attempt to gain unauthorized access to any portion of our services or systems</li>
                    </ul>
                  </div>
                </section>

                {/* Account Terms */}
                <section id="account" className="mb-12 scroll-mt-24">
                  <div className="flex items-center mb-4">
                    <div className="w-10 h-10 bg-gray-900 rounded-lg flex items-center justify-center mr-4">
                      <Lock className="w-5 h-5 text-white" />
                    </div>
                    <h2 className="text-2xl font-semibold text-gray-900 m-0">4. Account Terms</h2>
                  </div>
                  <div className="space-y-4 text-gray-600">
                    <p>
                      When you create an account with us, you must provide information that is accurate, 
                      complete, and current at all times. You are responsible for safeguarding the password 
                      and for all activities that occur under your account.
                    </p>
                    <p>You agree to:</p>
                    <ul className="list-disc pl-6 space-y-2">
                      <li>Notify us immediately of any unauthorized access or security breach</li>
                      <li>Ensure that your account information is accurate and up-to-date</li>
                      <li>Accept responsibility for all activities that occur under your account</li>
                      <li>Not share your account credentials with any third party</li>
                    </ul>
                    <p>
                      We reserve the right to refuse service, terminate accounts, or remove content 
                      at our sole discretion.
                    </p>
                  </div>
                </section>

                {/* Payment Terms */}
                <section id="payment" className="mb-12 scroll-mt-24">
                  <div className="flex items-center mb-4">
                    <div className="w-10 h-10 bg-gray-900 rounded-lg flex items-center justify-center mr-4">
                      <Scale className="w-5 h-5 text-white" />
                    </div>
                    <h2 className="text-2xl font-semibold text-gray-900 m-0">5. Payment Terms</h2>
                  </div>
                  <div className="space-y-4 text-gray-600">
                    <p>Payment terms for our services are as follows:</p>
                    <ul className="list-disc pl-6 space-y-2">
                      <li>All fees are quoted and payable in USD unless otherwise specified</li>
                      <li>Payment schedules will be outlined in individual service agreements</li>
                      <li>Late payments may incur additional charges as specified in service agreements</li>
                      <li>All payments are non-refundable unless otherwise stated in writing</li>
                      <li>Taxes are not included in our fees and are the responsibility of the client</li>
                    </ul>
                    <p>
                      Failure to make timely payments may result in suspension or termination of services. 
                      We reserve the right to modify our pricing at any time, with notice to existing clients.
                    </p>
                  </div>
                </section>

                {/* Intellectual Property */}
                <section id="intellectual" className="mb-12 scroll-mt-24">
                  <div className="flex items-center mb-4">
                    <div className="w-10 h-10 bg-gray-900 rounded-lg flex items-center justify-center mr-4">
                      <Shield className="w-5 h-5 text-white" />
                    </div>
                    <h2 className="text-2xl font-semibold text-gray-900 m-0">6. Intellectual Property</h2>
                  </div>
                  <div className="space-y-4 text-gray-600">
                    <p>
                      Unless otherwise agreed in writing, all intellectual property rights in work product 
                      created by DevLabyrinth shall be owned by the client upon full payment of all fees.
                    </p>
                    <p>However, DevLabyrinth retains the right to:</p>
                    <ul className="list-disc pl-6 space-y-2">
                      <li>Use general knowledge, skills, and experience gained during the project</li>
                      <li>Retain ownership of any pre-existing intellectual property</li>
                      <li>Use anonymized project information for marketing purposes with client consent</li>
                      <li>Retain copies of work product for archival purposes</li>
                    </ul>
                    <p>
                      You retain all rights to your pre-existing intellectual property and grant DevLabyrinth 
                      a license to use it solely for the purpose of providing services to you.
                    </p>
                  </div>
                </section>

                {/* Limitation of Liability */}
                <section id="limitation" className="mb-12 scroll-mt-24">
                  <div className="flex items-center mb-4">
                    <div className="w-10 h-10 bg-gray-900 rounded-lg flex items-center justify-center mr-4">
                      <AlertCircle className="w-5 h-5 text-white" />
                    </div>
                    <h2 className="text-2xl font-semibold text-gray-900 m-0">7. Limitation of Liability</h2>
                  </div>
                  <div className="space-y-4 text-gray-600">
                    <p>
                      TO THE MAXIMUM EXTENT PERMITTED BY LAW, DEVLABYRINTH SHALL NOT BE LIABLE FOR ANY 
                      INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, INCLUDING WITHOUT 
                      LIMITATION, LOSS OF PROFITS, DATA, USE, GOODWILL, OR OTHER INTANGIBLE LOSSES.
                    </p>
                    <p>
                      In no event shall DevLabyrinth's total liability exceed the amount paid by you 
                      for the services giving rise to the claim during the twelve (12) months preceding the claim.
                    </p>
                    <p>
                      These limitations apply regardless of the legal theory on which the claim is based, 
                      whether arising from contract, tort, negligence, strict liability, or otherwise.
                    </p>
                  </div>
                </section>

                {/* Termination */}
                <section id="termination" className="mb-12 scroll-mt-24">
                  <div className="flex items-center mb-4">
                    <div className="w-10 h-10 bg-gray-900 rounded-lg flex items-center justify-center mr-4">
                      <Calendar className="w-5 h-5 text-white" />
                    </div>
                    <h2 className="text-2xl font-semibold text-gray-900 m-0">8. Termination</h2>
                  </div>
                  <div className="space-y-4 text-gray-600">
                    <p>
                      These Terms shall remain in effect until terminated by either party. You may terminate 
                      these Terms at any time by discontinuing use of our services and destroying all materials 
                      obtained from DevLabyrinth.
                    </p>
                    <p>We may terminate or suspend your access immediately, without prior notice, for any reason, including:</p>
                    <ul className="list-disc pl-6 space-y-2">
                      <li>Breach of these Terms and Conditions</li>
                      <li>Non-payment of fees</li>
                      <li>Conduct that we believe is harmful to our business or other users</li>
                      <li>Request by law enforcement or government agencies</li>
                    </ul>
                    <p>
                      Upon termination, your right to use our services will cease immediately. 
                      Provisions that by their nature should survive termination shall survive.
                    </p>
                  </div>
                </section>

                {/* Contact Information */}
                <section id="contact" className="mb-12 scroll-mt-24">
                  <div className="flex items-center mb-4">
                    <div className="w-10 h-10 bg-gray-900 rounded-lg flex items-center justify-center mr-4">
                      <Mail className="w-5 h-5 text-white" />
                    </div>
                    <h2 className="text-2xl font-semibold text-gray-900 m-0">9. Contact Information</h2>
                  </div>
                  <div className="space-y-4 text-gray-600">
                    <p>
                      If you have any questions about these Terms and Conditions, please contact us at:
                    </p>
                    <div className="bg-gray-50 rounded-lg p-6">
                      <h3 className="font-semibold text-gray-900 mb-2">DevLabyrinth Legal Department</h3>
                      <p className="mb-1">Email: legal@devlabyrinth.com</p>
                      <p className="mb-1">Phone: +1 (555) 123-4567</p>
                      <p>Address: 123 Tech Street, Silicon Valley, CA 94000</p>
                    </div>
                    <p>
                      For general inquiries or support, please visit our <a href="/contact" className="text-gray-900 underline">Contact page</a>.
                    </p>
                  </div>
                </section>
              </div>

              {/* Agreement Box */}
              <div className="mt-16 bg-gray-900 text-white rounded-2xl p-8">
                <div className="flex items-start">
                  <CheckCircle className="w-6 h-6 mt-1 mr-4 flex-shrink-0 text-green-400" />
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Agreement</h3>
                    <p className="text-gray-300">
                      By using DevLabyrinth's services, you acknowledge that you have read and understood 
                      these Terms and Conditions and agree to be bound by them. If you do not agree to 
                      these terms, please do not use our services.
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
