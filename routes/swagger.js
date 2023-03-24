const swaggerJSDoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');
require('dotenv').config();

const options = {
  apis: [],
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'paracuando',
      version: '0.0.9',
      description: 'API to entertainment',
    },
  },
};

const swaggerSpec = swaggerJSDoc(options);

const swaggerDocs = (app, port) => {
  app.use('/api/v1/docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));
  app.get('api/v1/docs.json', (req, res) => {
    res.setHeader({ 'Content-Type': 'application/json' });
    res.send(swaggerSpec);
  });
  console.log(
    `la documentacion esta disponible en http://localhost:${port}/api/v1/docs`
  );
};

module.exports = swaggerDocs;
