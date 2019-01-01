const controller = require('./settings.controller');

const routes = {
    settings: '/api/settings'
};

module.exports = server => {
    server.get(routes.settings, controller.get);
};
