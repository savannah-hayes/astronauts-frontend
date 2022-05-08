import React, { useState, useEffect } from "react";

import Navbar from "components/Navbar";
import Loading from "partials/Loading";
import FormattedDate from "partials/FormattedDate";

import { astronautsByStatusApi } from "utils/urls";

import { 
  Button, 
  StatusHeader,
  TitleWrapper, 
  TitleButtons 
} from "styled-components/StatusStyling";

import {
  CardWrapper,
  Card,
  SubHeader
} from "../styled-components/styles";

const statusTitles = ["Active", "Retired", "Deceased"];

const Status = () => {
  const [statuses, setStatuses] = useState([]);
  const [statusTitle, setStatusTitle] = useState("");
  const [loading, setLoading] = useState(false);
  const [statusClicked, setStatusClicked] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true)
      const response = await fetch(astronautsByStatusApi(statusTitle));
      const json = await response.json();
      setStatuses(json.results);
    };

    fetchData()
      .catch(error => console.error(error))
      .finally(() => setLoading(false))

  }, [statusTitle]);

  if (loading) {
    return <Loading />
  };

  if (statusClicked) {
    return (
      <>
        <Button onClick={() => setStatusClicked(false)}>&#171; &nbsp; Back to Statuses</Button>
        <StatusHeader>{statusTitle} Astronauts</StatusHeader>
        <CardWrapper>
          {statuses.map((status) => (
            <Card key={status?.name} wide>
              <SubHeader>{status?.name} ({status?.status})</SubHeader>
              <p>Gender: {status?.gender}</p>
              <FormattedDate date={status?.birthDate} title="Born: " />
              <FormattedDate date={status?.deathDate} title="Died: " />
              {status?.birthPlace && <p>Hometown: {status?.birthPlace}</p>}
              {status?.militaryRank && <p>Military Rank: {status?.militaryRank}</p>}
              {status?.militaryBranch && <p>Military Branch: {status?.militaryBranch}</p>}
            </Card>
          ))}
        </CardWrapper>
      </>
    )
  }

  return (
    <div>
      <Navbar />
      <StatusHeader>Astronauts Statuses</StatusHeader>
      <TitleWrapper>
      {statusTitles.map((title) => (
        <TitleButtons 
          key={title}
          onClick={() => { setStatusTitle(title); setStatusClicked(true) }}
        >{title}
        </TitleButtons>
      ))}
      </TitleWrapper>
    </div>
  );
};

export default Status;