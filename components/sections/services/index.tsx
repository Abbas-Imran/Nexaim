"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";
import Section from "@/components/layout/section";
import Heading from "../../atoms/heading";
import { brainwaveServices, brainwaveServicesIcons, images } from "@/constants";
import Image from "next/image";
import Generating from "../../atoms/generating";
import { PhotoChatMessage, Gradient } from "@/components/design/services";
import { cn } from "@/lib/utils";
import { ul } from "framer-motion/client";

type Props = {};

const Services = (props: Props) => {
  const [selectedItem, setSelectedItem] = useState<number>(2);
  const audioRef = useRef<HTMLAudioElement>(null);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const serviceDetails = [
    {
      heading: "Digital Marketing",
      text: "Drive Growth with Smart Strategies! Maximize your brand’s online presence through targeted campaigns, social media, and performance-based digital marketing. Nexaim turns clicks into customers.",
      // imageUrl: "/assets/service/service1.jpg",
      imageUrl: "/assets/service/service1.jpg",
    },
    {
      heading: " Graphic Design",
      text: "Designs That Speak for Your Brand! From branding to visuals, Nexaim creates impactful and memorable designs that leave a strong impression and support your business identity.",
      imageUrl: "/assets/service/service2.jpg",
    },
    {
      heading: "Video Editing",
      text: "Create Videos That Captivate & Convert! Nexaim transforms your raw footage into polished, high-quality videos. We enhance visuals, add effects, and craft seamless edits that engage your audience and elevate your brand.",
      // imageUrl: "/assets/service/service3.jpg",
      imageUrl: "/assets/services/service-2.png",
    },
    {
      heading: "Web Development",
      text: "Websites That Work, Perform & Scale! We build fast, secure, and SEO-ready websites designed for user experience, brand impact, and business results custom-built from the ground up.",
      imageUrl: "/assets/service/service4.jpg",
    },
    {
      heading: "SEO",
      text: "Get Found Where It Matters! Boost your visibility with Nexaim’s smart SEO solutions. From on-page optimization to technical SEO, we help you rank higher and grow organically.",
      imageUrl: "/assets/service/service4.jpg",
    },
    {
      heading: "Podcast",
      text: "Turn Your Voice into a Brand! From recording to promotion, Nexaim helps you launch and grow a podcast that connects, engages, and builds a loyal audience.",
      imageUrl: "/assets/service/service4.jpg",
    },
  ];

  useEffect(() => {
    if (selectedItem === 1 && audioRef.current) {
      audioRef.current.play();
    } else {
      if (audioRef.current) {
        audioRef.current.pause();
      }
    }
  }, [selectedItem]);

  return (
    <Section id="how-to-use">
      <div className="container">
        <Heading
          title="We craft impactful digital experiences that elevate brands and drive results."
          text="We create impactful digital experiences that drive results. From content management to design and social media strategy, we help businesses stand out online"
        />




      </div>
      
      {selectedItem === 1 && <audio ref={audioRef} src="/assets/bot/bots.mp3" />}
    </Section >
  );
};

export default Services;
