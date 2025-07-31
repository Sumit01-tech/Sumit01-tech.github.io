import React, { useState, useEffect } from 'react';
import styles from "../styles/Navbar.Module.css";
import resume from "../files/Sumit_Gourav_Resume.pdf";

import {
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    IconButton
} from '@chakra-ui/react';
import { SlMenu } from "react-icons/sl";

const Navbar = () => {
    const [navbg, setNavbg] = useState(false);
    const [option, setOption] = useState(false);

    // Scroll effect
    useEffect(() => {
        const handleScroll = () => {
            setNavbg(window.scrollY > 50);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const handleDownload = () => {
        const link = document.createElement('a');
        link.href = resume;
        link.setAttribute('download', 'resume.pdf');
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    const scrollToSection = (id) => () => {
        const section = document.getElementById(id);
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <div className={navbg ? styles.active : styles.top_header_div}>
            <nav className={styles.nav}>
                <div className={styles.title_logo}>
                    <h1>Sumit</h1>
                </div>

                {/* Desktop Menu */}
                <ul id={styles.nav_links}>
                    <li><a href="#">Home</a></li>
                    <li><a href="#about" onClick={scrollToSection("about")}>About</a></li>
                    <li><a href="#techstacks" onClick={scrollToSection("techstacks")}>Skills</a></li>
                    <li><a href="#projects" onClick={scrollToSection("projects")}>Projects</a></li>
                    <li><a href="#statistics" onClick={scrollToSection("statistics")}>Statistics</a></li>
                    <li><a href="#contacts" onClick={scrollToSection("contacts")}>Contacts</a></li>
                    <li>
                        <button className="nav-resume-button type1" onClick={handleDownload}>
                            Resume
                        </button>
                    </li>
                </ul>

                {/* Mobile Menu */}
                <div className={styles.menu_icon}>
                    <Menu>
                        <MenuButton
                            as={IconButton}
                            icon={<SlMenu size={"20px"} />}
                            onClick={() => setOption(!option)}
                            variant="none"
                            background="transparent"
                            borderRadius="2rem"
                            aria-label="Options"
                        />
                        <MenuList>
                            <MenuItem onClick={scrollToSection("about")}>About</MenuItem>
                            <MenuItem onClick={scrollToSection("techstacks")}>Skills</MenuItem>
                            <MenuItem onClick={scrollToSection("projects")}>Projects</MenuItem>
                            <MenuItem onClick={scrollToSection("statistics")}>Statistics</MenuItem>
                            <MenuItem onClick={scrollToSection("contacts")}>Contacts</MenuItem>
                            <MenuItem onClick={handleDownload}>Resume</MenuItem>
                        </MenuList>
                    </Menu>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;
