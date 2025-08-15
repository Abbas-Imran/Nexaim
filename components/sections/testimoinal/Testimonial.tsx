"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Star, Badge } from "lucide-react"

const testimonials = [
    {
        id: 1,
        service: "Graphic Design",
        icon: "🎨",
        quote:
            "We needed designs for our brand and Nexaim totally got our vibe. The logos and posts were on point – simple but stylish. Their design sense is truly impressive.",
        author: "Rabia Sheikh",
        location: "Lahore",
        role: "Fashion Brand Owner",
        rating: 5,
    },
    {
        id: 2,
        service: "Video Editing",
        icon: "🎬",
        quote:
            "I record my own videos, but for editing, Nexaim is my go-to team. They make everything look clean, professional, and always deliver on time.",
        author: "Usman Jatt",
        location: "Faisalabad",
        role: "YouTube Creator",
        rating: 5,
    },
    {
        id: 3,
        service: "Digital Marketing",
        icon: "📲",
        quote:
            "We were looking for the best social media marketing company to grow our brand, and we found Nexaim. Their team understood our audience, created engaging content, and delivered real results. Our reach, engagement, and sales have all gone up — highly recommended!",
        author: "Tahir Mehmood",
        location: "Karachi",
        role: "Restaurant Owner",
        rating: 5,
    },
    {
        id: 4,
        service: "Web Development",
        icon: "🌐",
        quote:
            "Nexaim is truly the best website design and development company we've worked with. They delivered a smart, fast, and mobile-friendly website that's modern, clean, and easy to navigate. The whole process was smooth, and the final result exceeded our expectations.",
        author: "Hina Waqar",
        location: "Islamabad",
        role: "Online Store Owner",
        rating: 5,
    },
    {
        id: 5,
        service: "Podcast Production",
        icon: "🎙",
        quote:
            "I only had the idea for a podcast — Nexaim handled everything else, from recording and editing to creating social clips. They made the entire process stress-free, and the quality was absolutely top-notch.",
        author: "Zainab Ali",
        location: "Rawalpindi",
        role: "Podcast Host",
        rating: 5,
    },
    {
        id: 6,
        service: "SEO Optimization",
        icon: "🔍",
        quote:
            "Our website wasn't showing on Google. I was looking for SEO experts in Karachi, and I found this digital marketing company. They started SEO work and I'm quite impressed with their results. Highly recommended!",
        author: "Farhan Saleem",
        location: "Gujranwala",
        role: "Service Business Owner",
        rating: 5,
    },
]

export default function TestimonialsSection() {
    return (
        <section className="min-h-screen  py-20 px-4 relative overflow-hidden">
            {/* Background Elements */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(120,119,198,0.1),transparent_50%)]" />
            <div className="absolute top-20 right-20 w-32 h-32 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full opacity-20 blur-xl" />
            <div className="absolute bottom-40 left-10 w-24 h-24 bg-gradient-to-r from-pink-400 to-orange-500 rounded-full opacity-20 blur-xl" />

            <div className="max-w-7xl mx-auto relative z-10">
                {/* Header */}
                <div className="text-center mb-16">
                    <Badge className="mb-4 border-cyan-400/30 text-cyan-400 bg-cyan-400/10">
                        CLIENT TESTIMONIALS
                    </Badge>
                    <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
                        Transform once,{" "}
                        <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                            impact forever
                        </span>
                    </h2>
                    <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                        Nexaim – Turning Ideas into Digital Impact — hear what our clients say about their transformation journey
                    </p>
                </div>

                {/* Testimonials Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {testimonials.map((testimonial) => (
                        <Card
                            key={testimonial.id}
                            className="bg-white/5 backdrop-blur-sm border-white/10 hover:bg-white/10 transition-all duration-300 group"
                        >
                            <CardContent className="p-6">
                                {/* Service Badge */}
                                <div className="flex items-center gap-3 mb-4">
                                    <span className="text-2xl">{testimonial.icon}</span>
                                    <span className=" text-white text-[1.4rem] border-0">
                                        {testimonial.service}
                                    </span>
                                </div>

                                {/* Rating */}
                                <div className="flex gap-1 mb-4">
                                    {[...Array(testimonial.rating)].map((_, i) => (
                                        <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                                    ))}
                                </div>

                                {/* Quote */}
                                <blockquote className="text-gray-200 mb-6 leading-relaxed">"{testimonial.quote}"</blockquote>

                                {/* Author */}
                                <div className="border-t border-white/10 pt-4">
                                    <div className="font-semibold text-white">{testimonial.author}</div>
                                    <div className="text-sm text-gray-400">{testimonial.role}</div>
                                    <div className="text-xs text-cyan-400">{testimonial.location}</div>
                                </div>
                            </CardContent>
                        </Card>
                    ))}
                </div>

                {/* Call to Action */}
                <div className="text-center mt-16">
                    <div className="inline-flex items-center gap-4 bg-gradient-to-r from-cyan-500/10 to-purple-500/10 backdrop-blur-sm border border-white/10 rounded-full px-8 py-4">
                        <span className="text-white font-medium">Ready to transform your business?</span>
                        <button className="bg-gradient-to-r from-cyan-400 to-purple-500 text-white px-6 py-2 rounded-full font-medium hover:shadow-lg hover:shadow-cyan-400/25 transition-all duration-300">
                            Get Started
                        </button>
                    </div>
                </div>
            </div>
        </section>
    )
}
