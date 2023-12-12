import React from 'react';
import Resume from '../assets/Resume.pdf';
import { motion } from 'framer-motion';
const PDFViewer = () => {
 return (
 <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} >
    <iframe title="Resume" src={Resume} width="100%" height="500px" />
 </motion.div>
 );
};
export default PDFViewer;