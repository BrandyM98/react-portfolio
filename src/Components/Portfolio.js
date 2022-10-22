import React, { Component } from "react";
export default class Porfolio extends Component {
  render() {
    let informationData = this.props.informationData;
    return (
      <section id="portfolio">
        <div className="row">
          <div className="twelve columns collapsed">
          <h1>Projects</h1>
            <div class="works">
              {informationData.portfolio &&
                informationData.portfolio.map((item) => {
                  return (
                    <div className="columns portfolio-item">
                      <div className="item-wrap">
                        <div className="overlay">
                            <div className="portfolio-item-meta">
                              <h5>{item.name}</h5>
                              <h5>{item.imgurl}</h5>
                              <p>{item.description}</p>
                            </div>
                          </div>
                      </div>
                    </div>
                  );
                })}
            </div>
          </div>
        </div>
      </section>
    );
  }
}
