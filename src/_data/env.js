require('dotenv').config();

const environment = isEnv(process.env.ELEVENTY_ENV);

function isEnv (env) {
  if (env === "prod") {
    return process.env.BASE_URL = 'https://oa.works';
  } else if (env === "staging") {
    return process.env.BASE_URL = 'https://dev.oa.works';
  } else {
    return process.env.BASE_URL;
  }
}

module.exports = function() {
  return {
    environment
  }
};
