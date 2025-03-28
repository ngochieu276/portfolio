import memojiImage from "@/assets/images/memoji-computer.png";
import ArrowDown from "@/assets/icons/arrow-down.svg";
import Image from "next/image";
import milkyWayImage from "@/assets/images/stars_milky_way.jpg";
import HeroOrbit from "@/components/hero-orbit";
import Button from "@/components/button";
import Planet from "@/components/planet";
import Mercury from "@/assets/images/mercury.jpg";
import Neptune from "@/assets/images/neptune.jpg";
import Uranus from "@/assets/images/uranus.jpg";
import Saturn from "@/assets/images/saturn.jpg";
import Jupiter from "@/assets/images/jupiter.jpg";
import Mars from "@/assets/images/mars.jpg";
import Venus from "@/assets/images/venus.jpg";
import Earth from "@/assets/images/earth.jpg";
import Sun from "@/assets/images/sun.jpg";

export const HeroSection = ({ id }: { id: string }) => {
  return (
    <div
      className="py-32 md:py-48 lg:py-60 relative z-0 overflow-x-clip min-h-screen"
      id={id}
    >
      <div className="absolute inset-0 -z-20 [mask-image:linear-gradient(to_bottom,white,black_95%,transparent)]">
        <div
          className="absolute inset-0 -z-30 opacity-100"
          style={{
            backgroundImage: `url(${milkyWayImage.src})`,
            backgroundPosition: "center",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
          }}
        ></div>
        <div className="size-[620px] hero-ring"></div>
        <div className="size-[820px] hero-ring"></div>
        <div className="size-[1020px] hero-ring"></div>
        <div className="size-[1220px] hero-ring"></div>
        <div className="size-[1420px] hero-ring"></div>
        <div className="size-[1620px] hero-ring"></div>
        <HeroOrbit size={80} rotation={0} shouldSpin spinDuration="90s">
          <Planet img={Sun} className="size-20" />
        </HeroOrbit>
        <HeroOrbit size={240} rotation={178} shouldOrbit orbitDuration="16s">
          <Planet img={Mercury} className="size-6" />
        </HeroOrbit>
        <HeroOrbit
          size={350}
          rotation={144}
          shouldOrbit
          orbitDuration="44s"
          shouldSpin
          spinDuration="10s"
        >
          <Planet img={Venus} className="size-12" />
        </HeroOrbit>
        <HeroOrbit size={380} rotation={240} shouldOrbit orbitDuration="52s">
          <Planet img={Earth} className="size-12" />
        </HeroOrbit>
        <HeroOrbit
          size={450}
          rotation={-72}
          shouldOrbit
          orbitDuration="60s"
          shouldSpin
          spinDuration="15s"
        >
          <Planet img={Mars} className="size-8" />
        </HeroOrbit>
        <HeroOrbit
          size={650}
          rotation={20}
          shouldOrbit
          orbitDuration="88s"
          spinDuration="44s"
        >
          <Planet img={Jupiter} className="size-20" />
        </HeroOrbit>
        <HeroOrbit
          size={720}
          rotation={320}
          shouldOrbit
          orbitDuration="100s"
          spinDuration="48s"
        >
          <Planet img={Saturn} className="size-20" />
        </HeroOrbit>
        <HeroOrbit
          size={780}
          rotation={-54}
          shouldOrbit
          orbitDuration="108s"
          spinDuration="54s"
        >
          <Planet img={Uranus} className="size-16" />
        </HeroOrbit>
        <HeroOrbit
          size={910}
          rotation={79}
          shouldOrbit
          orbitDuration="120s"
          shouldSpin
          spinDuration="60s"
        >
          <Planet img={Neptune} className="size-16" />
        </HeroOrbit>
      </div>
      <div className="container inset-0 z-10">
        <div className="flex flex-col items-center">
          <Image
            src={memojiImage}
            className="size-[100px]"
            alt="Person peeking from behind laptop"
          />
          <div className="bg-gray-950 border border-gray-800 px-4 py-1.5 inline-flex items-center gap-4 rounded-lg">
            <div className="bg-green-500 size-2.5 rounded-full relative">
              <div className="bg-green-500 absolute inset-0 rounded-full animate-ping-large"></div>
            </div>
            <div className="text-sm font-medium">
              Available for new projects
            </div>
          </div>
        </div>
        <div className="max-w-xl mx-auto">
          <h1
            className="font-serif font-semibold text-3xl md:text-5xl text-center mt-8 tracking-wide
          bg-gradient-to-bl from-emerald-300 to-sky-400 text-transparent bg-clip-text"
          >
            Building Exceptional User Experiences
          </h1>
          <p className="mt-4 text-center text-white/600 md:text-lg">
            I specialize in transforming designs into functional,
            high-performing web applications. Let&apos;s discuss your next
            project.
          </p>
        </div>
        <div className="flex flex-col md:flex-row justify-center items-center mt-8 gap-4">
          <a href="#projects">
            <Button className="bg-transparent text-white hover:border-white/15">
              <span className="font-semibold">Explore my work</span>
              <ArrowDown className="size-4" />
            </Button>
          </a>
          <a href="#contact">
            <Button className="border-emerald-300 bg-gradient-to-r from-emerald-300 to-sky-400">
              <span>👋</span>
              <span className="font-semibold">Let&apos;s Connect</span>
            </Button>
          </a>
        </div>
      </div>
    </div>
  );
};
