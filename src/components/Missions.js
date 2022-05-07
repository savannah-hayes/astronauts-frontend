import React from "react";

import Navbar from "components/Navbar";
import missionsData from "../data/missions-data.json";
import { renderMissionsData } from "../partials/RenderTableData";

import { Header, MissionsTable } from "../styled-components/MissionsStyling";

const Missions = () => {
  return (
    <div>
      <Navbar />
      <MissionsTable>
        <Header>Launches and orbital flights</Header>
        <tbody>
          <tr>
            <th>Mission</th>
            <th>Shuttle</th>
            <th>Crew</th>
            <th>Duration</th>
            <th>Launch Pad</th>
          </tr>
          {renderMissionsData(missionsData)}
        </tbody>
      </MissionsTable>
    </div>
  )
}

export default Missions