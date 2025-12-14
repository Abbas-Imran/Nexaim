"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { Search } from "lucide-react";
import BlogCard, { BlogCardProps } from "./BlogCard";

interface BlogListingProps {
  blogs: BlogCardProps[];
  categories?: string[];
  showSearch?: boolean;
  showCategories?: boolean;
}

const BlogListing = ({
  blogs,
  categories = ["All", "Digital Marketing", "SEO", "Branding", "Social Media", "Web Development", "Content Marketing"],
  showSearch = true,
  showCategories = true,
}: BlogListingProps) => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredBlogs = blogs.filter((blog) => {
    const matchesCategory = selectedCategory === "All" || blog.category === selectedCategory;
    const matchesSearch =
      searchQuery === "" ||
      blog.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      blog.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
      (blog.tags && blog.tags.some((tag) => tag.toLowerCase().includes(searchQuery.toLowerCase())));
    return matchesCategory && matchesSearch;
  });

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
    <div className="w-full">
      {/* Search and Filter */}
      {(showSearch || showCategories) && (
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          className="mb-12 space-y-6"
        >
          {/* Search Bar */}


          {/* Category Filter */}
          {showCategories && (
            <div className="flex flex-wrap justify-center gap-3">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-6 py-2 rounded-full font-semibold text-sm transition-all duration-300 ${selectedCategory === category
                      ? "bg-gradient-to-r from-cyan-400 to-purple-500 text-white shadow-lg shadow-cyan-500/50"
                      : "bg-white/5 border border-white/10 text-gray-300 hover:border-cyan-400/30 hover:text-white"
                    }`}
                >
                  {category}
                </button>
              ))}
            </div>
          )}
        </motion.div>
      )}

      {/* Blog Grid */}
      {filteredBlogs.length > 0 ? (
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {filteredBlogs.map((blog) => (
            <BlogCard key={blog.id} blog={{ ...blog, showTags: true }} variants={fadeUp} />
          ))}
        </motion.div>
      ) : (
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          className="text-center py-20"
        >
          <p className="text-xl text-gray-400">No blogs found matching your criteria.</p>
        </motion.div>
      )}
    </div>
  );
};

export default BlogListing;

