import React, { Component } from 'react';
import { matcheData } from '../common/constants';

class InternalDetailBox extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: 1,
            matchSummary: matcheData
        }
    }
    updateData(i) {
        this.setState({data:i});
    }

    getUpcomingMatches() {
        let todayDate = new Date();
        todayDate.setHours(0,0,0);
        let isTimeBeforeEnd = new Date().getHours() < 18, i = 0;
        return this.state.matchSummary.map((match) => {
            if(new Date(match[3]) > todayDate || (new Date(match[3]) === todayDate && isTimeBeforeEnd)) {
                return <tr><td  style={{textAlign: "center"}}>{++i}</td><td  style={{textAlign: "center"}}>{match[1]}</td><td  style={{textAlign: "center"}}>{match[2]}</td><td  style={{textAlign: "center"}}>{match[3]}</td></tr>;
            } else {
                return null
            }
        });
    }
    getComletedMatches() {
        let todayDate = new Date();
        todayDate.setHours(0,0,0);
        let isTimeBeforeEnd = new Date().getHours() > 18, i = 0;
        return this.state.matchSummary.map((match) => {
            if(new Date(match[3]) < todayDate || (new Date(match[3]) === todayDate && isTimeBeforeEnd)) {
                return <tr><td  style={{textAlign: "center"}}>{++i}</td><td  style={{textAlign: "center"}}>{match[1]}</td><td  style={{textAlign: "center"}}>{match[2]}</td><td  style={{textAlign: "center"}}>{match[3]}</td><td  style={{textAlign: "center"}}>{match[5]}</td><td  style={{textAlign: "center"}}>{match[4]}</td><td  style={{textAlign: "center"}}>{match[6]}</td></tr>;
            } else {
                return null
            }
        });
    }
  render() {
    // let reader = new FileReader();
    // reader.onload = async (e) => {
    //     console.log(e.text);
    // }
    // reader.readAsText('../../img/Matches.csv')
    return (
        <div className="board">
            <div className="internal-link-box">
                <button className={"internal-links " + (this.state.data === 1 ? "active-internal-link": '')} onClick={() => this.updateData(1)}>Upcoming</button>
                <button className={"internal-links " + (this.state.data === 2 ? "active-internal-link": '')}  onClick={() => this.updateData(2)}>Completed</button>
                <button className={"internal-links " + (this.state.data === 3 ? "active-internal-link": '')}  onClick={() => this.updateData(3)}>ScoreBoard</button>
            </div>
            {this.state.data === 1 ? <table className="table">
                <tr>
                <th  style={{textAlign: "center"}}>index</th><th  style={{textAlign: "center"}}>Team 1</th><th  style={{textAlign: "center"}}>Team 2</th><th  style={{textAlign: "center"}}>Match Date</th>
                </tr>{this.getUpcomingMatches()}</table>: ''}
            {this.state.data === 2 ? <table className="table">
                <tr><th  style={{textAlign: "center"}}>index</th><th  style={{textAlign: "center"}}>Team 1</th><th  style={{textAlign: "center"}}>Team 2</th><th  style={{textAlign: "center"}}>Match Date</th><th  style={{textAlign: "center"}}>Winning Team</th><th  style={{textAlign: "center"}}>Board Points</th><th  style={{textAlign: "center"}}>Queen Coverd By</th></tr>
                {this.getComletedMatches()}</table>: ''}
        </div>
    );
  }
}

export default InternalDetailBox;