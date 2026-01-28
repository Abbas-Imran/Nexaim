"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Section from "@/components/layout/section";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import BlogCard, { BlogCardProps } from "./BlogCard";

// Sample blog data - in production, this would come from a CMS or API
const featuredBlogs: BlogCardProps[] = [
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
  },
  {
    id: 3,
    title: "Things to Keep in Mind When Choosing a Website Development Service",
    excerpt:
      "In Pakistan's rapidly growing digital landscape, a website is no longer just an online presence—it is a business tool that influences credibility, customer trust, and long-term growth.",
    author: "Nexaim Team",
    date: "December 10, 2025",
    readTime: "15 min read",
    image: "/assets/industries/Technology.jpeg",
    category: "Web Development",
    slug: "choosing-website-development-service",
    tags: ["Web Development", "Website Design", "Pakistan", "Business Growth"],
  }

];

const Blog = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

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
        staggerChildren: 0.15,
      },
    },
  };

  return (
    <Section className="relative overflow-hidden">
      {/* Animated background */}
      <motion.div
        className="absolute inset-0 -z-10 bg-gradient-to-br from-[#090017] via-[#25004A] to-[#4B007C] opacity-90"
        animate={{
          backgroundPosition: ["0% 0%", "100% 100%", "0% 0%"],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "linear",
        }}
        style={{
          backgroundSize: "200% 200%",
        }}
      />

      {/* Background Elements */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(120,119,198,0.1),transparent_50%)]" />
      <div className="absolute top-20 right-20 w-32 h-32 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full opacity-20 blur-3xl" />
      <div className="absolute bottom-40 left-10 w-24 h-24 bg-gradient-to-r from-pink-400 to-orange-500 rounded-full opacity-20 blur-2xl" />

      <div className="container relative z-10 py-20">
        {/* Header */}
        <motion.div
          ref={ref}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={staggerContainer}
          className="text-center mb-16"
        >
          <motion.h2
            variants={fadeUp}
            className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight"
          >
            <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-500 bg-clip-text text-transparent">
              Latest Insights
            </span>
            <br />
            <span className="text-white">From Our Blog</span>
          </motion.h2>

          <motion.p
            variants={fadeUp}
            className="text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed mb-8"
          >
            Stay updated with the latest trends, strategies, and insights in digital marketing,
            web development, and business growth.
          </motion.p>

          <motion.div variants={fadeUp}>
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 px-8 py-3 rounded-lg bg-gradient-to-r from-cyan-400 to-purple-500 text-white font-semibold hover:shadow-lg hover:shadow-cyan-500/50 transition-all duration-300"
            >
              View All Blogs
              <ArrowRight className="w-5 h-5" />
            </Link>
          </motion.div>
        </motion.div>

        {/* Blog Cards Grid */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {featuredBlogs.map((blog) => (
            <BlogCard isHomePage={true} key={blog.id} blog={blog} variants={fadeUp} />

          ))}
        </motion.div>
      </div>
    </Section>
  );
};

export default Blog;

