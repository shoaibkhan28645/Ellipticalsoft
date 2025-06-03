"use client";

import Background, { FogOverlay } from "@/components/Background";
import { motion } from "framer-motion";
import {
  Calendar,
  Clock,
  User,
  ArrowRight,
  Search,
  Filter,
  Tag,
  TrendingUp,
  Code,
  Cloud,
  Brain,
  Shield,
  Database,
  Smartphone,
} from "lucide-react";
import { useState, useEffect } from "react";
import Link from "next/link";

// Blog data - in a real app, this would come from a CMS or API
const blogPosts = [
  {
    id: 1,
    slug: "future-of-web-development-2025",
    title: "The Future of Web Development: Trends and Technologies Shaping 2025",
    excerpt: "Explore the cutting-edge technologies and development trends that will define web development in 2025, from AI integration to advanced frameworks.",
    content: "", // Will be loaded from individual blog files
    author: {
      name: "Sarah Johnson",
      avatar: "/api/placeholder/40/40",
      role: "Senior Full-Stack Developer"
    },
    publishedAt: "2024-12-15",
    readTime: "8 min read",
    category: "Web Development",
    tags: ["React", "Next.js", "AI", "Web Development", "Future Tech"],
    image: "/api/placeholder/600/400",
    featured: true,
    views: 2847,
    likes: 156
  },
  {
    id: 2,
    slug: "cloud-migration-complete-guide-2025",
    title: "Cloud Migration in 2025: A Complete Guide for Modern Businesses",
    excerpt: "Learn the essential strategies, tools, and best practices for successful cloud migration in 2025. Reduce costs, improve scalability, and enhance security.",
    content: "",
    author: {
      name: "Michael Chen",
      avatar: "/api/placeholder/40/40",
      role: "Cloud Solutions Architect"
    },
    publishedAt: "2024-12-10",
    readTime: "12 min read",
    category: "Cloud Computing",
    tags: ["AWS", "Azure", "Cloud Migration", "DevOps", "Infrastructure"],
    image: "/api/placeholder/600/400",
    featured: true,
    views: 3421,
    likes: 203
  },
  {
    id: 3,
    slug: "ai-automation-transforming-business-operations",
    title: "How AI and Automation Are Transforming Modern Business Operations",
    excerpt: "Discover how artificial intelligence and automation technologies are revolutionizing business processes, increasing efficiency, and driving innovation.",
    content: "",
    author: {
      name: "Dr. Emily Rodriguez",
      avatar: "/api/placeholder/40/40",
      role: "AI/ML Engineer"
    },
    publishedAt: "2024-12-05",
    readTime: "10 min read",
    category: "Artificial Intelligence",
    tags: ["AI", "Machine Learning", "Automation", "Business", "Innovation"],
    image: "/api/placeholder/600/400",
    featured: true,
    views: 4156,
    likes: 287
  },
  {
    id: 4,
    slug: "cybersecurity-best-practices-2025",
    title: "Cybersecurity Best Practices for Small and Medium Businesses",
    excerpt: "Essential cybersecurity strategies to protect your business from evolving threats in 2025.",
    content: "",
    author: {
      name: "James Wilson",
      avatar: "/api/placeholder/40/40",
      role: "Cybersecurity Specialist"
    },
    publishedAt: "2024-11-28",
    readTime: "7 min read",
    category: "Cybersecurity",
    tags: ["Security", "Cybersecurity", "SMB", "Protection"],
    image: "/api/placeholder/600/400",
    featured: false,
    views: 1892,
    likes: 134
  },
  {
    id: 5,
    slug: "mobile-app-development-trends-2025",
    title: "Mobile App Development Trends That Will Dominate 2025",
    excerpt: "Stay ahead of the curve with the latest mobile app development trends and technologies.",
    content: "",
    author: {
      name: "Lisa Kim",
      avatar: "/api/placeholder/40/40",
      role: "Mobile App Developer"
    },
    publishedAt: "2024-11-20",
    readTime: "9 min read",
    category: "Mobile Development",
    tags: ["Mobile", "React Native", "Flutter", "iOS", "Android"],
    image: "/api/placeholder/600/400",
    featured: false,
    views: 2156,
    likes: 178
  },
  {
    id: 6,
    slug: "data-analytics-driving-business-decisions",
    title: "How Data Analytics is Driving Smarter Business Decisions",
    excerpt: "Transform your business with data-driven insights and advanced analytics strategies.",
    content: "",
    author: {
      name: "Robert Davis",
      avatar: "/api/placeholder/40/40",
      role: "Data Scientist"
    },
    publishedAt: "2024-11-15",
    readTime: "11 min read",
    category: "Data Science",
    tags: ["Data Analytics", "Business Intelligence", "Big Data", "Analytics"],
    image: "/api/placeholder/600/400",
    featured: false,
    views: 1743,
    likes: 142
  }
];

const categories = [
  { name: "All", count: blogPosts.length, icon: TrendingUp },
  { name: "Web Development", count: 2, icon: Code },
  { name: "Cloud Computing", count: 1, icon: Cloud },
  { name: "Artificial Intelligence", count: 1, icon: Brain },
  { name: "Cybersecurity", count: 1, icon: Shield },
  { name: "Mobile Development", count: 1, icon: Smartphone },
  { name: "Data Science", count: 1, icon: Database }
];

export default function BlogPage() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredPosts, setFilteredPosts] = useState(blogPosts);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  useEffect(() => {
    let filtered = blogPosts;

    // Filter by category
    if (selectedCategory !== "All") {
      filtered = filtered.filter(post => post.category === selectedCategory);
    }

    // Filter by search term
    if (searchTerm) {
      filtered = filtered.filter(post =>
        post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
        post.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()))
      );
    }

    setFilteredPosts(filtered);
  }, [selectedCategory, searchTerm]);

  const featuredPosts = blogPosts.filter(post => post.featured).slice(0, 3);
  const recentPosts = blogPosts.slice(0, 6);

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
        <section className="pt-20 pb-16 px-4 relative z-40">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <motion.div
              className="text-center max-w-4xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h3 className="text-[#191919] font-outfit font-medium tracking-wider mb-4 text-xs uppercase">
                INSIGHTS & KNOWLEDGE
              </h3>
              <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
                <span className="text-[#BDBBBB]">Tech</span>{" "}
                <span className="text-[#191919]">Blog</span>
              </h1>
              <p className="text-xl text-[#6b6b6b] mb-12 leading-relaxed max-w-3xl mx-auto">
                Stay updated with the latest trends, insights, and best practices in software development, cloud computing, and emerging technologies.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Search and Filter */}
        <section className="py-8 px-4 relative z-40 border-b border-gray-200">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">
              {/* Search */}
              <div className="relative w-full lg:w-96">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-[#6b6b6b]" />
                <input
                  type="text"
                  placeholder="Search articles..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#191919] focus:border-transparent transition-colors"
                />
              </div>

              {/* Categories */}
              <div className="flex flex-wrap gap-2">
                {categories.map((category) => (
                  <button
                    key={category.name}
                    onClick={() => setSelectedCategory(category.name)}
                    className={`flex items-center px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                      selectedCategory === category.name
                        ? "bg-[#191919] text-white"
                        : "bg-gray-100 text-[#6b6b6b] hover:bg-gray-200"
                    }`}
                  >
                    <category.icon className="w-4 h-4 mr-2" />
                    {category.name} ({category.count})
                  </button>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Featured Posts */}
        <section className="py-20 px-4 relative z-40">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                <span className="text-[#BDBBBB]">Featured</span>{" "}
                <span className="text-[#191919]">Articles</span>
              </h2>
              <p className="text-lg text-[#6b6b6b] max-w-3xl mx-auto">
                Our most popular and insightful articles on technology trends and best practices
              </p>
            </motion.div>

            <motion.div
              className="grid grid-cols-1 lg:grid-cols-3 gap-8"
              variants={containerVariants}
              initial="hidden"
              animate={isVisible ? "visible" : "hidden"}
            >
              {featuredPosts.map((post, index) => (
                <motion.article
                  key={post.id}
                  variants={itemVariants}
                  className={`bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-xl transition-all duration-300 ${
                    index === 0 ? "lg:col-span-2 lg:row-span-2" : ""
                  }`}
                >
                  <div className={`aspect-video ${index === 0 ? "lg:aspect-[2/1]" : ""} bg-gray-100 overflow-hidden`}>
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-4 mb-4">
                      <span className="bg-[#191919] text-white px-3 py-1 rounded-full text-xs font-medium">
                        {post.category}
                      </span>
                      <div className="flex items-center text-sm text-[#6b6b6b]">
                        <Calendar className="w-4 h-4 mr-1" />
                        {new Date(post.publishedAt).toLocaleDateString('en-US', { 
                          year: 'numeric', 
                          month: 'long', 
                          day: 'numeric' 
                        })}
                      </div>
                      <div className="flex items-center text-sm text-[#6b6b6b]">
                        <Clock className="w-4 h-4 mr-1" />
                        {post.readTime}
                      </div>
                    </div>
                    
                    <h3 className={`font-bold text-[#191919] mb-3 line-clamp-2 hover:text-[#6b6b6b] transition-colors ${
                      index === 0 ? "text-2xl lg:text-3xl" : "text-xl"
                    }`}>
                      <Link href={`/blog/${post.slug}`}>
                        {post.title}
                      </Link>
                    </h3>
                    
                    <p className="text-[#6b6b6b] mb-4 line-clamp-2">
                      {post.excerpt}
                    </p>

                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <img
                          src={post.author.avatar}
                          alt={post.author.name}
                          className="w-8 h-8 rounded-full mr-3"
                        />
                        <div>
                          <p className="text-sm font-medium text-[#191919]">
                            {post.author.name}
                          </p>
                          <p className="text-xs text-[#6b6b6b]">
                            {post.author.role}
                          </p>
                        </div>
                      </div>
                      
                      <Link
                        href={`/blog/${post.slug}`}
                        className="inline-flex items-center text-[#191919] font-medium hover:gap-3 transition-all duration-300"
                      >
                        Read More
                        <ArrowRight className="ml-2 w-4 h-4" />
                      </Link>
                    </div>
                  </div>
                </motion.article>
              ))}
            </motion.div>
          </div>
        </section>

        {/* All Posts */}
        <section className="py-20 px-4 bg-gray-50 relative z-40">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                <span className="text-[#BDBBBB]">All</span>{" "}
                <span className="text-[#191919]">Articles</span>
              </h2>
              <p className="text-lg text-[#6b6b6b] max-w-3xl mx-auto">
                {filteredPosts.length} article{filteredPosts.length !== 1 ? 's' : ''} found
                {selectedCategory !== "All" && ` in ${selectedCategory}`}
                {searchTerm && ` matching "${searchTerm}"`}
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPosts.map((post, index) => (
                <motion.article
                  key={post.id}
                  className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-xl transition-all duration-300"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="aspect-video bg-gray-100 overflow-hidden">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-4 mb-4">
                      <span className="bg-[#191919] text-white px-3 py-1 rounded-full text-xs font-medium">
                        {post.category}
                      </span>
                      <div className="flex items-center text-sm text-[#6b6b6b]">
                        <Calendar className="w-4 h-4 mr-1" />
                        {new Date(post.publishedAt).toLocaleDateString('en-US', { 
                          month: 'short', 
                          day: 'numeric' 
                        })}
                      </div>
                    </div>
                    
                    <h3 className="text-xl font-bold text-[#191919] mb-3 line-clamp-2 hover:text-[#6b6b6b] transition-colors">
                      <Link href={`/blog/${post.slug}`}>
                        {post.title}
                      </Link>
                    </h3>
                    
                    <p className="text-[#6b6b6b] mb-4 line-clamp-2">
                      {post.excerpt}
                    </p>

                    <div className="flex items-center justify-between">
                      <div className="flex items-center text-sm text-[#6b6b6b]">
                        <Clock className="w-4 h-4 mr-1" />
                        {post.readTime}
                      </div>
                      
                      <Link
                        href={`/blog/${post.slug}`}
                        className="inline-flex items-center text-[#191919] font-medium hover:gap-3 transition-all duration-300"
                      >
                        Read More
                        <ArrowRight className="ml-2 w-4 h-4" />
                      </Link>
                    </div>
                  </div>
                </motion.article>
              ))}
            </div>

            {filteredPosts.length === 0 && (
              <motion.div
                className="text-center py-16"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6 }}
              >
                <div className="w-16 h-16 bg-gray-200 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Search className="w-8 h-8 text-[#6b6b6b]" />
                </div>
                <h3 className="text-2xl font-bold text-[#191919] mb-4">
                  No articles found
                </h3>
                <p className="text-[#6b6b6b] mb-8">
                  Try adjusting your search terms or browse different categories.
                </p>
                <button
                  onClick={() => {
                    setSearchTerm("");
                    setSelectedCategory("All");
                  }}
                  className="inline-flex items-center bg-[#191919] text-white rounded-full px-8 py-3 font-medium hover:bg-[#2a2a2a] transition-colors"
                >
                  View All Articles
                </button>
              </motion.div>
            )}
          </div>
        </section>

        {/* Newsletter Signup */}
        <section className="py-20 px-4 bg-[#191919] relative z-40">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <motion.div
              className="text-center"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Stay Updated
              </h2>
              <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                Get the latest insights and updates delivered directly to your inbox.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-6 py-3 rounded-full border border-gray-600 bg-gray-800 text-white placeholder-gray-400 focus:ring-2 focus:ring-white focus:border-transparent"
                />
                <button className="bg-white text-[#191919] rounded-full px-8 py-3 font-medium hover:bg-gray-100 transition-colors">
                  Subscribe
                </button>
              </div>
              
              <p className="text-sm text-gray-400 mt-4">
                No spam, unsubscribe at any time.
              </p>
            </motion.div>
          </div>
        </section>
      </div>
    </div>
  );
}
