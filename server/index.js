require('dotenv').config();
const express = require('express');
const app = express();
const helmet = require('helmet');

const PORT = 3000;

const listRoutes = require('./routes/listsRoutes');
const productsRoutes = require('./routes/productsRoutes');

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(helmet());


// app.use('/', (req,res) => res.send('Aquí se cumplen tus deseos ===> redireccionar a otra página'));

app.use('/lists', listRoutes);
app.use('/products', productsRoutes);

app.listen(PORT, () => {
  console.log(`Servidor funcionando en el puerto ${PORT}`);
});