const express = require("express");
const app = express();
const port = 3000;

process.on("SIGTERM", () => {
  console.info("Interrupted");
  process.exit(0);
});

app.get("/", (req, res) => {
  res.send("New message 👍 " + process.env.ENVIRONMENT);
});

app.listen(port, () => {
  console.log(`App listening on http://localhost:${port}`);
});
