require('dotenv').config();
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swagger.json');
const express = require('express');
const app = express();
const helmet = require('helmet');
const cors = require('cors');

const PORT = 3001;

const listRoutes = require('./routes/listsRoutes');
const productsRoutes = require('./routes/productsRoutes');

app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(helmet());


app.use('/lists', listRoutes);
app.use('/products', productsRoutes);

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

const server = app.listen(PORT, () => {
  console.log(`Servidor funcionando en el puerto ${PORT}`);
});

module.exports = server;