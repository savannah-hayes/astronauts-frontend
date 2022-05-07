import React, { useState, useEffect } from "react";

import Navbar from "components/Navbar";
import Loading from "partials/Loading";
import FormattedDate from "partials/FormattedDate";
import Buttons from "partials/Buttons";

import { astronautsApi } from "utils/urls";

import {
  CardWrapper,
  Header,
  Card,
  SubHeader
} from "../styled-components/styles";

const Astronauts = () => {
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
            <Card key={astronaut?.name}>
              <SubHeader>{astronaut?.name}</SubHeader>
              <FormattedDate date={astronaut?.birthDate} title="Born: " />
              {astronaut?.group && <p>Astronaut Group: {astronaut?.group}</p>}
              {astronaut?.status && <p>Status: {astronaut?.status}</p>}
            </Card>
          ))}
        </CardWrapper>
        <Buttons page={page} setPage={setPage} />
      </main>
    </>
  );
};

export default Astronauts;