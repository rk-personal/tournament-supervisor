import React, { Component } from 'react';

class Footer extends Component {
  render() {
    return (
        <footer className="footer" role="contentinfo" style={{borderTop: "1px Solid black"}}>
            <div className="container">
                <div className="row">
                <div className="col-md-4 mb-4 mb-md-0">
                    <h3>About Tournament Supervisor</h3>
                    <p>This website is sololy developed for orginizing and handling of events. It will reduce work needed to manage tournaments. </p>
                    <p className="social">
                    <a href="#"><span className="icofont-twitter"></span></a>
                    <a href="#"><span className="icofont-facebook"></span></a>
                    <a href="#"><span className="icofont-dribbble"></span></a>
                    <a href="#"><span className="icofont-behance"></span></a>
                    </p>
                </div>
                <div className="col-md-7 ml-auto">
                <div className="row site-section pt-0">
                        <div className="col-md-6 mb-4 mb-md-0">
                            <h3>Navigation</h3>
                            <ul className="list-unstyled">
                                <li className="active"><a href="index.html">Home</a></li>
                                <li><a href="features.html">Ongoing Tournaments</a></li>
                                <li><a href="pricing.html">Upcoming Tournaments</a></li>
                                <li><a href="pricing.html">Past Tournaments</a></li>
                                <li><a href="contact.html">Contact</a></li>
                            </ul>
                        </div>
                        <div className="col-md-4 mb-4 mb-md-0">
                            <h3>Services</h3>
                            <ul className="list-unstyled">
                                <li>Explore Teams</li>
                                <li>See Scores</li>
                                <li>Scheduling Of Tournament</li>
                                <li>Admin Service</li>
                            </ul>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
        </footer>
    );
  }
}

export default Footer;
