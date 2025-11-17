import dotenv from "dotenv";
dotenv.config();

import app from "./app.js";

const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.send("I'm fine 😎");
});

app.listen(PORT, () => {
  console.log(`🔥 Server running on port ${PORT}`);
});
