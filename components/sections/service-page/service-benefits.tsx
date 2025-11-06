"use client"
import React from "react"
import { motion, useInView } from "framer-motion"
import Section from "@/components/layout/section"
import Heading from "../../atoms/heading"
import Image from "next/image"
import Arrow from "@/components/svg/arrow"
import { GradientLight } from "@/components/design/benefits"
import ClipPath from "@/components/svg/clip-path"
import Link from "next/link"

export interface BenefitItem {
  id: number | string
  title: string
  text: string
  backgroundUrl: string
  imageUrl?: string
  light?: boolean
}

interface Props {
  sectionTitle: string
  benefits: BenefitItem[]
}

const ServiceBenefits = ({ sectionTitle, benefits }: Props) => {
  const ref = React.useRef(null)
  const isInView = useInView(ref, { once: true })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: {
      opacity: 0,
      y: 60,
      scale: 0.95,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
  }

  return (
    <Section id="features">
      <div className="container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h2 className="text-4xl  text-center md:text-6xl font-bold text-white mb-10 leading-tight">

            {sectionTitle.split(" ").length > 4 ? (
              <>
                <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                  {sectionTitle.split(" ").slice(0, 4).join(" ")}
                </span>
                <br />

                <span className="bg-gradient-to-r from-cyan-400 via-purple-400  to-pink-400 bg-clip-text text-transparent">
                  {sectionTitle.split(" ").slice(4).join(" ")}
                </span>
              </>
            ) : (
              <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                {sectionTitle}
              </span>
            )}
          </h2>

        </motion.div>

        <motion.div
          ref={ref}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {benefits.map((item, index) => (
            <motion.div
              key={item.id}
              variants={itemVariants}
              className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-n-8/50 to-n-8/80 backdrop-blur-sm border border-n-6/20 hover:border-n-4/30 transition-all duration-500"
              whileHover={{
                y: -8,
                transition: { duration: 0.3, ease: "easeOut" },
              }}
            >
              {/* Background Image with Overlay */}
              <div className="absolute inset-0 overflow-hidden rounded-2xl">
                <div
                  className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20 group-hover:opacity-30 transition-opacity duration-500"
                  style={{
                    backgroundImage: `url(${item.backgroundUrl})`,
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-br from-n-8/60 via-n-8/40 to-transparent" />
              </div>

              {/* Content */}
              <div className="relative z-20 flex flex-col h-full min-h-[12rem] p-8">
                <div className="flex-1">
                  <motion.h3
                    className="text-xl font-semibold text-white mb-4 leading-tight"
                    initial={{ opacity: 0 }}
                    animate={isInView ? { opacity: 1 } : {}}
                    transition={{ delay: index * 0.1 + 0.3 }}
                  >
                    {item.title.toLowerCase().includes("website") ? (
                      <Link
                        href="/web-design-and-development-services"
                        className=" hover:underline"
                      >
                        {item.title}
                      </Link>
                    ) : (
                      item.title
                    )}
                  </motion.h3>

                  <motion.p
                    className="text-n-3 leading-relaxed text-sm mb-8"
                    initial={{ opacity: 0 }}
                    animate={isInView ? { opacity: 1 } : {}}
                    transition={{ delay: index * 0.1 + 0.4 }}
                  >
                    {item.text}
                  </motion.p>
                </div>

                {/* CTA Link */}
                {/* <motion.a
                  href="https://wa.me/+923432469633"
                  className="inline-flex items-center gap-3 text-n-1 hover:text-white transition-colors duration-300 group/link"
                  initial={{ opacity: 0 }}
                  animate={isInView ? { opacity: 1 } : {}}
                  transition={{ delay: index * 0.1 + 0.5 }}
                >
                  <span className="text-xs font-bold uppercase tracking-wider">Learn More</span>
                  <div className="transform group-hover/link:translate-x-1 transition-transform duration-300">
                    <Arrow />
                  </div>
                </motion.a> */}
              </div>

              {/* Hover Image Overlay */}
              {item.imageUrl && (
                <div className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-500 rounded-2xl overflow-hidden">
                  <Image
                    src={item.imageUrl || "/placeholder.svg"}
                    width={380}
                    height={362}
                    alt={item.title}
                    className="w-full h-full object-cover"
                  />
                </div>
              )}

              {/* Gradient Light Effect */}
              {item.light && (
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <GradientLight />
                </div>
              )}

              {/* Subtle Border Glow */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-transparent via-n-4/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              {/* ClipPath for additional styling */}
              <ClipPath />
            </motion.div>
          ))}
        </motion.div>

        {/* Background Decoration */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-radial from-n-4/5 via-transparent to-transparent opacity-20 pointer-events-none" />
      </div>
    </Section>
  )
}

export default ServiceBenefits
