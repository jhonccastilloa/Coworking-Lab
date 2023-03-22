const express = require('express')
// const routesUsers = require('./users.routes')

// const isAuthenticatedByPassportJwt = require('../libs/passport')

const routesAuth = require('./auth.routes')
const routespublicationsTypes = require('./publicationsTypes.routes')
const routesUsers = require('./users.router');

function routerModels(app) {
  const router = express.Router()

  app.use('/api/v1', router)
  router.use('/auth', routesAuth)
  router.use('/users', routesUsers);
  router.use('/publications-types', routespublicationsTypes)
}

module.exports = routerModels
