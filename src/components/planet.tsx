import Image, { StaticImageData } from "next/image";
import React from "react";
import { twMerge } from "tailwind-merge";

const Planet = ({
  className,
  img,
}: {
  className?: string;
  img: StaticImageData;
}) => {
  return (
    <div>
      <Image
        height={500}
        src={img}
        alt="planet"
        className={twMerge("size-10 rounded-full", className)}
      />
    </div>
  );
};

export default Planet;
