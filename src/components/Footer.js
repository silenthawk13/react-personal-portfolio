import React from "react";
//import SocialFollow from "../SocialFollow";

import TwitterIcon from "@material-ui/icons/Twitter";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import GithubIcon from "@material-ui/icons/GitHub";
import "../styles/Footer.css";

function Footer() {
  return (
    <div className="footer">
      <div className="socialMedia">
        <a
          href="https://www.twitter.com/silenthawk13"
          className="twitter social" rel="noreferrer"
          target="_blank"
        >
          <TwitterIcon />
        </a>

        <a
          href="https://www.linkedin.com/in/john-waithaka-733b54184/"
          className="linkedin social" rel="noreferrer"
          target="_blank"
        >
          <LinkedInIcon />
        </a>
        <a
          href="https://www.github.com/silenthawk13"
          className="github social" rel="noreferrer"
          target="_blank"
        >
          <GithubIcon />
        </a>
      </div>
      <p> &copy; 2022 John Waithaka.</p>
    </div>
  );
}

export default Footer;
