import React from "react";
import { CircleLoader } from "react-spinners";

const Loader = () => {
  return (
    <section id="loader" className="hero min-h-screen">
      <div className="flex-col justify-center hero-content lg:flex-row">
        <CircleLoader color="#e779c1" />
        <h1 className="text-xl">
          Please wait while Neural Net is loading{" "}
          <span className=" mr-1 animate-pulse-slow">.</span>
          <span className=" mr-1 animate-pulse-medium">.</span>
          <span className=" mr-1 animate-pulse-fast">.</span>
        </h1>
      </div>
    </section>
  );
};

export default Loader;
