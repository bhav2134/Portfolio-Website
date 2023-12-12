import React from 'react';
import "../styles/Home.css"
import { motion } from 'framer-motion'

function Home() {
  return (
    <motion.div className="home" initial={{ opacity: 1 }} animate={{ opacity: 1 }} exit={{ opacity: 1 }} >
      <div className="about">
        <h2>Hi, My Name Is Bhavdeep</h2>
        <div className="prompt">
          <p> 
            I'm a computer science student at Toronto Metropolitan University with a passion for learning
          </p>
        </div> 
      </div>
      <div className="skills">
        <h1>Skills</h1>
        <ol className="list">
          <li className="item">
            <h2>Front-End</h2>
            <span> ReactJS, Angular, Redux, HTML, CSS, React Native, Bootstrap, MaterialUI </span>
          </li>
          <li className="item">
            <h2>Back-End</h2>
            <span> NodeJS, GraphQL, ApolloServer, MySQL, MongoDB, DynamoDB, AWS S3, MS SQL </span>
          </li>
          <li className="item">
            <h2>Lanaguages</h2>
            <span>Python, Java, C, C++, C#, Lisp, Go, Haskell, Elixer, Rust, Javascript </span>
          </li>
        </ol> 
      </div>
    </motion.div>
  )
}

export default Home