import React, { useState, useEffect } from "react";
import "../styles/Nav.css";
import resume from "../files/Sumit-gourav-resume.pdf";

const Nav = () => {
    const [isActive, setIsActive] = useState(false);
    const [navbg, setNavbg] = useState(false);

    const handleMenuClick = () => {
        setIsActive(!isActive);
    };

    const closeMenu = () => {
        setIsActive(false);
    };

    const handleDownload = () => {
        window.open("https://drive.google.com/file/d/1ENWoXPLQjKBQut0IG6nNbvmfjYpQqadA/view?usp=sharing", "_blank");

        const link = document.createElement("a");
        link.href = resume;
        link.setAttribute("download", "Sumit-gourav-resume.pdf");
        link.setAttribute("id", "resume-link-1");
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    useEffect(() => {
        const handleScroll = () => {
            setNavbg(window.scrollY > 50);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <div className="navdiv" id="nav-menu">
            <nav className={navbg ? "activenavbar" : "navbar"} id="nav-menu">
                <div className="max-width">
                    <div className="title_logo" style={{ fontFamily: "cursive" }}>
                        <h1 id="namelogo">Sumit</h1>
                    </div>
                    <ul className={`menu ${isActive ? "active" : ""}`}>
                        <li>
                            <a href="#" className="nav-link home" onClick={closeMenu}>
                                Home
                            </a>
                        </li>
                        <li>
                            <a href="#about" className="nav-link about" onClick={closeMenu}>
                                About
                            </a>
                        </li>
                        <li>
                            <a href="#skills" className="nav-link skills" onClick={closeMenu}>
                                Skills
                            </a>
                        </li>
                        <li>
                            <a href="#projects" className="nav-link projects" onClick={closeMenu}>
                                Projects
                            </a>
                        </li>
                        <li>
                            <a href="#statistics" className="menu-btn active" onClick={closeMenu}>
                                Statistics
                            </a>
                        </li>
                        <li>
                            <a href="#contact" className="nav-link contact" onClick={closeMenu}>
                                Contact
                            </a>
                        </li>
                        <li id="resume-button-1" className="nav-link resume">
                            <button
                                className={
                                    navbg
                                        ? "active-nav-resume-button active-type1"
                                        : "nav-resume-button type1"
                                }
                                onClick={handleDownload}
                            >
                                Resume
                            </button>
                        </li>
                    </ul>

                    <div className="menu-btn menu-btn-position" onClick={handleMenuClick}>
                        <i className={`fas fa-bars ${isActive ? "active" : ""}`} />
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Nav;
