import React, { Component } from "react";
import { FiGithub } from "react-icons/fi";
import { AiOutlineLinkedin } from "react-icons/ai";
import Nav from 'react-bootstrap/Nav';

export default class Header extends Component {
  render() {
    let informationData = this.props.informationData;
    return (
      <header id="home">
        <Nav className="justify-content-center" >
          <ul id="nav" className="nav">
            <li className="current">
              <a className="smoothscroll" href="#home">
                Home
              </a>
            </li>
            <li>
              <a className="smoothscroll" href="#about">
                About Me
              </a>
            </li>
            <li>
              <a className="smoothscroll" href="#portfolio">
                Portfolio
              </a>
            </li>
            <li>
              <a className="smoothscroll" href="#resume">
                Resume
              </a>
            </li>
            <li>
              <a className="smoothscroll" href="#contact">
                Contact
              </a>
            </li>
          </ul>
        </Nav>

        <div className="row banner" id="center">
          <div>
            <h1 className="responsive-headline">
              I am {informationData.name}.
            </h1>
            <h3 style={{ fontFamily: "sans-serif ", color: "#0E5259"}}>
              I am a {informationData.role}.{informationData.roleDescription}
            </h3>
            <ul className="social">
              <a href="https://github.com/BrandyM98" target="blank">
                <p className="logo">
                  <FiGithub />
                </p>
              </a>
              <a
                href="https://www.linkedin.com/in/brandy-a-moore/"
                target="blank"
              >
                <p className="logo">
                  <AiOutlineLinkedin />
                </p>
              </a>
            </ul>
          </div>
        </div>

        <p className="scrolldown">
          <a className="smoothscroll" href="#about">
            <i className="icon-down-circle"></i>
          </a>
        </p>
      </header>
    );
  }
}
