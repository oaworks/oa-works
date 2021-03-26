const contentAPI = require('@tryghost/content-api');

// New instance with Ghost demo API credentials
const api = new contentAPI({
  url: 'https://oabutton.ghost.io',
  key: 'cdfb45e729a2cc651f79ab3b9d',
  version: 'v2'
});

// Export data called from the API
module.exports = async function() {
  return api.posts.browse()
      .catch((err) => {
          console.error(err);
      });
}
