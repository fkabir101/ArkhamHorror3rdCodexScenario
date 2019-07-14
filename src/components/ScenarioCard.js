import  React, { Component } from 'react';
import Scenarios from "../json/scenario.json";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
class ScenarioCard extends Component{
  state = {
    scenarioId : this.props.id
  }
  render(){
    return(
      <div className="card col-6">
        <div className = "content">
          <h1>{Scenarios[this.state.scenarioId].name}</h1>
          <h4>Reconing: {Scenarios[this.state.scenarioId].reconing}</h4>
          <p>The story so far:</p>
          <p>{Scenarios[this.state.scenarioId].text}</p>
          <p>Starting Location: {Scenarios[this.state.scenarioId].starting}</p>
          <Router>
            <Switch>
              <Route exact path="/" render ={() =>   <button className = "btn btn-success">Slect</button>}/>
            </Switch>
          </Router>
        </div>
      </div>
    )
  }
}

export default ScenarioCard;