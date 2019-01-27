const controller = require('./example.controller');

const routes = {
  get: '/api/example'
};

module.exports = server => {
    server.get(routes.get, controller.get);
};
