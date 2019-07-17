import React, {Component} from "react";
import ScenarioCard from "../components/ScenarioCard";
import Scenarios from "../json/scenario.json"

class GamePage extends Component{
  state = {
    clues : 0,
    doom : 0,
    scenarioId : 0,
    scenario : "",
    scenarioMounted : false
  }
  componentDidMount = () =>{
    for(let i = 0; i < Scenarios.length; i++){
      if (Scenarios[i].scenario === this.props.match.params.scenario){
        this.setState({scenario : Scenarios[i], scenarioId : i,
        scenarioMounted : true});
      }
    }
  }
  render(){
    let mounted = false 
    if(this.state.scenarioMounted){
      mounted = true;
    }
    return (
      <div>
        {mounted ? (
          <div className = "d-flex justify-content-center">
            <ScenarioCard id = {this.state.scenarioId}></ScenarioCard>
          </div>
        )
        : (<h1>Loading</h1>)}
      </div>
    )
  }
}

export default GamePage;