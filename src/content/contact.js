
import React, { Component } from 'react';

class Contact extends Component {
  render() {
    return (
      <div className="tournaments">
          <div style={{height: "500px", width: "80%", margin: "10%"}}>
            <table class="table" border="1">
                <tr><th>Name</th><th>Email Address</th></tr>
                <tr><td>Rohit Sinkar</td><td>rohit.sinkar@emtecinc.com</td></tr>
                <tr><td>Sanket Paraskar</td><td>sanket.paraskar@emtecinc.com</td></tr>
                <tr><td>Ayushi Ajmera</td><td>Ayushi.Ajmera@emtecinc.com</td></tr>
                <tr><td>Simran Arora</td><td>Simran.Arora@emtecinc.com</td></tr>
                <tr><td>Arun Bargal</td><td>Arun.Bargal@emtecinc.com</td></tr>
                <tr><td>Aejaz Dhoteghar</td><td>Aejaz.Dhoteghar@emtecinc.com</td></tr>
                <tr><td>Aangi Shah</td><td>Aangi.Shah@emtecinc.com</td></tr>
                <tr><td>Prachi Sawant</td><td>Prachi.Sawant@emtecinc.com</td></tr>
                <tr><td>Rohan Katariya</td><td>Rohan.Katariya@emtecinc.com</td></tr>
            </table>
          </div>
      </div>
    );
  }
}

export default Contact;