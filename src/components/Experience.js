import { motion, useScroll } from "framer-motion";
import React, { useRef } from "react";
import LiIcon from "./LiIcon";

const Details = ({ position, company, companyLink, time, address, work }) => {
    const ref = useRef(null)
  return (
    <li ref={ref} className="my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-center justify-between md:w-[80%]">
      <LiIcon refrence={ref} />
      <motion.div
        initial={{y:50}}
        whileInView={{y:0}}
        transition={{duration:0.5, type:"spring"}}
      >
        <h3 className="capitalize font-bold text-2xl sm:text-xl xs:text-lg">
          {position}&nbsp;
          <a
            href={companyLink}
            target={"_blank"}
            className="text-primary dark:text-primaryDark capitalize"
          >
            @{company}
          </a>
        </h3>
        <span className="capitalize font-medium text-dark/75 dark:text-light/75 xs:text-sm">
          {time} | {address}
        </span>
        <p className="font-medium w-full text-justify md:text-sm">{work}</p>
      </motion.div>
    </li>
  );
};

const Experience = () => {

    const ref = useRef(null)
    const {scrollYProgress} = useScroll({
        target:ref,
        offset: ["start end", "center start"]
    })

  return (
    <div className="my-64">
      <h2 className="font-bold text-8xl mb-32 w-full text-center md:text-6xl xs:text-4xl md:mb-16">
        Experience
      </h2>
      <div ref={ref} className="w-[75%] mx-auto relative lg:w-[90%] md:w-full">

        <motion.div style={{scaleY: scrollYProgress}} className="absolute left-9 top-0 w-[4px] h-full bg-dark origin-top dark:bg-light md:w-[2px] md:left-[30px] xs:left-[20px]  " />

        <ul className="w-full flex flex-col items-start justify-between ml-4 xs:ml-2">
          <Details
            position="Development Intern"
            company="TatvaSoft"
            time="May&rsquo;23 - Jun&rsquo;23"
            address="Remote"
            companyLink="https://www.tatvasoft.com/"
            work="
            During my involvement in a bookstore project web application, I had the opportunity to work with a range of emerging technologies that included ReactJS, Bootstrap, and Redux Toolkit. Through this experience, I developed my skills in context implementation, responsive web design, front-end development, React.js, Bootstrap, Material-UI, and Redux. By utilizing these technologies, I was able to create an immersive user experience with dynamic and responsive web pages. The implementation of context allowed for efficient data management, while responsive web design ensured optimal user experience across different devices and screen sizes. Leveraging React.js, Bootstrap, and Material-UI, I crafted visually appealing interfaces and implemented interactive components. Additionally, the use of Redux facilitated effective state management and enhanced overall app performance. Overall, this experience equipped me with valuable skills in modern web development, enabling me to create a feature-rich bookstore web app."
          />
          <Details
            position="Development Intern"
            company="Business Cradle Technologies"
            time="Sep&rsquo;22 - Dec&rsquo;22"
            address="Remote"
            companyLink="https://www.businesscradletechnologies.com/"
            work="
            During my internship, I started as a backend developer and eventually transitioned into a full stack developer role. I had the opportunity to work on an employment hiring system, where I honed my skills in several key technologies. I utilized Embedded JavaScript (EJS), Node.js, MongoDB, and Express.js to build the backend infrastructure and develop efficient server-side functionality. This involved handling data storage and retrieval using MongoDB, implementing server-side logic with Node.js and Express.js, and dynamically rendering views with EJS. Additionally, I gained experience in project management, ensuring timely delivery and effective coordination of tasks. Overall, this internship allowed me to strengthen my backend and full stack development skills while working on a practical employment hiring system."
          />
          <Details
            position="Development Intern"
            company="Delta Infosoft"
            time="Jul&rsquo;22 - Sep&rsquo;22"
            address="On Site, Ahmedabad"
            companyLink="https://www.deltainfosoft.com/"
            work="
            During my internship, I worked as an Android developer and collaborated with a friend to develop a customer relationship management (CRM) app. In this role, I honed my skills in XML, Java, Firebase, and Android development. Using XML, I created the app's user interface, designing visually appealing layouts and interactive elements. With Java, I implemented the app's functionality, incorporating features such as customer data management and interaction tracking. Firebase was utilized for real-time data synchronization and cloud storage, enhancing the app's performance and scalability. Throughout the internship, I gained valuable experience in Android development, leveraging various technologies to create a robust CRM app that streamlined customer management processes."
          />
        </ul>
      </div>
    </div>
  );
};

export default Experience;
