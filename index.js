const express = require("express");
const app = express();
const port = 3000;

app.get("/callback", (req, res) => {
  let date = new Date();
  console.log(`Giờ: ${date.getHours()}, Tháng: ${date.getMonth()}, Ngày: ${date.getDate()}`, { query: req.query });
  res.status(200).json({ query: req.query });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
