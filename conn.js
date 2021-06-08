const mysql = require("mysql");
const chalk = require("chalk");
const connection = mysql.createConnection({
  user: process.env.user,
  password: process.env.password,
  host: process.env.host,
  database: process.env.database,
  timezone: "ist",
});

connection.connect((err) => {
  if (err) {
    console.log(chalk.bgRedBright.white(err));
  } else {
    console.log(chalk.bgGreenBright.black("DB Connection Successful"));
  }
});

module.exports = connection;
