const express = require("express");
const routes = require("./routes/route.js");
const getroutes = require("./routes/getroutes.js");
const cors = require("cors");
const app = express();
app.use(express.json()); // Middleware to parse incoming JSON
app.use(cors()); // To handle cross-origin requests

// Root route to check if server is running
app.get("/", (req, res) => {
  res.send("lllll"); // Message when visiting http://localhost:3003/
});
app.use("/insert", routes);
app.use("/get", getroutes);

const PORT = 3003;
app.listen(PORT, () => {
  console.log(`Server started at http://localhost:${PORT}`);
});
