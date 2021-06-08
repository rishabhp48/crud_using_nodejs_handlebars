const express = require("express");
const chalk = require("chalk");
const app = express();
const path = require("path");

require("dotenv").config();
const views = path.join(__dirname, "./views");
const db = require("./conn");
const routes = require("./routes/routes.user");
const exphbs = require("express-handlebars");
const partialpath = path.join(__dirname, "./views/partials");
const templatepath = path.join(__dirname, "./views");
app.use(express.static("views"));
const connection = require("./conn");
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/api", routes);
app.set("view engine", "hbs");
app.set("views", templatepath);
app.engine(
  "hbs",
  exphbs({
    extname: "hbs",
    defaultLayout: "mainLayout",
    layoutsDir: __dirname + "/views/layouts/",
  })
);

app.get("/", (req, res) => {
  res.render("index");
});

app.get("/Qaorder", (req, res) => {
  connection.query("Select * from order_list ", (err, data) => {
    if (err) {
      console.log(err);
    } else {
      res.render("../views/Qaorder");
    }
  });
});

app.get("/create_qa_orders", (req, res) => {
  connection.query("Select * from order_list ", (err, data) => {
    if (err) {
      console.log(err);
    } else {
      res.render("../views/create_qa_orders.hbs");
    }
  });
});




app.listen(process.env.PORT, () => {
  console.log(
    chalk.bgGreenBright.black(`Server is connected at ${process.env.PORT}\n`)
  );
});
