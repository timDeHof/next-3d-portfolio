import React from 'react';
import SocialIcons from './socialIcons';

const PageTitle = ({ title, subtitle = '', center = false, icons = true }) => (
  <div className='mt-14 w-full font-light text-white dark:text-white lg:mt-32'>
    <h1
      className={`mb-2 text-4xl sm:text-5xl lg:text-6xl ${
        center && 'md:text-center'
      }`}
    >
      {title}
    </h1>
    {subtitle && (
      <p className='w-11/12 text-2xl sm:w-5/6 sm:text-3xl md:w-11/12 lg:w-4/5 lg:text-4xl xl:w-3/5'>
        {subtitle}
      </p>
    )}
    {icons && <SocialIcons />}
  </div>
);

export default PageTitle;
