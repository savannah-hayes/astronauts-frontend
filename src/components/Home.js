import React, { useState, useEffect } from "react";

import { astronautsApi } from "utils/urls";
import Loading from "./Loading";

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
  }

  return (
    <div>
      {astronauts.map((astronaut) => (
        <div key={astronaut.id}>
          <h1>{astronaut.name}</h1>
        </div>
      ))}
    </div>
  )
}

export default Home