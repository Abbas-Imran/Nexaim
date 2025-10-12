"use client";

import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Star, Badge } from "lucide-react";
import Slider from "react-slick";
import { motion } from "framer-motion";
import { useMediaQuery } from "react-responsive";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// ✅ Testimonials data
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
            "We were looking for the best social media marketing company to grow our brand, and we found Nexaim. Their team understood our audience, created engaging content, and delivered real results.",
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
            "Nexaim delivered a smart, fast, and mobile-friendly website that's modern and clean. The whole process was smooth and exceeded expectations.",
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
            "I only had the idea for a podcast — Nexaim handled everything else, from recording to editing. The quality was absolutely top-notch.",
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
            "Our website wasn't showing on Google. Nexaim started SEO work, and the results are great. Highly recommended!",
        author: "Farhan Saleem",
        location: "Gujranwala",
        role: "Service Business Owner",
        rating: 5,
    },
];

// ✅ Custom Arrows
const NextArrow = ({ onClick }: any) => (
    <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={onClick}
        className="absolute -right-8 top-1/2 z-20 flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-r from-cyan-400 to-purple-500 shadow-lg hover:shadow-2xl transition-all"
    >
        <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="white"
            className="h-6 w-6"
        >
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
        </svg>
    </motion.button>
);

const PrevArrow = ({ onClick }: any) => (
    <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={onClick}
        className="absolute -left-8 top-1/2 z-20 flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-r from-purple-500 to-cyan-400 shadow-lg hover:shadow-2xl transition-all"
    >
        <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="white"
            className="h-6 w-6"
        >
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
        </svg>
    </motion.button>
);

export default function TestimonialsSection() {
    const isMobile = useMediaQuery({ maxWidth: 767 });
    const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1023 });
    const isDesktop = useMediaQuery({ minWidth: 1024 });

    // Dynamically choose slidesToShow
    const slidesToShow = isMobile ? 1 : isTablet ? 2 : 3;

    const settings = {
        dots: true,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 2500,
        speed: 600,
        slidesToShow,
        slidesToScroll: 1,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
    };


    return (
        <section className="py-8 px-4 relative overflow-hidden bg-gradient-to-b from-[#020617] to-[#0b0f1a]">
            {/* Background Elements */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(120,119,198,0.1),transparent_50%)]" />
            <div className="absolute top-20 right-20 w-32 h-32 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full opacity-20 blur-xl" />
            <div className="absolute bottom-40 left-10 w-24 h-24 bg-gradient-to-r from-pink-400 to-orange-500 rounded-full opacity-20 blur-xl" />

            <div className="max-w-7xl mx-auto relative z-10">
                {/* Header */}
                <div className="text-center mb-16">
                    <Badge className="mb-4 border-cyan-400/30 text-cyan-400 bg-cyan-400/10">
                        WHAT OUR CLIENTS SAY
                    </Badge>
                    <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
                        Voices of{" "}
                        <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                            trust & success
                        </span>
                    </h2>
                    <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                        Discover how Nexaim has empowered businesses to innovate, grow, and
                        achieve long-lasting impact through technology.
                    </p>
                </div>

                {/* Slider */}
                <div className="relative">
                    <Slider {...settings}>
                        {testimonials.map((testimonial) => (
                            <div key={testimonial.id} className="px-3">
                                <Card className="bg-white/5 backdrop-blur-sm border-white/10 hover:bg-white/10 transition-all duration-300 group h-full">
                                    <CardContent className="p-6">
                                        <div className="flex items-center gap-3 mb-4">
                                            <span className="text-2xl">{testimonial.icon}</span>
                                            <span className="text-white text-[1.4rem] font-semibold">
                                                {testimonial.service}
                                            </span>
                                        </div>

                                        <div className="flex gap-1 mb-4">
                                            {[...Array(testimonial.rating)].map((_, i) => (
                                                <Star
                                                    key={i}
                                                    className="w-4 h-4 fill-yellow-400 text-yellow-400"
                                                />
                                            ))}
                                        </div>

                                        <blockquote className="text-gray-200 text-sm mb-6 leading-relaxed">
                                            "{testimonial.quote}"
                                        </blockquote>

                                        <div className="border-t border-white/10 pt-4">
                                            <div className="font-semibold text-white">
                                                {testimonial.author}
                                            </div>
                                            <div className="text-sm text-gray-400">
                                                {testimonial.role}
                                            </div>
                                            <div className="text-xs text-cyan-400">
                                                {testimonial.location}
                                            </div>
                                        </div>
                                    </CardContent>
                                </Card>
                            </div>
                        ))}
                    </Slider>
                </div>

                {/* CTA */}
                <div className="text-center mt-5">
                    <div className="inline-flex items-center gap-4 bg-gradient-to-r from-cyan-500/10 to-purple-500/10 backdrop-blur-sm border border-white/10 rounded-full px-6 py-4">
                        <span className="text-white text-sm md:text-base">
                            Ready to transform your business?
                        </span>
                        <a href="https://wa.me/+923432469633" className="bg-gradient-to-r from-cyan-400 to-purple-500 text-white px-6 py-2 rounded-full font-medium text-sm hover:shadow-lg hover:shadow-cyan-400/25 transition-all duration-300">
                            Get Started
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}
