"use client";
import Link from "next/link";
import React from "react";
import { useRouter } from "next/navigation";
import { motion, useInView } from "framer-motion";
import Section from "@/components/layout/section";
import Image from "next/image";
import Arrow from "@/components/svg/arrow";
import Slider from "react-slick";
import { useMediaQuery } from "react-responsive";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { benefits } from "@/constants";

// ⬇️ Next & Prev Arrows
const NextArrow = ({ onClick }: any) => (
  <motion.button
    whileHover={{ scale: 1.1 }}
    whileTap={{ scale: 0.95 }}
    onClick={onClick}
    className="absolute -right-6 top-1/2 z-20 flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-r from-[#B500A5] to-purple-600 shadow-lg hover:shadow-2xl transition-all"
  >
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="white" className="h-6 w-6">
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
    </svg>
  </motion.button>
);

const PrevArrow = ({ onClick }: any) => (
  <motion.button
    whileHover={{ scale: 1.1 }}
    whileTap={{ scale: 0.95 }}
    onClick={onClick}
    className="absolute -left-6 top-1/2 z-20 flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-r from-purple-600 to-[#B500A5] shadow-lg hover:shadow-2xl transition-all"
  >
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="white" className="h-6 w-6">
      <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
    </svg>
  </motion.button>
);

const Benefits = () => {
  const sliderRef = React.useRef<Slider>(null);
  const router = useRouter();
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true });

  // ✅ Responsive breakpoints using react-responsive
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
    // centerMode: false,
    // variableWidth: false,
  };

  return (
    <Section>
      {/* Animated background */}
      <motion.div
        className="absolute inset-0 -z-10 bg-gradient-to-br from-[#090017] via-[#25004A] to-[#4B007C] opacity-90"
        animate={{
          backgroundPosition: ["0% 0%", "100% 100%", "0% 0%"],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "linear",
        }}
        style={{
          backgroundSize: "200% 200%",
        }}
      />

      <div id="features" className="container relative z-[10] py-20">
        <h3 className="text-4xl my-5 text-center md:text-6xl font-bold text-white mb-6 leading-tight">
          <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-500 bg-clip-text text-transparent">
            Services We Offer
          </span>
        </h3>

        <div className="mb-10 flex flex-wrap gap-10" ref={ref}>
          <Slider ref={sliderRef} {...settings} className="w-full [&_.slick-slide]:px-2 md:[&_.slick-slide]:px-3 lg:[&_.slick-slide]:px-4">

            {benefits.map((item) => (
              <motion.div
                key={item.id}
                onClick={() => router.push(item.url)}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8 }}
                className="relative group cursor-pointer rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 border border-[#db87d3]/50 hover:border-[#db87d3] h-[280px] md:h-[320px]"
              >
                {/* Background Image */}
                {item.imageUrl && (
                  <div className="absolute inset-0">
                    <Image
                      src={item.imageUrl}
                      fill
                      alt={item.title}
                      className="object-cover opacity-40
                       group-hover:opacity-30 transition-opacity duration-500"
                    />
                    {/* Dark overlay */}
                    <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-black/80" />
                  </div>
                )}

                {/* Content */}
                <div className="relative z-10 flex flex-col items-center justify-center h-full p-6 md:p-8 text-center">
                  {/* Purple Icon */}
                  {/* {item.iconUrl && (
                    <div className="mb-5 transform group-hover:scale-110 transition-all duration-300">
                      <div className="relative flex items-center justify-center">
                    
                        <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full blur-xl group-hover:blur-2xl transition-all duration-300 scale-150"></div>

                      
                        <div className="relative w-32 h-32 md:w-36 md:h-36 lg:w-40 lg:h-40 flex items-center justify-center">
                          <Image
                            src={item.iconUrl}
                            width={160}
                            height={160}
                            alt={`${item.title} icon`}
                            className="w-full h-full object-contain drop-shadow-lg"
                            style={{
                              filter: "brightness(0) saturate(100%) invert(48%) sepia(79%) saturate(2476%) hue-rotate(258deg) brightness(118%) contrast(119%)",
                              transition: "all 0.3s ease"
                            }}
                          />
                        </div>
                      </div>
                    </div>
                  )} */}

                  {/* Large White Uppercase Title */}
                  <h4 className="text-[1.7rem] md:text-2xl lg:text-[1.9rem] font-extrabold text-white uppercase tracking-wide mb-1 group-hover:text-[#B500A5] transition-colors duration-300 leading-tight">
                    {item.title}
                  </h4>

                  {/* Learn More Link */}
                  <div>
                    <Link
                      href={item.url}
                      className={`${item.title.trim() == 'SEO' ? 'ml-8' : ''} mt-4 inline-flex items-center text-lg font-semibold text-[#B500A5] group-hover:text-white transition-colors duration-300`}

                      onClick={(e) => e.stopPropagation()}
                    >
                      Learn More
                      <span className={`  ml-2 transform group-hover:translate-x-1 transition-transform duration-300`}>
                        <Arrow />
                      </span>
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </Slider>
        </div>
      </div>
    </Section>
  );
};

export default Benefits;
