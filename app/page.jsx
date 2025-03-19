import Photo from '@/components/Photo';
import Social from '@/components/Social';
import Stats from '@/components/Stats';
import { Button } from '@/components/ui/button';
import React from 'react';
import { FiDownload } from "react-icons/fi";

const Home = () => {
  return (
    <section className='w-full'>
      <div className="container mx-auto h-full">
        <div className="flex flex-col xl:flex-row items-center justify-center xl:pt-8 xl:pb-24">
          {/* text */}
          <div className='text-center xl:text-left order-2 xl:order-none'>
            <span className='text-xl '>AI Engineer</span>
            <h1 className='h1 mb-6 mt-5'>Hello I'm <span className='text-accent-DEAFULT'>KAMRAN</span>
            </h1>
            <p className='max-w-[500px] mx-auto xl:mx-0 text-white/80'>As an AI engineer, I specialize in developing data-driven solutions with expertise in a wide range of data analysis tools, programming languages, and machine learning techniques. I am proficient in cutting-edge AI technologies, including large language models (LLMs), generative AI, and natural language processing (NLP), enabling me to tackle complex challenges effectively.</p>
            <div className='flex flex-col xl:flex-row items-center gap-8'>
              <a
                href="assets/RK.pdf"
                download="RK.pdf"
                className="uppercase items-center gap-2 mt-5"
              >
                <Button
                  variant="outline"
                  size="lg"
                  className="flex items-center gap-2"
                >
                  <span>Download CV</span>
                  <FiDownload />
                </Button>
              </a>

              <div className="mb-8 xl:mb-0">
                <Social containerStyles="flex gap-6 mt-5" iconStyles="w-9 h-9 border border-accent-DEAFULT rounded-full flex justify-center items-center text-accent-DEAFULT text-base hover:bg-accent-DEAFULT hover:text-primary hover:transition-all duration-500" />
              </div>
            </div>
          </div>
          {/* image */}
          <div className="order-1 xl:order-none xl:mb-0">
            <Photo />
          </div>
        </div>
      </div>
      <Stats />
    </section>
  );
};

export default Home;
