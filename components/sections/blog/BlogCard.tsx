"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Calendar, Clock, ArrowRight } from "lucide-react";

export interface BlogCardProps {
  id: number;
  title: string;
  excerpt: string;
  author?: string;
  date: string;
  readTime: string;
  image: string;
  category: string;
  slug: string;
  tags?: string[];
  showTags?: boolean;
}

const BlogCard = ({ blog, variants, isHomePage = false }: { blog: BlogCardProps; variants?: any, isHomePage?: boolean }) => {
  return (
    <motion.div
      variants={variants}
      whileHover={{ y: -8, transition: { duration: 0.3 } }}
    >
      <Link href={!isHomePage ? `/blog/${blog.slug}` : "/blog"}>
        <div className="group relative h-full rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md overflow-hidden shadow-lg hover:shadow-2xl hover:shadow-cyan-500/20 transition-all duration-500">
          {/* Image */}
          <div className="relative h-48 w-full overflow-hidden">
            <Image
              src={blog.image}
              alt={blog.title}
              fill
              className="object-cover transform group-hover:scale-110 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
            {/* Category Badge */}
            <div className="absolute top-4 left-4">
              <span className="px-3 py-1 rounded-full bg-gradient-to-r from-cyan-400/20 to-purple-400/20 border border-cyan-400/30 text-cyan-400 text-xs font-semibold">
                {blog.category}
              </span>
            </div>
          </div>

          {/* Content */}
          <div className="p-6 flex flex-col h-full">
            <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors duration-300 line-clamp-2">
              {blog.title}
            </h3>
            <p className="text-gray-400 text-sm mb-4 line-clamp-3 leading-relaxed">
              {blog.excerpt}
            </p>

            {/* Metadata */}
            <div className="flex items-center gap-4 text-xs text-gray-500 mb-4">
              <div className="flex items-center gap-1">
                <Calendar className="w-4 h-4" />
                <span>{blog.date}</span>
              </div>
              <div className="flex items-center gap-1">
                <Clock className="w-4 h-4" />
                <span>{blog.readTime}</span>
              </div>
            </div>

            {/* Tags */}
            {blog.showTags && blog.tags && blog.tags.length > 0 && (
              <div className="flex flex-wrap gap-2 mb-4">
                {blog.tags.slice(0, 2).map((tag, index) => (
                  <span
                    key={index}
                    className="px-2 py-1 rounded bg-white/5 border border-white/10 text-xs text-gray-400"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            )}

            {/* Read More */}
            <div className="mt-auto flex items-center text-sm font-semibold text-cyan-400 group-hover:text-white transition-colors duration-300">
              Read More
              <ArrowRight className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform duration-300" />
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
};

export default BlogCard;

