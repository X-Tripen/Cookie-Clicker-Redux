import React from "react";
import SocialMediaList from "./SocialMediaList/SocialMediaList";

function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <div className=" bg-yellow-900 bg-opacity-20  text-neutral-300 text-md xs:text-lg px-5 xs:px-10 flex flex-col pt-0 md:pt-5 justify-center items-center text-center  gap-y-10 md:flex-row md:gap-y-0 pb-8">
      <p className="w-full max-w-xl  md:pr-12 md:w-1/2 pt-5 border-b-2 border-neutral-800 md:border-none pb-8 md:pb-0  font-norma items">
        "What's the plan?" helps you organize and manage your tasks with ease.
        With a simple and intuitive interface, you can quickly add,complete, set
        due dates and prioritize your tasks. Keep track of your progress and
        never forget an important task again.
      </p>
      <div className="w-full max-w-xl  border-l-none border-neutral-800 pl-0 md:pl-12 md:w-1/2 md:border-l-2  pt-0 md:pt-5">
        <p className=" font-normal">
          This website was made by
          <span className="font-semibold text-purple-500 opacity-90 text-xl tracking-wide ">
            {" "}
            Hubert Paprocki
          </span>
          . All rights reserved. Copyright © {currentYear}
        </p>
        <SocialMediaList />
      </div>
    </div>
  );
}

export default Footer;
