import React from "react";
import ScenarioCard from "../components/ScenarioCard";
import Scenarios from "../json/scenario.json";

function ScenarioPage() {
  return (
    <div>
      {Scenarios.map(scenario => {
        return <ScenarioCard id={scenario.id}></ScenarioCard>
      })}
    </div>
  )
}

export default ScenarioPage;