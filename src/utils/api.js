let request = require('superagent');

let endPoints = require('../endpoints.js');

let API = {
  post: (auth, path, query, data) => {
    let link = endPoints.baseUrl;
    return request
      .post(`${link}${path}?${query}`)
      .set(auth)
      .send(data)
  },
  get: (auth, path, query, responseType = '') => {
    let link = endPoints.baseUrl;
    return request
      .get(`${link}${path}?${query}`)
      .set(auth)
      .responseType(responseType)
  },
  upload: (auth, path, query, attach, fieldName, fieldValue) => {
    let link = endPoints.baseUrl;
    return request
      .post(`${link}${path}?${query}`)
      .set(auth)
      .attach('file', attach)
      .field(fieldName, fieldValue)
  }
};

module.exports = API;