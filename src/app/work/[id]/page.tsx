'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { styles } from '@/styles/styles';
import { textVariant } from '@/lib/utils/motion';
import Image, { StaticImageData } from 'next/image';
import { projects } from '@/lib/constants';
import { github, link } from '@/lib/assets';
import Link from 'next/link';

type ProjectProps = {
  id?: string;
  name: string;
  description: string;
  teamMembers: {
    name: string;
    imgURL: string;
    link: string;
  }[]; // Assuming team members are represented by their names or IDs
  tags: {
    name: string;
    color: string;
  }[];
  image: StaticImageData;
  sourceCodeLink: string;
  demoLink: string;
  features: {
    title: string;
    subtitle: string;
  }[];
  challenges: {
    intro: string;
    points: {
      title: string;
      subtitle: string;
    }[];
    conclusion: string;
  };
};

const FeaturesCard = ({ features }) => {
  return (
    <div className='green-pink-gradient h-fit w-full rounded-[20px] p-[1px] shadow-card'>
      <div className='flex h-full flex-col items-center justify-center rounded-[20px] bg-tertiary p-4'>
        <motion.div variants={textVariant()}>
          <p className={`${styles.cardSubText} text-center`}>
            The Heart of the Application.
          </p>
          <h2 className={`${styles.cardHeadText} text-center`}>Features.</h2>
        </motion.div>
        <ol className='list-inside list-decimal space-y-2 text-left '>
          {features?.map((feature: { title: string; subtitle: string }) => {
            return (
              <li
                key={feature.title}
                className='text-[14px] font-bold text-red-400'
              >
                {feature.title}:{' '}
                <span className='text-[10px] text-secondary'>
                  {feature.subtitle}
                </span>
              </li>
            );
          })}
        </ol>
      </div>
    </div>
  );
};
const ChallengesCard = ({ challenges }) => {
  return (
    <div className='green-pink-gradient h-fit w-full rounded-[20px] p-[1px] shadow-card'>
      <div className='flex h-full w-full flex-col items-center justify-center rounded-[20px] bg-tertiary p-4'>
        <motion.div variants={textVariant()}>
          <p className={`${styles.cardSubText} text-center`}>
            Bumps on the Journey
          </p>
          <h2 className={`${styles.cardHeadText} text-center`}>Challenges.</h2>
        </motion.div>
        <p className='my-2 text-left'>{challenges.intro}</p>
        <ol className='list-inside list-decimal space-y-2 px-8 text-left '>
          {challenges.points?.map(
            (point: { title: string; subtitle: string }) => {
              return (
                <li
                  key={point.title}
                  className='text-[14px] font-bold text-red-400'
                >
                  {point.title}:{' '}
                  <span className='text-[10px] text-secondary'>
                    {point.subtitle}
                  </span>
                </li>
              );
            }
          )}
        </ol>
        <p className='mt-2 text-left'>{challenges.conclusion}</p>
      </div>
    </div>
  );
};

const TagsSection = ({ tags, name }) => {
  return (
    <div className='mx-auto mt-5 flex w-full flex-wrap justify-center gap-2'>
      {tags.map((tag) => (
        <p key={`${name}-${tag.name}`} className={`text-[14px] ${tag.color}`}>
          #{tag.name}
        </p>
      ))}
    </div>
  );
};
const TeamMembersCard = ({ teamMembers }) => {
  return (
    <div className='green-pink-gradient mb-10 h-fit w-full rounded-[20px] p-[1px] shadow-card'>
      <div className='flex h-full flex-col items-center justify-center rounded-[20px] bg-tertiary p-4'>
        <motion.div variants={textVariant()}>
          <p className={`${styles.cardSubText} text-center`}>
            Crafting Excellence Together.
          </p>
          <h2 className={`${styles.cardHeadText} text-center`}>The Crew.</h2>
        </motion.div>
        <div className='mt-4 flex flex-row gap-x-8'>
          {teamMembers?.map(
            (teamMember: { name: string; link: string; imgURL: string }) => {
              return (
                <div
                  key={teamMember.name}
                  className='text-[14px] font-bold text-red-400'
                >
                  <Link
                    href={teamMember.link}
                    className='flex flex-col items-center justify-center gap-4'
                  >
                    <Image
                      src={teamMember.imgURL}
                      alt={teamMember.name}
                      width={40}
                      height={40}
                      className='mb-0 h-10 w-10 rounded-full'
                    />
                    <p>{teamMember.name}</p>
                  </Link>
                </div>
              );
            }
          )}
        </div>
      </div>
    </div>
  );
};

const ProjectDetailPage = ({ params }: { params: { id: string } }) => {
  const projectDetails: ProjectProps | undefined = projects.find(
    (project) => project.id === params.id
  );
  if (!projectDetails) {
    return <h1>Project not found</h1>;
  }
  const {
    name,
    description,
    teamMembers,
    tags,
    image,
    sourceCodeLink,
    demoLink,
    features,
    challenges,
  } = projectDetails;

  return (
    <div className='my-20 flex flex-col bg-tertiary'>
      <div className='max-w-8xl mx-auto grid grid-cols-1 gap-x-10 sm:grid-cols-3'>
        <div className='container order-2 my-10 max-w-xl items-center justify-center sm:order-1'>
          {teamMembers.length > 0 && (
            <TeamMembersCard teamMembers={teamMembers} />
          )}
          <FeaturesCard features={features} />
        </div>
        <div className='order-1 my-10 max-w-xl items-center justify-center sm:order-2'>
          <div className='mx-auto flex flex-col'>
            <h1 className='text-center text-[30px] font-bold text-sky-400 xs:text-[40px] sm:text-[50px] md:text-[60px]'>
              {name}
            </h1>
            <div className='mx-auto flex w-full flex-wrap justify-center gap-4'>
              <button
                onClick={() => window.open(demoLink, '_blank')}
                className='flex cursor-pointer items-center justify-center gap-2 text-sm font-semibold'
              >
                <Image
                  src={github}
                  alt={`${name} github repo link`}
                  title='github'
                  width={40}
                  height={40}
                  className='mb-0 h-5 w-5'
                />{' '}
                <p>View Repo</p>
              </button>
              <button
                onClick={() => window.open(sourceCodeLink, '_blank')}
                className='flex cursor-pointer items-center justify-center gap-2 text-sm font-semibold'
              >
                <Image
                  src={link}
                  alt={`${name} demo link`}
                  title={`${name} demo link`}
                  width={40}
                  height={40}
                  className='mb-0 h-5 w-5 rounded-full bg-white-100'
                />{' '}
                <p>Live Demo</p>
              </button>
            </div>
            <TagsSection tags={tags} name={name} />
            <div>
              <h2 className={`${styles.sectionSubText} text-center`}>
                Overview.
              </h2>
              <p className='flex flex-wrap'>{description}</p>
            </div>
          </div>
          <div className='mt-4 rounded-xl'>
            <Image
              src={image}
              alt={name}
              title={`image of ${name}`}
              width={600}
              height={400}
              priority
              className='rounded-lg bg-contain bg-center shadow-lg'
            />
          </div>
        </div>
        <div className='container order-last my-10 max-w-xl items-center justify-center'>
          <ChallengesCard challenges={challenges} />
        </div>
      </div>
    </div>
  );
};
export default ProjectDetailPage;
