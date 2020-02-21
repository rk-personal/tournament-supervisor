import React, { Component } from 'react';
import './App.css';
import TopNav from './navBars/TopNav';
import HomeContent from './content/HomeContent';
import OnGoingTournaments from './content/OnGoingTournaments';
import UpcomingTournaments from './content/UpcomingTournaments';
import Footer from './navBars/Footer';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import ViewDetails from './content/ViewDetails';
import CompletedTournaments from './content/CompletedTournaments';
import Contact from './content/contact';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router >
          <TopNav />
          <Switch >
            <Route exact path="/"><HomeContent /></Route>
            <Route path="/ongoing"><OnGoingTournaments /></Route>
            <Route path="/upcoming"><UpcomingTournaments /></Route>
            <Route path="/completed"><CompletedTournaments /></Route>
            <Route path="/contact"><Contact /></Route>
            <Route path="/viewDetails/:id"><ViewDetails /></Route>
          </Switch>
          <Footer />
        </Router>
      </div>
    );
  }
}

export default App;
