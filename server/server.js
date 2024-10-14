require("dotenv").config();
const http = require("http");
const { neon } = require("@neondatabase/serverless");
const express = require("express");
const cors = require("cors");
const jwt = require("jsonwebtoken");
const cookieParser = require("cookie-parser");

const app = express();
app.use(express.json());
app.use(cookieParser());

app.use(
  cors({
    origin: "http://localhost:5173",
    methods: ["GET", "POST"],
    allowedHeaders: ["Content-Type", "Authorization"],
    credentials: true,
  })
);


const sql = neon(process.env.DATABASE_URL);

// Rota de login
app.post("/login", async (req, res) => {
  const { username, password } = req.body;

  try {
    const result = await sql`
      SELECT * FROM users WHERE username = ${username} AND password = ${password}
    `;
    if (result.length > 0) {
      const name = result[0].name;
      const token = jwt.sign({ name }, "jwt-secret-key", { expiresIn: "1d" });
      res.cookie("token", token, {
        httpOnly: true,
        secure: false,
        sameSite: "Strict",
      });
      res.status(200).json({ message: "Login bem-sucedido", token });
    } else {
      res.status(401).json({ message: "Falha no login" });
    }
  } catch (err) {
    console.error("Erro na consulta: ", err);
    res.status(500).json({ message: "Erro no servidor" });
  }
});

const verifyUser = (req, res, next) => {
  const token = req.cookies.token;

  if (!token) {
    // Se não houver token, redireciona para a rota de login
    return res
      .status(401)
      .json({ message: "Usuário não autenticado. Redirecionando para login." });
  }

  // Verifica o token JWT
  jwt.verify(token, "jwt-secret-key", (err, decoded) => {
    if (err) {
      return res.status(403).json({ message: "Token inválido ou expirado." });
    }
    req.name = decoded.name; // Token válido
    next();
  });
};



app.get('/', verifyUser, (req, res) => {
  return res.json({Status: "Success", name: req.name});
})


function verifyToken(req, res, next) {
  const token = req.cookies.token;

  if (!token) {
    return res.status(403).json({ message: "Token não fornecido" });
  }

  try {
    const decoded = jwt.verify(token, "jwt-secret-key"); // Decodifica o token
    req.user = decoded; // Atribui o nome decodificado ao req.user
    next();
  } catch (error) {
    return res.status(401).json({ message: "Token inválido" });
  }
}

app.get("/home", verifyToken, (req, res) => {
  res.json({ message: `Bem-vindo, ${req.user.name}!` });
});

// Inicia o servidor na porta 3001
app.listen(3001, () => {
  console.log("Server running at http://localhost:3001");
});
