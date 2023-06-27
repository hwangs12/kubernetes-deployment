const express = require("express");
const app = express();
const port = 8080;

app.listen(port, () => {
  console.log("listening for request on port 8080");
});
app.use(express.json());
app.get("/", (req, res) => {
  console.log("request made");
  res.send({ message: "hello world" });
});
