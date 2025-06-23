// Salve como server.js
const express = require('express');
const fetch = require('node-fetch');
const cors = require('cors');
const app = express();
app.use(cors());
app.use(express.json());

app.post('/api/perguntar', async (req, res) => {
  const pergunta = req.body.pergunta;
  const resposta = await fetch("https://api.openai.com/v1/chat/completions", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Authorization": "Bearer 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"
    },
    body: JSON.stringify({
      model: "gpt-3.5-turbo",
      messages: [{ role: "user", content: pergunta }]
    })
  });
  const dados = await resposta.json();
  res.json({ resposta: dados.choices?.[0]?.message?.content });
});

app.listen(3000, () => console.log('Servidor rodando na porta 3000'));