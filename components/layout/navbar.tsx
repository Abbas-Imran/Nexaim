"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { waylogo } from "@/public/assets/index";
import { cn } from "@/lib/utils";
import { navigation, serviceDropdown } from "@/constants";
import Button from "../atoms/button";
import MenuSvg from "../svg/menu-svg";
import { HamburgerMenu } from "../design/navbar";
import { useRouter } from "next/navigation";
import { div } from "framer-motion/client";

type Props = {};

const Navbar = (props: Props) => {
  const [hash, setHash] = useState<string>("hero");
  const [openNavigation, setOpenNavigation] = useState<boolean>(false);

  useEffect(() => {
    const dynamicNavbarHighlight = () => {
      const sections = document.querySelectorAll("section[id]");

      sections.forEach((current) => {
        if (current === null) return;

        const sectionId = current.getAttribute("id");
        // @ts-ignore
        const sectionHeight = current.offsetHeight;
        const sectionTop = current.getBoundingClientRect().top - sectionHeight * 0.2;

        if (sectionTop < 0 && sectionTop + sectionHeight > 0 && hash !== sectionId) {
          setHash(`#${sectionId as string}`);
        }
      });
    };

    window.addEventListener("scroll", dynamicNavbarHighlight);

    return () => window.removeEventListener("scroll", dynamicNavbarHighlight);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const [openServices, setOpenServices] = useState<boolean>(false);

  const toggleServices = () => setOpenServices(!openServices);


  const toggleNavigation = () => setOpenNavigation(!openNavigation);
  const handleClick = () => {
    if (!openNavigation) return;

    setOpenNavigation(false);
  };

  const n = useRouter();
  const handleNavigateHomePage = () => {
    n.push("/");
  }
  return (

    <div className="fixed left-0 top-0 w-full z-50  ">
      <div
        className={cn(
          `w-full  bg-black  lg:backdrop-blur-sm`,
          openNavigation ? "bg-black" : "bg-black"
        )}
      >
        <div className={cn(`flex items-center px-5 max-lg:py-2 lg:px-7.5 xl:px-10`)}>
          <div
            onClick={handleNavigateHomePage}
            className={cn(`flex gap-2 items-center text-xl font-bold xl:mr-8 text-[#B500A5]`)}
          >

            <img src={'/marketing-agency-for-startups/waylogo.png'} className="w-[80px] h-[80px]" alt="waylogo" />
            The Nexaim
          </div>

          <nav
            className={cn(
              `fixed inset-x-0 bottom-0 top-20 hidden bg-n-8 lg:static lg:mx-auto lg:flex lg:bg-transparent`,
              openNavigation ? "flex" : "hidden"
            )}
          >
            <div
              className={cn(
                "relative z-2 flex flex-col items-center justify-center m-auto lg:flex-row"
              )}
            >
              {navigation.map((item) => (
                <div key={item.id} className="relative group">
                  {item.title === "Services" ? (
                    <>
                      <button
                        onClick={toggleServices}
                        className={cn(
                          `block relative font-code uppercase tracking-wide`,
                          "px-6 py-6 md:py-8 lg:-mr-0.25",
                          item.onlyMobile && "lg:hidden",
                          "text-[1.4rem] md:text-[1.6rem] lg:text-[1.2rem] font-extrabold",
                          "text-white/80 hover:text-[#B500A5] lg:leading-6 xl:px-12",
                          "flex items-center gap-2"
                        )}
                      >
                        <span className="relative group">
                          {item.title}
                          <span className="absolute left-0 bottom-0 w-0 h-[3px] bg-[#B500A5] transition-all duration-300 group-hover:w-full"></span>
                        </span>

                        {/* Down arrow icon */}
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className={`w-4 h-4 transition-transform duration-300 ${openServices ? "rotate-180" : "rotate-0"}`}
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      </button>

                      {/* Dropdown */}
                      <div
                        className={cn(
                          // Base styles
                          "bg-black/95 backdrop-blur-md rounded-lg shadow-lg z-50",
                          // Desktop: absolute positioning, show on hover (independent of openServices)
                          "absolute left-0 top-full hidden lg:group-hover:block mt-1 min-w-[220px]",
                          // Mobile: static positioning, show when openServices is true
                          openServices ? "block static mt-2 w-full" : ""
                        )}
                      >
                        {serviceDropdown.map((service) => (
                          <Link
                            key={service.title}
                            href={service.url}
                            onClick={handleClick}
                            className="block px-6 py-3 text-white hover:bg-[#B500A5]/20 transition-colors whitespace-nowrap text-center lg:text-left"
                          >
                            {service.title}
                          </Link>
                        ))}
                      </div>
                    </>
                  ) : (
                    <Link
                      href={item.url}
                      onClick={handleClick}
                      className={cn(
                        `block relative font-code uppercase tracking-wide`,
                        "px-6 py-6 md:py-8 lg:-mr-0.25",
                        item.onlyMobile && "lg:hidden",
                        "text-[1.4rem] md:text-[1.6rem] lg:text-[1.2rem] font-extrabold",
                        item.url === hash
                          ? "text-white border-b-[3px] border-[#B500A5]"
                          : "text-white/80 hover:text-[#B500A5]",
                        "lg:leading-6 xl:px-12"
                      )}
                    >
                      <span className="relative group">
                        {item.title}
                        <span className="absolute left-0 bottom-0 w-0 h-[3px] bg-[#B500A5] transition-all duration-300 group-hover:w-full"></span>
                      </span>
                    </Link>
                  )}
                </div>

              ))}


            </div>
            <HamburgerMenu />
          </nav>

          <Link
            href="mailto:info@thenexaim.com"
            className="button mr-8 hidden text-n-1/50 transition-colors  hover:text-n-1 lg:block"
          >
            Email Us
          </Link>

          <a target="_blank" href="https://wa.me/+923432469633" className="relative hidden lg:inline-flex  items-center justify-center border-[1px] border-[#ce66c5] px-5 py-2 overflow-hidden font-semibold text-white rounded-2xl bg-transparent"
          >CHAT US</a>


          <Button className="ml-auto lg:hidden" px="px-3" onClick={toggleNavigation}>
            <MenuSvg openNavigation={openNavigation} />
          </Button>
        </div>
      </div>
    </div >
  );
};

export default Navbar;
