import Footer from "@/components/layout/footer";
import Navbar from "@/components/layout/servicenavbar";
import { Facebook, Users, Youtube, ShoppingBag, Image, Compass, Video } from "lucide-react";
import FAQSection, { FAQItem } from "@/components/sections/service-page/Faqs";
import ServiceBenefits, { BenefitItem } from "@/components/sections/service-page/service-benefits";
import ServicesSectionDetails, { Service } from "@/components/sections/service-page/service-details";
import ServiceHero from "@/components/sections/service-page/service-hero";
import ButtonGradient from "@/components/svg/button-gradient";
import WhatsAppButton from "@/components/layout/whatsapp-button";
import { cn } from "@/lib/utils";
import { images } from "@/constants";
import { Metadata } from "next";
import Script from "next/script";
import ContactForm from "@/components/sections/contactus";

export const metadata: Metadata = {
    title: 'Social Media Marketing Agency in Pakistan - Digital Marketing Expert in Pakistan',
    description: 'Nexaim is a leading digital marketing company in Pakistan, offering PPC, social media marketing, and management. We help turn small businesses into market leaders.',
    alternates: {
        canonical: 'https://thenexaim.com/affordable-digital-marketing-services-in-pakistan',
    },
    openGraph: {
        title: 'Social Media Marketing Agency in Pakistan - Digital Marketing Expert in Pakistan',
        description: 'Nexaim is a leading digital marketing company in Pakistan, offering PPC, social media marketing, and management. We help turn small businesses into market leaders.',
        url: 'https://thenexaim.com/affordable-digital-marketing-services-in-pakistan',
        type: 'website',
    },
};

export default function Home() {

    const heroData = {
        heading: "Trusted Digital Marketing Agency in Pakistan - Grow Your Business Online with ",
        highlight: "Nexaim!",
        paragraphs: [
            "At Nexaim, we help businesses in Pakistan grow online using proven, data-driven digital marketing strategies. As a top-rated digital marketing agency, our certified team brings hands-on experience managing Facebook, Instagram campaigns for both startups and established brands.",
            "From content creation to full-service social media management, we specialize in driving measurable growth. Whether you're launching your first ad campaign or optimizing for better ROI, Nexaim ensures your message reaches the right audience - at the right time."

        ],
        button: {
            text: "Get Your Offer",
            link: "https://wa.me/+923432469633",
        },
        image: "/assets/Digital_Marketing.jpg",
        backgroundImage: images.heroBackground,
        curveImage: images.curve,
    };
    const benefitsData: BenefitItem[] = [
        {
            id: 1,
            title: " Proven strategies:",
            text: "Proven strategies built on experience and research.",
            backgroundUrl: "/assets/benefits/card-1.svg",

            imageUrl: "",
            light: true,
        },
        {
            id: 2,
            title: "Customized digital marketing",
            text: "Customized digital marketing plans for your unique goals.",
            backgroundUrl: "/assets/benefits/card-2.svg",
            light: true,
        },
        {
            id: 4,
            title: "Transparent communication  ",
            text: "Transparent communication and real-time results.",
            backgroundUrl: "/assets/benefits/card-3.svg",
            light: true,
        },
        {
            id: 5,
            title: "Affordable marketing ",
            text: " Affordable marketing solutions for startups and small businesses.",
            backgroundUrl: "/assets/benefits/card-4.svg",
            light: true,
        },


    ];

    const seoServices: Service[] = [

        {
            icon: Facebook, // Replace with an appropriate icon
            title: "Facebook & Instagram Ads",
            description: "Precision-targeted campaigns for sales, leads, and brand awareness — optimized for high ROAS.",
            color: "color-1",
        },
        {
            icon: Users, // Replace with an appropriate icon
            title: "Social Media Management",
            description: "Engaging content, consistent posting, and growth strategies to keep your audience hooked.",
            color: "color-1",
        },

        {
            icon: ShoppingBag, // Replace with an appropriate icon
            title: "E-commerce Scaling",
            description: "Product-focused strategies for fashion and retail brands — ideal for platforms like Shopify, WooCommerce, and custom stores.",
            color: "color-1",
        },
        {
            icon: Compass, // Replace with an appropriate icon
            title: "Strategy & Consulting",
            description: "Get a custom growth blueprint backed by research, insights, and clear KPIs.",
            color: "color-1",
        },
        {
            icon: Image, // Replace with an appropriate icon
            title: "Content Creation & Graphic Design",
            description: "Professional visuals including graphics, videos, Reels, thumbnails, and posts crafted to reflect your brand and capture attention.",
            color: "color-1",
        },
        {
            icon: Video, // Replace with an appropriate icon
            title: "Story & Reel Creation",
            description: "Short-form videos that boost visibility, increase shares, and emotionally connect with your audience on a deeper level.",
            color: "color-1",
        },
        {
            icon: Youtube, // Replace with an appropriate icon
            title: "YouTube Video Marketing",
            description: "We optimize your YouTube channel with SEO-friendly titles, custom thumbnails, and keyword-rich descriptions to grow views, watch time, and subscribers.",
            color: "color-1",
        }
    ];

    const faqData: FAQItem[] = [

        {
            question: "What makes Nexaim different from other digital marketing agencies?",
            answer: "We combine data-driven strategies with local market insights to deliver real results. Unlike agencies that focus on vanity metrics, we prioritize ROAS, conversions, and long-term growth.",
        },
        {
            question: "How quickly will I see results from your ad campaigns?",
            answer: "Most clients begin seeing initial results within 7–14 days of launching optimized campaigns. Significant ROAS improvements and brand visibility gains typically occur within the first 1–3 months.",
        },
        {
            question: "Do you work with both startups and established brands?",
            answer: "Absolutely! Whether you're launching your first product or scaling an existing business.",
        },
        {
            question: "What platforms do you specialize in?",
            answer: "We specialize in Facebook, Instagram, Google Ads (PPC) — with deep expertise in performance marketing for e-commerce and services websites.",
        },
        {
            question: "What is digital marketing?",
            answer: "Digital marketing is the practice of promoting products or services through online platforms like social media, search engines, websites, and email.",
        },
        {
            question: "Is digital marketing suitable for small businesses or startups?",
            answer: "It's ideal for small businesses because it offers cost-effective strategies to reach targeted audiences and compete with larger brands. At Nexaim, we offer affordable online marketing plans tailored to any budget.",
        },
        {
            question: "How long does it take to see results from digital marketing?",
            answer: "The timeline depends on the strategy used. SEO typically takes 3 to 6 months to show consistent results, while paid advertising and social media campaigns can deliver visible outcomes much faster—often within days or weeks, depending on your budget and targeting.",
        },
        {
            question: "How do I get started with Nexaim?",
            answer: "Getting started is easy. Simply contact us through our website or social media channels. We offer a free digital marketing consultation to understand your goals and create a custom growth plan that fits your needs.",
        }
    ];

    const faqsubtitle = " Get answers to the most common questions about our  digital marketing services"



    const productSchema = {
        "@context": "https://schema.org",
        "@type": "Product",
        name: "Digital Marketing Expert in Karachi - Social Media Marketing Agency in Pakistan",
        description:
            "Nexaim is a leading marketing company in Pakistan, recognized for excellence as a social media marketing agency. We provide professional PPC and social media management services in Karachi, including Meta advertising, LinkedIn page management, Instagram and Facebook posting, and profile optimization.",
        brand: "The Nexaim",
        aggregateRating: {
            "@type": "AggregateRating",
            ratingValue: "5",
            bestRating: "5",
            worstRating: "4.9",
            ratingCount: "22",
        },
    };

    const serviceSchema = {
        "@context": "https://schema.org",
        "@type": "Service",
        name: "Digital Marketing Expert in Karachi - Social Media Marketing Agency in Pakistan",
        description:
            "Nexaim is a leading marketing company in Pakistan, recognized for excellence as a social media marketing agency. We provide professional PPC and social media management services in Karachi, including Meta advertising, LinkedIn page management, Instagram and Facebook posting, and profile optimization.",
        provider: {
            "@type": "Organization",
            name: "The Nexaim",
            url: "https://thenexaim.com/affordable-digital-marketing-services-in-pakistan",
            logo: "https://thenexaim.com/marketing-agency-for-startups/waylogo.png",
            contactPoint: {
                "@type": "ContactPoint",
                telephone: "03432469633",
                contactType: "Sales",
                areaServed: "PAK, KHI",
                availableLanguage: ["English"],
            },
        },
        areaServed: { "@type": "Place", name: "PAK" },
        serviceType:
            "digital marketing expert in pakistan, social media marketing agencies in pakistan, social media marketing agency in pakistan, social media marketing agency, social media agency, best marketing company in pakistan, digital marketing company in pakistan, Meta advertisement, facebook and instagram advertisement",
        category: "Digital Marketing",
        offers: {
            "@type": "Offer",
            priceCurrency: "PKR",
            price: "$",
            eligibleRegion: { "@type": "Place", name: "Pakistan" },
            availability: "https://schema.org/InStock",
        },
    };

    const faqSchema = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: [
            {
                "@type": "Question",
                name: "What makes Nexaim different from other digital marketing agencies?",
                acceptedAnswer: {
                    "@type": "Answer",
                    text: "We combine data-driven strategies with local market insights to deliver real results. Unlike agencies that focus on vanity metrics, we prioritize ROAS, conversions, and long-term growth.",
                },
            },
            {
                "@type": "Question",
                name: "How quickly will I see results from your ad campaigns?",
                acceptedAnswer: {
                    "@type": "Answer",
                    text: "Most clients begin seeing initial results within 7–14 days of launching optimized campaigns. Significant ROAS improvements typically occur within the first 1–3 months.",
                },
            },
            {
                "@type": "Question",
                name: "Do you work with both startups and established brands?",
                acceptedAnswer: {
                    "@type": "Answer",
                    text: "Absolutely! We tailor our approach for both startups and established businesses based on their goals and stage.",
                },
            },
            {
                "@type": "Question",
                name: "What platforms do you specialize in?",
                acceptedAnswer: {
                    "@type": "Answer",
                    text: "We specialize in Facebook, Instagram, and Google Ads (PPC) with performance marketing expertise.",
                },
            },
            {
                "@type": "Question",
                name: "What is digital marketing?",
                acceptedAnswer: {
                    "@type": "Answer",
                    text: "Digital marketing means promoting products/services using online platforms like social media, search engines, websites, and email.",
                },
            },
            {
                "@type": "Question",
                name: "Is digital marketing suitable for small businesses or startups?",
                acceptedAnswer: {
                    "@type": "Answer",
                    text: "Yes — it is cost-effective and helps compete with bigger brands. Nexaim offers affordable plans for any budget.",
                },
            },
            {
                "@type": "Question",
                name: "How long does it take to see results?",
                acceptedAnswer: {
                    "@type": "Answer",
                    text: "SEO usually takes 3–6 months. Paid ads and social media can show results in days or weeks depending on strategy and budget.",
                },
            },
            {
                "@type": "Question",
                name: "How do I get started with Nexaim?",
                acceptedAnswer: {
                    "@type": "Answer",
                    text: "Simply contact us through our website or social media. We offer a free consultation and tailored plan.",
                },
            },
        ],
    };

    return (
        <html>
            {/* <head>
                <meta name="google-site-verification" content="rSmgiUi5hClwP2sfbwSV1xX0POJwTuw5IjXRyxhtECs" />
            </head> */}
            <body>
                <main>
                    <script
                        type="application/ld+json"
                        dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }}
                    />
                    <script
                        type="application/ld+json"
                        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
                    />
                    <script
                        type="application/ld+json"
                        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
                    />
                    <div className={cn("overflow-hidden bg-[#0E0C15] pt-[4.75rem] lg:pt-[5.25rem]")}>
                        <Navbar />
                        <ServiceHero content={heroData} />
                        {/* <Benefits /> */}
                        <ServiceBenefits
                            sectionTitle="Why Choose Nexaim?
"
                            benefits={benefitsData}
                        />
                        <ServicesSectionDetails
                            heading="Best Digital Marketing Services at "
                            title="Partner With Nexaim — Grow Your Business Online Today"
                            subheading="Choosing Nexaim means choosing a reliable digital marketing agency committed to your success. Our team is ready to help you expand your reach, increase your leads, and grow your business the smart way — online."
                            gradientText="Nexiam"
                            subtitle="At Nexaim, Our full-suite digital marketing services are tailored to help you dominate your niche and outshine your competition"
                            description=""
                            services={seoServices}
                            primaryCta={{ text: "VIEW OUR PORTFOLIO", link: "https://wa.me/+923432469633" }}

                        />;
                        <FAQSection data={faqData} subtitle={faqsubtitle} />
                        <ContactForm />
                        <Footer />
                    </div>
                    <ButtonGradient />
                    <WhatsAppButton />
                </main>

            </body>
        </html>
    );
}
