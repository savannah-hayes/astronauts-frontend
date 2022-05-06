import React, { useState, useEffect } from "react";

import { astronautsApi } from "utils/urls";
import Navbar from "components/Navbar";
import Loading from "partials/Loading";
import BirthDate from "partials/BirthDate";
import Buttons from "partials/Buttons";

import {
  CardWrapper,
  Header,
  Card,
  SubHeader
} from "../styled-components/styles";

const Home = () => {
  const [astronauts, setAstronauts] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true)
      const response = await fetch(astronautsApi(page));
      const json = await response.json();
      setAstronauts(json.results);
    };

    fetchData()
      .catch(error => console.error(error))
      .finally(() => setLoading(false))

  }, [page]);

  if (loading) {
    return <Loading />
  };

  return (
    <>
      <Navbar />
      <main>
        <Header>All Astronauts</Header>
        <CardWrapper>
          {astronauts.map((astronaut) => (
            <Card key={astronaut.name}>
              <SubHeader>{astronaut.name}</SubHeader>
              <BirthDate date={astronaut.birthDate} />
              <p>Status: {astronaut.status}</p>
              {astronaut.group && <p>Group: {astronaut.group}</p>}
            </Card>
          ))}
        </CardWrapper>
        <Buttons page={page} setPage={setPage} />
      </main>
    </>
  );
};

export default Home;