// Blog metadata for SEO
export const blogMetadata = {
  "future-of-web-development-2025": {
    title: "The Future of Web Development: Trends and Technologies Shaping 2025 | DevLabyrinth",
    description: "Explore cutting-edge web development trends for 2025: AI integration, React Server Components, WebAssembly, PWAs 2.0, and edge computing. Expert insights from DevLabyrinth.",
    keywords: "web development 2025, React trends, Next.js, AI development tools, WebAssembly, PWA, edge computing, full-stack development",
    ogImage: "/api/placeholder/1200/630",
    publishedTime: "2024-12-15T10:00:00.000Z",
    modifiedTime: "2024-12-15T10:00:00.000Z",
    author: "Sarah Johnson",
    category: "Web Development",
    readTime: "8 min read"
  },
  "cloud-migration-complete-guide-2025": {
    title: "Cloud Migration Guide 2025: Complete Strategy for Modern Businesses | DevLabyrinth",
    description: "Master cloud migration in 2025 with our comprehensive guide. AWS, Azure, Google Cloud strategies, security best practices, cost optimization, and post-migration tips.",
    keywords: "cloud migration 2025, AWS migration, Azure cloud, Google Cloud, cloud strategy, digital transformation, infrastructure modernization, cloud security",
    ogImage: "/api/placeholder/1200/630",
    publishedTime: "2024-12-10T10:00:00.000Z",
    modifiedTime: "2024-12-10T10:00:00.000Z",
    author: "Michael Chen",
    category: "Cloud Computing",
    readTime: "12 min read"
  },
  "ai-automation-transforming-business-operations": {
    title: "AI & Automation Transforming Business Operations 2025 | DevLabyrinth",
    description: "Discover how AI and automation revolutionize business operations. Customer service, supply chain, HR, finance, manufacturing use cases and implementation strategies.",
    keywords: "AI automation, business transformation, machine learning, artificial intelligence, process automation, digital transformation, enterprise AI, business efficiency",
    ogImage: "/api/placeholder/1200/630",
    publishedTime: "2024-12-05T10:00:00.000Z",
    modifiedTime: "2024-12-05T10:00:00.000Z",
    author: "Dr. Emily Rodriguez",
    category: "Artificial Intelligence",
    readTime: "10 min read"
  }
};

// Page metadata
export const pageMetadata = {
  contact: {
    title: "Contact DevLabyrinth - Get Expert IT Solutions & Software Development",
    description: "Contact DevLabyrinth for custom software development, cloud solutions, AI integration, and digital transformation. Get free consultation from our expert team.",
    keywords: "contact DevLabyrinth, software development consultation, IT solutions, custom development, cloud migration, AI implementation, digital transformation"
  },
  blog: {
    title: "DevLabyrinth Tech Blog - Software Development & IT Insights",
    description: "Stay updated with latest trends in software development, cloud computing, AI, cybersecurity, and digital transformation. Expert insights and best practices.",
    keywords: "tech blog, software development, cloud computing, artificial intelligence, web development, mobile development, cybersecurity, IT insights"
  },
  services: {
    title: "DevLabyrinth Services - Custom Software Development & IT Solutions",
    description: "Comprehensive IT services including web development, mobile apps, cloud solutions, cybersecurity, data analytics, and AI automation. Transform your business with DevLabyrinth.",
    keywords: "software development services, web development, mobile development, cloud solutions, cybersecurity, AI automation, data analytics, digital transformation"
  }
};

// Schema.org structured data templates
export const generateBlogSchema = (slug, blogData) => {
  const blog = blogData[slug];
  if (!blog) return null;

  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": blog.title,
    "description": blog.excerpt,
    "author": {
      "@type": "Person",
      "name": blog.author.name,
      "jobTitle": blog.author.role
    },
    "publisher": {
      "@type": "Organization",
      "name": "DevLabyrinth",
      "logo": {
        "@type": "ImageObject",
        "url": "https://devlabyrinth.com/logo.png"
      }
    },
    "datePublished": blog.publishedAt,
    "dateModified": blog.publishedAt,
    "image": blog.image,
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": `https://devlabyrinth.com/blog/${slug}`
    },
    "keywords": blog.tags.join(", "),
    "articleSection": blog.category,
    "wordCount": "2500" // Approximate word count
  };
};

export const generateOrganizationSchema = () => {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "DevLabyrinth",
    "description": "Leading software development and IT solutions company specializing in web development, mobile apps, cloud solutions, and AI automation.",
    "url": "https://devlabyrinth.com",
    "logo": "https://devlabyrinth.com/logo.png",
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+1-555-123-4567",
      "contactType": "customer service",
      "email": "hello@devlabyrinth.com"
    },
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "123 Tech Street",
      "addressLocality": "Digital City",
      "addressRegion": "DC",
      "postalCode": "10001",
      "addressCountry": "US"
    },
    "sameAs": [
      "https://linkedin.com/company/devlabyrinth",
      "https://twitter.com/devlabyrinth",
      "https://github.com/devlabyrinth"
    ],
    "services": [
      "Web Development",
      "Mobile Development",
      "Cloud Solutions",
      "Cybersecurity",
      "Data Solutions",
      "AI & Automation"
    ]
  };
};
