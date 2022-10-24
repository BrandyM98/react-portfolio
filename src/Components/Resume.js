import React from "react";
import myResume from "../../src/assets/files/resume.pdf";
import { BsCloudDownload } from "react-icons/bs";
import { MdFoundation } from "react-icons/md";
import { GrTechnology } from "react-icons/gr";
import { GrDocumentPerformance } from "react-icons/gr";

function Resume() {
  return (
    <div className="hi">
      <section id="resume" className="download-intro">
        <div className="flex-row">
          <h2 className="section-title primary-border">My Resume</h2>
        </div>
        <div className="flex-row">
          <div className="download-info">
            <div className="download-text">
              <a href={myResume} className="download-logo" download>
                <BsCloudDownload />
              </a>
              <p>
                Please feel free to check out my list of Developer
                Proficiencies!
              </p>
            </div>
          </div>
        </div>
      </section>
      <section id="home-page-body" className="resume-body">
        <div className="article column1">
          <p className="column-title">Font-End Tech</p>
          <p className="column-text">
            <ul>
              <li className="logo">
                <MdFoundation />
              </li>
              <li>HTML5</li>
              <li>CSS</li>
              <li>JavaScript</li>
              <li>Bootstrap</li>
              <li>APIs</li>
              <li>GIT</li>
            </ul>
          </p>
        </div>
        <div className="article column2">
          <p className="column-title">Back-End Tech</p>
          <p className="column-text">
            <ul>
              <li className="logo">
                <GrTechnology />
              </li>
              <li>Express.js</li>
              <li>Node.js</li>
              <li>Jest</li>
              <li>Sequelize</li>
              <li>MySQL</li>
              <li>Object-Relational Mapping(ORM)</li>
              <li>Model-View-Controller (MVC)</li>
            </ul>
          </p>
        </div>
        <div className="article column3">
          <p className="column-title">Performance Tech</p>
          <p className="column-text">
            <ul>
              <li className="logo">
                <GrDocumentPerformance />
              </li>
              <li>Progressive Web Applications (PWA)</li>
              <li>NoSQL</li>
              <li>MongoDB</li>
              <li>Mongoose</li>
              <li>GraphQL</li>
              <li>MERN</li>
              <li>React</li>
              <li>State</li>
            </ul>
          </p>
        </div>
      </section>
    </div>
  );
}

export default Resume;