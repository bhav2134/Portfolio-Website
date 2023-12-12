import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from '../pages/Home';
import Projects from '../pages/Projects';
import Experience from '../pages/Experience';
import ContactMe from '../pages/ContactMe';
import MyResume from '../pages/MyResume';
import { AnimatePresence } from 'framer-motion';
import { useLocation } from 'react-router-dom';

function AnimatedRoutes() {
    const location = useLocation();

    return (
        <AnimatePresence>
            <Routes location={location} key={location.pathname}>
                <Route path="/" element={<Home />} />
                <Route path="/projects" element={<Projects />} />
                <Route path="/experience" element={<Experience />} />
                <Route path="/contactme" element={<ContactMe />} />
                <Route path="/resume" element={<MyResume />} />
            </Routes>
        </AnimatePresence>
    )
}

export default AnimatedRoutes