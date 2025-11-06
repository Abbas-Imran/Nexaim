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
            <div className="relative z-10 px-6 py-10 md:px-12 lg:px-20 lg:ml-[15rem] lg:mt-12 xl:px-40">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">

                    {/* Left: Heading + Button */}
                    <motion.div
                        className="flex flex-col items-start text-center lg:text-left space-y-8"
                        initial={{ x: -200, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        transition={{ duration: 1, ease: "easeOut" }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-white uppercase font-extrabold 
              text-3xl sm:text-5xl md:text-6xl  lg:text-[6rem] 
              leading-[3rem] sm:leading-[4rem] md:leading-[5rem] lg:leading-[7rem]">
                            WHY CHOOSE  US ?
                        </h2>

                        <button className="px-8 py-3 font-semibold rounded-lg text-lg text-white border border-[#ce66c5] hover:bg-[#ce66c5]/20 transition">
                            +{" "}
                            <span>
                                <CountUp start={0} end={10} duration={5} />
                            </span>{" "}
                            Years Experience
                        </button>
                    </motion.div>

                    {/* Right: Description */}
                    <motion.div
                        className="text-white text-[16px] sm:text-[18px] font-medium leading-relaxed"
                        initial={{ x: 200, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
                        viewport={{ once: true }}
                    >
                        <p className="font-extralight mb-6">
                            At Nexaim, we specialize in creating impactful digital experiences that help businesses thrive in the online world. With expertise in content management, graphic design, social media strategy, web development, video editing, product shoots, event management, and podcast production, we provide end-to-end solutions tailored to your brand’s needs. Our team believes in innovation, collaboration, and precision, ensuring every project stands out with creativity and excellence. Backed by 100+ successful projects, transparent pricing, a certified & experienced team, and real client reviews, we deliver results that build trust and long-term partnerships.
                        </p>
                        <p className="font-semibold text-[#B500A5] mb-6">
                            Let’s bring your vision to life and build a powerful online presence together!
                        </p>
                        <button className="relative inline-flex items-center justify-center px-8 py-3 font-semibold text-white rounded-2xl bg-[#B500A5] hover:bg-[#ce66c5] transition">
                            <Link href="/graphic-design-and-video-editing-service" className="relative z-10">
                                WHAT WE DO
                            </Link>
                        </button>
                    </motion.div>
                </div>
            </div>
        </div>
    );
};

export default AboutUs;
