import React, { Component } from "react";
import profileImage from "../assets/images/profile.png";

export default class About extends Component {
  render() {
    let informationData = this.props.informationData;
    return (
      <div className="row banner">
        <section id="about">
          <div className="profileImage">
            <img src={profileImage} style={{ width: "350px" }} alt="profile" />
          </div>
          <div className="row">
            <div className="nine columns main-col">
              <h2>About Me</h2>
              <p id="para">{informationData.about}</p>
              <div>
                <div className="columns contact-details">
                  <p>
                    <span>
                      <strong>{informationData.address}</strong>
                    </span>
                    <br></br>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <p className="scrolldown">
          <a className="smoothscroll" href="#about">
            <i className="icon-down-circle"></i>
          </a>
        </p>
      </div>
    );
  }
}
