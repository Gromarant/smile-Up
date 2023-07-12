require("dotenv").config();
const express = require("express");
//dataBase conection here
const app = express();
const helmet = require("helmet");

const PORT = 3000;


app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(helmet());


app.use("/", (req, resp) => console.log("Aquí se cumplen tus deseos"));


app.listen(PORT, () => {
  console.log(`Servidor funcionando en el puerto ${PORT}`);
});
