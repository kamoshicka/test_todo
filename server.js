// server.js
const express = require("express");
const mysql = require("mysql2");

const app = express();
const port = 3001;

// MySQLデータベースへの接続設定
const connection = mysql.createConnection({
  host: "localhost",
  user: "kamoshicka",
  password: "password",
  database: "database",
});

// データベース接続確認
connection.connect((err) => {
  if (err) {
    console.error("Database connection failed: " + err.stack);
    return;
  }
  console.log("Connected to database.");
});

// ミドルウェア設定
app.use(express.json());

// データ取得API
app.get("/api/todos", (req, res) => {
  connection.query("SELECT * FROM todos", (err, results) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    res.json(results);
  });
});

// データ追加API
app.post("/api/todos", (req, res) => {
  const { text } = req.body;
  connection.query(
    "INSERT INTO todos (text) VALUES (?)",
    [text],
    (err, results) => {
      if (err) {
        return res.status(500).json({ error: err.message });
      }
      res.json({ id: results.insertId, text });
    }
  );
});

// サーバー起動
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
