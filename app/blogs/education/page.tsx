"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { ArrowLeft, Calendar, User, Clock, Share2 } from "lucide-react"
import Link from "next/link"

export default function BlogDetailPage() {
    // Animation Variants
    const fadeDown = {
        hidden: { opacity: 0, y: -40 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.8, ease: "easeOut" },
        },
    }

    const fadeUp = {
        hidden: { opacity: 0, y: 40 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.8, ease: "easeOut" },
        },
    }

    const fadeLeft = {
        hidden: { opacity: 0, x: -50 },
        visible: {
            opacity: 1,
            x: 0,
            transition: { duration: 0.8, ease: "easeOut" },
        },
    }

    const fadeRight = {
        hidden: { opacity: 0, x: 50 },
        visible: {
            opacity: 1,
            x: 0,
            transition: { duration: 0.8, ease: "easeOut" },
        },
    }

    const staggerContainer = {
        hidden: {},
        visible: {
            transition: {
                staggerChildren: 0.15,
            },
        },
    }

    const blogPost = {


        id: 1,
        title: "The Future of Digital Marketing: AI-Powered Strategies in 2025",
        excerpt:
            "Discover how artificial intelligence is revolutionizing digital marketing and what strategies your business needs to stay competitive.",
        author: "Sarah Mitchell",
        date: "November 26, 2025",
        readTime: "8 min read",
        image: "/assets/industries/Education.jpg",
        category: "Digital Marketing",
        content: [
            {
                type: "paragraph",
                text: "Artificial intelligence has transformed from a futuristic concept to an everyday reality in digital marketing. As we advance into 2025, businesses that leverage AI-powered strategies are gaining unprecedented competitive advantages. From personalized customer experiences to predictive analytics, AI is reshaping how brands connect with their audiences.",
            },
            {
                type: "heading",
                text: "1. Personalization at Scale",
            },
            {
                type: "paragraph",
                text: "AI enables marketers to create highly personalized experiences for every customer at scale. Machine learning algorithms analyze user behavior, preferences, and purchase history to deliver tailored content, product recommendations, and offers in real-time. This level of personalization increases engagement rates by up to 40% and significantly improves customer retention.",
            },
            {
                type: "heading",
                text: "2. Predictive Analytics & Customer Insights",
            },
            {
                type: "paragraph",
                text: "Advanced analytics powered by AI help businesses predict customer behavior, identify trends before they go mainstream, and optimize marketing spend. Predictive models can forecast which customers are likely to churn, which products will be most popular, and what marketing channels will deliver the best ROI.",
            },
            {
                type: "heading",
                text: "3. Automated Content Creation",
            },
            {
                type: "paragraph",
                text: "AI-powered content creation tools are revolutionizing how brands produce marketing materials. From automated copywriting to video generation, these tools help marketers create more content in less time while maintaining quality and brand consistency. However, human creativity and strategic thinking remain irreplaceable.",
            },
            {
                type: "heading",
                text: "4. Chatbots & Conversational Marketing",
            },
            {
                type: "paragraph",
                text: "AI-powered chatbots provide instant customer support, qualify leads, and guide customers through the buying journey 24/7. These intelligent assistants understand context, learn from interactions, and continuously improve their responses, resulting in better customer satisfaction and reduced support costs.",
            },
            {
                type: "paragraph",
                text: "The integration of AI into digital marketing isn't just a trend—it's a fundamental shift in how successful businesses operate. Companies that embrace these technologies now will be well-positioned to lead their industries in the years to come.",
            },
        ],
        tags: ["AI Marketing", "Digital Strategy", "2025 Trends", "Personalization"],
    }

    return (
        <html>
            <body>
                <section className="min-h-screen py-12 md:py-20 px-4 relative overflow-hidden bg-gradient-to-b from-[#020617] to-[#0b0f1a]">
                    {/* Background Elements */}
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(120,119,198,0.1),transparent_50%)]" />
                    <div className="absolute top-20 right-20 w-32 h-32 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full opacity-20 blur-3xl" />
                    <div className="absolute bottom-40 left-10 w-24 h-24 bg-gradient-to-r from-pink-400 to-orange-500 rounded-full opacity-20 blur-2xl" />

                    <div className="max-w-4xl mx-auto relative z-10">
                        {/* Back Button */}
                        <motion.div initial="hidden" animate="visible" variants={fadeDown} className="mb-8">
                            <Link
                                href="/blog"
                                className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300 transition-colors duration-300 font-medium"
                            >
                                <ArrowLeft className="w-5 h-5" />
                                Back to Blog
                            </Link>
                        </motion.div>

                        {/* Hero Section */}
                        <motion.div initial="hidden" animate="visible" variants={staggerContainer} className="mb-12">
                            {/* Category Badge */}
                            <motion.div variants={fadeUp} className="mb-6">
                                <span className="inline-block px-4 py-2 rounded-full bg-gradient-to-r from-cyan-400/20 to-purple-400/20 border border-cyan-400/30 text-cyan-400 text-sm font-semibold">
                                    {blogPost.category}
                                </span>
                            </motion.div>

                            {/* Title */}
                            <motion.h1 variants={fadeUp} className="text-4xl md:text-6xl font-extrabold text-white mb-6 leading-tight">
                                {blogPost.title}
                            </motion.h1>

                            {/* Metadata */}
                            <motion.div variants={fadeUp} className="flex flex-wrap gap-6 text-gray-400 mb-8">
                                <div className="flex items-center gap-2">
                                    <User className="w-5 h-5 text-cyan-400" />
                                    <span>{blogPost.author}</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <Calendar className="w-5 h-5 text-purple-400" />
                                    <span>{blogPost.date}</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <Clock className="w-5 h-5 text-pink-400" />
                                    <span>{blogPost.readTime}</span>
                                </div>
                            </motion.div>

                            {/* Excerpt */}
                            <motion.p variants={fadeUp} className="text-xl text-gray-300 leading-relaxed mb-8">
                                {blogPost.excerpt}
                            </motion.p>
                        </motion.div>

                        {/* Featured Image */}
                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={fadeUp}
                            className="mb-12 rounded-2xl overflow-hidden border border-white/10 bg-white/5 backdrop-blur-md"
                        >
                            <div className="relative h-96 md:h-[500px] overflow-hidden group">
                                <Image
                                    src={blogPost.image || "/placeholder.svg"}
                                    alt={blogPost.title}
                                    fill
                                    className="object-cover transform group-hover:scale-105 transition-transform duration-700"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                            </div>
                        </motion.div>

                        {/* Content */}
                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={staggerContainer}
                            className="prose prose-invert max-w-none mb-12"
                        >
                            {blogPost.content.map((section, index) => (
                                <motion.div key={index} variants={fadeUp}>
                                    {section.type === "paragraph" && (
                                        <p className="text-lg text-gray-300 leading-relaxed mb-6 text-balance">{section.text}</p>
                                    )}
                                    {section.type === "heading" && (
                                        <h2 className="text-3xl font-bold text-white mb-4 mt-8 leading-tight">{section.text}</h2>
                                    )}
                                </motion.div>
                            ))}
                        </motion.div>

                        {/* Tags Section */}
                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={staggerContainer}
                            className="mb-12 p-6 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md"
                        >
                            <motion.h3 variants={fadeUp} className="text-xl font-bold text-white mb-4">
                                Tags
                            </motion.h3>
                            <motion.div variants={staggerContainer} className="flex flex-wrap gap-3">
                                {blogPost.tags.map((tag, index) => (
                                    <motion.button
                                        key={index}
                                        variants={fadeUp}
                                        className="px-4 py-2 rounded-lg bg-gradient-to-r from-cyan-400/10 to-purple-400/10 border border-cyan-400/30 text-cyan-400 hover:from-cyan-400/20 hover:to-purple-400/20 transition-all duration-300 font-medium text-sm"
                                    >
                                        #{tag}
                                    </motion.button>
                                ))}
                            </motion.div>
                        </motion.div>

                        {/* Share & CTA Section */}
                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={fadeUp}
                            className="p-8 rounded-2xl border border-white/10 bg-gradient-to-r from-cyan-400/10 to-purple-400/10 backdrop-blur-md text-center"
                        >
                            <h3 className="text-2xl font-bold text-white mb-3">Share This Article</h3>
                            <p className="text-gray-400 mb-6">Found this helpful? Share it with your network!</p>
                            <div className="flex justify-center gap-4">
                                <button className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-gradient-to-r from-cyan-400 to-purple-500 text-white font-semibold hover:shadow-lg hover:shadow-cyan-500/50 transition-all duration-300">
                                    <Share2 className="w-5 h-5" />
                                    Share Now
                                </button>
                            </div>
                        </motion.div>
                    </div>
                </section>
            </body>
        </html>
    )
}
