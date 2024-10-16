"use client";
import { motion } from 'framer-motion';
import React, { useState } from 'react';

import { Swiper, SwiperSlide } from 'swiper/react';
import "swiper/css";

import { BsArrowUpRight, BsGithub } from 'react-icons/bs';

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger
} from '@/components/ui/tooltip';

import Link from 'next/link';
import Image from 'next/image';
import WorkSliderBtn from '@/components/WorkSliderBtn';

const projects = [
  {
    num: "01",
    category: "Machine Learning",
    title: "E-physiotherpist",
    description: `Developed a machine learning-based system for real-time physical therapy using video synchronization. Utilized Python, various libraries, and the SVM algorithm to analyze body movements and provide feedback to users, assisting in physical rehabilitation exercises.`,
    stack: [{ name: "Python" }, { name: "Machine Learning" }, { name: "SVM" }],
    image: '/assets/work/d1.png',
    live: "",
    github: "https://github.com/Rahat-karim",
  },
  {
    num: "02",
    category: "Data Analysis",
    title: "Project 2",
    description: `I developed a comprehensive dashboard for an online store, providing real-time insights into sales performance, customer behavior, and inventory management. This tool enables data-driven decision-making, optimizing marketing strategies and enhancing overall business performance.`,
    stack: [{ name: "Tablueau" }, { name: "SQL" }, { name: "EDA" }],
    image: '/assets/work/Dashboard.png',
    live: "https://public.tableau.com/app/profile/rahat.karim1538/viz/Onlineretailsales_17261450674920/Dashboard1",
    github: "https://github.com/Rahat-karim",
  },
  {
    num: "03",
    category: "Customer Segmentation for E-commerce",
    title: "Project 3",
    description: `Applied clustering algorithms to analyze customer behavior in an e-commerce platform. Segmented customers based on purchase patterns and demographics, enabling more effective, targeted marketing campaigns, which resulted in a significant boost in customer retention rates.`,
    stack: [{ name: "Python" }, { name: "Scikit-learn" }, { name: "SQL" }],
    image: '/assets/work/pca.png',
    live: "",
    github: "https://github.com/Rahat-karim",
  },
];

const Work = () => {
  const [project, setProject] = useState(projects[0]);

  const handleSlidesChange = (swiper) => {
    const currentIndex = swiper.activeIndex;
    setProject(projects[currentIndex]);
  };

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" }
      }}
      className='min-h-[80vh] flex flex-col justify-center py-12 xl:py-0'>
      <div className='container mx-auto'>
        <div className="flex flex-col xl:flex-row xl:gap-[30px]">
          <div className="w-full xl:w-[50%] xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none">
            <div className='flex flex-col gap-8 h-[50%]'>
              {/* Outline number */}
              <div className="text-8xl leading-none font-extrabold text-accent-DEAFULT text-transparent text-outline ">
                {project.num}
              </div>
              {/* Project category */}
              <h2 className=" text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500 capitalize">
                {project.category}
              </h2>
              {/* Project description */}
              <p className='text-white/60'>{project.description}</p>

              {/* Stacks */}
              <ul className='flex gap-4'>
                {project.stack.map((item, index) => (
                  <li key={index} className='text-xl text-accent-DEAFULT'>
                    {item.name}
                    {index !== project.stack.length - 1 && ","}
                  </li>
                ))}
              </ul>

              {/* Border */}
              <div className="border-t border-white/60  my-4"></div>

              {/* Buttons */}
              <div className='flex items-center gap-4'>
                {/* live project button */}
                <Link href={project.live}>
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className='w-[70px] h-[70px] rounded-full bg-white/20 flex justify-center items-center group'>
                        <div className='text-white hover:text-accent transition duration-300 cursor-pointer'>
                          <BsArrowUpRight className='text-white text-3xl group-hover:text-accent-DEAFULT' />
                        </div>
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Live project</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>
                {/* github project button */}
                <Link href={project.github}>
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className='w-[70px] h-[70px] rounded-full bg-white/20 flex justify-center items-center group'>
                        <div className='text-white hover:text-accent transition duration-300 cursor-pointer'>
                          <BsGithub className='text-white text-3xl group-hover:text-accent-DEAFULT' />
                        </div>
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Github</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>
              </div>
            </div>
          </div>
          <div className="w-full xl:w-[50%]">
            <Swiper
              spaceBetween={30}
              slidesPerView={1}
              className='xl:h-[520px] mb-12'
              onSlideChange={handleSlidesChange}>
              {projects.map((project, index) => (
                <SwiperSlide key={index} className='w-full'>
                  <div className='h-[460px] relative group flex justify-center items-center bg-pink-50/20'>
                    {/* overLay */}
                    <div className='absolute top-0 bottom-0 w-full h-full bg-black/10 z-10'></div>
                    {/* image */}
                    <div className="relative w-full h-full">
                      <Image
                        src={project.image}
                        fill
                        className='object-cover'
                        alt={`Thumbnail for ${project.title}`}
                      />
                    </div>
                  </div>
                </SwiperSlide>
              ))}
              {/* slider button */}
              <WorkSliderBtn
                containerStyles="flex gap-2 absolute right-0 bottom-[calc(50%_-_22px)] xl:bottom-0 z-20 w-full justify-between xl:w-max xl:justify-none rounded-full"
                btnStyles="bg-accent-DEAFULT hover:bg-accent-hover text-primary text-[22px] w-8 h-8 flex justify-center rounded-full items-center transition-all"
                iconsStyles="text-white text-xl"
              />
            </Swiper>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Work;
