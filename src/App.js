import React, { Component } from 'react';
import ScenarioPage from "./pages/ScenarioSelect";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

class App extends Component {
  render(){
    return(
      <div className="App">
        <Router>
          <Switch>
          <Route exact path="/" render={() =>  <ScenarioPage></ScenarioPage>}/>
          </Switch>
        </Router>
      </div>
    )
  }
}

export default App;
