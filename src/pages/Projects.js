import React from 'react'
import ProjectItem from '../components/ProjectItem';
import "../styles/Projects.css";
import { projectList } from "../helpers/ProjectList";
import { motion } from 'framer-motion';
function Projects() {
  return (
    <motion.div className="projects" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} >
      <h1>My Personal Projects</h1>
      <div className="projectList">
        {projectList.map((project) => {return <ProjectItem name={project.name} image={project.image} />})}
      </div>
    </motion.div> 
  )
}

export default Projects