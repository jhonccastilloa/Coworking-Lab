const swaggerJSDoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');
require('dotenv').config();

const options = {
  apis: [
    './docs/routersDoc/auth.docs.js',
    './docs/routersDoc/cities.docs.js',
    './docs/routersDoc/countries.docs.js',
    './docs/routersDoc/publicationsTypes.docs.js',
    './docs/routersDoc/roles.docs.js',
    './docs/routersDoc/states.docs.js',
    './docs/routersDoc/tags.docs.js',
    './docs/routersDoc/users.docs.js',
  ],
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'paracuando',
      version: '0.0.9',
      description: 'API to entertainment',
    },
    servers: [
      {
        url: 'http://localhost:8000/api/v1/docs',
      },
    ],
  },
};

const swaggerSpec = swaggerJSDoc(options);

const swaggerDocs = (app, port) => {
  app.use('/api/v1/docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));
  app.get('api/v1/docs.json', (req, res) => {
    res.setHeader({ 'Content-Type': 'application/json' });
    res.send(swaggerSpec);
  });
  // console.log(
  //   `la documentacion esta disponible en http://localhost:${port}/api/v1/docs`
  // );
};

module.exports = swaggerDocs;
