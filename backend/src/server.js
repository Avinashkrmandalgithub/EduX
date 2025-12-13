import dotenv from "dotenv";
dotenv.config({ path: ".env" });

import app from "./app.js";
import connectDB from "./config/db.js";

const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.send("I'm fine 😎");
});

connectDB().then(() => {
  app.listen(PORT, () => {
    console.log(`🔥 Server running on port ${PORT}`);
  });
});
