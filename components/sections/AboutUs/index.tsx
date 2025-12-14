"use client";
import { motion } from "framer-motion";
import CountUp from "react-countup";
import Link from "next/link";

const AboutUs = () => {
    return (
        <div
            id="collaboration"
            className="relative min-h-[55rem] w-full bg-gradient-to-b from-black/80 to-black/90 overflow-hidden"
        >
            {/* Background Image */}
            <div className="aboutusbackground absolute inset-0 opacity-40"></div>

            {/* Content */}
            <div className="relative z-10 px-4 py-10 sm:px-6 md:px-10 lg:px-20 xl:px-32 2xl:px-40 lg:ml-[10rem] lg:mt-12">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 sm:gap-14 md:gap-16 lg:gap-20 xl:gap-24 items-center">

                    {/* Left: Heading + Button */}
                    <motion.div
                        className="flex flex-col items-center lg:items-start text-center lg:text-left space-y-6 sm:space-y-8"
                        initial={{ x: -150, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        transition={{ duration: 1, ease: "easeOut" }}
                        viewport={{ once: true }}
                    >
                        <h2
                            className="text-white uppercase font-extrabold 
        text-3xl sm:text-4xl md:text-5xl lg:text-[5rem] xl:text-[6rem]
        leading-tight sm:leading-[3.5rem] md:leading-[4rem] lg:leading-[5.5rem] xl:leading-[6.5rem]"
                        >
                            WHY CHOOSE US?
                        </h2>

                        <button
                            className="px-6 sm:px-8 py-3 font-semibold rounded-lg text-base sm:text-lg text-white 
        border border-[#ce66c5] hover:bg-[#ce66c5]/20 transition"
                        >
                            +{" "}
                            <span>
                                <CountUp start={0} end={10} duration={5} />
                            </span>{" "}
                            Years Experience
                        </button>
                    </motion.div>

                    {/* Right: Description */}
                    <motion.div
                        className="text-white text-[15px] sm:text-[16px] md:text-[17px] lg:text-[18px] 
      font-medium leading-relaxed"
                        initial={{ x: 150, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
                        viewport={{ once: true }}
                    >
                        <p className="font-extralight mb-6">
                            At Nexaim, we specialize in creating impactful digital experiences that help businesses thrive in the online world.
                            With expertise in content management, graphic design, social media strategy, web development, video editing,
                            product shoots, event management, and podcast production, we provide end-to-end solutions tailored to your brand’s needs.
                            Our team believes in innovation, collaboration, and precision, ensuring every project stands out with creativity and excellence.
                            Backed by 100+ successful projects, transparent pricing, a certified & experienced team, and real client reviews,
                            we deliver results that build trust and long-term partnerships.
                        </p>

                        <p className="font-semibold text-[#B500A5] mb-6">
                            Let’s bring your vision to life and build a powerful online presence together!
                        </p>

                        <Link href="/graphic-design-and-video-editing-service">
                            <button
                                className="inline-flex items-center justify-center px-6 sm:px-8 py-3 font-semibold 
          text-white text-sm sm:text-base rounded-xl sm:rounded-2xl 
          bg-[#B500A5] hover:bg-[#ce66c5] transition"
                            >
                                WHAT WE DO
                            </button>
                        </Link>
                    </motion.div>
                </div>
            </div>

        </div>
    );
};

export default AboutUs;