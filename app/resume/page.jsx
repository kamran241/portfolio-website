"use client";

import { SiTailwindcss, SiNextdotjs, SiNodedotjs, SiPython, SiR, SiTableau, SiPowerbi, SiMicrosoftexcel, SiMysql, SiTensorflow, SiJupyter } from "react-icons/si";
import { motion } from "framer-motion";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { ScrollArea } from "@/components/ui/scroll-area";

const about = {
  title: "About me",
  description: `
  Experienced data scientist skilled in machine learning, data analysis, and statistical modeling, focused on developing data-driven solutions, uncovering actionable insights, and optimizing processes through predictive analytics and automation.`,
  info: [
    { fieldName: "Name", fieldValue: "Rahat Karim" },
    { fieldName: "Phone", fieldValue: "(+92) 3480588302" },
    { fieldName: "Experience", fieldValue: "3+ years" },
    { fieldName: "Skype", fieldValue: "rahat.karim" },
    { fieldName: "Nationality", fieldValue: "Pakistani" },
    { fieldName: "Email", fieldValue: "karimrahat33@gmail.com" },
    { fieldName: "Freelance", fieldValue: "Available" },
    { fieldName: "Languages", fieldValue: "English, Urdu, Hindi" },
  ],
};

const experience = {
  icon: "/assets/resume/badge.svg",
  title: "My Experience",
  description: `I have extensive experience in developing data-driven solutions, utilizing advanced machine learning techniques, data visualization, and predictive analytics to solve complex business problems. I'm proficient in tools like Python, R, Tableau, and Power BI, and focus on leveraging these technologies to extract meaningful insights and optimize decision-making processes.`,
  items: [
    {
      company: "NorthNine",
      position: "Senior Data Scientist",
      duration: "2023 - present",
    },
    {
      company: "Hunza webX",
      position: "Data Analyst",
      duration: "2021 - 2023",
    },
  ],
};

const education = {
  icon: "/assets/resume/cap.svg",
  title: "My Education",
  description: `I hold a Bachelor of Science in Computer Science (BSCS) from Iqra University and have further specialized in Data Science and AI from NUST. This educational background has equipped me with a strong foundation in both computer science and advanced data-driven technologies.`,
  items: [
    {
      institution: "Iqra University",
      degree: "Bachelor's Computer Science",
      duration: "2020 - 2023",
    },
    {
      institution: "NUST",
      degree: "Data Science and AI",
      duration: "2024 - PRESENT",
    },
  ],
};

const skills = {
  title: "My Skills",
  description: `
  Experienced data scientist skilled in Python, R, and SQL, with a focus on developing data-driven models, predictive analytics, and visually compelling data visualizations using tools like Tableau, Power BI, and Excel. Specializes in extracting actionable insights, optimizing decision-making processes, and delivering impactful solutions.`,
  skillList: [
    { icon: <SiPython />, name: "Python" },
    { icon: <SiR />, name: "R" },
    { icon: <SiTableau />, name: "Tableau" },
    { icon: <SiPowerbi />, name: "Power BI" },
    { icon: <SiMicrosoftexcel />, name: "Excel" },
    { icon: <SiMysql />, name: "SQL" },
    { icon: <SiTensorflow />, name: "TensorFlow" },
    { icon: <SiJupyter />, name: "Jupyter Notebook" },
  ],
};

const Resume = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 0.4, duration: 0.4, ease: "easeIn" }
      }}
    >
      <div className="container mx-auto">
        <Tabs defaultValue="experience" className="flex flex-col xl:flex-row gap-[60px]">
          <TabsList className="flex flex-col w-full max-w-[300px] mx-auto xl:mx-0">
            <TabsTrigger value="experience">Experience</TabsTrigger>
            <TabsTrigger value="education">Education</TabsTrigger>
            <TabsTrigger value="skills">Skills</TabsTrigger>
            <TabsTrigger value="about">About me</TabsTrigger>
          </TabsList>

          {/* content */}
          <div className="min-h-[70vh] w-full">
            <TabsContent value="experience" className="w-full">
              <div className="flex flex-col gap-9 text-center xl:text-left">
                <h3 className="text-4xl font-bold mb-5">{experience.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto mb-5 xl:mx-0">
                  {experience.description}
                </p>
                <ScrollArea>
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-7">
                    {experience.items.map((item, index) => (
                      <li key={index} className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1">
                        <span className="text-accent-DEAFULT">{item.duration}</span>
                        <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">{item.position}</h3>
                        <div className="flex items-center gap-3">
                          {/* dot */}
                          <span className="w-[6px] h-[6px] rounded-full bg-accent-DEAFULT"></span>
                          <p className="text-white/60">{item.company}</p>
                        </div>
                      </li>
                    ))}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>

            {/* education */}
            <TabsContent value="education">
              <div className="flex flex-col gap-9 text-center xl:text-left">
                <h3 className="text-4xl font-bold mb-5">{education.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto mb-5 xl:mx-0">
                  {education.description}
                </p>
                <ScrollArea>
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-7">
                    {education.items.map((item, index) => (
                      <li key={index} className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1">
                        <span className="text-accent-DEAFULT">{item.duration}</span>
                        <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">{item.degree}</h3>
                        <div className="flex items-center gap-3">
                          {/* dot */}
                          <span className="w-[6px] h-[6px] rounded-full bg-accent-DEAFULT"></span>
                          <p className="text-white/60">{item.institution}</p>
                        </div>
                      </li>
                    ))}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>

            {/* skills */}
            <TabsContent value="skills" className="w-full h-full">
              <div className="flex flex-col gap-8">
                <div className="flex flex-col gap-8 text-center xl:text-left">
                  <h3 className="text-4xl font-bold mb-5">{skills.title}</h3>
                  <p className="text-white/60 max-w-[600px] mx-auto xl:mx-0">{skills.description}</p>
                </div>
                <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 xl:gap-8">
                  {skills.skillList.map((skill, index) => (
                    <li key={index}>
                      <TooltipProvider delayDuration={100}>
                        <Tooltip>
                          <TooltipTrigger className="w-full h-[150px] bg-[#232329] rounded-xl flex justify-center items-center group">
                            <div className="text-6xl group-hover:text-accent-DEAFULT transition-all duration-300">{skill.icon}</div>
                          </TooltipTrigger>
                          <TooltipContent>
                            <div className="capitalize">{skill.name}</div>
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>
                    </li>
                  ))}
                </ul>
              </div>
            </TabsContent>

            {/* about */}
            <TabsContent value="about" className="w-full text-center xl:text-left">
              <div className="flex flex-col gap-8">
                <h3 className="text-4xl font-bold">{about.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">{about.description}</p>
                <ul className="grid grid-cols-1 xl:grid-cols-2 gap-y-6 max-w-[620px] mx-auto xl:mx-0">
                  {about.info.map((item, index) => (
                    <li key={index} className="flex items-center justify-center xl:justify-start gap-4">
                      <span className="text-white/60">{item.fieldName}</span>
                      <span className="text-xl">{item.fieldValue}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </motion.div>
  );
};

export default Resume;
