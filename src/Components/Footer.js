import React from "react";
import { VscGithubAlt } from "react-icons/vsc";
import { AiOutlineLinkedin } from "react-icons/ai";

function Footer() {
  return (
    <footer>
      <h2>Made by Brandy Moore</h2>
      <p>
        <ul>
        <a href="https://github.com/BrandyM98" target="blank">
            <li className="logo">
              <VscGithubAlt />
            </li>
          </a>
          <a
                href="https://www.linkedin.com/in/brandy-a-moore/"
                target="blank"
              >
            <li className="logo">
              <AiOutlineLinkedin />
            </li>
          </a>
         
        </ul>
      </p>
    </footer>
  );
}

export default Footer;