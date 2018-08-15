const devEndpoints = {
  baseUrl: 'https://reqres.in/',
};

const prodEndpoints = {
  baseUrl: 'https://reqres.in/',
};

let endPoints;
if (process.env.NODE_ENV === 'development') {
  endPoints = devEndpoints;
} else {
  endPoints = prodEndpoints;
}

module.exports = endPoints;