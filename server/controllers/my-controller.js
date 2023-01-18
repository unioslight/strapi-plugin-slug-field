'use strict';

module.exports = ({ strapi }) => ({
  index(ctx) {
    ctx.body = strapi
      .plugin('strapi-plugin-slug-field')
      .service('myService')
      .getWelcomeMessage();
  },
});
