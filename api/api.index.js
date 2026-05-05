export default function handler(req, res) {
  if (req.method === "POST" && req.url.endsWith("/login")) {
    const { nome } = req.body;
    return res.status(200).json({ msg: "ok", nome });
  }

  if (req.method === "POST" && req.url.endsWith("/salvar")) {
    global.usuarios = global.usuarios || [];
    global.usuarios.push(req.body);
    return res.status(200).json({ msg: "salvo" });
  }

  if (req.method === "GET" && req.url.endsWith("/dados")) {
    global.usuarios = global.usuarios || [];
    return res.status(200).json(global.usuarios);
  }

  return res.status(404).json({ erro: "rota não encontrada" });
}
