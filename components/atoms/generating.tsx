import { images } from "@/constants";
import { cn } from "@/lib/utils";
import Image from "next/image";
import React from "react";

const Generating = ({ className }: { className?: string }) => {
  return (
    <div
      className={cn(
        "flex h-14 items-center rounded-[1.7rem] bg-n-8/80 px-6 text-white text-base",
        className
      )}
    >
      <Image
        src={images.nexiam}
        className="mr-4 size-5 animate-spin"
        alt="loading"
        width={5}
        height={5}
      />
      {/* L&apos;avenir est là */}
    </div>
  );
};

export default Generating;
