import React, { useEffect, useRef } from "react";
import Lottie from "lottie-web";
import animate from "lottie-web";

const Hero = () => {
  const container = useRef(null);

  useEffect(() => {
    Lottie.loadAnimation({
      container: container.current,
      renderer: "svg",
      loop: true,
      autoplay: true,
      animationData: require("./coder-2.json"),
    });
    animate.setSpeed(0.5);
  }, []);

  return (
    <section className="pr-5 md:my-8 md:space-y-0 patterns">
      <div className="flex flex-col md:flex-row ">
        <div className="flex p-8 flex-col mt-8 md:mt-24 ">
          <h1 className="text-4xl font-bold md:text-7xl">Hello. I’m Chetan</h1>
          <p className="tracking-wide leading-relaxed pt-5 pb-10">
            I have a passion for developing user-friendly, accessible and
            responsive websites. I never stop learning and for me, each new
            project is another adventure.{" "}
          </p>
        </div>
        <div className="p-8 container" ref={container}></div>
      </div>
    </section>
  );
};

export default Hero;
