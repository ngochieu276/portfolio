"use client";

import { Card } from "@/components/card";
import SectionHeader from "@/components/section-header";
import bookingImage from "@/assets/images/book-cover.png";
import Image from "next/image";

import JavascriptIcon from "@/assets/icons/square-js.svg";
import HTMLIcon from "@/assets/icons/html5.svg";
import CssIcon from "@/assets/icons/css3.svg";
import ReactIcon from "@/assets/icons/react.svg";
import NextJs from "@/assets/icons/nextjs.svg";
import Nodejs from "@/assets/icons/nodejs.svg";
import Typescript from "@/assets/icons/typescript.svg";
import Sass from "@/assets/icons/sass.svg";

import mapImage from "@/assets/images/map.png";
import smileEmoji from "@/assets/images/memoji-smile.png";
import { CardHeader } from "@/components/card-header";
import ToolboxItems from "@/components/toolbox-items";
import { motion } from "framer-motion";
import { useRef } from "react";

const toolboxItems = [
  {
    title: "JavaScript",
    iconType: JavascriptIcon,
  },
  {
    title: "CSS3",
    iconType: CssIcon,
  },
  {
    title: "React",
    iconType: ReactIcon,
  },
  {
    title: "NextJs",
    iconType: NextJs,
  },
  {
    title: "NodeJs",
    iconType: Nodejs,
  },
  {
    title: "Sass",
    iconType: Sass,
  },
  {
    title: "Typescript",
    iconType: Typescript,
  },
  {
    title: "HTML5",
    iconType: HTMLIcon,
  },
];

const hobbies = [
  {
    title: "Painting",
    emoji: "🎨",
    left: "5%",
    top: "5%",
  },
  {
    title: "Photography",
    emoji: "📷",
    left: "50%",
    top: "5%",
  },
  {
    title: "Gaming",
    emoji: "🎮",
    left: "10%",
    top: "35%",
  },
  {
    title: "Hiking",
    emoji: "🥾",
    left: "35%",
    top: "45%",
  },
  {
    title: "Music",
    emoji: "🎵",
    left: "70%",
    top: "45%",
  },
  {
    title: "Fitness",
    emoji: "🏋️",
    left: "5%",
    top: "65%",
  },
  {
    title: "Reading",
    emoji: "📖",
    left: "45%",
    top: "70%",
  },
];

export const AboutSection = ({ id }: { id: string }) => {
  const constrainRef = useRef(null);
  return (
    <div className="py-20 bg:py-28 relative overflow-x-clip" id={id}>
      <div className="absolute top-0 left-0 w-screen h-1/2 overflow-hidden inset-0 -z-20 -mt-[180px]">
        <div className="absolute inset-0 bg-[#020112] bg-opacity-50"></div>
        <video
          className="w-full h-full object-cover"
          autoPlay
          loop
          muted
          playsInline
        >
          <source src="/videos/cards-video.webm" type="video/webm" />
          Your browser does not support
        </video>
      </div>
      <div className="container">
        <SectionHeader
          eyebrow="About Me"
          title="A Glimpse Into my world"
          description="Learn more about who I am, what I do"
        />
        <div className="mt-20 flex flex-col gap-8">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-5 ">
            <Card className="h-[320px] md:col-span-2">
              <CardHeader
                title="My Reads"
                description="Explore the books shaping my perspective."
              />
              <div className="w-40 mx-auto mt-2 md:mt-0">
                <Image src={bookingImage} alt="Book cover" />
              </div>
            </Card>
            <Card className="h-[320px] md:col-span-3">
              <CardHeader
                title="My Toolbox"
                description="Explore the technologies and tools I use to create digital
                experiences."
              />
              <ToolboxItems
                items={toolboxItems}
                className="mt-6"
                itemWrapperClassName="animate-move-left [animation-duration:20s]"
              />
              <ToolboxItems
                items={toolboxItems}
                className="mt-6"
                itemWrapperClassName="animate-move-right [animation-duration:20s]"
              />
            </Card>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-5 lg:grid-cols-3 gap-8">
            <Card className="h-[320px] p-0 flex flex-col md:col-span-3 lg:col-span-2">
              <CardHeader
                title="Beyond the Code"
                description="Explore my interests and hobbies beyond the digital."
                className="px-6 py-6"
              />
              <div className="relative flex-1" ref={constrainRef}>
                {hobbies.map((hobby) => (
                  <motion.div
                    key={hobby.title}
                    className="absolute inline-flex items-center gap-2 px-6 bg-gradient-to-r from-indigo-300 to-violet-500 rounded-full py-1.5"
                    style={{
                      left: hobby.left,
                      top: hobby.top,
                    }}
                    drag
                    dragConstraints={constrainRef}
                  >
                    <span className="font-medium text-gray-950">
                      {hobby.title}
                    </span>
                    <span>{hobby.emoji}</span>
                  </motion.div>
                ))}
              </div>
            </Card>
            <Card className="h-[320px] p-0  md:col-span-2 lg:col-span-1">
              <Image
                src={mapImage}
                alt="map"
                className="h-full w-full object-cover object-left-top"
              />
              <div
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 size-20 rounded-full  
            after:content-[''] after:absolute after:inset-0 after:outline after:outline-2 after:-outline-offset-2 after:outline-gray-950/30 after:rounded-full"
              >
                <div className="animate-ping [animate-duration:2s] absolute inset-0 rounded-full bg-gradient-to-r from-indigo-300 hover:to-violet-500 -z-20"></div>
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-indigo-300 to-violet-500 -z-10"></div>
                <Image src={smileEmoji} alt="smile" />
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};
