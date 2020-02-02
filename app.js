const express = require("express");
const exphbs = require("express-handlebars");
const app = express();

//設定handlebars
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

app.use(express.static("public"));

//設定路由
app.use("/", require("./routes/home"));

//監聽Port
app.listen(3000, () => {
  console.log("app is running!!");
});
