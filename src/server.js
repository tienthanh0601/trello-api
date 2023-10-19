const express = require("express");
const app = express();
const port = 8017;
const hostname = "localhost";

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(
    `Hello Thanh0601, I'am running server at http://${hostname}:${port}`
  );
});
