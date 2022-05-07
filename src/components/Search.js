import React, { useState } from "react";

import Navbar from "components/Navbar";
import FormattedDate from "partials/FormattedDate";

import { astronautNameApi } from "utils/urls";

import {
  Form,
  InputWrapper,
  Input,
  List,
  CardWrapper,
  CardContainer,
  Header,
  Card,
  SubHeader
} from "../styled-components/SearchStyling";

const Search = () => {
  const [astronaut, setAstronaut] = useState({});
  const [astronautName, setAstronautName] = useState("");
  const [errorMessage, setErrorMessage] = useState({});

  const noSpaceData = 
    !astronaut?.missions && 
    !astronaut?.deathMission &&
    !astronaut?.spaceFlights > 0 && 
    !astronaut?.spaceFlight_hr > 0 &&
    !astronaut?.spaceWalks > 0 && 
    !astronaut?.spaceWalks_hr > 0;

  const handleNameSubmit = (event) => {
    event.preventDefault();

    const fetchData = async () => {
      try {
        const response = await fetch(astronautNameApi(astronautName));
        const json = await response.json();
        setAstronaut(json.astronaut);

        if (!json?.astronaut) {
          // eslint-disable-next-line
          throw {
            message: `No astronaut by the name of ${astronautName}`,
            example: "Neil A. Armstrong",
          };
        }
        setErrorMessage({})
      } catch (err) {
        if (err) {
          setErrorMessage({
            error: err.message,
            example: err.example
          });
        } else {
          throw err;
        }
      } finally {
        setAstronautName("");
      }
    };

    fetchData();
  };

  return (
    <div>
      <Navbar />
      <Header>Astronaut by Name</Header>
      <Form onSubmit={handleNameSubmit}>
        <label htmlFor="name">Search Astronaut by Name</label>
        <InputWrapper>
          <Input
            id="name"
            type="text"
            value={astronautName}
            onChange={(event) => {
              setAstronautName(event.target.value)
            }}>
          </Input>
          <button type="submit">Search</button>
        </InputWrapper>
      </Form>
      {errorMessage?.error &&
        <List>
          {errorMessage?.error && <li><strong>Error: </strong>{errorMessage?.error}</li>}
          {errorMessage?.example && <li><strong>Astronaut name example: </strong>{errorMessage?.example}</li>}
        </List>
      }
      {astronaut?.name &&
        <CardContainer>
          <CardWrapper>
            <Card>
              <SubHeader>{astronaut?.name}</SubHeader>
              <p>Gender: {astronaut?.gender}</p>
              <FormattedDate date={astronaut?.birthDate} title="Born: " />
              <FormattedDate date={astronaut?.deathDate} title="Died: " />
              {astronaut?.birthPlace && <p>Hometown: {astronaut?.birthPlace}</p>}
              {astronaut?.militaryRank && <p>Military Rank: {astronaut?.militaryRank}</p>}
              {astronaut?.militaryBranch && <p>Military Branch: {astronaut?.militaryBranch}</p>}
            </Card>
          </CardWrapper>
           <CardWrapper>
            <Card>
              <SubHeader>Education</SubHeader>
              {astronaut?.almaMater && <p>Alma Mater: {astronaut?.almaMater}</p>}
              {astronaut?.underGraduateMajor&& <p>Undergraduate Major: {astronaut?.underGraduateMajor}</p>}
              {astronaut?.graduateMajor && <p>Graduate Major: {astronaut?.graduateMajor}</p>}
            </Card>
          </CardWrapper>
          <CardWrapper>
            <Card>
              <SubHeader>Space</SubHeader>
              {astronaut?.missions && <p>Missions: {astronaut?.missions}</p>}
              {astronaut?.deathMission && <p>Death Mission: {astronaut?.deathMission}</p>}
              {astronaut?.spaceFlights > 0 && <p>Space Flights: {astronaut?.spaceFlights}</p>}
              {astronaut?.spaceFlight_hr > 0 && <p>Space Flight Hours: {astronaut?.spaceFlight_hr}</p>}
              {astronaut?.spaceWalks > 0 && <p>Space Walks: {astronaut?.spaceWalks}</p>}
              {astronaut?.spaceWalks_hr > 0 && <p>Space Walk Hours: {astronaut?.spaceWalks_hr}</p>}
              {noSpaceData && 
                <p>No Space Data for {astronaut?.name}</p>
              }
            </Card>
          </CardWrapper>
        </CardContainer>
      }
    </div>
  );
};

export default Search;