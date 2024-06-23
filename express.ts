import express from "express";

const app = express();

app.get("/", (req, res) => {
  res.send("Hello world!");
});

app.listen(3200, () =>
  console.info(`Server is running on http://localhost:3200`)
);
