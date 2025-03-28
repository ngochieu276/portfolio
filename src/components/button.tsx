import React, { PropsWithChildren } from "react";
import { twMerge } from "tailwind-merge";

const Button = ({
  children,
  className,
}: PropsWithChildren<{ className?: string }>) => {
  return (
    <button
      className={twMerge(
        "relative inline-flex items-center gap-2  h-12 px-6 rounded-xl transition-all duration-500 hover:bg-gradient-to-r hover:from-emerald-300 hover:to-sky-400 group",
        "bg-white text-gray-900 border border-white ",
        className
      )}
    >
      <div className="hidden group-hover:block animate-ping-small [animate-duration:2s] absolute inset-0 rounded-xl bg-gradient-to-r from-emerald-300 to-sky-400 -z-20"></div>
      {children}
    </button>
  );
};

export default Button;
