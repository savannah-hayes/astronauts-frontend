import React from "react";
import { Link } from "react-router-dom";

import {
  renderTableData,
  queryParametersOne,
  queryParametersTwo
} from "../utils/data"

import { 
  Container,
  Example,
  Header,
  SubHeader, 
  Table 
} from "../styled-components/HomeStyling";

const Home = () => {
  return (
    <Container>
      <Header>Nasa Astronauts Fullstack Project</Header>
      <p>This project began with building the backend by creating a RESTful API using express.
        This API has a couple of RESTful endpoints which send responses either an array of NASA
        astronauts data, or a single astronaut in JSON format. Lastly, I deployed the backened
        to Heroku.
      </p>
      <a 
        target="_blank"
        rel="noopener noreferrer"
        href="https://express-api-technigo.herokuapp.com/">
          Backend API link
      </a>
      <p>After building the data needed then I implemented the Frontend to access the data from the backend
        that I built. The goal of the frontend is to display a list of all Nasa Astronauts in cards including,
        their birthdate, status, and group number. The frontend has multiple routes to display different data
        filtered out based on the astronauts missions, status, and year. Also, a search form to search for a
        specific astronaut by name.
      </p>
      <Link to="/Astronauts">Frontend Project</Link>
      <SubHeader>Backend Documentation</SubHeader>
      <h3>BASE URL</h3>
      <p>https://express-api-technigo.herokuapp.com/</p>
      <p>The base URL returns a list of all available endpoints.</p>
      <h3>ENDPOINTS</h3>
      <p><strong>GET</strong> /api/astronauts</p>
      <p>This endpoint returns a JSON object "astronauts" containing all NASA astronauts and information about them.</p>
      <p><strong>GET</strong> /api/astronauts:name</p>
      <p>This endpoint returns information about a single astronaut by name.</p>
      <p><strong>GET</strong> /api/year/:year</p>
      <p>This endpoint returns a JSON object "year" containing all filtered NASA astronauts from a specific year.</p>
      <h3>Query Parameters</h3>
      <p>Examples of API calls</p>
      <Example>/api/astronauts?name=&#123;name&#125;&status=&#123;status&#125;&mission=&#123;mission&#125;&gender=
        &#123;gender&#125;&major=&#123;major&#125;&graduateMajor=&#123;graduateMajor&#125;</Example>
      <Table>{renderTableData(queryParametersOne)}</Table>
      <Example top>/api/year/:year?gender=&#123;gender&#125;&group=&#123;group&#125;&spaceFlights=&#123;spaceFlights&#125;
        &spaceHours=&#123;spaceHours&#125;&spaceWalks=&#123;spaceWalks&#125;&walksHours=&#123;walksHours&#125;</Example>
      <Table>{renderTableData(queryParametersTwo)}</Table>
    </Container>
  )
}

export default Home