import React, {Component} from "react";
// import ScenarioCard from "../components/ScenarioCard";
// import Scenarios from "../json/scenario.json"

class GamePage extends Component{
  render(){
    return (
      <div>
        <p>{this.props.match.params.scenario}</p>
      </div>
    )
  }
}

export default GamePage;