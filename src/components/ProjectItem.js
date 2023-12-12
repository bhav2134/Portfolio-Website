import React from 'react';
import { useNavigate } from 'react-router-dom';

function ProjectItem({image, name}) {
  const navigate = useNavigate();
  const githubUrl = "https://github.com/bhav2134/Stock-Anayltical-Analysis";
  const handleItemClick = () => {
    if (githubUrl) {
      window.open(githubUrl, '_blank');
    } else {
      // Handle the case when the GitHub URL is not available
      console.error("GitHub URL is not provided.");
    }
  };

  return (
    <div className="projectItem" onClick={handleItemClick}>
        <div style={{backgroundImage: `url(${image})`}} className="bgImage" />
        <h1> {name} </h1>
    </div>
  )
}

export default ProjectItem