

import React from "react";
import { type LucideIcon } from "lucide-react";
import Link from "next/link";


export interface Service {
  icon: LucideIcon;
  title: string;
  description: string;
  color: string;
}

interface Props {
  heading: string;
  gradientText: string;
  subtitle: string;
  description: string;
  services: Service[];
  primaryCta?: { text: string; link?: string };
  secondaryCta?: { text: string; link?: string };
  title: string,
  subheading: string,

}

export default function ServicesSectionDetails({
  heading,
  gradientText,
  subtitle,
  description,
  services,
  primaryCta,
  secondaryCta,
  title,
  subheading
}: Props) {


  return (
    <div className="bg-n-8 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-32 right-10 w-40 h-40 bg-color-2/10 rounded-full blur-2xl"></div>
        <div className="absolute bottom-20 left-10 w-32 h-32 bg-color-4/15 rounded-full blur-xl"></div>
        <div className="absolute top-1/2 right-1/4 w-28 h-28 bg-color-6/20 rounded-full blur-lg"></div>
        <div className="absolute bottom-1/3 left-1/3 w-36 h-36 bg-color-1/10 rounded-full blur-2xl"></div>
      </div>

      <div className="relative z-10 container py-4 lg:py-6 md:py-4">








        {/* Header Section */}
        <div className="text-center ">
          {
            heading.trim() == "Website Development Services" ?
              (
                <h2

                  className="text-4xl  text-center md:text-6xl font-bold text-white  leading-tight"
                >

                  <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                    {heading}
                  </span>
                </h2>
              ) : <h2 className={`h2   text-n-1 `}>
                {heading}
                <span className="block bg-gradient-to-r from-color-1 to-color-6 bg-clip-text text-transparent">
                  {gradientText}
                </span>
              </h2>
          }


          <p className="body-1 text-n-3 text-lg max-w-4xl mx-auto mb-2">{subtitle}</p>
          <p className="body-2 text-n-4  max-w-3xl mx-auto mb-4">{description}</p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {services.map((service, index) => {
            const Icon = service.icon;
            const parts = service.description.split(/(SEO)/gi);

            return (
              <div
                key={index}
                className="group bg-n-7/50 backdrop-blur-sm border border-n-6 rounded-2xl p-8 transition-all duration-300 hover:bg-n-6 hover:border-color-1/30 hover:transform hover:scale-105"
              >
                {/* Icon */}
                <div
                  className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-${service.color}/10 border border-${service.color}/20 mb-6 group-hover:bg-${service.color}/20 transition-all duration-300`}
                >
                  <Icon
                    className={`w-8 h-8 text-${service.color} group-hover:scale-110 transition-transform duration-300`}
                  />
                </div>

                {/* Title & Description */}
                <h3 className="h5 text-n-1 mb-4 group-hover:text-color-1 transition-colors duration-300">
                  {
                    service.title.toLowerCase().includes("seo") ?
                      (
                        <Link className="hover:underline" href={"/best-seo-agency-in-pakistan"}>
                          {service.title}
                        </Link>
                      ) : service.title.toLowerCase().includes("video editing") ?
                        (
                          <Link className="hover:underline" href={"/graphic-design-and-video-editing-service"}>
                            {service.title}
                          </Link>
                        )
                        :
                        service.title.toLowerCase().includes("graphics") ?
                          (
                            <Link className="hover:underline" href={"/graphic-design-and-video-editing-servicen"}>
                              {service.title}
                            </Link>
                          )
                          :
                          (
                            service.title
                          )
                  }

                </h3>
                <p className="body-2 text-n-4 max-w-3xl mx-auto">
                  {parts.map((part, index) =>
                    part.toLowerCase() === "seo" ? (
                      <Link
                        key={index}
                        href="/best-seo-agency-in-pakistan"
                        className="text-blue-600 hover:underline"
                      >
                        {part}
                      </Link>
                    ) :
                      part.toLowerCase() == "graphics" ? (
                        <Link
                          key={index}
                          href="/graphic-design-and-video-editing-service"
                          className="text-blue-600 hover:underline"
                        >
                          {part}
                        </Link>
                      )
                        : (
                          part
                        )
                  )}
                </p>
                {/* Hover Line */}
                <div
                  className={`w-0 h-0.25 bg-gradient-to-r from-${service.color} to-transparent mt-6 group-hover:w-full transition-all duration-500`}
                ></div>
              </div>
            );
          })}
        </div>

        {/* CTA Section */}
        {(primaryCta || secondaryCta) && (
          <div className="text-center mt-16">
            <div className="bg-gradient-to-r from-n-7/80 to-n-6/80 backdrop-blur-sm border border-n-5 rounded-2xl p-8 max-w-4xl mx-auto">
              <h3 className="h5 text-n-1 mb-4">{title}</h3>
              <p className="body-2 text-n-3 mb-6 max-w-2xl mx-auto">
                {subheading}
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                {primaryCta && (
                  <a
                    target="_blank"
                    href={primaryCta.link || "#"}
                    className="button px-8 py-3 bg-gradient-to-r from-color-1 to-color-6 text-n-1 rounded-full hover:opacity-90 transition-all duration-300 transform hover:scale-105"
                  >
                    {primaryCta.text}
                  </a>
                )}
                {secondaryCta && (
                  <a
                    href={secondaryCta.link || "#"}
                    className="button px-8 py-3 border border-color-1/50 text-color-1 rounded-full hover:bg-color-1/10 transition-all duration-300"
                  >
                    {secondaryCta.text}
                  </a>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
