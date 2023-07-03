import React from "react";
import Head from "next/head";
import Layout from "@/components/Layout";
import AnimatedText from "@/components/AnimatedText";
import Link from "next/link";
import Image from "next/image";
import { GithubIcon } from "@/components/Icons";
import startupproImg from "../../public/images/projects-new/startuppro.png";
import oldPortfolioImg from "../../public/images/projects-new/old-portfolio.png"
import bookstoreImg from "../../public/images/projects-new/bookstore.png"
import diyafurImg from "../../public/images/projects-new/diya-furnitures.png" 
import { motion } from "framer-motion";
import TransitionEffect from "@/components/TransitionEffect";

const FramerImage = motion(Image);

const FeaturedProject = ({ type, title, summary, img, link, github }) => {
  return (
    <article className="w-full flex items-center justify-between rounded-3xl border border-solid border-dark bg-light shadow-2xl relative rounded-br-2xl dark:bg-dark dark:border-light lg:flex-col lg:p-8 xs:rounded-2xl xs:rounded-br-3xl xs:p-4">
      <div className="absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2.5rem] bg-dark rounded-br-3xl dark:bg-light xs:-right-2 sm:h-[102%] xs:w-full xs:rounded-[1.5rem] "  />
      <Link
        href={link}
        target={"_blank"}
        className="w-1/2 cursor-pointer overflow-hidden rounded-lg p-12 lg:w-full "
      >
        
        <FramerImage src={img} alt={title} className="w-full h-auto rounded-2xl lg:rounded-1xl" whileHover={{scale:1.05}} transition={{duration:0.2}}  priority sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw" />
      </Link>
      <div className="w-1/2 flex flex-col items-start justify-between pl-6 lg:w-full lg:pl-0 lg:pt-6 ">
        <span className="text-primary font-medium text-xl dark:text-primaryDark xs:text-base ">{type}</span>
        <Link href={link} target={"_blank"} className="hover:underline underline-offset-2">
          <h2 className="my-2 w-full text-left text-4xl font-bold dark:text-light sm:text-md">{title}</h2>
        </Link>
        <p className="text-justify my-2 font-medium text-dark pr-12 dark:text-light sm:text-sm lg:pr-0 ">{summary}</p>
        <div className="mt-2 flex items-center">
          <Link href={github} target={"_blank"} className="w-10 ">
            {" "}
            <GithubIcon />{" "}
          </Link>
          <Link href={link} target={"_blank"} className="ml-4 rounded-lg bg-dark text-light p-2 px-6 text-lg font-semibold dark:bg-light dark:text-dark sm:px-4 sm:text-base ">
            {" "}
            Visit Project{" "}
          </Link>
        </div>
      </div>
    </article>
  );
};

const Project = ({ type, title, img, link, github }) => {
    return (
      <article className="w-full flex flex-col items-center justify-center rounded-2xl border border-solid border-dark bg-light dark:bg-dark dark:border-light p-6 relative xs:p-4">
        <div className="absolute top-0 -right-3 -z-10 w-[102%] h-[103%] rounded-[2rem] bg-dark  dark:bg-light md:-right-2 md:w-[101%] xs:h-[102%] sm:h-[102%] xs:rounded-[1.5rem]" />
        <Link
          href={link}
          target={"_blank"}
          className="w-full cursor-pointer overflow-hidden rounded-lg p-12"
        >
          <FramerImage src={img} alt={title} className="w-full h-auto rounded-2xl" whileHover={{scale:1.05}} transition={{duration:0.2}} />
        </Link>
        <div className="w-full flex flex-col items-start justify-between mt-4 pl-6">
          <span className="text-primary dark:text-primaryDark font-medium text-xl lg:text-lg md:text-base">{type}</span>
          <Link href={link} target={"_blank"} className="hover:underline underline-offset-2">
            <h2 className="my-2 w-full text-left text-4xl font-bold lg:text-2xl">{title}</h2>
          </Link>
          <div className="mt-2 flex items-center">
            <Link href={github} target={"_blank"} className="w-10 ">
              {" "}
              <GithubIcon />{" "}
            </Link>
            <Link href={link} target={"_blank"} className="ml-4 rounded-lg bg-dark text-light p-2 px-6 text-lg font-semibold dark:bg-light dark:text-dark sm:px-4 sm:text-base">
              {" "}
              Visit Project{" "}
            </Link>
          </div>
        </div>
      </article>
    );
  };

const projects = () => {
  return (
    <>
      <Head>
        <title>KM - Projects</title>
        <meta name="description" content="Project Page" />
        <link rel="icon" href="/bitmoji.png" />
      </Head>
      <TransitionEffect/>
      <main className="w-full mb-16 flex flex-col items-center justify-center dark:text-light">
        <Layout className="pt-16 ">
          <AnimatedText text="Imagination Trumps Knowledge!" className="mb-16 lg:!text-7xl sm:mb-8 sm:!text-6xl xs:!text-4xl"/>

          <div className="grid grid-cols-12 gap-24 gap-y-32 xl:gap-x-16 lg:gap-x-8 md:gap-y-24 sm:gap-x-0">
            <div className="col-span-12">
              <FeaturedProject
                title="StartupPro"
                summary="Startuppro is an online employment hiring system that I worked on. This platform utilizes a range of technologies including Embedded JavaScript (EJS), Node.js, MongoDB, Express.js, and Mongoose. EJS is used for dynamic templating and rendering of web pages, while Node.js and Express.js handle the backend logic and server-side operations. MongoDB is employed as the database for storing and retrieving data related to job postings and candidate profiles. Mongoose is used as an Object Data Modeling (ODM) library for MongoDB, simplifying data manipulation and validation. Together, these technologies provide a robust and efficient foundation for Startuppro, enabling seamless job posting, candidate search, and recruitment processes."
                link="https://startuppro.onrender.com"
                type="Featured Project"
                github="https://github.com/thekushmevada/startuppro"
                img={startupproImg}
              />
            </div>
            <div className="col-span-6 sm:col-span-12">
            <Project
                title="Old Portfolio"
                link="https://mevada-kush.web.app/"
                type="Project"
                github="https://github.com/thekushmevada/portfolio.github.io"
                img={oldPortfolioImg}
              />
            </div>
            <div className="col-span-6 sm:col-span-12">
            <Project
                title="Book-Store"
                link="https://project-bookstore.vercel.app/"
                type="Project"
                github="https://github.com/thekushmevada/tatvasoft-project"
                img={bookstoreImg}
              />
            </div>
            <div className="col-span-12">
            <FeaturedProject
                title="Diya-Furnitures"
                summary="Diya-Furnitures is a comprehensive e-commerce website that I developed. The project comprises two sides: the user side and the admin side, each offering full functionality. The website is built using a stack of modern technologies, including ReactJS for the user interface, Node.js and Express.js for the server-side logic, and MongoDB as the database for data storage. The integration of Mongoose provides an elegant and simplified approach to interacting with MongoDB. This technology stack enables seamless user interactions, efficient data management, and robust functionality for both users and administrators. Diya-Furnitures stands as a successful implementation of an e-commerce platform that offers an enhanced shopping experience and efficient management capabilities."
                link="https://diya-furnitures.web.app/"
                type="Featured Project"
                github="https://github.com/thekushmevada/diyafurnitures"
                img={diyafurImg}
              />
            </div>
            {/* <div className="col-span-6">Project-1</div>
            <div className="col-span-6">Featured-2</div> */}
          </div>
        </Layout>
      </main>
    </>
  );
};

export default projects;
