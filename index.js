const express = require("express");
const path = require("path");
const OpenAI = require("openai");

const app = express();
app.use(express.json());

const client = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY
});

const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
});

app.post("/chat", async (req, res) => {
  const msg = req.body.mensagem;

  try {
    const response = await client.chat.completions.create({
      model: "gpt-4o-mini",
      messages: [{ role: "user", content: msg }]
    });

    res.json({
      resposta: response.choices[0].message.content
    });

  } catch (erro) {
    res.json({ resposta: "Erro ao falar com IA 😢" });
  }
});

app.listen(PORT, () => {
  console.log("Servidor rodando 🚀");
});
