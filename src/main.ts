import express from "express";
import path from "path";
const PORT = process.env.PORT || 5000;

express()
  .use(express.static(path.join(__dirname, "public")))
  .set("views", path.join(__dirname, "views"))
  .set("view engine", "ejs")
  .get("/", (req, res) => res.render("pages/index"))
  .get("/times", (req, res) => res.send(showTimes()))
  .listen(PORT, () => console.log(`Listening on ${PORT}`));

function showTimes() {
  let result = "";
  const times = process.env.TIMES || 5;
  for (let i = 0; i < times; i++) {
    result += i + 1 + " ";
  }
  return result;
}
