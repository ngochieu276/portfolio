import milkyWayImage from "@/assets/images/stars_milky_way.jpg";

const Loading = () => {
  return (
    <div className="h-screen w-screen">
      <div
        className="absolute inset-0 -z-30 opacity-100"
        style={{
          backgroundImage: `url(${milkyWayImage.src})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      ></div>
    </div>
  );
};

export default Loading;
