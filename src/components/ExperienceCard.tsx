import React from 'react';
import { VerticalTimelineElement } from 'react-vertical-timeline-component';
import Image from 'next/image';

export const ExperienceCard = ({
  title,
  icon,
  iconBg,
  date,
  points,
  companyName,
}) => (
  <VerticalTimelineElement
    contentStyle={{
      background: '#1d1836',
      color: '#fff',
    }}
    contentArrowStyle={{ borderRight: '7px solid #232631' }}
    date={date}
    iconStyle={{ background: iconBg }}
    icon={
      <div className='flex h-full w-full items-center justify-center'>
        <Image
          src={icon}
          alt={companyName}
          title={companyName}
          loading='lazy'
          width={100}
          height={100}
          className='h-[60%] w-[60%] object-contain'
        />
      </div>
    }
  >
    <div>
      <h3 className='text-[24px] font-bold text-white'>{title}</h3>
      <p
        className='text-[16px] font-semibold text-secondary'
        style={{ margin: 0 }}
      >
        {companyName}
      </p>
    </div>
    <ul className='ml-5 mt-5 list-disc space-y-2'>
      {points.map((point, index) => (
        <li
          key={`experience-point-${index}`}
          className='trackingwider pl-1 text-[14px] text-white-100'
        >
          {point}
        </li>
      ))}
    </ul>
  </VerticalTimelineElement>
);
