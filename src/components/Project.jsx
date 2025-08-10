import Tilt from "react-parallax-tilt";
import { motion, transform } from "framer-motion";
import React, { useEffect, useState } from "react";
import { styles } from "../styles";

import { demo, github } from "../assets";
import { SectionWrapper } from "../hoc";
import {list} from "../constants"
import { fadeIn, textVariant } from "../utils/motion";
import { cProject, javaProject, webProject, otherProject } from "../constants";
import ProjectList from "./ProjectList";
import "./Project.scss";


const ProjectCard = ({
  index,
  name,
  description,
  tags,
  image,
  source_code_link,
  source_link,
}) => {
  return (
    <motion.div whileInView={{ opacity: 1, transform: 'none' }} variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
      <Tilt
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className='project-box bg-tertiary p-5 rounded-2xl sm:w-[330px] w-full'
      >
        <div className='Box1'>
          <img
            src={image}
            alt='project_image'
            className='image rounded-2xl'
          />

          <div className='absolute inset-0 flex justify-center items-center'>
            <h3 className='text-black font-bold text-[16px]'>{name}</h3>
          </div>

          <div className='absolute inset-0 flex justify-end m-3 gap-2'>
            <div
              onClick={() => window.open(source_link, "_blank")}
              className='black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer'
            >
              <img
                src={demo}
                alt='demo'
                className='w-1/2 h-1/2 object-contain'
              />
            </div>
            
            {/* Only show GitHub icon for existing projects, not for the three new ones */}
            {name !== "Discount Plumbing & Rooter" && 
             name !== "Deva Rentals" && 
             name !== "Newrise Cleaning & Contractors" && (
              <div
                onClick={() => window.open(source_code_link, "_blank")}
                className='black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer'
              >
                <img
                  src={github}
                  alt='github'
                  className='w-1/2 h-1/2 object-contain'
                />
              </div>
            )}

          </div>
        </div>

        <div className='content'>
          <p className='description mt-4 text-secondary'>{description}</p>
        </div>

        <div className='tags'>
          {tags.map((tag) => (
            <p
              key={`${name}-${tag.name}`}
              className={`text-[14px] ${tag.color}`}
            >
              #{tag.name}
            </p>
          ))}
        </div>
      </Tilt>
    </motion.div>
  );
};
const Project = () => {

  const [selected, setSelected] = useState("java");
  const [data, setData] = useState([]);

  useEffect(() => {
    switch (selected) {
      // case "java":
      //   setData(javaProject);
      //   break;
      // case "c++":
      //   setData(cProject);
      //   break;
      case "web":
        setData(webProject);
        break;
      case "other":
        setData(otherProject);
        break;

      default:
        setData(webProject);
    }
  }, [selected]);

  return (
    <>
      <motion.div whileInView={{ opacity: 1 , transform : 'none'}} variants={textVariant()}>
        <p className={`${styles.sectionSubText} `}>My work</p>
        <h2 className={`${styles.sectionHeadText}`}>Projects.</h2>
      </motion.div>

      <div className='project w-full flex'>
        <motion.p whileInView={{ opacity: 1 , transform : 'none'}}
          variants={fadeIn("", "", 0.1, 1)}
          className='mt-3 text-secondary text-[17px] leading-[30px]'
        >
        <ul>
        {list.map((item) => (
          <ProjectList
            title={item.title}
            active={selected === item.id}
            setSelected={setSelected}
            id={item.id}
          />
        ))}
      </ul>

      <div className='box mt-20 flex flex-wrap justify-center'>
        {data.map((project, index) => (
          <div>
            <ProjectCard key={`project-${index}`} index={index} {...project} />
          </div>
        ))}
      </div>


      </motion.p>
      </div>

    </>
  );
};

export default SectionWrapper(Project, "project");