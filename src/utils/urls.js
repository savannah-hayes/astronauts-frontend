const astronautsApi = (page) => `https://express-api-technigo.herokuapp.com/api/astronauts?page=${page}`;
const astronautsByMissionApi = (mission) => `https://express-api-technigo.herokuapp.com/api/astronauts?mission=${mission}`;
const astronautNameApi = (name) => `https://express-api-technigo.herokuapp.com/api/astronauts/${name}`;
const missionsApi = "https://express-api-technigo.herokuapp.com/api/missions";
const yearsApi = (year) => `https://express-api-technigo.herokuapp.com/api/year/${year}`;

module.exports = {
  astronautsApi,
  astronautsByMissionApi, 
  astronautNameApi,
  missionsApi,
  yearsApi
};