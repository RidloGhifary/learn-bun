import express from "express";

const app = express();

app.get("/", (req, res) => {
  const name = req.query["name"] || "world";
  res.send(`Hello ${name}!`);
});

app.listen(3200, () =>
  console.info(`Server is running on http://localhost:3200`)
);
