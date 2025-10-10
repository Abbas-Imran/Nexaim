"use client";

import React, { useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Section from "../../layout/section";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { images, heroIcons } from "@/constants";
import Button from "../../atoms/button";
import { BackgroundCircles, BottomLine, Gradient } from "../../design/hero";
import { ScrollParallax } from "react-just-parallax";
import Generating from "../../atoms/generating";
import Notification from "./notification";
import CompanyLogos from "./company-logos";
import { Play } from "lucide-react";
import { ReactTyped } from "react-typed";
import Link from "next/link";
type Props = {};

const Hero = (props: Props) => {
  const parallaxRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const togglePlay = () => {
    if (!videoRef.current) return;

    if (isPlaying) {
      videoRef.current.pause();
    } else {
      videoRef.current.play();
    }
  };
  return (
    <Section
      className={cn("bannerbackgroundimage min-h-[37rem] flex items-center justify-center text-center")}
      id="hero"
    >
      <div className="flex flex-col items-center justify-center">
        <h1 className="text-5xl font-semibold md:text-7xl mb-6 text-white uppercase tracking-wide">
          Best{" "}
          <span className="relative inline-block text-[#B500A5]">
            <ReactTyped
              strings={["Digital Marketing"]}
              typeSpeed={40}
              backSpeed={0}   // no backspacing
              loop={false}    // run once
              showCursor={false} // hide blinking cursor after finish
            />
          </span>

          {" "}Agency
        </h1>


        <h2 className=" text-3xl text-white mb-6">
          All-in- <span className="font-semibold">One</span> Powerhouse
        </h2>
        <p
          className="text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed"
        >
          {" "}
          <span className="font-bold">Nexaim </span>,
          is a professional digital marketing agency helping businesses grow online with expert SEO, social media marketing, and branding solutions.
        </p>


        <div className="flex gap-4 mt-6">
          <motion.button
            initial={{ x: -200, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative inline-flex items-center justify-center border-[1px] border-[#ce66c5] px-8 py-3 overflow-hidden font-semibold text-white rounded-2xl bg-transparent"
          >
            <a target="_blank" href="https://wa.me/+923432469633" className="relative z-10">CHAT US</a>
          </motion.button>

          <motion.button
            initial={{ x: -200, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.3 }} // delay for stagger effect
            className="relative inline-flex items-center justify-center  px-8 py-3 overflow-hidden font-semibold text-white rounded-2xl bg-[#B500A5]"
          >
            <Link href={"/affordable-digital-marketing-services-in-pakistan"} className="relative z-10">WHAT WE DO</Link>
          </motion.button>
        </div>
      </div>
      {/* <BottomLine /> */}
    </Section>

  );
};

export default Hero;
