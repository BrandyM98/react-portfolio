import React, { Component } from 'react';
import {BrowserRouter as Router,Link} from 'react-router-dom';

export default class Porfolio extends Component {
  render() {
    let informationData = this.props.informationData;
    return (
      <Router>
      <section id="portfolio">
      <div className="row">
        <div className="twelve columns collapsed">
          <h1>Check Out Some of My Work!</h1>
          <div id="portfolio-wrapper" className="bgrid-quarters s-bgrid-thirds cf">
          {
            informationData.portfolio && informationData.portfolio.map((item)=>{
              return(
                <div className="columns portfolio-item">
                  <div className="item-wrap">
                      <img src={item.imgurl} alt="portfolio" className="item-img"/>
                      <div className="overlay">
                    <Link to={item.imglink}>
                        <div className="portfolio-item-meta">
                          <h5>{item.name}</h5>
                          <p>{item.description}</p>
                        </div>
                    </Link>
                      </div>
                  </div>
                </div>
              )
            })
          }
          </div>
        </div>
      </div>
  </section>
  </Router>
        );
  }
}