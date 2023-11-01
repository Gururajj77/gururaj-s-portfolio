import Link from "next/link";
import React from "react";

const HomeSideBar = () => {
  return (
    <div className=" mt-5 lg:mt-0 flex gap-8 lg:flex-col justify-start  rotate-0 h-auto  lg:min-h-screen w-40">
      <a className="hover:line-through lg:rotate-[-90deg]">L-IN</a>

      <a className="hover:line-through lg:rotate-[-90deg]">GH</a>

      <a className="hover:line-through lg:rotate-[-90deg]">RE</a>
    </div>
  );
};

export default HomeSideBar;
