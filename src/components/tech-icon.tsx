import React from "react";

const TechIcon = ({ component }: { component: React.ElementType }) => {
  const Component = component;
  return (
    <div>
      <Component className="size-10 fill-[url(#tech-icon-gradient)]" />
      <svg className="size-0 absolute">
        <linearGradient id="tech-icon-gradient">
          <stop offset={"0%"} stopColor="rgb(165 180 252)" />
          <stop offset={"100%"} stopColor="#8b5cf6" />
        </linearGradient>
      </svg>
    </div>
  );
};

export default TechIcon;
