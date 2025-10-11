"use client";
import Link from "next/link";
import React from "react";
import { useRouter } from "next/navigation";
import { motion, useInView } from "framer-motion";
import Section from "@/components/layout/section";
import Image from "next/image";
import Arrow from "@/components/svg/arrow";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { benefits } from "@/constants";

const NextArrow = (props: any) => {
  const { onClick } = props;
  return (
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
};

const PrevArrow = (props: any) => {
  const { onClick } = props;
  return (
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
};

const Benefits = () => {
  const sliderRef = React.useRef<Slider>(null);
  const router = useRouter();
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true });

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 2500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      { breakpoint: 768, settings: { slidesToShow: 1 } },
      { breakpoint: 1024, settings: { slidesToShow: 2 } },
      { breakpoint: 1280, settings: { slidesToShow: 3 } },
      { breakpoint: 1536, settings: { slidesToShow: 4 } },
    ],
  };

  return (
    <Section>
      {/* 🌈 Animated gradient background */}
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
        <h2 className="text-4xl my-5 text-center md:text-6xl font-bold text-white mb-6 leading-tight">
          <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-500 bg-clip-text text-transparent">
            Services We Offer
          </span>
        </h2>

        <div className="mb-10 flex flex-wrap gap-10" ref={ref}>
          <Slider ref={sliderRef} {...settings} className="w-full">
            {benefits.map((item) => (
              <motion.div
                key={item.id}
                onClick={() => router.push(item.url)}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8 }}
                className="relative group cursor-pointer md:max-w-sm rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500"
              >
                {/* Card gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-tr from-[#1c1c1c]/90 via-[#2a2a2a]/80 to-[#B500A5]/60 opacity-90 group-hover:opacity-100 transition-opacity duration-500"></div>

                {/* Background image */}
                {item.imageUrl && (
                  <Image
                    src={item.imageUrl}
                    width={380}
                    height={362}
                    alt={item.title}
                    className="absolute inset-0 size-full object-cover opacity-30 group-hover:opacity-40 transition duration-500"
                  />
                )}

                {/* Card content */}
                <div className="relative z-10 flex min-h-[22rem] flex-col p-8">
                  <h5 className="text-xl font-extrabold mb-4 text-white group-hover:text-[#B500A5] transition-colors duration-300">
                    {item.title}
                  </h5>
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
