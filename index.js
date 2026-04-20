const express = require("express");
const path = require("path");

const app = express();
app.use(express.json());

const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
});

app.post("/chat", (req, res) => {
  const msg = req.body.mensagem;

  let resposta = "Ainda estou aprendendo 😄";

  if (msg.toLowerCase().includes("oi")) {
    resposta = "Olá! Como posso te ajudar?";
  }

  res.json({ resposta });
});

app.listen(PORT, () => {
  console.log("Servidor rodando 🚀");
});
