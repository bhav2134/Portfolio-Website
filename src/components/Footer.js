import React from 'react'
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import "../styles/Footer.css"

function Footer() {
  return (
    <div className="footer">
        <div className="socialMedia">
          <a href="https://www.linkedin.com/in/bhavdeep-arora-747b52217/" target="_blank" rel="noopener noreferrer">
              <FaLinkedin />
            </a>
            <a href="https://github.com/bhav2134" target="_blank" rel="noopener noreferrer">
              <FaGithub />
            </a>
            <p>
              &copy; 2024 csbhav.com
            </p>
        </div>
    </div>
  )
}

export default Footer