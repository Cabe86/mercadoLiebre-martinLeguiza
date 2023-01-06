const express = require("express");

const app = express();

const path = require("path");
const publicPath= path.resolve(__dirname, "./public");

app.use(express.static(publicPath));


/*app.listen(3000, () => {
  console.log("Servidor funcionando");
});*/
const port = process.env.PORT|| 3001;
app.listen(port,()=>console.log(`Servidor corriendo en el puerto ${port}`));


app.get("/", (req, res) => {
  res.sendFile(path.resolve(__dirname + "/views/home.html"));
});
app.get("/login", (req, res) => {
  res.sendFile(path.resolve(__dirname + "/views/login.html"));
});
app.get("/register", (req, res) => {
  res.sendFile(path.resolve(__dirname + "/views/register.html"));
});
app.get("/ayuda", (req, res) => {
  res.sendFile(path.resolve(__dirname + "/views/error.html"));
}); 