import React, { Component } from 'react';
import { CalendarIcon, ToggleLeftIcon, UsersIcon } from 'react-line-awesome';

class HomeContent extends Component {
  render() {
    return (
        <div className="main">
            <div className="hero-section">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-12 hero-text-image">
                            <div className="row">
                                <div className="col-lg-7 text-center text-lg-left">
                                    <h1 data-aos="fade-right">Tournaments orginization and Monitoring is easy with Tournament supervisoring.</h1>
                                    <p className="mb-5" data-aos="fade-right" data-aos-delay="100">Go Easy, Make Easy!</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="site-section">
                <div className="container">
                    <div className="row justify-content-center text-center mb-5">
                        <div className="col-md-5" data-aos="fade-up">
                            <h2 className="section-heading">Save your time by using Tournament supervisor</h2>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-4" data-aos="fade-up" data-aos-delay="">
                            <div className="feature-1 text-center">
                                <div className="wrap-icon icon-1">
                                    <UsersIcon className="icon"/>
                                </div>
                                <h3 className="mb-3">Explore Your Team</h3>
                                <p>See what teams you have! What players are in other teams</p>
                            </div>
                        </div>
                        <div className="col-md-4" data-aos="fade-up" data-aos-delay="100">
                            <div className="feature-1 text-center">
                                <div className="wrap-icon icon-1">
                                    <ToggleLeftIcon className="icon"/>
                                </div>
                                <h3 className="mb-3">Digital Scoreboard</h3>
                                <p>See your Tournaments Scoreboard.</p>
                            </div>
                        </div>
                        <div className="col-md-4" data-aos="fade-up" data-aos-delay="200">
                            <div className="feature-1 text-center">
                                <div className="wrap-icon icon-1">
                                    <CalendarIcon className="icon"/>
                                </div>
                                <h3 className="mb-3">Schedule</h3>
                                <p>See Schedule of the matches in Tournaments</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
  }
}

export default HomeContent;