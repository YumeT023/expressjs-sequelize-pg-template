// env setup
require("dotenv").config();

// app
const Express = require("express");
const { corsConf } = require("./conf/cors");

const env = require("./conf/env");
const db = require("./conf/db");
const app = Express();

// middleware
app.use(corsConf);
app.use(Express.json());

// register controllers
app.use("/ping", require("./modules/health"));

// entrypoint
const RUNNING_MESSAGE = (port) =>
  `Server is running at http://localhost:${port}`;

app.listen(env.PORT, () => {
  db.sync();
  console.log(RUNNING_MESSAGE(env.PORT));
});
