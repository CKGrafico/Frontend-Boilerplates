const controller = require('./wishlist.controller');

const routes = {
  wishlist: '/api/wishlist'
};

module.exports = server => {
    server.get(routes.wishlist, controller.get);
};
