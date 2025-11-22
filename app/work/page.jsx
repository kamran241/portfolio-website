"use client";
import { motion } from 'framer-motion';
import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import "swiper/css";
import { BsArrowUpRight, BsGithub } from 'react-icons/bs';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import Link from 'next/link';
import Image from 'next/image';
import WorkSliderBtn from '@/components/WorkSliderBtn';
import { SiHuggingface, SiKaggle , SiGithub} from 'react-icons/si';

const projects = [
  {
    num: "01",
    category: "Machine Learning",
    title: "Predictive Analytics Model",
    description: `Engineered and deployed end-to-end machine learning pipelines for predictive analytics, harnessing ensemble algorithms and scalable frameworks to uncover hidden patterns in massive, unstructured datasets. Excelled in sophisticated feature engineering, rigorous model validation, and hyperparameter tuning, driving 25%+ improvements in forecast accuracy for high-stakes business decisions like demand forecasting and risk assessment.`,
    stack: [{ name: "Python" }, { name: "Scikit-learn" }, { name: "Pandas" }, { name: "Numpy" }, { name: "Matplotlib" }],
    image: '/assets/work/d1.jpg',
    live: "",
    // SiKaggle: "https://www.kaggle.com/work",
    // SiGithub: "https://github.com/kamran241",
  },
  {
    num: "02",
    category: "Generative AI & RAG",
    title: "Contextual Chatbot with RAG",
    description: `Engineered a state-of-the-art chatbot utilizing Retrieval-Augmented Generation (RAG) to deliver contextually relevant responses. Integrated OpenAPI and Hugging Face models for seamless backend communication, enhancing user engagement and delivering innovative, data-driven solutions.`,
    stack: [{ name: "Python" }, { name: "RAG" }, { name: "OpenAPI" }, { name: "Hugging Face" }],
    image: '/assets/work/pca.jpg',
    live: "",
    // github: "https://github.com/kamran241/rag-chatbot",
  },
  {
    num: "03",
    category: "Computer Vision",
    title: "Automated Image Classification",
    description: `Designed and implemented a computer vision system for automated image classification using deep learning. Utilized convolutional neural networks (CNNs) and OpenCV to accurately identify and categorize visual data, streamlining workflow automation and decision-making processes.`,
    stack: [{ name: "Python" }, { name: "TensorFlow" }, { name: "OpenCV" }],
    image: '/assets/work/vision.jpg',
    live: "",
    // github: "https://github.com/kamran241/image-classification",
  },
  {
    num: "04",
    category: "Natural Language Processing",
    title: "Text Summarization Pipeline",
    description: `Developed an NLP pipeline for automated text summarization, leveraging transformer-based models to generate concise and informative summaries from large documents. Enhanced information retrieval and knowledge management for enterprise applications.`,
    stack: [{ name: "Python" }, { name: "Transformers" }, { name: "NLTK" }],
    image: '/assets/work/nlp.jpg',
    live: "",
    // github: "https://github.com/kamran241/text-summarization",
  },
  {
    num: "05",
    category: "Deep Learning",
    title: "Scalable Deep Learning Models for Real-World Applications",
    description: `Demonstrated proficiency in deep learning by architecting and deploying scalable neural network models tailored for production environments. Leveraged advanced architectures like CNNs and transformers, with expertise in feature engineering, hyperparameter tuning, and GPU-accelerated training to solve complex problems in data-intensive domains. Delivered high-impact solutions that enhanced decision-making and automated workflows, proving hands-on capability in building robust, real-world DL systems from concept to deployment`,
    stack: [{ name: "Python" }, { name: "Pytorch" }, { name: "Tensorflow" },{ name: "Keras" },{ name: "CUDA" }],
    image: '/assets/work/deep.jpg',
    live: "",
    // github: "https://github.com/kamran241/etl-pipeline",
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
                {project.live && (
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
                )}
                {/* github project button */}
                {project.github && (
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
                )}
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
