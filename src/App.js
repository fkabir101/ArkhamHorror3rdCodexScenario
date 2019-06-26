import React, { Component } from 'react';
import ScenarioCard from "./components/ScenarioCard";
import Scenarios from "./json/scenario.json";

class App extends Component {
  render(){
    return(
      <div className="App">
        {Scenarios.map(scenario => {
          return <ScenarioCard id={scenario.id}></ScenarioCard>
        })}
      </div>
    )
  }
}

export default App;
