import slackAppPage from "@/assets/images/slack-app-page.png";
import slackLandingPage from "@/assets/images/slack-landingpage.png";
import Image from "next/image";
import CheckIcon from "@/assets/icons/check-circle.svg";
import ArrowUpright from "@/assets/icons/arrow-up-right.svg";
import grainImage from "@/assets/images/grain.jpg";
import SectionHeader from "@/components/section-header";
import { Card } from "@/components/card";
import Button from "@/components/button";

const portfolioProjects = [
  {
    company: "Slack App Clone",
    year: "2024",
    title: "Slack App Clone",
    results: [
      {
        title:
          "A fully functional Slack clone with a similar UI and user experience",
      },
      {
        title: "Realtime messaging powered by Socket.IO & Convex",
      },
      { title: "Online/offline status tracking" },
      { title: "Channel & DM management" },
      { title: "Modern UI built with Next.js 15 + Tailwind CSS" },
      { title: "Secure authentication using NextAuth.js" },
      { title: "File & image uploads" },
      { title: "Fast message & user search" },
    ],
    link: "",
    image: slackAppPage,
  },
  {
    company: "Slack Landing Page Clone",
    year: "2024",
    title: "Slack Landing Page Clone",
    results: [
      {
        title:
          "Pixel-perfect Slack landing page clone with a sleek and responsive design",
      },
      {
        title:
          "Built with Next.js 15 + Tailwind CSS for high performance and smooth animations",
      },
      { title: "Fully responsive" },
      {
        title: " Interactive UI elements that mimic the original Slack website",
      },
    ],
    link: "",
    image: slackLandingPage,
  },
];

export const ProjectsSection = () => {
  return (
    <section className="pb-16 lg:py-24">
      <div className="container">
        <SectionHeader
          eyebrow="Real-world Results"
          title="Featured Projects"
          description="See how i transform concepts into engaging digital experiences."
        />
        <div className="flex flex-col mt-10 md:mt-20 gap-20 min-h-screen">
          {portfolioProjects.map((project, idx) => (
            <Card
              key={project.title}
              className="px-8 pt-8 pb-0 md:pt-12 md:px-10 lg:pt-16 lg:px-20 sticky top-16"
              style={{ top: `calc(64px + ${idx * 60}px)` }}
            >
              <div
                className="absolute inset-0 -z-10 opacity-5"
                style={{ backgroundImage: `url(${grainImage.src})` }}
              ></div>
              <div className="lg:grid lg:grid-cols-2 lg:gap-16">
                <div className="lg:pb-16">
                  <div className="bg-gradient-to-r from-emerald-300 to-sky-400 inline-flex gap-2 font-bold uppercase tracking-widest text-sm text-transparent bg-clip-text">
                    <span>{project.company}</span>
                    <span>&bull;</span>
                    <span>{project.year}</span>
                  </div>
                  <h3 className="font-serif text-2xl mt-2 md:mt-5 md:text-4xl">
                    {project.title}
                  </h3>
                  <hr className="border-t-2 border-white/5 mt-4 md:mt-5" />
                  <ul className="flex flex-col gap-4 mt-4 md:mt-5">
                    {project.results.map((result) => (
                      <li
                        key={result.title}
                        className="flex gap-2 text-sm md:text-base text-white/50"
                      >
                        <div>
                          <CheckIcon className="size-5 md:size-6 relative text-[#3EE7B7]" />
                        </div>
                        <span>{result.title}</span>
                      </li>
                    ))}
                  </ul>
                  <a href={project.link}>
                    <Button className="border-emerald-300 mt-2 font-semibold bg-gradient-to-r from-emerald-300 to-sky-400">
                      <span>Visit Live Site</span>
                      <ArrowUpright className="size-4" />
                    </Button>
                  </a>
                </div>
                <div className="relative">
                  <Image
                    src={project.image}
                    alt={project.title}
                    className="mt-8 lg:mt-0 -mb-4 md:-mb-0 lg:absolute lg:h-full lg:w-auto lg:max-w-none rounded-tl-xl rounded-bl-xl"
                  />
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
