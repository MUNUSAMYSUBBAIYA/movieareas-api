import express from "express";
import movieRouter from "./routes/movies.route.js";

const app = express();

app.get("/", (req, res) => {
  res.json({message: "Hello World!"});
});

app.use("/api/v1/movies", movieRouter)




let PORT = 3000;

app.listen(PORT, () => {
  console.log(`Server Started Successfully on ${PORT}`);
  
})