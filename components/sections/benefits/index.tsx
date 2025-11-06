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
          <Slider ref={sliderRef} {...settings} className="w-full">
            {benefits.map((item) => (
              <motion.div
                key={item.id}
                onClick={() => router.push(item.url)}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8 }}
                className="relative border-2 border-[#db87d3] group cursor-pointer md:max-w-sm rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500"
              >

                <div className="absolute inset-0 overflow-hidden">
                  {/* <div className="absolute top-32 right-10 w-40 h-40 bg-color-2/10 rounded-full blur-2xl"></div> */}
                  {/* <div className="absolute bottom-20 left-10 w-32 h-32 bg-[#83567f] rounded-full blur-xl"></div> */}
                  {/* <div className="absolute top-1/2 right-1/4 w-28 h-28 bg-color-6/20 rounded-full blur-lg"></div> */}
                  {/* <div className="absolute bottom-1/3 left-1/3 w-36 h-36 bg-color-1/10 rounded-full blur-2xl"></div> */}
                </div>

                {/* {item.imageUrl && (
                  <Image
                    src={item.imageUrl}
                    width={380}
                    
                    height={362}
                    alt={item.title}
                    className="absolute inset-0 size-full object-cover opacity-30 group-hover:opacity-40 transition duration-500"
                  />
                )} */}

                <div className="relative z-10 flex min-h-[22rem] flex-col p-8">
                  <h4 className="text-xl font-extrabold mb-4 text-white group-hover:text-[#B500A5] transition-colors duration-300">
                    {item.title}
                  </h4>
                  <p className="text-sm mb-6 text-gray-300 text-[1rem] leading-relaxed">{item.text}</p>
                  <Link
                    href={item.url}
                    className="mt-auto flex items-center text-sm font-semibold text-[#B500A5] group-hover:text-white transition-colors duration-300"
                  >
                    Learn More
                    <span className="ml-2 transform group-hover:translate-x-1 transition-transform duration-300">
                      <Arrow />
                    </span>
                  </Link>
                </div>

                <div className="absolute inset-0 rounded-2xl border border-white/10 backdrop-blur-md"></div>
              </motion.div>
            ))}
          </Slider>
        </div>
      </div>
    </Section>
  );
};

export default Benefits;
