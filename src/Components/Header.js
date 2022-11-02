import React, { Component } from "react";
import { FiGithub } from "react-icons/fi";
import { AiOutlineLinkedin } from "react-icons/ai";
import Nav from 'react-bootstrap/Nav';
import profileImage from "../assets/images/profile.png";
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';


export default class Header extends Component {
  render() {
    let informationData = this.props.informationData;
    return (
      <header id="home">
         <Navbar collapseOnSelect expand="lg" className='ps-4'>
      <Navbar.Brand to="Home" href="/">
       Home
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">

        <Container>
          <Nav className="justify-content-center">
            <Nav.Link href="#about" className='fs-5 text-dark'>ABOUT ME</Nav.Link>
            <Nav.Link href="#portfolio"className='fs-5 text-dark' >PORTFOLIO</Nav.Link>
            <Nav.Link href="#resume"className='fs-5 text-dark'>RESUME</Nav.Link>
            <Nav.Link href="#contact" className='fs-5 text-dark'>CONTACT</Nav.Link>

          </Nav>
        </Container>
      </Navbar.Collapse>
    </Navbar>

        <div className="row banner" id="center">
        <div className="profileImage">
            <img src={profileImage} style={{ width: "350px" }} alt="profile" />
          </div>
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
