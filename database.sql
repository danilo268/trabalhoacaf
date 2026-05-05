export default function handler(req, res) {
  global.usuarios = global.usuarios || [];

  if (req.method === "POST" && req.url.endsWith("/salvar")) {
    global.usuarios.push(req.body);
    return res.status(200).json({ msg: "salvo" });
  }

  if (req.method === "GET" && req.url.endsWith("/dados")) {
    return res.status(200).json(global.usuarios);
  }

  return res.status(200).json({ msg: "API ACAF funcionando 🚀" });
}