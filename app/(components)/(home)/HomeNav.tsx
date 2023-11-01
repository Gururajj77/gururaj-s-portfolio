import React from "react";

const HomeNav = () => {
  return (
    <div className="lg:min-h-screen flex flex-col justify-center align-middle text-custom-sm lg:text-custom">
      <p className="transition-transform hover:italic hover:translate-x-1 hover:duration-300">
        WORK
      </p>
      <p className="transition-transform hover:italic hover:translate-x-1 hover:duration-300">
        ABOUT
      </p>
      <p className="transition-transform hover:italic hover:translate-x-1 hover:duration-300">
        CONTACT
      </p>
    </div>
  );
};

export default HomeNav;
