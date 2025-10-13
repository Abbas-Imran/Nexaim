"use client";
import { motion } from "framer-motion";
import CountUp from "react-countup";
const AboutUs = () => {
    return (
        <div id="collaboration" className="relative min-h-[70rem] w-full bg-gradient-to-b from-black/80 to-black/90 overflow-hidden">
            {/* Background Image */}
            <div className="aboutusbackground absolute inset-0 opacity-40"></div>

            {/* Content */}
            <div className="relative z-10 container mx-auto px-8 py-20">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-24">

                    {/* Left: Heading + Button */}
                    <motion.div
                        className="flex flex-col items-start lg:text-left space-y-8"
                        initial={{ x: -200, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        transition={{ duration: 1, ease: "easeOut" }}
                        viewport={{ once: true }}
                    >
                        <h2 className="lg:text-[8rem] md:text-[5rem] text-[3rem] font-extrabold lg:leading-[10rem] md:leading-[5rem] leading-[3rem] text-white uppercase">
                            WHY CHOOSE  <br /> US ?
                        </h2>
                        <button className="px-10 py-4 font-semibold rounded-lg  text-lg  text-white border-[1px] border-[#ce66c5]">
                            +{" "}<span>
                                <CountUp start={0} end={10} duration={5} />

                            </span> Experience
                        </button>
                    </motion.div>

                    {/* Right: Description */}
                    <motion.div
                        className="text-white text-2xl font-medium leading-relaxed"
                        initial={{ x: 200, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
                        viewport={{ once: true }}
                    >
                        <p className="font-extralight">
                            At Nexaim, we specialize in creating impactful digital experiences that help businesses thrive in the online world. With expertise in content management, graphic design, social media strategy, web development, video editing, product shoots, event management, and podcast production, we provide end-to-end solutions tailored to your brand’s needs. Our team believes in innovation, collaboration, and precision, ensuring every project stands out with creativity and excellence. Backed by 100+ successful projects, transparent pricing, a certified & experienced team, and real client reviews, we deliver results that build trust and long-term partnerships. Whether it’s managing your social media, designing stunning visuals, or crafting engaging content, Nexaim is your trusted partner in digital growth. Let’s bring your vision to life and build a powerful online presence together!
                        </p>
                    </motion.div>
                </div>
            </div>
        </div>
    );
};

export default AboutUs;
