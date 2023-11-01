import React from "react";
import HomeSideBar from "./HomeSideBar";
import HomeIntro from "./HomeIntro";
import HomeNav from "./HomeNav";
const HomePage = () => {
  return (
    <div className="grid lg:grid-cols-6 min-h-screen">
      <div className="lg:col-span-1">
        <HomeSideBar />
      </div>
      <div className="lg:col-span-1">
        <HomeIntro />
      </div>
      <div className="lg:col-span-1"></div>
      {/* <div className="lg:col-span-1"></div> */}
      <div className="lg:col-span-1">
        <HomeNav />
      </div>
    </div>
  );
};

export default HomePage;
