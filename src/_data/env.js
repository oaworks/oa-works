require('dotenv').config();

const environment = isEnv(process.env.ELEVENTY_ENV);

function isEnv (env) {
  if ( env === "prod" ) {
    return process.env.BASE_URL = 'https://oa.works';
  } else if ( env === "staging" ) {
    return process.env.BASE_URL = 'https://sa.oa.works';
  } else {
    return process.env.BASE_URL = 'http://localhost:8080';
  }
}

module.exports = function() {
  return {
    environment
  }
};

console.log('environment is ' + environment + ' and environment is ' + process.env.ELEVENTY_ENV);
