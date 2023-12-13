import React from 'react';
import { VerticalTimeline,VerticalTimelineElement } from 'react-vertical-timeline-component'
import "react-vertical-timeline-component/style.min.css";
import { IoIosSchool } from "react-icons/io";
import { motion } from 'framer-motion';

function Experience() {
  return (
    <motion.div className="Experience" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} >
      <VerticalTimeline lineColor="#3e497a">
        <VerticalTimelineElement className="vertical-timeline-element--education" 
        date="2022-2026" 
        iconStyle={{background: "#3e497a", color: "#fff"}}
        icon={<IoIosSchool />}>
          <h3 className="vertical-timeline-element-title">
            Toronto Metropolitan University
          </h3>
          <p>Bachelor of Science, Computer Science (Honours)</p>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </motion.div>
  )
}

export default Experience