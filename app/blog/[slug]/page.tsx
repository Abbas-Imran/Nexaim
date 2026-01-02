"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowLeft, Calendar, User, Clock, Share2 } from "lucide-react";
import Link from "next/link";
import { useParams } from "next/navigation";
import Navbar from "@/components/layout/navbar";
import Footer from "@/components/layout/footer";
import ButtonGradient from "@/components/svg/button-gradient";
import { cn } from "@/lib/utils";

// Blog data - in production, this would come from a CMS or API
const blogPosts: Record<
  string,
  {
    id: number;
    title: string;
    excerpt: string;
    author: string;
    date: string;
    readTime: string;
    image: string;
    category: string;
    content: Array<{ type: string; text: string }>;
    tags: string[];
  }
> = {
  "ai-powered-digital-marketing-2025": {
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
  },
  "seo-best-practices-2025": {
    id: 2,
    title: "SEO Best Practices for 2025: What's Changed and What Works",
    excerpt:
      "Stay ahead of the curve with the latest SEO strategies that actually work in 2025. Learn about algorithm updates and proven techniques.",
    author: "John Davis",
    date: "November 24, 2025",
    readTime: "6 min read",
    image: "/assets/industries/Technology.jpeg",
    category: "SEO",
    content: [
      {
        type: "paragraph",
        text: "Search engine optimization continues to evolve, and 2025 brings new challenges and opportunities for businesses looking to improve their online visibility. Understanding the latest SEO best practices is crucial for staying competitive in today's digital landscape.",
      },
      {
        type: "heading",
        text: "1. Core Web Vitals and User Experience",
      },
      {
        type: "paragraph",
        text: "Google's Core Web Vitals remain a critical ranking factor. Focus on improving Largest Contentful Paint (LCP), First Input Delay (FID), and Cumulative Layout Shift (CLS). A fast, responsive website not only ranks better but also provides a superior user experience.",
      },
      {
        type: "heading",
        text: "2. E-E-A-T: Experience, Expertise, Authoritativeness, Trustworthiness",
      },
      {
        type: "paragraph",
        text: "Google's E-E-A-T guidelines emphasize the importance of demonstrating expertise, experience, authoritativeness, and trustworthiness. Create high-quality, authoritative content written by experts in your field, and ensure your website clearly displays credentials and author information.",
      },
      {
        type: "heading",
        text: "3. Mobile-First Indexing",
      },
      {
        type: "paragraph",
        text: "With mobile-first indexing now the standard, ensure your website is fully optimized for mobile devices. Responsive design, fast loading times, and mobile-friendly navigation are essential for ranking well in search results.",
      },
      {
        type: "paragraph",
        text: "By implementing these SEO best practices, you can improve your search rankings, drive more organic traffic, and ultimately grow your business in 2025 and beyond.",
      },
    ],
    tags: ["SEO", "Search Engine Optimization", "2025"],
  },
  "building-strong-brand-identity": {
    id: 3,
    title: "Building a Strong Brand Identity: Design Tips That Convert",
    excerpt:
      "Learn how to create a memorable brand identity that resonates with your audience and drives conversions.",
    author: "Emily Chen",
    date: "November 22, 2025",
    readTime: "7 min read",
    image: "/assets/industries/Fashion.jpg",
    category: "Branding",
    content: [
      {
        type: "paragraph",
        text: "A strong brand identity is the foundation of successful marketing. It's what makes your business memorable, trustworthy, and recognizable. In today's competitive market, a well-designed brand identity can be the difference between success and obscurity.",
      },
      {
        type: "heading",
        text: "1. Define Your Brand Values",
      },
      {
        type: "paragraph",
        text: "Before diving into design, clearly define what your brand stands for. What are your core values? What makes you unique? Understanding these fundamentals will guide all your design decisions and ensure consistency across all touchpoints.",
      },
      {
        type: "heading",
        text: "2. Create a Memorable Logo",
      },
      {
        type: "paragraph",
        text: "Your logo is often the first thing people see. It should be simple, memorable, and scalable. A great logo works across all mediums—from business cards to billboards—and instantly communicates your brand's personality.",
      },
      {
        type: "heading",
        text: "3. Develop a Consistent Color Palette",
      },
      {
        type: "paragraph",
        text: "Colors evoke emotions and associations. Choose a color palette that aligns with your brand values and use it consistently across all marketing materials. This creates visual cohesion and strengthens brand recognition.",
      },
      {
        type: "paragraph",
        text: "Building a strong brand identity takes time and strategic thinking, but the investment pays off in increased recognition, customer loyalty, and ultimately, conversions.",
      },
    ],
    tags: ["Branding", "Design", "Marketing"],
  },
  "social-media-marketing-guide-2025": {
    id: 4,
    title: "Social Media Marketing: A Complete Guide for 2025",
    excerpt:
      "Master social media marketing with our comprehensive guide covering the latest platforms, strategies, and best practices.",
    author: "Michael Johnson",
    date: "November 20, 2025",
    readTime: "9 min read",
    image: "/assets/industries/Startup.jpeg",
    category: "Social Media",
    content: [
      {
        type: "paragraph",
        text: "Social media marketing has become an essential component of any successful digital marketing strategy. With billions of users across various platforms, social media offers unparalleled opportunities to connect with your audience, build brand awareness, and drive sales.",
      },
      {
        type: "heading",
        text: "1. Choose the Right Platforms",
      },
      {
        type: "paragraph",
        text: "Not every social media platform is right for every business. Research where your target audience spends their time and focus your efforts on those platforms. Quality over quantity—it's better to excel on two platforms than to be mediocre on five.",
      },
      {
        type: "heading",
        text: "2. Create Engaging Content",
      },
      {
        type: "paragraph",
        text: "Content is king in social media marketing. Create content that educates, entertains, or inspires your audience. Use a mix of formats—images, videos, stories, and reels—to keep your feed fresh and engaging.",
      },
      {
        type: "heading",
        text: "3. Engage with Your Audience",
      },
      {
        type: "paragraph",
        text: "Social media is a two-way conversation. Respond to comments, messages, and mentions promptly. Show your audience that you value their input and are listening to their feedback.",
      },
      {
        type: "paragraph",
        text: "By following these strategies, you can build a strong social media presence that drives real business results.",
      },
    ],
    tags: ["Social Media", "Marketing", "Strategy"],
  },
  "web-development-trends-2025": {
    id: 5,
    title: "Web Development Trends: What to Expect in 2025",
    excerpt:
      "Explore the cutting-edge web development trends that will shape the digital landscape in 2025 and beyond.",
    author: "David Wilson",
    date: "November 18, 2025",
    readTime: "10 min read",
    image: "/assets/industries/Technology.jpeg",
    category: "Web Development",
    content: [
      {
        type: "paragraph",
        text: "The web development landscape is constantly evolving, with new technologies and trends emerging each year. Staying ahead of these trends is crucial for developers and businesses looking to create cutting-edge web experiences.",
      },
      {
        type: "heading",
        text: "1. AI and Machine Learning Integration",
      },
      {
        type: "paragraph",
        text: "AI is becoming increasingly integrated into web development, from chatbots and personalization engines to automated testing and code generation. Expect to see more AI-powered features in web applications.",
      },
      {
        type: "heading",
        text: "2. Progressive Web Apps (PWAs)",
      },
      {
        type: "paragraph",
        text: "PWAs continue to gain traction, offering app-like experiences through web browsers. They provide offline functionality, push notifications, and fast loading times, making them an excellent alternative to native apps.",
      },
      {
        type: "heading",
        text: "3. Serverless Architecture",
      },
      {
        type: "paragraph",
        text: "Serverless computing is revolutionizing how web applications are built and deployed. It offers scalability, cost-effectiveness, and reduced operational overhead, making it an attractive option for many projects.",
      },
      {
        type: "paragraph",
        text: "These trends represent the future of web development, and early adopters will have a significant competitive advantage.",
      },
    ],
    tags: ["Web Development", "Technology", "Trends"],
  },
  "content-marketing-strategies": {
    id: 6,
    title: "Content Marketing Strategies That Drive Results",
    excerpt:
      "Learn proven content marketing strategies that help businesses attract, engage, and convert their target audience.",
    author: "Lisa Anderson",
    date: "November 16, 2025",
    readTime: "7 min read",
    image: "/assets/industries/Food.jpg",
    category: "Content Marketing",
    content: [
      {
        type: "paragraph",
        text: "Content marketing remains one of the most effective ways to attract and engage your target audience. When done right, it builds trust, establishes authority, and drives conversions. Here are proven strategies that deliver real results.",
      },
      {
        type: "heading",
        text: "1. Know Your Audience",
      },
      {
        type: "paragraph",
        text: "Understanding your audience is the foundation of successful content marketing. Create detailed buyer personas, research their pain points, and develop content that addresses their specific needs and interests.",
      },
      {
        type: "heading",
        text: "2. Create Valuable, Actionable Content",
      },
      {
        type: "paragraph",
        text: "Your content should provide real value to your audience. Whether it's educational, entertaining, or inspirational, make sure it's actionable and helps your readers solve problems or achieve their goals.",
      },
      {
        type: "heading",
        text: "3. Optimize for Search Engines",
      },
      {
        type: "paragraph",
        text: "SEO and content marketing go hand in hand. Research relevant keywords, optimize your content for search engines, and create content that answers your audience's questions. This helps your content rank higher and reach more people.",
      },
      {
        type: "paragraph",
        text: "By implementing these content marketing strategies, you can build a loyal audience, establish your brand as an authority, and drive sustainable business growth.",
      },
    ],
    tags: ["Content Marketing", "Strategy", "SEO"],
  },
  "digital-marketing-small-businesses-pakistan": {
    id: 7,
    title: "Digital Marketing for Small Businesses in Pakistan: Why It's No Longer Optional",
    excerpt:
      "In today's fast-changing business environment, digital marketing is no longer a luxury reserved for big brands. For small businesses in Pakistan, it has become a necessity.",
    author: "Nexaim Team",
    date: "December 1, 2025",
    readTime: "10 min read",
    image: "/assets/industries/Startup.jpeg",
    category: "Digital Marketing",
    content: [
      {
        type: "paragraph",
        text: "In today's fast-changing business environment, digital marketing is no longer a luxury reserved for big brands. For small businesses in Pakistan, it has become a necessity. Whether you run a local clothing boutique in Lahore, a home-based food business in Karachi, or a service startup in Islamabad, your customers are already online. The real question is: are you visible to them?",
      },
      {
        type: "paragraph",
        text: "Pakistan has seen massive growth in internet usage over the last decade. With millions of people active on Facebook, Instagram, TikTok, Google, and WhatsApp, consumer behavior has shifted dramatically. People now search online before making buying decisions, even for local services. This is exactly why digital marketing for small businesses is so powerful—and cost-effective—when done right.",
      },
      {
        type: "heading",
        text: "Understanding the Pakistani Small Business Landscape",
      },
      {
        type: "paragraph",
        text: "Small and medium-sized enterprises (SMEs) form the backbone of Pakistan's economy. However, many business owners still rely on traditional marketing methods such as word-of-mouth, flyers, or newspaper ads. While these methods have their place, they lack the reach, targeting, and measurability that digital platforms offer.",
      },
      {
        type: "paragraph",
        text: "Digital marketing allows small businesses to compete with larger companies without spending millions of rupees. With the right affordable digital service, even a limited budget can bring real results. Social media pages, local SEO, WhatsApp marketing, and basic paid ads can significantly increase visibility and sales.",
      },
      {
        type: "heading",
        text: "Why Digital Marketing Is Effective for Small Businesses",
      },
      {
        type: "paragraph",
        text: "The biggest strength of digital marketing lies in its ability to target the right audience. Unlike billboards or print ads, online marketing allows you to reach people based on location, age, interests, and buying behavior. For example, a salon in Rawalpindi can target only nearby residents who are actively interested in beauty services.",
      },
      {
        type: "paragraph",
        text: "Another major advantage is performance tracking. You can see how many people viewed your ad, clicked your website, or contacted your business. This transparency helps small businesses make smarter decisions and avoid wasted spending. When combined with an affordable digital service, this data-driven approach becomes even more valuable.",
      },
      {
        type: "heading",
        text: "Social Media: The Gateway to Growth",
      },
      {
        type: "paragraph",
        text: "In Pakistan, social media platforms are not just for entertainment; they are marketplaces. Facebook and Instagram, in particular, play a crucial role in connecting businesses with customers. A well-managed page with consistent posting, customer engagement, and targeted ads can build trust quickly.",
      },
      {
        type: "paragraph",
        text: "TikTok has also emerged as a powerful platform for small businesses, especially for fashion, food, and lifestyle brands. Short videos showcasing products or behind-the-scenes operations create authenticity and attract attention without requiring large budgets.",
      },
      {
        type: "heading",
        text: "The Role of Local SEO and Google Visibility",
      },
      {
        type: "paragraph",
        text: "When someone searches \"best electrician near me\" or \"ladies tailor in Faisalabad,\" Google shows businesses that are optimized for local search. This is where local SEO becomes critical. A Google Business Profile, customer reviews, and basic website optimization can bring highly relevant traffic.",
      },
      {
        type: "paragraph",
        text: "Many small businesses overlook this opportunity, assuming it is expensive or complicated. In reality, partnering with an affordable marketing agency can make local SEO simple and manageable. The return on investment is often much higher than traditional advertising.",
      },
      {
        type: "heading",
        text: "Cost Concerns: A Common Misconception",
      },
      {
        type: "paragraph",
        text: "One of the biggest myths in Pakistan is that digital marketing is expensive. While large-scale campaigns can cost a lot, small businesses don't need complex strategies to get started. A focused plan, clear goals, and consistent effort can deliver results on a modest budget.",
      },
      {
        type: "paragraph",
        text: "This is where choosing an affordable digital marketing solution becomes important. Instead of paying for unnecessary services, small businesses should focus on what directly supports growth—lead generation, brand awareness, and customer engagement.",
      },
      {
        type: "heading",
        text: "Choosing the Right Digital Partner",
      },
      {
        type: "paragraph",
        text: "Not every business owner has the time or expertise to manage digital marketing alone. Working with professionals can save time and prevent costly mistakes. The key is to find an affordable marketing agency that understands the Pakistani market, local consumer behavior, and budget limitations of small businesses.",
      },
      {
        type: "paragraph",
        text: "A good agency doesn't promise overnight success. Instead, it educates clients, sets realistic expectations, and builds long-term strategies. Transparency, clear reporting, and open communication are signs of a reliable partner.",
      },
      {
        type: "heading",
        text: "Long-Term Benefits of Going Digital",
      },
      {
        type: "paragraph",
        text: "Digital marketing is not just about short-term sales; it is about building a sustainable brand. Over time, consistent online presence creates trust. Customers begin to recognize your name, recommend your services, and return for repeat purchases.",
      },
      {
        type: "paragraph",
        text: "For small businesses in Pakistan, this long-term impact is crucial. With rising competition and increasing costs, relying only on traditional methods is risky. A well-planned affordable digital marketing solution helps businesses stay relevant, competitive, and resilient in changing market conditions.",
      },
      {
        type: "heading",
        text: "Final Thoughts",
      },
      {
        type: "paragraph",
        text: "Digital marketing has leveled the playing field for small businesses in Pakistan. It offers reach, flexibility, and measurable results that traditional marketing simply cannot match. Whether you start small or invest gradually, the key is to start now.",
      },
      {
        type: "paragraph",
        text: "With the right mindset, the right tools, and support from an experienced affordable digital service provider, small businesses can grow beyond their local neighborhoods and tap into new opportunities. In a digital-first world, visibility equals credibility—and credibility leads to growth.",
      },
    ],
    tags: ["Digital Marketing", "Small Business", "Pakistan", "SME", "Local SEO"],
  },
};

export default function BlogDetailPage() {
  const params = useParams();
  const slug = params?.slug as string;
  const blogPost = blogPosts[slug];

  // If blog post not found, show 404
  if (!blogPost) {
    return (
      <html>
        <body>
          <div className={cn("overflow-hidden bg-[#0E0C15] pt-[4.75rem] lg:pt-[5.25rem]")}>
            <Navbar />
            <section className="min-h-screen py-12 md:py-20 px-4 relative overflow-hidden bg-gradient-to-b from-[#020617] to-[#0b0f1a]">
              <div className="max-w-4xl mx-auto relative z-10 text-center">
                <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-6">Blog Post Not Found</h1>
                <p className="text-xl text-gray-300 mb-8">The blog post you're looking for doesn't exist.</p>
                <Link
                  href="/blog"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-gradient-to-r from-cyan-400 to-purple-500 text-white font-semibold hover:shadow-lg hover:shadow-cyan-500/50 transition-all duration-300"
                >
                  <ArrowLeft className="w-5 h-5" />
                  Back to Blog
                </Link>
              </div>
            </section>
            <Footer />
          </div>
          <ButtonGradient />
        </body>
      </html>
    );
  }

  // Animation Variants
  const fadeDown = {
    hidden: { opacity: 0, y: -40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

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
            <Footer />
          </div>
          <ButtonGradient />
        </main>
      </body>
    </html>
  );
}

