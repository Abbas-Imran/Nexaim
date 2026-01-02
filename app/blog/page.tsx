"use client";

import { motion } from "framer-motion";
import Navbar from "@/components/layout/navbar";
import Footer from "@/components/layout/footer";
import ButtonGradient from "@/components/svg/button-gradient";
import { cn } from "@/lib/utils";
import BlogListing from "@/components/sections/blog/BlogListing";
import { BlogCardProps } from "@/components/sections/blog/BlogCard";

// Sample blog data - in production, this would come from a CMS or API
const allBlogs: BlogCardProps[] = [
  {
    id: 7,
    title: "Digital Marketing for Small Businesses in Pakistan: Why It's No Longer Optional",
    excerpt:
      "In today's fast-changing business environment, digital marketing is no longer a luxury reserved for big brands. For small businesses in Pakistan, it has become a necessity.",
    author: "Nexaim Team",
    date: "December 1, 2025",
    readTime: "10 min read",
    image: "/assets/industries/Startup.jpeg",
    category: "Digital Marketing",
    slug: "digital-marketing-small-businesses-pakistan",
    tags: ["Digital Marketing", "Small Business", "Pakistan", "SME"],
  },
  {
    id: 2,
    title: "SEO Best Practices for 2025: What's Changed and What Works",
    excerpt:
      "Stay ahead of the curve with the latest SEO strategies that actually work in 2025. Learn about algorithm updates and proven techniques.",
    author: "John Davis",
    date: "November 24, 2025",
    readTime: "6 min read",
    image: "/assets/industries/Technology.jpeg",
    category: "SEO",
    slug: "seo-best-practices-2025",
    tags: ["SEO", "Search Engine Optimization", "2025"],
  },
  {
    id: 3,
    title: "Building a Strong Brand Identity: Design Tips That Convert",
    excerpt:
      "Learn how to create a memorable brand identity that resonates with your audience and drives conversions.",
    author: "Emily Chen",
    date: "November 22, 2025",
    readTime: "7 min read",
    image: "/assets/industries/Fashion.jpg",
    category: "Branding",
    slug: "building-strong-brand-identity",
    tags: ["Branding", "Design", "Marketing"],
  },
  {
    id: 4,
    title: "Social Media Marketing: A Complete Guide for 2025",
    excerpt:
      "Master social media marketing with our comprehensive guide covering the latest platforms, strategies, and best practices.",
    author: "Michael Johnson",
    date: "November 20, 2025",
    readTime: "9 min read",
    image: "/assets/industries/Startup.jpeg",
    category: "Social Media",
    slug: "social-media-marketing-guide-2025",
    tags: ["Social Media", "Marketing", "Strategy"],
  },
  {
    id: 5,
    title: "Web Development Trends: What to Expect in 2025",
    excerpt:
      "Explore the cutting-edge web development trends that will shape the digital landscape in 2025 and beyond.",
    author: "David Wilson",
    date: "November 18, 2025",
    readTime: "10 min read",
    image: "/assets/industries/Technology.jpeg",
    category: "Web Development",
    slug: "web-development-trends-2025",
    tags: ["Web Development", "Technology", "Trends"],
  },
  {
    id: 6,
    title: "Content Marketing Strategies That Drive Results",
    excerpt:
      "Learn proven content marketing strategies that help businesses attract, engage, and convert their target audience.",
    author: "Lisa Anderson",
    date: "November 16, 2025",
    readTime: "7 min read",
    image: "/assets/industries/Food.jpg",
    category: "Content Marketing",
    slug: "content-marketing-strategies",
    tags: ["Content Marketing", "Strategy", "SEO"],
  },

];

const categories = ["All", "Digital Marketing", "SEO", "Branding", "Social Media", "Web Development", "Content Marketing"];

export default function BlogListingPage() {
  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  const staggerContainer = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  return (
    <html>
      <body>
        <main>
          <div className={cn("overflow-hidden bg-[#0E0C15] pt-[4.75rem] lg:pt-[5.25rem]")}>
            <Navbar />
            <section className="min-h-screen py-12 md:py-20 px-4 relative overflow-hidden bg-gradient-to-b from-[#020617] to-[#0b0f1a]">
              {/* Background Elements */}
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(120,119,198,0.1),transparent_50%)]" />
              <div className="absolute top-20 right-20 w-32 h-32 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full opacity-20 blur-3xl" />
              <div className="absolute bottom-40 left-10 w-24 h-24 bg-gradient-to-r from-pink-400 to-orange-500 rounded-full opacity-20 blur-2xl" />

              <div className="max-w-7xl mx-auto relative z-10">
                {/* Header */}
                <motion.div
                  initial="hidden"
                  animate="visible"
                  variants={staggerContainer}
                  className="text-center mb-12"
                >
                  <motion.h1
                    variants={fadeUp}
                    className="text-4xl md:text-6xl font-extrabold text-white mb-6 leading-tight"
                  >
                    <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                      Our Blog
                    </span>
                  </motion.h1>
                  <motion.p
                    variants={fadeUp}
                    className="text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed"
                  >
                    Insights, strategies, and tips to help your business grow in the digital world.
                  </motion.p>
                </motion.div>

                {/* Blog Listing Component */}
                <BlogListing blogs={allBlogs} categories={categories} />
              </div>
            </section>
            <Footer />
          </div>
          <ButtonGradient />
        </main>
      </body>
    </html>
  );
}

