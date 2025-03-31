import ArrowUpRightIcon from "@/assets/icons/arrow-up-right.svg";
import grainImage from "@/assets/images/grain.jpg";
import { Facebook, Github, Instagram, Linkedin } from "lucide-react";

export const ContactSection = ({ id }: { id: string }) => {
  return (
    <div className="py-16 pt-12 min-h-96" id={id}>
      <div className="container ">
        <div className="relative bg-gradient-to-r from-indigo-300 to-violet-500 text-gray-900 text-center md:text-left py-8 px-8 rounded-3xl overflow-hidden z-0">
          <div
            className="absolute inset-0 opacity-15 -z-10"
            style={{
              backgroundImage: `url(${grainImage.src})`,
            }}
          ></div>
          <div className="flex flex-col gap-8 md:gap-16 items-center md:flex-row">
            <div>
              <h2 className="font-serif text-2xl md:text-3xl font-semibold">
                Let&apos;s create something amazing together
              </h2>
              <p className="text-sm mt-2 md:text-base">
                Ready to bring your next project to life? Let&apos;s connect and
                discuss how I can help you achieve your goals.
              </p>
            </div>
            <div className="grid grid-cols-4 gap-8 ">
              <Social link="https://www.instagram.com/ngoc_hieu276">
                <Instagram />
              </Social>
              <Social link="https://www.facebook.com/hieu.ngoc.10048379">
                <Facebook />
              </Social>
              <Social link="https://www.linkedin.com/in/hi%E1%BA%BFu-ng%E1%BB%8Dc-40b613148">
                <Linkedin />
              </Social>
              <Social link="https://github.com/ngochieu276">
                <Github />
              </Social>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const Social = ({
  link,
  children,
}: {
  link?: string;
  children: React.ReactNode;
}) => {
  return (
    <a
      href={link}
      target="_blank"
      className="size-12 rounded-full bg-white flex items-center justify-center cursor-pointer group hover:bg-gradient-to-r hover:from-violet-800 hover:to-indigo-300 transition-all duration-500
      hover:shadow-white hover:shadow-lg"
    >
      <div className=" group-hover:text-white">{children}</div>
    </a>
  );
};
