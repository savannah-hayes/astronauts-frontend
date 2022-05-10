import React, { useState, useEffect } from "react";

import Navbar from "components/Navbar";
import Loading from "partials/Loading";
import FormattedDate from "partials/FormattedDate";

import { yearsApi, astronautsByYearApi } from "utils/urls";

import {
  CardWrapper,
  Card,
  Header,
  SubHeader
} from "../styled-components/styles";
import {
  Heading,
  Button,
  TitleButtons
} from "../styled-components/YearStyling"

const Years = () => {
  const [years, setYears] = useState([]);
  const [specificYear, setSpecificYear] = useState([]);
  const [yearTitle, setYearTitle] = useState("");
  const [loading, setLoading] = useState(false);
  const [yearClicked, setYearClicked] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true)
      const response = await fetch(yearsApi);
      const json = await response.json();
      setYears(json.years);
    };

    fetchData()
      .catch(error => console.error(error))
      .finally(() => setLoading(false))

  }, [yearTitle]);

  const hanldeYearClick = (e) => {
    setYearTitle(e.target.value);
    setYearClicked(true)

    const fetchData = async () => {
      try {
        const response = await fetch(astronautsByYearApi(e.target.value));
        const json = await response.json();
        setSpecificYear(json.results);

      } catch (err) {
        console.log(err)
      }
    };

    fetchData();
  };

  if (loading) {
    return <Loading />
  };


  if (yearClicked) {
    return (
      <>
        <Button onClick={() => setYearClicked(false)}>&#171; &nbsp; Back to Years</Button>
        <Heading>Astronauts in {yearTitle}</Heading>
        <CardWrapper>
          {specificYear.map((year) => (
            <Card key={year?.name} wide>
              <SubHeader>{year?.name}</SubHeader>
              <p>Gender: {year?.gender}</p>
              <FormattedDate date={year?.birthDate} title="Born: " />
              <FormattedDate date={year?.deathDate} title="Died: " />
              {year?.birthPlace && <p>Hometown: {year?.birthPlace}</p>}
              {year?.militaryRank && <p>Military Rank: {year?.militaryRank}</p>}
              {year?.militaryBranch && <p>Military Branch: {year?.militaryBranch}</p>}
            </Card>
          ))}
        </CardWrapper>
      </>
    );
  };

  return (
    <div>
      <Navbar />
      <Header bottom>List of Astronauts Years</Header>
        {years.map((year) => (
          year 
            ? <TitleButtons key={year} value={year} onClick={hanldeYearClick}>{year}</TitleButtons>
            : null
        ))}
    </div>
  );
};

export default Years;