import './App.css';
import Header from "../src/components/Header/Header";
import Club from "../src/components/Club/Club";
import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import SingleClubDetail from "./components/SingleClubDetail/SingleClubDetail";
import NotFound from "./components/NotFound/NotFound";

function App() {
  return (
      <Router>
          <Switch>
              <Route exact path="/">
                  <Club></Club>
              </Route>
              <Route path="/team/:idTeam">
                  <SingleClubDetail>

                  </SingleClubDetail>
              </Route>
              <Route path="*">
                  <NotFound></NotFound>
              </Route>
          </Switch>


      </Router>
  );
}

export default App;
