import React from "react";
import Footer from "@/components/layout/footer";
import Navbar from "@/components/layout/navbar";
import Benefits from "@/components/sections/benefits";
import Collaboration from "@/components/sections/collaboration";
import ContactForm from "@/components/sections/contactus";
import Hero from "@/components/sections/hero";
import Pricing from "@/components/sections/pricing";
const TestimonialsSection = React.lazy(() => import("@/components/sections/testimoinal/Testimonial"));
// import Roadmap from "@/components/sections/roadmap";
import Services from "@/components/sections/services";
import AboutUs from "@/components/sections/AboutUs";
import Blog from "@/components/sections/blog";
import ButtonGradient from "@/components/svg/button-gradient";
import { cn } from "@/lib/utils";
import { Metadata } from "next";
import Script from "next/script";
export const metadata: Metadata = {
  title: "Top Digital Marketing Agency in Karachi Pakistan | Nexaim Expert",
  description:
    "Elevate your brand with Nexaim Expert, the top digital marketing agency in Karachi. We offer best solutions to boost your online presence and drive results.",
  keywords: [
    "Digital Marketing Karachi",
    "Top Marketing Agency Pakistan",
    "Nexaim Expert",
    "SEO Services Karachi",
    "Social Media Marketing Karachi",
  ],
  alternates: {
    canonical: "https://thenexaim.com",
  },
  openGraph: {
    title: "Top Digital Marketing Agency in Karachi Pakistan | Nexaim Expert",
    description:
      "Elevate your brand with Nexaim Expert, the top digital marketing agency in Karachi. We offer best solutions to boost your online presence and drive results.",
    url: "https://thenexaim.com",
    type: "website",
  },
};

export default function Home() {


  const schemaData1 = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Client Testimonials",
    itemListElement: [
      {
        "@type": "Review",
        itemReviewed: { "@type": "Service", name: "Digital Marketing" },
        reviewRating: { "@type": "Rating", ratingValue: "5", bestRating: "5" },
        author: { "@type": "Person", name: "Tahir Mehmood" },
        reviewBody:
          "We were looking for the best social media marketing company to grow our brand, and we found Nexaim. Their team understood our audience, created engaging content, and delivered real results.",
        publisher: { "@type": "Organization", name: "Nexaim" },
      },
      {
        "@type": "Review",
        itemReviewed: { "@type": "Service", name: "Web Development" },
        reviewRating: { "@type": "Rating", ratingValue: "5", bestRating: "5" },
        author: { "@type": "Person", name: "Hina Waqar" },
        reviewBody:
          "Nexaim delivered a smart, fast, and mobile-friendly website that's modern and clean. The whole process was smooth and exceeded expectations.",
        publisher: { "@type": "Organization", name: "Nexaim" },
      },
      {
        "@type": "Review",
        itemReviewed: { "@type": "Service", name: "Podcast Production" },
        reviewRating: { "@type": "Rating", ratingValue: "5", bestRating: "5" },
        author: { "@type": "Person", name: "Zainab Ali" },
        reviewBody:
          "I only had the idea for a podcast — Nexaim handled everything else, from recording to editing. The quality was absolutely top-notch.",
        publisher: { "@type": "Organization", name: "Nexaim" },
      },
      {
        "@type": "Review",
        itemReviewed: { "@type": "Service", name: "SEO Optimization" },
        reviewRating: { "@type": "Rating", ratingValue: "5", bestRating: "5" },
        author: { "@type": "Person", name: "Farhan Saleem" },
        reviewBody:
          "Our website wasn't showing on Google. Nexaim started SEO work, and the results are great. Highly recommended!",
        publisher: { "@type": "Organization", name: "Nexaim" },
      },
      {
        "@type": "Review",
        itemReviewed: { "@type": "Service", name: "Graphic Design" },
        reviewRating: { "@type": "Rating", ratingValue: "5", bestRating: "5" },
        author: { "@type": "Person", name: "Rabia Sheikh" },
        reviewBody:
          "We needed designs for our brand and Nexaim totally got our vibe. The logos and posts were on point – simple but stylish. Their design sense is truly impressive.",
        publisher: { "@type": "Organization", name: "Nexaim" },
      },
      {
        "@type": "Review",
        itemReviewed: { "@type": "Service", name: "Video Editing" },
        reviewRating: { "@type": "Rating", ratingValue: "5", bestRating: "5" },
        author: { "@type": "Person", name: "Usman Jatt" },
        reviewBody:
          "I record my own videos, but for editing, Nexaim is my go-to team. They make everything look clean, professional, and always deliver on time.",
        publisher: { "@type": "Organization", name: "Nexaim" },
      },
    ],
  };
  return (

    <html>
      <head>
        <meta name="google-site-verification" content="rSmgiUi5hClwP2sfbwSV1xX0POJwTuw5IjXRyxhtECs" />

      </head>
      <body>

        <Script
          id="testimonials-schema"
          type="application/ld+json"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData1) }}
        />
        <Script id="organization-schema" type="application/ld+json" strategy="afterInteractive">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            name: "The Nexaim",
            url: "https://thenexaim.com/",
            logo: "",
            contactPoint: {
              "@type": "ContactPoint",
              telephone: "03432469633",
              contactType: "customer service",
              areaServed: "PK",
              availableLanguage: "en",
            },
            sameAs: [
              "https://www.instagram.com/_thenexaim/",
              "https://www.facebook.com/thenexaim",
            ],
          })}
        </Script>

        <Script id="localbusiness-schema" type="application/ld+json" strategy="afterInteractive">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            name: "The Nexaim",
            image:
              "https://thenexaim.com/_next/image?url=%2Fassets%2F4-small.png&w=256&q=75",
            logo: "",
            "@id": "https://thenexaim.com/",
            url: "https://thenexaim.com/",
            telephone: "03432469633",
            priceRange: "PKR",
            address: {
              "@type": "PostalAddress",
              addressCountry: "PAK",
              addressRegion: "KHI",
            },
            openingHoursSpecification: {
              "@type": "OpeningHoursSpecification",
              dayOfWeek: [
                "Monday",
                "Tuesday",
                "Wednesday",
                "Thursday",
                "Friday",
                "Saturday",
                "Sunday",
              ],
              opens: "09:00",
              closes: "06:00",
            },
          })}
        </Script>
        <Script
          id="product-schema"
          type="application/ld+json"
          strategy="afterInteractive"
        >
          {JSON.stringify({
            "@context": "https://schema.org/",
            "@type": "Product",
            name: "Software House In Karachi - Social Media Marketing Agency in Pakistan | The Nexaim",
            image:
              "https://thenexaim.com/_next/image?url=%2Fassets%2F4-small.png&w=256&q=75",
            description:
              "Nexaim provides professional digital marketing services in Karachi and is recognized as one of the leading social media marketing agencies in Pakistan. We also offer expert SEO, creative graphic design, web design and development, and engaging video animation services. As a trusted company, we deliver innovative solutions for businesses across Pakistan.",
            brand: "The Nexaim",
            aggregateRating: {
              "@type": "AggregateRating",
              ratingValue: "5",
              bestRating: "5",
              worstRating: "4.9",
              ratingCount: "43",
            },
          })}
        </Script>

        <Script
          id="services-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@graph": [
                {
                  "@type": "Service",
                  "@id": "https://thenexaim.com/affordable-digital-marketing-services-in-pakistan",
                  name: "Digital Marketing (overview)",
                  serviceType:
                    "Facebook & Instagram Ads, Social Media Management, E-commerce Scaling, YouTube Video Marketing",
                  url: "https://thenexaim.com/affordable-digital-marketing-services-in-pakistan",
                  description:
                    "Drive Growth with Smart Strategies! Maximize your brand’s online presence through targeted campaigns, social media, and performance-based digital marketing. Nexaim turns clicks into customers.",
                },
                {
                  "@type": "Service",
                  "@id": "https://thenexaim.com/graphic-design-and-video-editing-service",
                  name: "Graphic Design & Video Editing (overview)",
                  serviceType:
                    "Logo Design, Branding, Business Cards, Flyers, Brochures, Infographic & Custom Illustrator, Product Packaging Mockup, YouTube Thumbnail and Channel Art",
                  url: "https://thenexaim.com/graphic-design-and-video-editing-service",
                  description:
                    "Boost Your Brand with Stunning Designs & Scroll-Stopping Videos! Nexaim transforms your raw content into professional-grade visuals and polished video edits. We build strong brand identities and create content that engages, connects, and converts.",
                },
                {
                  "@type": "Service",
                  "@id": "https://thenexaim.com/web-design-and-development-services",
                  name: "Website Design and Development (overview)",
                  serviceType:
                    "Custom Website Development and Design, Redesign Website, Landing Page Design, WordPress design and development, Shopify design and development, Web maintenance and CMS Integration",
                  url: "https://thenexaim.com/web-design-and-development-services",
                  description:
                    "Websites That Work, Perform & Scale! We build fast, secure, and SEO-ready websites designed for user experience, brand impact, and business results—custom-built from the ground up.",
                },
                {
                  "@type": "Service",
                  "@id": "https://thenexaim.com/best-seo-agency-in-pakistan",
                  name: "SEO Services (overview)",
                  serviceType:
                    "On-page SEO, Off-page SEO, Technical SEO, Content Optimization, Website Audit, Geo-location SEO, AEO",
                  url: "https://thenexaim.com/best-seo-agency-in-pakistan",
                  description:
                    "Get Found Where It Matters! Boost your visibility with Nexaim’s smart SEO solutions. From on-page optimization to technical SEO, we help you rank higher and grow organically.",
                },
                {
                  "@type": "Service",
                  "@id": "https://thenexaim.com/services/podcast-production",
                  name: "Podcast Services (overview)",
                  serviceType:
                    "Podcast concept development, Audio and Video Editing, Social Media Reels & Audiograms, Guest Booking & Collaboration, Performance Tracking & Analytics Report",
                  url: "https://thenexaim.com/services/podcast-production",
                  description:
                    "Turn Your Voice into a Brand! From recording to promotion, Nexaim helps you launch and grow a podcast that connects, engages, and builds a loyal audience.",
                },
              ],
            }),
          }}
        />
        <main>
          <div className={cn("overflow-hidden bg-[#0E0C15] pt-[4.75rem] lg:pt-[5.25rem]")}>
            <Navbar />
            <Hero />
            <Benefits />
            <AboutUs />
            {/* <Collaboration /> */}
            <Blog />
            <TestimonialsSection />
            <ContactForm />

            <Footer />
          </div>
          <ButtonGradient />
        </main>
        <Script id="fb-pixel" strategy="afterInteractive">
          {`
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '2052579801877656');
            fbq('track', 'PageView');
          `}
        </Script>

        <noscript>
          <img
            height="1"
            width="1"
            style={{ display: "none" }}
            src="https://www.facebook.com/tr?id=2052579801877656&ev=PageView&noscript=1"
            alt="fb-pixel"
          />
        </noscript>
      </body>
    </html>

  );
}
