import React, { useEffect, useState } from "react";
import { Link,useLocation } from 'react-router-dom';
import '../styles/NavBar.css';
import { IoReorderFourOutline } from "react-icons/io5";

function Navbar() {
    const [expandNavbar, setExpandNavBar] = useState(false);
    const location = useLocation();
    useEffect(() => {setExpandNavBar(false)}, [location]);

    return (
        <div className="navbar" id={expandNavbar ? "open" : "close"}>
            <div className="toggleButton">
                <button onClick={() => {setExpandNavBar((prev) => !prev)}}>
                    <IoReorderFourOutline  />
                </button>
            </div>

            <div className="links">
                <Link to="/"> Home </Link>
                <Link to="/projects"> Projects </Link>
                <Link to="/experience"> Experience </Link>
                <Link to="/contactme"> Contact Me </Link>
                <Link to="/resume"> My Resume </Link>
            </div>
        </div>
    );
}   

export default Navbar;