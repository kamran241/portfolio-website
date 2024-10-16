"use client";
import { BsArrowDownRight } from "react-icons/bs"
import Link from "next/link";
import { motion } from "framer-motion"

const services = [
  {
    num: '01',
    title: 'Data Analysis and Insights',
    description: 'Analyzing large datasets to uncover patterns, trends, and correlations, providing actionable insights to help businesses make informed decisions.',
    href: ""
  },
  {
    num: '02',
    title: 'Predictive Modeling',
    description: 'Building and implementing machine learning models to predict future outcomes, such as customer behavior, market trends, or operational performance, enabling businesses to anticipate challenges and opportunities.',
    href: ""
  },
  {
    num: '03',
    title: 'Data Cleaning and Preprocessing',
    description: 'Clean, preprocess, and structure raw data, ensuring that it is accurate, complete, and usable for analysis or modeling.',
    href: ""
  },
  {
    num: '04',
    title: 'Automation of Processes',
    description: `
    Developing data-driven algorithms and automated solutions, help organizations streamline workflows, optimize processes, and improve efficiency.`,
    href: ""
  },
]
const Services = () => {
  return (
    <section className="min-h-[80vh] flex flex-col justify-center py-12 xl:py-0">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { delay: 2.4, duration: 0.4, ease: "easeIn" }
          }}
          className="grid grid-cols-1 md:grid-cols-2 gap-[60px]"
        >
          {services.map((service, index) => {
            return (
              <div key={index}
                className="flex-1 flex flex-col justify-center gap-6 group">
                {/* top */}
                <div className="w-full flex justify-between items-center">
                  <div className="text-5xl font-extrabold text-outline text-transparent group-hover:text-outline-hover transition-all duration-500">{service.num}</div>
                  <Link href={service.href}
                    className="w-[70px] h-[70px] rounded-full bg-white group-hover:bg-accent-DEAFULT transition-all duration-500 flex justify-center items-center group-hover:-rotate-45">
                    <BsArrowDownRight className="text-primary  text-3xl" />
                  </Link>
                </div>
                {/* title */}
                <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent-DEAFULT transition-all duration-500">{service.title}</h2>
                <p className="text-white/60">{service.description}</p>
                <div className="border-b border-white/20 w-full"></div>
              </div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}

export default Services
