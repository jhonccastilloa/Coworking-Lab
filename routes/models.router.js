const express = require('express');
// const routesUsers = require('./users.routes')

// const isAuthenticatedByPassportJwt = require('../libs/passport')

const routesAuth = require('./auth.routes');
const routespublicationsTypes = require('./publicationsTypes.routes');
const routesUsers = require('./users.router');
const routesCountries = require('./countries.router');
const routesStates = require('./states.router');
const routesRoles = require('./roles.router');
const routesCities = require('./cities.router');

function routerModels(app) {
  const router = express.Router();

  app.use('/api/v1', router);
  router.use('/auth', routesAuth);
  router.use('/users', routesUsers);
  router.use('/countries', routesCountries);
  router.use('/states', routesStates);
  router.use('/publications-types', routespublicationsTypes);
  router.use('/roles', routesRoles);
  router.use('/cities', routesCities);
}

module.exports = routerModels;
