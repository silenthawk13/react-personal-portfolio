import React from "react";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import EmailIcon from "@material-ui/icons/Email";
import GithubIcon from "@material-ui/icons/GitHub";
import "../styles/Home.css";

function Home() {
  return (
    <div className="home">
      <div className="about">
        <h2> Hi, My Name is John</h2>
        <div className="prompt">
          <p>A software developer with a passion for learning and creating.</p>
          <a
            href="https://www.linkedin.com/in/john-waithaka-733b54184/"
            className="linkedin social"
          >
            <LinkedInIcon />
          </a>

          <a href="mailto:jwaithaka746@gmail.com" target="_top">
            <EmailIcon />
          </a>

          <a
            href="https://www.github.com/silenthawk13"
            className="github social"
          >
            <GithubIcon />
          </a>
        </div>
      </div>
      <div className="skills">
        <h1> Skills</h1>
        <ol className="list">
          <li className="item">
            <h2> Front-End</h2>
            <span>
              ReactJS, React Native, HTML, CSS, SCSS, JavaScript, NPM,
              BootStrap, MaterialUI, Yarn, StyledComponents
            </span>
          </li>
          <li className="item">
            <h2>Back-End</h2>
            <span>
              NodeJS, ExpressJS, Firebase, Google Maps, Machine Learning,
              PostgreSQL, MongoDB, Netlify, Stripe API, Ruby on Rails
            </span>
          </li>
          <li className="item">
            <h2>Languages</h2>
            <span>JavaScript, Solidity, Ruby on Rails</span>
          </li>
        </ol>
      </div>
    </div>
  );
}

export default Home;
