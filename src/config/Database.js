require('dotenv').config();
const mysql = require('mysql2/promise'); // get the client

 // text connection
// const connection = mysql.createConnection({
//     host: process.env.DB_HOST,
//     port:process.env.DB_PORT, //Mặc định là 3306 mà data mình chạy là 3307
//     user: process.env.DB_USER,  //passwork mặc định là không có;
//     password:process.env.DB_PASSWORK,
//     database: process.env.DB_NAME
//   });

 // text connection Pool
 const connection = mysql.createPool({
  host: process.env.DB_HOST,
  port:process.env.DB_PORT, //Mặc định là 3306 mà data mình chạy là 3307
  user: process.env.DB_USER,  //passwork mặc định là không có;
  password:process.env.DB_PASSWORK,
  database: process.env.DB_NAME,
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit:0
});

module.exports= connection;