const express = require("express");
const cors = require("cors");
const path = require("path");
const app = express();
app.use(cors({ credentials: true, origin: "*" }));
app.use(express.static(path.resolve(__dirname, "./public")));

app.listen(3001, () => {
  console.log("server running 3001");
});
