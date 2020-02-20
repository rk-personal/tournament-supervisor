import React, { Component } from 'react';
import TournamentBox from './TournamentBox';

class OnGoingTournaments extends Component {
  render() {
    return (
      <div className="tournaments">
            <div className="row justify-content-center text-center mb-5">
                <div className="col-md-5" data-aos="fade-up">
                    <h2 className="section-heading">These are the Ongoing Tournaments:</h2>
                </div>
            </div>
            <TournamentBox filter="ongoing" />
      </div>
    );
  }
}

export default OnGoingTournaments;
