import React from "react";
import Section from "@/components/layout/section";
import { collabApps, collabContent, collabText, images } from "@/constants";
import Image from "next/image";
import Button from "@/components/atoms/button";
import { cn } from "@/lib/utils";
import { LeftCurve, RightCurve } from "@/components/design/collaboration";
import { div } from "framer-motion/client";
import ButtonGradient from "@/components/svg/button-gradient";
import { Gradient } from "@/components/design/hero";
import { GradientLight } from "@/components/design/benefits";

type Props = {};

const Collaboration = (props: Props) => {
  return (
    <div
      id="collaboration"
      style={{
        // background: "url(/image.png)",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* <Gradient /> */}
      {/* <ButtonGradient /> */}
      <div className="bg-gradient-to-b from-n-8/0 to-n-8/90 relative">
        <Section className="z-2 relative" crosses>
          {/* <GradientLight /> */}
          <h2 className="h2 relative z-10 max-w-4xl m-auto max-md:mb-3 text-white text-center px-4">
            Helping People Create Beautiful Content At
          </h2>
          <p className="body-2 relative z-10 mt-4 text-n-4 text-center lg:mx-auto lg:max-w-2xl font-light px-4">
            {collabText}
          </p>
          <div className="container lg:flex">
            <div className="max-w-[25rem]">

              <ul className="mb-10 max-w-[22rem] md:mb-3">
                {collabContent.map((item) => (
                  <li key={item.id} className="py-0">
                    <div className="flex items-center py-4 justify-center">
                      <Image
                        className="transition-transform duration-300 ease-in-out hover:scale-105 "
                        src={item.image}
                        width={item.width}
                        height={item.height}
                        alt="check"
                      />

                    </div>
                  </li>
                ))}
                <li className="py-0">
                  <div className="flex items-center py-4 justify-center">
                    <Button className="text-white md:mx-7 lg:mx-8" href="https://wa.me/+923432469633">
                      Try it now
                    </Button>

                  </div>
                </li>
              </ul>

            </div>

            <div className="mt-[124px] lg:ml-auto xl:w-[38rem]">
              <div className="relative left-1/2 flex aspect-square w-[22rem] -translate-x-1/2 scale-75 rounded-full border border-[#B500A5] md:scale-100">
                <div className="m-auto flex aspect-square w-60 rounded-full border border-[#B500A5]">
                  <div className="m-auto aspect-square w-24 rounded-full bg-conic-gradient p-[0.2rem]">
                    <div className="flex h-full items-center justify-center rounded-full bg-n-8">
                      <Image src={images.nexiam} width={48} height={48} alt="brainwave" />
                    </div>
                  </div>
                </div>

                <ul className="spin-transform" style={{ animationDuration: "4s" }}>
                  {collabApps.map((item, index) => (
                    <li
                      key={item.id}
                      className={cn(
                        "absolute left-1/2 top-0 -ml-[1.6rem] h-1/2 origin-bottom",
                        `rotate-${index * 45}`
                      )}
                    >
                      <div
                        className={cn(
                          "relative -top-[1.6rem] flex w-[3.2rem] h-[3.2rem] bg-n-7 border border-n-1/15 rounded-xl",
                          `-rotate-${index * 45}`
                        )}
                      >
                        <Image
                          src={item.icon}
                          alt={item.title}
                          width={36}
                          height={36}
                          className="m-auto brightness-0 invert"
                        />
                      </div>
                    </li>
                  ))}
                </ul>

                <LeftCurve />
                <RightCurve />
              </div>
            </div>
          </div>
        </Section>
      </div>
    </div>
  );
};

export default Collaboration;
