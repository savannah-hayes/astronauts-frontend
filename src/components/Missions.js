import React, { useState, useEffect } from "react";

import Navbar from "components/Navbar";
import Loading from "partials/Loading";
import FormattedDate from "partials/FormattedDate";

import { missionsApi, astronautsByMissionApi } from "utils/urls";

import {
  Button,
  Header,
  MissionsTable,
  MissionsTr,
  MissionsTd,
  MissionHeader
} from "../styled-components/MissionsStyling";
import {
  CardWrapper,
  Card,
  SubHeader
} from "../styled-components/styles";

const Missions = () => {
  const [missions, setMissions] = useState([]);
  const [specificMissions, setSpecificMissions] = useState([]);
  const [missionName, setMissionName] = useState("");
  const [loading, setLoading] = useState(false);
  const [missionClicked, setMissionClicked] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true)
      const response = await fetch(missionsApi);
      const json = await response.json();
      setMissions(json.result);
    };

    fetchData()
      .catch(error => console.error(error))
      .finally(() => setLoading(false))

  }, [missionName]);

  const hanldeMissionClick = (e) => {
    setMissionName(e.target.value);
    setMissionClicked(true)

    const fetchData = async () => {
      try {
        const response = await fetch(astronautsByMissionApi(e.target.value));
        const json = await response.json();
        console.log(json)
        setSpecificMissions(json.results);

      } catch (err) {
        console.log(err)
      }
    };

    fetchData();
  };

  if (loading) {
    return <Loading />
  };


  if (missionClicked) {
    return (
      <>
        <Button onClick={() => setMissionClicked(false)}>&#171; &nbsp; Back to Missions</Button>
        <MissionHeader>{missionName}</MissionHeader>
        <CardWrapper>
          {specificMissions.map((mission) => (
            <Card key={mission?.name} wide>
              <SubHeader>{mission?.name}</SubHeader>
              <p>Gender: {mission?.gender}</p>
              <FormattedDate date={mission?.birthDate} title="Born: " />
              <FormattedDate date={mission?.deathDate} title="Died: " />
              {mission?.birthPlace && <p>Hometown: {mission?.birthPlace}</p>}
              {mission?.militaryRank && <p>Military Rank: {mission?.militaryRank}</p>}
              {mission?.militaryBranch && <p>Military Branch: {mission?.militaryBranch}</p>}
            </Card>
          ))}
        </CardWrapper>
      </>
    )
  }

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
          {missions.map((data) => {
            const { mission, shuttle, crew, duration, launch_pad } = data;

            return (
              <MissionsTr key={mission}>
                <MissionsTd><button onClick={hanldeMissionClick} value={mission}>{mission}</button></MissionsTd>
                <MissionsTd>{shuttle}</MissionsTd>
                <MissionsTd>{crew}</MissionsTd>
                <MissionsTd>{duration}</MissionsTd>
                <MissionsTd>{launch_pad}</MissionsTd>
              </MissionsTr>
            )
          })}
        </tbody>
      </MissionsTable>
    </div>
  )
}

export default Missions