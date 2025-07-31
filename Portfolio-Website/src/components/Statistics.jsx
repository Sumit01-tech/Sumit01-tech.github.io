import React from "react";
import "../styles/Statistics.css";

const Statistics = () => {
    return (
        <div className="stats" id="statistics">
            {/* Heading */}
            <div className="heading-div">
                <button className="heading-textbtn">
                    <h1 className="mainheading">
                        Git <span style={{ color: "#0e4166" }}>Stat's</span>
                    </h1>
                </button>
            </div>

            {/* GitHub Contribution Calendar */}
            <div className="github-calender-div">
                <div className="calendar-container calendar react-activity-calendar">
                    <img
                        style={{ width: "95%", margin: "auto" }}
                        src="https://ghchart.rshah.org/Sumit01-tech"
                        alt="GitHub contributions chart"
                    />
                </div>
            </div>

            {/* GitHub Stats */}
            <div className="git-box">
                <div>
                    <img
                        className="github-stats-card"
                        id="github-stats-card"
                        src="https://github-readme-stats.vercel.app/api?username=Sumit01-tech&count_private=true&show_icons=true&theme=vue-dark"
                        alt="GitHub stats card"
                    />
                </div>
                <div>
                    <img
                        className="github-top-langs"
                        id="github-top-langs"
                        src="https://github-readme-stats.vercel.app/api/top-langs/?username=Sumit01-tech&layout=compact&theme=vue-dark"
                        alt="Top languages"
                    />
                </div>
                <div className="github-contribution-card">
                    <img
                        className="github-contribution-graph"
                        id="github-contribution-graph"
                        src="https://github-readme-activity-graph.vercel.app/graph?username=Sumit01-tech&theme=vue-dark&hide_border=true"
                        alt="GitHub Contribution Graph"
                    />
                </div>
            </div>
        </div>
    );
};

export default Statistics;
