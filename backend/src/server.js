import express from "express";
import notesRouters from "./routers/notesRouters.js";
import dotenv from "dotenv";
import connectDB from "./configDB/db.js";
dotenv.config();
const app = express();
app.use(express.json());
app.use("/api/notes", notesRouters);
const port = process.env.PORT || 5005;

connectDB().then(() => {
  app.listen(port, () => {
    console.log("server started");
  });
});
