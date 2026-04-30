const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.static(".")); // serve frontend

let usuarios = [];

app.post("/login", (req, res) => {
  const { nome } = req.body;
  res.json({ msg: "ok", nome });
});

app.post("/salvar", (req, res) => {
  usuarios.push(req.body);
  res.json({ msg: "salvo" });
});

app.get("/dados", (req, res) => {
  res.json(usuarios);
});

app.listen(3000, () => console.log("Servidor rodando 🚀"));