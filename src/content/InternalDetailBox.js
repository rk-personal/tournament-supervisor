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
        let todayDate = new Date().toLocaleDateString();
        let isTimeBeforeEnd = new Date().getHours() < 17, i = 0;
        return this.state.matchSummary.map((match) => {
            let date = new Date(match[3]).toLocaleDateString();
            if(date > todayDate || (date === todayDate && isTimeBeforeEnd)) {
                return <tr><td  style={{textAlign: "center"}}>{++i}</td><td  style={{textAlign: "center"}}>{match[1]}</td><td  style={{textAlign: "center"}}>{match[2]}</td><td  style={{textAlign: "center"}}>{match[3]}</td></tr>;
            } else {
                return null
            }
        });
    }
    getComletedMatches() {
        let todayDate = new Date().toLocaleDateString();
        let isTimeBeforeEnd = new Date().getHours() >= 17, i = 0;
        return this.state.matchSummary.map((match) => {
            let date = new Date(match[3]).toLocaleDateString();
            if(date < todayDate || (date === todayDate && isTimeBeforeEnd)) {
                return <tr><td  style={{textAlign: "center"}}>{++i}</td><td  style={{textAlign: "center"}}>{match[1]}</td><td  style={{textAlign: "center"}}>{match[2]}</td><td  style={{textAlign: "center"}}>{match[3]}</td><td  style={{textAlign: "center"}}>{match[5]}</td><td  style={{textAlign: "center"}}>{match[4]}</td><td  style={{textAlign: "center"}}>{match[6]}</td></tr>;
            } else {
                return null
            }
        });
    }
    getScoreBoard() {
        let teamsData = {}, teams = [], i = 0;
        this.state.matchSummary.forEach((key) => {
            if(key[5]) {
                let team1 = key[1];
                let team2 = key[2];
                if(team1[team1.length-1] === " ") {
                    team1 = team1.substring(0, team1.length-1);
                }
                if(team2[team2.length-1] === " ") {
                    team2 = team2.substring(0, team2.length-1);
                }
                if(team1[0] === " ") {
                    team1 = team1.substring(1, team1.length);
                }
                if(team2[0] === " ") {
                    team2 = team2.substring(1, team2.length);
                }
                if(!teams.includes(team1)) {
                    teamsData[team1] = {
                        noOfMatches: 0,
                        noOfLost: 0,
                        noOfWins: 0,
                        noOfQueenCovered: 0,
                        totalBoardPoints: 0
                    };
                    teams.push(team1);
                }
                if(!teams.includes(team2)) {
                    teamsData[team2] = {
                        noOfMatches: 0,
                        noOfLost: 0,
                        noOfWins: 0,
                        noOfQueenCovered: 0,
                        totalBoardPoints: 0
                    };
                    teams.push(team2);
                }
                teamsData[team1].noOfMatches += 1;
                teamsData[team2].noOfMatches += 1;
                if(key[5] && key[5] === 1) {
                    teamsData[team1].noOfWins += 1;
                    teamsData[team1].totalBoardPoints += key[4];
                } else {
                    teamsData[team1].noOfLost += 1;
                }
                if(key[5] && key[5] === 2) {
                    teamsData[team2].noOfWins += 1;
                    teamsData[team2].totalBoardPoints += key[4];
                } else {
                    teamsData[team2].noOfLost += 1;
                }
                if(key[6] === 1) {
                    teamsData[team1].noOfQueenCovered += 1;
                } else {
                    teamsData[team2].noOfQueenCovered += 1;
                }
            }
        })

        let arr = Object.keys(teamsData);
        arr.sort((a, b) => {
            if(teamsData[a].noOfWins < teamsData[b].noOfWins) {
                return 1;
            } else if(teamsData[a].noOfWins > teamsData[b].noOfWins) {
                return -1;
            } if(teamsData[a].totalBoardPoints < teamsData[b].totalBoardPoints) {
                return 1;
            } else if(teamsData[a].totalBoardPoints > teamsData[b].totalBoardPoints) {
                return -1;
            } if(teamsData[a].noOfQueenCovered <= teamsData[b].noOfQueenCovered) {
                return 1;
            } else if(teamsData[a].noOfQueenCovered > teamsData[b].noOfQueenCovered) {
                return -1;
            }
            return 1;
        })
        return arr.map((team) => {
            console.log(team);
                return <tr><td  style={{textAlign: "center"}}>{++i}</td><td  style={{textAlign: "center"}}>{team}</td><td  style={{textAlign: "center"}}>{teamsData[team].noOfMatches}</td><td  style={{textAlign: "center"}}>{teamsData[team].noOfWins}</td><td  style={{textAlign: "center"}}>{teamsData[team].noOfLost}</td><td  style={{textAlign: "center"}}>{teamsData[team].totalBoardPoints}</td><td  style={{textAlign: "center"}}>{teamsData[team].noOfQueenCovered}</td></tr>;
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
            <div style={{overflowY: 'auto', height: '400px', width: '100%'}}>
            {this.state.data === 1 ? <table className="table">
                <tr>
                <th  style={{textAlign: "center"}}>index</th><th  style={{textAlign: "center"}}>Team 1</th><th  style={{textAlign: "center"}}>Team 2</th><th  style={{textAlign: "center"}}>Match Date</th>
                </tr>{this.getUpcomingMatches()}</table>: ''}
            {this.state.data === 2 ? <table className="table">
                <tr><th  style={{textAlign: "center"}}>index</th><th  style={{textAlign: "center"}}>Team 1</th><th  style={{textAlign: "center"}}>Team 2</th><th  style={{textAlign: "center"}}>Match Date</th><th  style={{textAlign: "center"}}>Winning Team</th><th  style={{textAlign: "center"}}>Board Points</th><th  style={{textAlign: "center"}}>Queen Coverd By</th></tr>
                {this.getComletedMatches()}</table>: ''}
            {this.state.data === 3 ? <table className="table">
                <tr><th  style={{textAlign: "center"}}>index</th><th  style={{textAlign: "center"}}>Team Name</th><th  style={{textAlign: "center"}}>No Of Matches</th><th  style={{textAlign: "center"}}>Won</th><th  style={{textAlign: "center"}}>Lost</th><th  style={{textAlign: "center"}}>Total Board Points</th><th  style={{textAlign: "center"}}>No Of times Queen Covered</th></tr>
                {this.getScoreBoard()}</table>: ''}
            </div>
        </div>
    );
  }
}

export default InternalDetailBox;