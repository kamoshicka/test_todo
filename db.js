// createDatabase.js

const mysql = require('mysql2');

// データベース接続の設定
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',     // MySQLのユーザー名を指定
  password: 'your_password', // MySQLのパスワードを指定
});

// データベースの作成
connection.query('CREATE DATABASE IF NOT EXISTS my_database', (err, results) => {
  if (err) {
    console.error('Error creating database: ', err.stack);
    return;
  }
  console.log('Database created or already exists');
  connection.end();
});
