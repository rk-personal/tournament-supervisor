import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { tournamentsDatails } from '../common/constants';

class TournamentBox extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tournamentList : tournamentsDatails 
        }
    }
    getTournamentbox() {
        let todayDate = new Date();
        let ongoing, upcoming, completed;
        ongoing  = this.props.filter === 'ongoing';
        upcoming  = this.props.filter === 'upcoming';
        completed  = this.props.filter === 'completed';
        let arr = [];
        Object.keys(this.state.tournamentList).forEach(key => {
            let element = this.state.tournamentList[key];
            let startDate = new Date(element.startDate);
            console.log(startDate , todayDate)
            if(ongoing && startDate < todayDate) {
                arr.push(element);
            } else if(upcoming && startDate > todayDate) {
                arr.push(element)
            } else if(completed && element.endDate) {
                arr.push(element);
            }
        })
        return arr.map(element => {
            return (
                <div className="tournament-outer-box">
                    <img src={element.img} alt={element.name}/>
                    <div>
                        <b>{element.name}</b>
                    </div>
                    <div className="view-details">
                    <Link className="view-details-link" to={ upcoming ? "www.google.com/" + element.name : "/viewDetails/" + element.id}>
                    <div className="view-details">
                         {upcoming ? "Register" : "View Details"}
                    </div>
                    </Link>
                    </div>
                </div>
            )
        });
    }
  render() {
    return (
        <div className="tournament-boxes" >
            {this.getTournamentbox()}
        </div>
    );
  }
}

export default TournamentBox;
