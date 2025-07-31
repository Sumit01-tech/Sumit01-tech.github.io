import React from 'react';
import '../styles/Intro.css';
import Svgwave from './Svgwave';
import devlogo from '../Images/devloperLogo.svg';
import { useTypewriter, Cursor } from 'react-simple-typewriter';
import { FaGithub } from 'react-icons/fa';
import { MdAlternateEmail } from 'react-icons/md';
import { AiFillLinkedin } from 'react-icons/ai';
import { motion } from 'framer-motion';

const Intro = () => {
    const [text] = useTypewriter({
        words: ['A Front-End Web Developer'],
        loop: {},
        typeSpeed: 120,
        deleteSpeed: 80,
    });

    const githublink = () => {
        window.open('https://github.com/Sumit01-tech', '_blank');
    };

    const emaillink = () => {
        window.location.href = 'mailto:sumit.gourav280800@gmail.com';
    };

    const linkedinlink = () => {
        window.open('https://linkedin.com/in/sumit-gourav-884a86220/', '_blank');
    };

    return (
        <div className="intro-main" id="home">
            <div className="intro-main-img-div">
                <Svgwave />

                <div className="intro-main-text-div">
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                    >
                        <h1 className="nameh1tag" id="user-detail-name">
                            <span style={{ color: '#B5D9EB' }}>Hi, I'm </span>Sumit Gourav
                        </h1>

                        <h2 className="typewriter">
                            {text}
                            <Cursor cursorStyle="|" />
                        </h2>

                        <motion.div
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            className="devloperimg-div"
                        >
                            <img className="devloperimg" src={devlogo} alt="Developer" />
                        </motion.div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        className="socialamedialogos"
                    >
                        <motion.div
                            onClick={githublink}
                            id="contact-github"
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                        >
                            <FaGithub className="icon-github" />
                        </motion.div>

                        <motion.div
                            onClick={emaillink}
                            id="contact-email"
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                        >
                            <MdAlternateEmail className="icon-email" />
                        </motion.div>

                        <motion.div
                            onClick={linkedinlink}
                            id="contact-linkedin"
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                        >
                            <AiFillLinkedin className="icon-linkedin" />
                        </motion.div>
                    </motion.div>
                </div>
            </div>
        </div>
    );
};

export default Intro;
