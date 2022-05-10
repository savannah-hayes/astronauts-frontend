const astronautsApi = (page) => `https://express-api-technigo.herokuapp.com/api/astronauts?page=${page}`;
const astronautsByMissionApi = (mission) => `https://express-api-technigo.herokuapp.com/api/astronauts?mission=${mission}`;
const astronautNameApi = (name) => `https://express-api-technigo.herokuapp.com/api/astronauts/${name}`;
const missionsApi = "https://express-api-technigo.herokuapp.com/api/missions";
const astronautsByStatusApi = (status) => `https://express-api-technigo.herokuapp.com/api/astronauts?status=${status}`;
const yearsApi = "https://express-api-technigo.herokuapp.com/api/years"
const astronautsByYearApi = (year) => `https://express-api-technigo.herokuapp.com/api/years/${year}`;

module.exports = {
  astronautsApi,
  astronautsByMissionApi, 
  astronautNameApi,
  missionsApi,
  astronautsByStatusApi,
  yearsApi,
  astronautsByYearApi
};