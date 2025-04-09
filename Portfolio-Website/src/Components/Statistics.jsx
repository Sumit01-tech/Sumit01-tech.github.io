import React from "react";
import "../Styles/statistics.css";

const Statistics = () => {
    const isLocalhost = window.location.hostname === "localhost";

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
                        src="https://github-readme-stats.vercel.app/api?username=Sumit01-tech&count_private=true&theme=vue-dark"
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
                <div>
                    {isLocalhost ? (
                        <p style={{ textAlign: "center", color: "#999", fontStyle: "italic" }}>
                            GitHub Streak Stats not visible on localhost due to CORS. Check on live site.
                        </p>
                    ) : (
                        <img
                            className="github-streak-stats"
                            id="github-streak-stats"
                            referrerPolicy="no-referrer"
                            src="https://streak-stats.demolab.com/?user=Sumit01-tech&theme=vue-dark&hide_border=true&border_radius=6.5&date_format=M%20j%5B%2C%20Y%5D"
                            alt="GitHub streak stats"
                        />
                    )}
                </div>
            </div>
        </div>
    );
};

export default Statistics;
