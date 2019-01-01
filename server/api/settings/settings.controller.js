const settings = {
  apiUrl: process.env.API_URL
};

const get = (req, res) => {
    res.json(settings)
};

module.exports = {
    get,
    settings // To use in nuxt
};

