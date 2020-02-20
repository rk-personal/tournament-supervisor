import React, { Component } from 'react';
import TournamentBox from './TournamentBox';

class UpcomingTournaments extends Component {
  render() {
    return (
      <div className="tournaments">
            <div className="row justify-content-center text-center mb-5">
                <div className="col-md-5" data-aos="fade-up">
                    <h2 className="section-heading">These are the Upcoming Tournaments:</h2>
                </div>
            </div>
            <TournamentBox filter="upcoming" />
      </div>
    );
  }
}

export default UpcomingTournaments;
