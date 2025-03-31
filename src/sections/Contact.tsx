"use client";
import grainImage from "@/assets/images/grain.jpg";
import { Facebook, Github, Instagram, Linkedin } from "lucide-react";
import { useState } from "react";
import { toast } from "react-toastify";

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
              <ContactForm />
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

function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    const res = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });

    if (res.ok) {
      toast.success("Email was sended. Will reply you as soon as possible");
      setFormData({ name: "", email: "", message: "" });
    }
    setLoading(false);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 mt-4 rounded">
      <input
        type="text"
        name="name"
        placeholder="Your Name"
        onChange={handleChange}
        className="p-2 border w-full rounded-md"
        required
        value={formData.name}
      />
      <input
        type="email"
        name="email"
        placeholder="Your Email"
        onChange={handleChange}
        className="p-2 border w-full rounded-md"
        required
        value={formData.email}
      />
      <textarea
        name="message"
        placeholder="Your Message"
        onChange={handleChange}
        className="p-2 border w-full rounded-md"
        required
        rows={5}
        value={formData.message}
      />
      <button
        type="submit"
        disabled={loading}
        className=" text-white bg-gray-900 inline-flex justify-center items-center px-6 h-12 rounded-xl ga-2 w-max border border-gray-900"
      >
        {loading ? "Sending..." : "Send"}
      </button>
    </form>
  );
}
