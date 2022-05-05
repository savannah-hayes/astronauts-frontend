const astronautsApi = (page) => `https://express-api-technigo.herokuapp.com/api/astronauts?page=${page}`;
const yearsApi = (year) => `https://express-api-technigo.herokuapp.com/api/year/${year}`;

module.exports = {
  astronautsApi,
  yearsApi
}