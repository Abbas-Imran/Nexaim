"use client";

import React, { useRef } from "react";
import { motion } from "framer-motion";
import Section from "../../layout/section";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Button from "../../atoms/button";
import { BackgroundCircles, BottomLine, Gradient } from "../../design/hero";
import { ScrollParallax } from "react-just-parallax";
import Generating from "../../atoms/generating";
import Notification from "../hero/notification";
import { images } from "@/constants";

interface HeroContent {
  heading: string;
  highlight: string;
  paragraphs: string[];
  button: {
    text: string;
    link: string;
  };
  image: string;
  backgroundImage: string;
  curveImage: string;
}

interface Props {
  content: HeroContent;
}

const ServiceHero = ({ content }: Props) => {
  const parallaxRef = useRef(null);

  return (
    <Section
      className={cn("pt-[12rem] -mt-[5.25rem]")}
      crosses
      crossesOffset="lg:translate-y-[5.25rem]"
      customPaddings
      id="hero"
    >
      <div className="container relative" ref={parallaxRef}>
        {/* Headline + Text */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-1 mx-auto mb-16 max-w-[62rem] text-center md:mb-20 lg:mb-24"
        >
          <h1 className="h1 mb-6 text-white">
            {content.heading}{" "}
            <span className="relative inline-block">
              {content.highlight}
              <Image
                src={content.curveImage}
                className="absolute left-0 top-full w-full xl:-mt-2"
                width={624}
                height={28}
                alt="curve"
              />
            </span>
          </h1>

          {content.paragraphs.map((text, idx) => (
            <p key={idx} className={cn("body-1 max-w-3xl mx-auto mb-6 text-n-2 lg:mb-8")}>
              {text}
            </p>
          ))}

          <Button href={content.button.link} white>
            {content.button.text}
          </Button>
        </motion.div>

        {/* Video Area */}

      </div>

      <BottomLine />
    </Section>
  );
};

export default ServiceHero;
