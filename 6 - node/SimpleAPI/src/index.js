const port = 3003;

const express = require("express");
const app = express();
const database = require("./database");
const bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({ extended: true }));

app.get("/produtos", (req, res, next) => {
  res.send(database.getProdutos());
});

app.get("/produtos/:id", (req, res, next) => {
  res.send(database.getProduto(req.params.id));
});

app.post("/produtos", (req, res, next) => {
  const produto = database.salvarProduto({
    nome: req.body.name,
    preco: req.body.preco,
  });
  res.send(produto);
});

app.put("/produtos/:id", (req, res, next) => {
  const produto = database.salvarProduto({
    id: req.params.id,
    nome: req.body.name,
    preco: req.body.preco,
  });
  res.send(produto);
});

app.delete("/produtos/:id", (req, res, next) => {
  const produto = database.deleteProdutos(req.params.id);
});

app.listen(port, () => {
  console.log(`Servidor executando na porta ${port}.`);
});
