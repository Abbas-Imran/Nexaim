import Footer from "@/components/layout/footer";
import Navbar from "@/components/layout/servicenavbar";

import {
    Video,
    Youtube,
    Megaphone,
    HelpCircle,
    Users,
    TextCursorInput,
    CalendarCheck,
    Mic2,
    SlidersHorizontal,
    Music,
    UploadCloud,
    Share2,
    Image,
    UserPlus2,
    BarChart3
} from "lucide-react";
import FAQSection, { FAQItem } from "@/components/sections/service-page/Faqs";
import ServiceBenefits, { BenefitItem } from "@/components/sections/service-page/service-benefits";
import ServicesSectionDetails, { Service } from "@/components/sections/service-page/service-details";
import ServiceHero from "@/components/sections/service-page/service-hero";
import ButtonGradient from "@/components/svg/button-gradient";
import { cn } from "@/lib/utils";
import { images } from "@/constants";
import { Metadata } from "next";
export const metadata: Metadata = {
    title: 'Nexaim Podcast Production | Full-Service Podcasting & Audio-Visual Content',
    description: 'Let Nexaim transform your podcast vision into high-impact audio and video content. From concept development, studio recording & editing to branding, social-media clipping, and distribution — we deliver polished episodes that boost audience engagement.',
    alternates: {
        canonical: 'https://thenexaim.com/services/podcast-production',
    },
    openGraph: {
        title: 'Nexaim Podcast Production | Full-Service Podcasting & Audio-Visual Content',
        description: 'Full-service podcast production by Nexaim. We handle recording, editing, branding, and distribution to create professional podcasts that captivate and grow your audience.',
        url: 'https://thenexaim.com/services/podcast-production',
        type: 'website',
    },
};

export default function Home() {

    const heroData = {
        image: "/assets/Podcast.jpg",

        heading: "Podcast Production & Marketing Services at ",
        highlight: "Nexaim",
        paragraphs: [
            "At Nexaim, we help you turn your voice into influence. Whether you're just starting or scaling your podcast, our full-service podcast production and marketing team makes sure every episode sounds professional, reaches the right audience, and aligns with your brand message.",
            "From content strategy and recording to publishing and promotion, we handle it all—so you can focus on what you do best: sharing great stories and insights."

        ],
        button: {
            text: "Get Your Offer",
            link: "https://wa.me/+923432469633",
        },
        videoSrc: images.heroVideo,
        backgroundImage: images.heroBackground,
        curveImage: images.curve,
    };
    const benefitsData: BenefitItem[] = [
        {
            id: 1,
            title: "Understand the full funnel:",
            text: "We understand the full funnel from production to promotion.",
            backgroundUrl: "/assets/benefits/card-1.svg",

            imageUrl: "/assets/images/seo-benefit-1.jpg",
            light: true,

        },
        {
            id: 2,
            title: "Blend Creativity",
            text: "We blend creativity with proven digital marketing strategies.",
            backgroundUrl: "/assets/benefits/card-2.svg",
            light: true,
        },
        {
            id: 4,
            title: "Grow Your Listener Base  ",
            text: "We help you grow your listener base and convert them into loyal fans or leads.",
            backgroundUrl: "/assets/benefits/card-3.svg",
            light: true,
        },
        {
            id: 5,
            title: "Optimize every episode ",
            text: "We optimize every episode for platforms and search engines.",
            backgroundUrl: "/assets/benefits/card-4.svg",
            light: true,
        }
    ];

    const seoServices: Service[] = [

        {
            icon: Mic2,
            title: "Podcast Concept Development",
            description: "Find your niche, audience, and content strategy.",
            color: "color-1",
        },
        {
            icon: SlidersHorizontal,
            title: "Audio & Video Editing",
            description: "Crisp, clean, and professionally mixed episodes.",
            color: "color-1",
        },
        {
            icon: Music,
            title: "Branded Podcast Intros & Outros",
            description: "Custom voiceovers and music to match your identity.",
            color: "color-1",
        },
        {
            icon: UploadCloud,
            title: "Publishing to All Major Platforms",
            description: "Spotify, Facebook, Google, YouTube & more.",
            color: "color-1",
        },
        {
            icon: Share2,
            title: "Social Media Reels & Audiograms",
            description: "Short-form content to promote your episodes.",
            color: "color-1",
        },
        {
            icon: Image,
            title: "Podcast Graphics & Cover Design",
            description: "Eye-catching thumbnails and branding assets.",
            color: "color-1",
        },
        {
            icon: UserPlus2,
            title: "Guest Booking & Collaboration Strategy",
            description: "Reach new audiences with the right guests.",
            color: "color-1",
        },
        {
            icon: BarChart3,
            title: "Performance Tracking & Analytics Reports",
            description: "Know what’s working, and scale it.",
            color: "color-1",
        },
    ];


    const faqData: FAQItem[] = [

        {
            question: "Do you offer video podcast services?",
            answer: "Absolutely. We offer full video editing services for podcasts that are recorded on camera—perfect for YouTube, Instagram Reels, and other visual platforms.",
        },
        {
            question: "How will people discover my podcast?",
            answer: "Our team uses SEO, metadata optimization, and social media marketing to boost visibility. We also help you create micro-content (like reels and audiograms) to reach wider audiences.",
        },
        {
            question: "Can I monetize my podcast?",
            answer: "Yes. We can help you explore monetization options including sponsorships, ads, affiliate partnerships, and premium content strategies.",
        },
        {
            question: "Do you provide ongoing support?",
            answer: "Yes, we offer flexible packages that include episode editing, uploading, social media promotion, and analytics on a weekly or monthly basis.",
        }
    ];



    const faqsubtitle = " Get answers to the most common questions about our  graphic designing services"

    return (
        <main>
            <div className={cn("overflow-hidden bg-[#0E0C15] pt-[4.75rem] lg:pt-[5.25rem]")}>
                <Navbar />
                <ServiceHero content={heroData} />
                {/* <Benefits /> */}
                <ServiceBenefits
                    sectionTitle="Why Choose Nexaim for Podcast Marketing?"
                    benefits={benefitsData}
                />
                <ServicesSectionDetails
                    heading="Our Podcast Services Include: 
"
                    title="Let’s Launch (or Level Up) Your Podcast"
                    subheading="At Nexaim, we don’t just edit audio we create podcast brands that connect and grow. Whether you want to entertain, educate, or inspire, we’re here to help you produce episodes that stand out and generate real impact.
"
                    gradientText=""
                    subtitle=""
                    description=""
                    services={seoServices}
                    primaryCta={{ text: "VIEW OUR PORTFOLIO", link: "https://wa.me/+923432469633" }}

                />;
                <FAQSection data={faqData} subtitle={faqsubtitle} />
                {/* <Collaboration />
        <Services /> */}
                {/* <Pricing /> */}
                {/* <Roadmap /> */}
                {/* <ContactForm /> */}
                <Footer />
            </div>
            <ButtonGradient />
        </main>
    );
}
