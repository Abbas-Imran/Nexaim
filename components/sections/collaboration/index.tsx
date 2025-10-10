"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { section } from "framer-motion/client";

type prop = {};

const Collaboration = (Prop: prop) => {
  // Animation Variants
  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  const fadeLeft = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  const fadeRight = {
    hidden: { opacity: 0, x: 50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  const staggerContainer = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const industries = [
    { name: "Education", img: "/assets/industries/Education.jpg" },
    { name: "Fashion", img: "/assets/industries/Fashion.jpg" },
    { name: "Food", img: "/assets/industries/FOOD.jfif" },
    { name: "Hospital", img: "/assets/industries/Hospital.jpg" },
    { name: "Start Up", img: "/assets/industries/Startup.jpeg" },
    { name: "Technology", img: "/assets/industries/Technology.jpeg" },
  ];

  return (
    <section className="min-h-screen py-20 px-4 relative overflow-hidden bg-gradient-to-b from-[#020617] to-[#0b0f1a]">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(120,119,198,0.1),transparent_50%)]" />
      <div className="absolute top-20 right-20 w-32 h-32 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full opacity-20 blur-3xl" />
      <div className="absolute bottom-40 left-10 w-24 h-24 bg-gradient-to-r from-pink-400 to-orange-500 rounded-full opacity-20 blur-2xl" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.h2
            variants={fadeLeft}
            className="text-5xl md:text-6xl font-extrabold text-white mb-6 leading-tight"
          >
            Industries{" "}
            <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              We Work With
            </span>
          </motion.h2>

          <motion.p
            variants={fadeRight}
            className="text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed"
          >
            At{" "}
            <span className="font-semibold text-cyan-400">Nexaim Digital Agency</span>,
            we empower businesses worldwide with cutting-edge digital marketing
            solutions. From startups to enterprises, we help brands{" "}
            scale globally, attract
            customers, and stay ahead of the competition.
          </motion.p>
        </motion.div>

        {/* Animated Grid */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-8 gap-y-12"
        >
          {industries.map((item, index) => (
            <motion.div key={index} variants={fadeUp}>
              <div className="relative flex flex-col gap-4 p-4 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md shadow-lg hover:shadow-cyan-500/20 hover:-translate-y-2 transition-all duration-300">
                <div className="relative overflow-hidden rounded-xl group">
                  <Image
                    src={item.img}
                    className="h-48 w-full object-cover transform group-hover:scale-110 transition-transform duration-500 rounded-xl"
                    width={400}
                    height={200}
                    alt={item.name}
                  />
                  {/* Gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-60"></div>
                </div>

                <div className="text-center">
                  <p className="text-[1.75rem] font-bold uppercase bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent tracking-wide drop-shadow-sm">
                    {item.name}
                  </p>
                  <p className="text-sm text-gray-400 mt-1">
                    Transforming the {item.name.toLowerCase()} industry with digital innovation.
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Collaboration;
