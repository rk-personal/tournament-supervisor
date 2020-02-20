import React, { Component } from 'react';
import { Link } from 'react-router-dom';
class TopNav extends Component {
  render() {
    return (
        <div className="top-nav">
                <div className="">
                        <i>
                            <h1>
                                <a href="index.html" className="Logo">
                                    Tournament Supervisor
                                </a>
                            </h1>
                        </i>
                </div>
                <div className="col-9 topnav-links">
                        <div className="topnav-link-div"><Link to="/" className="nav-link">Home</Link></div>
                        <div className="topnav-link-div"><Link to="/ongoing" className="nav-link">Ongoing Tournaments</Link></div>
                        <div className="topnav-link-div"><Link to="/upcoming" className="nav-link">Upcoming Tournaments</Link></div>
                        <div className="topnav-link-div"><Link to="/completed" className="nav-link">Completed Tournaments</Link></div>
                        <div className="topnav-link-div"><Link to="/contact" className="nav-link">Contact</Link></div>
                </div>
            </div>
    );
  }
}

export default TopNav;
