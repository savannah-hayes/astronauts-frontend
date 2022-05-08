const astronautsApi = (page) => `https://express-api-technigo.herokuapp.com/api/astronauts?page=${page}`;
const astronautNameApi = (name) => `https://express-api-technigo.herokuapp.com/api/astronauts/${name}`;
const MissionsApi = (mission) => `https://express-api-technigo.herokuapp.com/api/missions/${mission}`;
const yearsApi = (year) => `https://express-api-technigo.herokuapp.com/api/year/${year}`;

module.exports = {
  astronautsApi,
  astronautNameApi,
  MissionsApi,
  yearsApi
};