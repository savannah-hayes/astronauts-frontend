import React, { useState, useEffect } from "react";

import { astronautsApi } from "utils/urls";
import Loading from "./Loading";
import BirthDate from "partials/BirthDate";

import {
  CardWrapper,
  Header,
  Card,
  SubHeader
} from "../styles";

const Home = () => {
  const [astronauts, setAstronauts] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true)
      const response = await fetch(astronautsApi);
      const json = await response.json();
      setAstronauts(json.results);
    };

    fetchData()
      .catch(error => console.error(error))
      .finally(() => setLoading(false))

  }, []);

  if (loading) {
    return <Loading />
  };

  return (
    <>
      <Header>All Astronauts</Header>
      <CardWrapper>
        {astronauts.map((astronaut) => (
          <Card key={astronaut.id}>
            <SubHeader>{astronaut.name}</SubHeader>
            <BirthDate date={astronaut.birthDate} />
            <p>Status: {astronaut.status}</p>
            {astronaut.group && <p>Group: {astronaut.group}</p>}
          </Card>
        ))}
      </CardWrapper>
    </>
  );
};

export default Home;