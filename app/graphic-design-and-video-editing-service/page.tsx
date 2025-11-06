import Script from "next/script";
import Footer from "@/components/layout/footer";
import Navbar from "@/components/layout/servicenavbar";
import { images } from "@/constants";


import {
    Video,
    Youtube,
    Megaphone,
    HelpCircle,
    Users,
    TextCursorInput,
    CalendarCheck
} from "lucide-react";
const {
    mailIcon,
    facebookService,
    instagramService,
    // videoediting,
    youtubeService,
    photoshoot,
    webDevelopment,
    graphicdesign,
    podcast,
    videoediting,
    bolnews,
    camera,
    content,
    yourlogo,
    nexiam,
    wordpress,
    googleAnalytics,
    googleAds,
    homeSmile,
    socialMediaIcon,
    youtube,
    file02,
    searchMd,
    plusSquare,
    recording03,
    recording01,
    childrenhostpital,
    disc02,
    chromecast,
    sliders04,
    discord,
    discord2,
    figma,
    pinterest,
    seo,
    expressnews,
    framer,
    notion,
    photoshop,
    protopie,
    raindrop,
    advancetelecom,
    slack,
    linkedin,
    roadmap1,
    roadmap2,
    roadmap3,
    roadmap4,
    notification2,
    notification3,
    notification4,
    benefitIcon1,
    benefitIcon2,
    benefitIcon3,
    benefitIcon4,
    benefitImage2,
    discordBlack,
    facebook,
    instagram,
    telegram,
    twitter,
} = images;
import FAQSection, { FAQItem } from "@/components/sections/service-page/Faqs";
import ServiceBenefits, { BenefitItem } from "@/components/sections/service-page/service-benefits";
import ServicesSectionDetails, { Service } from "@/components/sections/service-page/service-details";
import ServiceHero from "@/components/sections/service-page/service-hero";
import ButtonGradient from "@/components/svg/button-gradient";
import { cn } from "@/lib/utils";
import { Metadata } from "next";
// import { images, Seobenefits } from "@/constants";
export const metadata: Metadata = {
    title: 'Graphic Design Services - Graphic Design Agency in Pakistan',
    description: 'Nexaim offers video editing and graphic design services in Pakistan. We turn ideas into creative visuals that build brand identity and boost business presence.',
    alternates: {
        canonical: 'https://thenexaim.com/graphic-design-and-video-editing-service',
    },
    openGraph: {
        title: 'Graphic Design Services - Graphic Design Agency in Pakistan',
        description: 'Nexaim offers video editing and graphic design services in Pakistan. We turn ideas into creative visuals that build brand identity and boost business presence.',
        url: 'https://thenexaim.com/graphic-design-and-video-editing-service',
        type: 'website',
    },
};
export default function Home() {

    const heroData = {
        image: "/assets/Graphic-Design-Vedio-Editing.jpg",

        heading: "Graphic Design & Video Editing Services at  ",
        highlight: "Nexaim!",
        paragraphs: [
            "At Nexaim, we blend creativity with strategy to deliver compelling, high-impact visuals. Whether you're a growing business or an established brand, our graphic design and video editing services are built to help you stand out, connect with your audience, and drive real results.",
            "From social media posts to brand videos, we bring your vision to life with precision and purpose. As one of the best digital marketing agencies, we ensure every creative asset not only looks professional—but performs across platforms."

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
            title: " Logo Design & Branding:",
            text: "Unique logos and visual identity systems tailored to your business personality.",
            backgroundUrl: "/assets/benefits/card-1.svg",
            light: true,
        },
        {
            id: 2,
            title: "Social Media Post & Story Design",
            text: "Scroll-stopping creatives for Instagram, Facebook, LinkedIn, and more.",
            backgroundUrl: "/assets/benefits/card-2.svg",
            light: true,
        },
        {
            id: 4,
            title: "Website Banners & Visual Content  ",
            text: "Visually engaging elements that boost user experience and click-through rates.",
            backgroundUrl: "/assets/benefits/card-4.svg",
            light: true,

        },
        {
            id: 5,
            title: "Ad Creatives (Static & Animated) ",
            text: "Conversion-driven ad designs optimized for paid campaigns.",
            backgroundUrl: "/assets/benefits/card-5.svg",
            light: true,
        },

        {
            id: 6,
            title: "Business Cards, Flyers & Brochures ",
            text: "Print-ready, branded materials that leave a lasting impression.",
            backgroundUrl: "/assets/benefits/card-1.svg",
            light: true,
        },
        {
            id: 7,
            title: "Infographics & Custom Illustrations",
            text: "Visual storytelling tools to simplify complex information.",
            backgroundUrl: "/assets/benefits/card-2.svg",
            light: true,
        },
        {
            id: 8,
            title: "Product Packaging Mockups",
            text: " Eye-catching packaging designs that enhance product appeal.",
            backgroundUrl: "/assets/benefits/card-3.svg",
            light: true,
        },
        {
            id: 9,
            title: "YouTube Thumbnails & Channel Art",
            text: " Designs that attract clicks and elevate your YouTube presence.",
            backgroundUrl: "/assets/benefits/card-4.svg",
            light: true,
        },
    ];

    const seoServices: Service[] = [
        {
            icon: Video, // Represents short videos like Reels & Shorts
            title: "Social Media Reels & Shorts",
            description: "Fast-paced, engaging edits for Instagram, TikTok, and Facebook",
            color: "color-1",
        },
        {
            icon: Youtube, // Clearly represents YouTube editing
            title: "YouTube Video Editing",
            description: "Complete editing for vlogs, tutorials, intros, and outros.",
            color: "color-1",
        },
        {
            icon: Megaphone, // Represents advertisements and promotions
            title: "Promotional & Ad Videos",
            description: "High-impact visuals that spark interest and boost conversions.",
            color: "color-1",
        },
        {
            icon: HelpCircle, // A metaphor for explaining something clearly
            title: "Explainer Videos",
            description: "Clear and creative content that simplifies your product or service.",
            color: "color-1",
        },
        {
            icon: Users, // Represents people giving testimonials or case studies
            title: "Testimonial & Case Study Videos",
            description: "Real stories told through authentic, compelling edits.",
            color: "color-1",
        },
        {
            icon: TextCursorInput, // Represents motion and animated text
            title: "Motion Graphics & Text Animation",
            description: "Dynamic visuals that bring your brand to life.",
            color: "color-1",
        },
        {
            icon: CalendarCheck, // Symbolizes event coverage
            title: "Event Highlights",
            description: "Capture the energy and essence of your corporate or social events.",
            color: "color-1",
        },
    ];


    const faqData: FAQItem[] = [

        {
            question: "What industries do you serve?",
            answer: "We work across sectors—fashion, tech, education, real estate, e-commerce, and more. Each design is customized to match your industry and audience.",
        },
        {
            question: "How fast is the turnaround?",
            answer: "Most graphic designs are ready within 2–3 business days. Video editing typically takes 3–7 days, depending on length and revisions.",
        },
        {
            question: "Are revisions included?",
            answer: "Yes! We offer multiple revision rounds to ensure you're fully satisfied with the outcome.",
        },
        {
            question: "Do you offer monthly packages?",
            answer: "Absolutely. We offer flexible monthly plans for businesses needing regular creative support, perfect for social media and ad campaigns.",
        },
        {
            question: "How do I get started?",
            answer: "Reach out via our contact form or social media. We’ll guide you through every step of the process—from idea to delivery.",
        }
    ];


    const faqsubtitle = " Get answers to the most common questions about our  graphic designing services"

    return (
        <html>
            {/* <head>
                <meta name="google-site-verification" content="rSmgiUi5hClwP2sfbwSV1xX0POJwTuw5IjXRyxhtECs" />
            </head> */}
            <body>
                <main>
                    <Script
                        id="product-schema"
                        type="application/ld+json"
                        dangerouslySetInnerHTML={{
                            __html: JSON.stringify({
                                "@context": "https://schema.org/",
                                "@type": "Product",
                                name: "Graphic Design Agency in Pakistan - Graphic Design Services - The Nexaim",
                                description:
                                    "The Nexaim offers graphic design and video editing services in Karachi, Pakistan, specializing in logos, banners, social media creatives, ad creatives, and more. We ensure high-quality visuals for startups and established businesses.",
                                brand: "The Nexaim",
                                aggregateRating: {
                                    "@type": "AggregateRating",
                                    ratingValue: "5",
                                    bestRating: "5",
                                    worstRating: "4.9",
                                    ratingCount: "33",
                                },
                            }),
                        }}
                    />
                    <Script
                        id="service-schema"
                        type="application/ld+json"
                        dangerouslySetInnerHTML={{
                            __html: JSON.stringify({
                                "@context": "https://schema.org",
                                "@type": "Service",
                                name: "Graphic Design Agency in Pakistan - Graphic Design Services",
                                description:
                                    "We are a leading graphic design agency in Karachi, Pakistan, helping businesses enhance their online presence with branding logos, visiting cards, and social and game banners.",
                                provider: {
                                    "@type": "Organization",
                                    name: "The Nexaim",
                                    url: "https://thenexaim.com/graphic-design-and-video-editing-service",
                                    logo: "https://thenexaim.com/marketing-agency-for-startups/waylogo.png",
                                    contactPoint: {
                                        "@type": "ContactPoint",
                                        telephone: "03432469633",
                                        contactType: "Sales",
                                        areaServed: "PAK, KHI",
                                        availableLanguage: ["English"],
                                    },
                                },
                                areaServed: {
                                    "@type": "Place",
                                    name: "Pakistan",
                                },
                                serviceType:
                                    "graphic design agency, graphic design services, graphic designing company in Pakistan, graphic design agency in Pakistan, graphic designing, logo designing, logo design service, advertisement posts, social media posts, gaming banners",
                                category: "Graphic Design and Video Animation",
                                offers: {
                                    "@type": "Offer",
                                    priceCurrency: "PKR",
                                    price: "0",
                                    eligibleRegion: {
                                        "@type": "Place",
                                        name: "Pakistan",
                                    },
                                    availability: "https://schema.org/InStock",
                                },
                            }),
                        }}
                    />
                    <Script
                        id="faq-schema"
                        type="application/ld+json"
                        dangerouslySetInnerHTML={{
                            __html: JSON.stringify({
                                "@context": "https://schema.org",
                                "@type": "FAQPage",
                                mainEntity: [
                                    {
                                        "@type": "Question",
                                        name: "What industries do you serve?",
                                        acceptedAnswer: {
                                            "@type": "Answer",
                                            text: "We work across sectors—fashion, tech, education, real estate, e-commerce, and more. Each design is customized to match your industry and audience.",
                                        },
                                    },
                                    {
                                        "@type": "Question",
                                        name: "How fast is the turnaround?",
                                        acceptedAnswer: {
                                            "@type": "Answer",
                                            text: "Most graphic designs are ready within 2–3 business days. Video editing typically takes 3–7 days, depending on length and revisions.",
                                        },
                                    },
                                    {
                                        "@type": "Question",
                                        name: "Are revisions included?",
                                        acceptedAnswer: {
                                            "@type": "Answer",
                                            text: "Yes! We offer multiple revision rounds to ensure you're fully satisfied with the outcome.",
                                        },
                                    },
                                    {
                                        "@type": "Question",
                                        name: "Do you offer monthly packages?",
                                        acceptedAnswer: {
                                            "@type": "Answer",
                                            text: "Absolutely. We offer flexible monthly plans for businesses needing regular creative support, perfect for social media and ad campaigns.",
                                        },
                                    },
                                    {
                                        "@type": "Question",
                                        name: "How do I get started?",
                                        acceptedAnswer: {
                                            "@type": "Answer",
                                            text: "Reach out via our contact form or social media. We’ll guide you through every step of the process—from idea to delivery.",
                                        },
                                    },
                                ],
                            }),
                        }}
                    />


                    <div className={cn("overflow-hidden bg-[#0E0C15] pt-[4.75rem] lg:pt-[5.25rem]")}>
                        <Navbar />
                        <ServiceHero content={heroData} />
                        {/* <Benefits /> */}
                        <ServiceBenefits
                            sectionTitle="Graphic Design That Builds Brands"
                            benefits={benefitsData}
                        />
                        <ServicesSectionDetails
                            heading="Video Editing That Connects and Converts 
"
                            title="Let’s Build Something Visual. Let’s Build Nexaim."
                            subheading="Whether you're launching a new brand or scaling up your online presence, Nexaim delivers the creative expertise you need. Let’s make something amazing together.
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
            </body>
        </html>
    );
}
