import React from "react";
import SocialIcons from "./socialIcons";
const PageTitle = ({ title, subtitle = "", center = false, icons = true }) => (
  <div className='w-full font-light text-white mt-14 lg:mt-32 dark:text-white'>
    <h1
      className={`text-4xl sm:text-5xl lg:text-6xl mb-2 ${
        center && "md:text-center"
      }`}>
      {title}
    </h1>
    {subtitle && (
      <p className='w-11/12 text-2xl sm:text-3xl lg:text-4xl sm:w-5/6 md:w-11/12 lg:w-4/5 xl:w-3/5'>
        {subtitle}
      </p>
    )}
    {icons && <SocialIcons />}
  </div>
);

export default PageTitle;
