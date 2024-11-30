import React from "react";
import theicon from "./assets/fetal.png";

const Home = () => {
  return (
    <div className=" font-sans  bg-[#F0F8FF] px-24 ">
      <section className="relative text-black py-20">
        <div className="container mx-auto flex flex-col md:flex-row items-center px-4">
          <div className="md:w-1/2">
            <h2 className="text-2xl font-bold mb-4">
              Leveraging Data to Improve Fetal Health Outcomes
            </h2>
            <p className="mb-6">
              Using advanced data analytics and predictive modeling, we aim to
              identify risks early and provide actionable insights to improve
              the health of mothers and newborns.

            </p>
            <a
              href="#cta"
              className="bg-blue-400  px-6 py-3 font-semibold rounded hover:bg-blue-500"
            >
              Learn More
            </a>
          </div>
          <div className="md:w-1/2 mt-10 md:mt-0">
          <img
  src={theicon}
  alt="Fetal Health"
  className="ml-20  w-96 h-96" 
/>

          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
