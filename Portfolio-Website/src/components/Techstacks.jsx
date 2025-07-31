import React from 'react';
import "../styles/TechStack.css";
import javascript from "../Images/mini-icons/icons8-javascript.svg";
import typescript from "../Images/typescript-logo-svgrepo-com.svg";
import Nodejs from "../Images/mini-icons/icons8-node-js.svg";
import github from "../Images/mini-icons/icons8-github (1).svg";
import vercel from "../Images/vercel-seeklogo.com.svg";
import netlify from "../Images/netlify.png";
import vscode from "../Images/mini-icons/icons8-visual-studio-code-2019.svg";
import { Tooltip } from '@chakra-ui/react';

const Techstacks = () => {
    return (
        <div className='Tech-Stacks' id="skills">
            <div className='heading-div'>
                <button className='heading-textbtn'>
                    <h1 className='heading'>
                        Technical <span style={{ color: "#0e4166" }}>Skills</span>
                    </h1>
                </button>
            </div>

            <div className='logosofstacks'>

                {/* React */}
                <Tooltip hasArrow label="React" bg={"#61dafb"} color={"white"}>
                    <div className="coin react_logo">
                        <div className="side heads skills-card">
                            <img src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg" alt="React" width="60" />
                        </div>
                        <div className="side tails">
                            <img src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg" alt="React" width="60" />
                        </div>
                    </div>
                </Tooltip>

                {/* Redux */}
                <Tooltip hasArrow label="Redux" bg={"#7e57c2"} color={"white"}>
                    <div className="coin redux_logo">
                        <div className="side heads skills-card">
                            <img src="https://raw.githubusercontent.com/reduxjs/redux/master/logo/logo.png" alt="Redux" width="60" />
                        </div>
                        <div className="side tails">
                            <img src="https://raw.githubusercontent.com/reduxjs/redux/master/logo/logo.png" alt="Redux" width="60" />
                        </div>
                    </div>
                </Tooltip>

                <Tooltip hasArrow label="HTML" className="tooltip-font" bg={"#FC573B"} color={"white"} >
                    <div className="coin  html_logo " >
                        <div className="side heads skills-card">

                            <svg xmlns="http://www.w3.org/2000/svg" enableBackground="new 0 0 32 32" viewBox="0 0 32 32" id="html"><path fill="#FFE6E2" d="M26,32H6c-3.314,0-6-2.686-6-6V6c0-3.314,2.686-6,6-6h20c3.314,0,6,2.686,6,6v20C32,29.314,29.314,32,26,32z"></path><path fill="#FFE6E2" d="M26,32H6c-3.314,0-6-2.686-6-6V6c0-3.314,2.686-6,6-6h20c3.314,0,6,2.686,6,6v20C32,29.314,29.314,32,26,32z"></path><path fill="#FC573B" d="M21.592,22.136L22.834,8H9.167H9.166l1.242,14.136L15.982,24L21.592,22.136z M12.468,19.632l-0.213-2.707h1.698l0.125,1.361l1.904,0.518l1.911-0.518l0.213-2.222h-5.94l-0.456-5.2h8.581l-0.156,1.704h-6.541l0.146,1.765h6.249l-0.484,5.3l-3.484,0.965v0.011h-0.039L12.468,19.632z"></path></svg>
                        </div>
                        <div className="side tails">
                            <svg xmlns="http://www.w3.org/2000/svg" enableBackground="new 0 0 32 32" viewBox="0 0 32 32" id="html"><path fill="#FFE6E2" d="M26,32H6c-3.314,0-6-2.686-6-6V6c0-3.314,2.686-6,6-6h20c3.314,0,6,2.686,6,6v20C32,29.314,29.314,32,26,32z"></path><path fill="#FFE6E2" d="M26,32H6c-3.314,0-6-2.686-6-6V6c0-3.314,2.686-6,6-6h20c3.314,0,6,2.686,6,6v20C32,29.314,29.314,32,26,32z"></path><path fill="#FC573B" d="M21.592,22.136L22.834,8H9.167H9.166l1.242,14.136L15.982,24L21.592,22.136z M12.468,19.632l-0.213-2.707h1.698l0.125,1.361l1.904,0.518l1.911-0.518l0.213-2.222h-5.94l-0.456-5.2h8.581l-0.156,1.704h-6.541l0.146,1.765h6.249l-0.484,5.3l-3.484,0.965v0.011h-0.039L12.468,19.632z"></path></svg>
                        </div>
                    </div>
                </Tooltip>

                <Tooltip hasArrow label="CSS" className="tooltip-font " bg={"#1572B6"} color={"white"}>
                    <div className="coin Css_logo">
                        <div className="side heads skills-card">

                            <svg className='css-logo-width skills-card' xmlns="http://www.w3.org/2000/svg" width={"4.3rem"} viewBox="0 0 128 128" id="css3"><path fill="#131313" d="M89.234 5.856h-7.384l7.679 8.333v3.967h-15.816v-4.645h7.678l-7.678-8.333v-3.971h15.521v4.649zm-18.657 0h-7.384l7.679 8.333v3.967h-15.817v-4.645h7.679l-7.679-8.333v-3.971h15.522v4.649zm-18.474.19h-7.968v7.271h7.968v4.839h-13.632v-16.949h13.632v4.839z"></path><path fill="#1572B6" d="M27.613 116.706l-8.097-90.813h88.967l-8.104 90.798-36.434 10.102-36.332-10.087z"></path><path fill="#33A9DC" d="M64.001 119.072l29.439-8.162 6.926-77.591h-36.365v85.753z"></path><path fill="#fff" d="M64 66.22h14.738l1.019-11.405h-15.757v-11.138h27.929000000000002l-.267 2.988-2.737 30.692h-24.925v-11.137z"></path><path fill="#EBEBEB" d="M64.067 95.146l-.049.014-12.404-3.35-.794-8.883h-11.178999999999998l1.561 17.488 22.814 6.333.052-.015v-11.587z"></path><path fill="#fff" d="M77.792 76.886l-1.342 14.916-12.422 3.353v11.588l22.833-6.328.168-1.882 1.938-21.647h-11.175z"></path><path fill="#EBEBEB" d="M64.039 43.677v11.136999999999999h-26.903000000000002l-.224-2.503-.507-5.646-.267-2.988h27.901zM64 66.221v11.138h-12.247l-.223-2.503-.508-5.647-.267-2.988h13.245z"></path></svg>
                        </div>
                        <div className="side tails">
                            <svg className='css-logo-width' xmlns="http://www.w3.org/2000/svg" width={"4.3rem"} viewBox="0 0 128 128" id="css3"><path fill="#131313" d="M89.234 5.856h-7.384l7.679 8.333v3.967h-15.816v-4.645h7.678l-7.678-8.333v-3.971h15.521v4.649zm-18.657 0h-7.384l7.679 8.333v3.967h-15.817v-4.645h7.679l-7.679-8.333v-3.971h15.522v4.649zm-18.474.19h-7.968v7.271h7.968v4.839h-13.632v-16.949h13.632v4.839z"></path><path fill="#1572B6" d="M27.613 116.706l-8.097-90.813h88.967l-8.104 90.798-36.434 10.102-36.332-10.087z"></path><path fill="#33A9DC" d="M64.001 119.072l29.439-8.162 6.926-77.591h-36.365v85.753z"></path><path fill="#fff" d="M64 66.22h14.738l1.019-11.405h-15.757v-11.138h27.929000000000002l-.267 2.988-2.737 30.692h-24.925v-11.137z"></path><path fill="#EBEBEB" d="M64.067 95.146l-.049.014-12.404-3.35-.794-8.883h-11.178999999999998l1.561 17.488 22.814 6.333.052-.015v-11.587z"></path><path fill="#fff" d="M77.792 76.886l-1.342 14.916-12.422 3.353v11.588l22.833-6.328.168-1.882 1.938-21.647h-11.175z"></path><path fill="#EBEBEB" d="M64.039 43.677v11.136999999999999h-26.903000000000002l-.224-2.503-.507-5.646-.267-2.988h27.901zM64 66.221v11.138h-12.247l-.223-2.503-.508-5.647-.267-2.988h13.245z"></path></svg>
                        </div>
                    </div>
                    {/* <p class="skills-card-name">CSS</p> */}
                </Tooltip>


                {/* JavaScript */}
                <Tooltip hasArrow label="JavaScript" bg={"#f7df1e"} color={"black"}>
                    <div className="coin jslogo">
                        <div className="side heads skills-card">
                            <img src="https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png" alt="JavaScript" width="60" />
                        </div>
                        <div className="side tails">
                            <img src="https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png" alt="JavaScript" width="60" />
                        </div>
                    </div>
                </Tooltip>

                {/* TypeScript */}
                <Tooltip hasArrow label="TypeScript" bg="#3178c6" color="white">
                    <div className="coin">
                        <div className="side heads skills-card">
                            <img src={typescript} alt="TypeScript" width="60" />
                        </div>
                        <div className="side tails">
                            <img src={typescript} alt="TypeScript" width="60" />
                        </div>
                    </div>
                </Tooltip>

                {/* Node.js */}
                <Tooltip hasArrow label="Node.js" bg="#68a063" color="white">
                    <div className="coin">
                        <div className="side heads skills-card">
                            <img src={Nodejs} alt="Node.js" width="60" />
                        </div>
                        <div className="side tails">
                            <img src={Nodejs} alt="Node.js" width="60" />
                        </div>
                    </div>
                </Tooltip>

                {/* GitHub */}
                <Tooltip hasArrow label="GitHub" bg="#000" color="white">
                    <div className="coin">
                        <div className="side heads skills-card">
                            <img src={github} alt="GitHub" width="60" />
                        </div>
                        <div className="side tails">
                            <img src={github} alt="GitHub" width="60" />
                        </div>
                    </div>
                </Tooltip>

                {/* Vercel */}
                <Tooltip hasArrow label="Vercel" bg="#000" color="white">
                    <div className="coin">
                        <div className="side heads skills-card">
                            <img src={vercel} alt="Vercel" width="60" />
                        </div>
                        <div className="side tails">
                            <img src={vercel} alt="Vercel" width="60" />
                        </div>
                    </div>
                </Tooltip>

                {/* Netlify */}
                <Tooltip hasArrow label="Netlify" bg="#00C7B7" color="white">
                    <div className="coin">
                        <div className="side heads skills-card">
                            <img src={netlify} alt="Netlify" width="60" />
                        </div>
                        <div className="side tails">
                            <img src={netlify} alt="Netlify" width="60" />
                        </div>
                    </div>
                </Tooltip>

                {/* VS Code */}
                <Tooltip hasArrow label="VS Code" bg="#007ACC" color="white">
                    <div className="coin">
                        <div className="side heads skills-card">
                            <img src={vscode} alt="VS Code" width="60" />
                        </div>
                        <div className="side tails">
                            <img src={vscode} alt="VS Code" width="60" />
                        </div>
                    </div>
                </Tooltip>

            </div>
        </div>
    );
};

export default Techstacks;
