import { motion, useScroll } from "framer-motion";
import React, { useRef } from "react";
import LiIcon from "./LiIcon";

const Details = ({ type,time,place,info }) => {
    const ref = useRef(null)
  return (
    <li ref={ref} className="my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-center justify-between md:w-[80%]">
      <LiIcon refrence={ref} />
      <motion.div
        initial={{y:50}}
        whileInView={{y:0}}
        transition={{duration:0.5, type:"spring"}}
      >
        <h3 className="capitalize font-bold text-2xl sm:text-xl xs:text-lg ">
          {type}
        </h3>
        <span className="capitalize font-medium text-dark/75 dark:text-light/75 xs:text-sm">
          {time} | {place}
        </span>
        <p className="font-medium w-full text-justify md:text-sm">{info}</p>
      </motion.div>
    </li>
  );
};

const Education = () => {

    const ref = useRef(null)
    const {scrollYProgress} = useScroll({
        target:ref,
        offset: ["start end", "center start"]
    })

  return (
    <div className="my-64">
      <h2 className="font-bold text-8xl mb-32 w-full text-center md:text-6xl xs:text-4xl md:mb-16">
        Education
      </h2>
      <div ref={ref} className="w-[75%] mx-auto relative lg:w-[90%] md:w-full">

        <motion.div style={{scaleY: scrollYProgress}} className="absolute left-9 top-0 w-[4px] h-full bg-dark origin-top dark:bg-light md:w-[2px] md:left-[30px] xs:left-[20px]" />

        <ul className="w-full flex flex-col items-start justify-between ml-4  xs:ml-2">
          <Details 
            type="B.Tech - Computer Engineering"
            time="2020-2024"
            place="LDRP Institute of Technology & Research, Gandhinagar"
            info="I am pursuing my B.Tech in Computer Engineering from LDRP - ITR, Gandhinagar with a cumulative grade index (CGI) of 8.53. Throughout my education, I gained a solid foundation in computer engineering principles and acquired a comprehensive understanding of various technical subjects. This program equipped me with the necessary knowledge and skills to excel in the field of computer engineering, preparing me for professional opportunities in the industry."
          />
          <Details 
            type="Class XII - Science Stream"
            time="2018-2020"
            place="Lord Krishna School of Science, Patan"
            info="I completed my Class XII education in the Science stream from Lord Krishna School of Science, Patan between 2018 and 2020. During this period, I focused on subjects such as Physics, Chemistry and Mathematics. This education provided me with a strong academic foundation in the sciences and helped me develop problem-solving and analytical skills. It laid the groundwork for my further studies and prepared me for future academic and career pursuits in the field of science."
          />
        </ul>
      </div>
    </div>
  );
};

export default Education;
