import express from "express";

const app = express();

app.get("/", (req, res) => {
  res.json({message: "Hello World!"});
});

let PORT = 3000;

app.listen(PORT, () => {
  console.log(`Server Started Successfully on ${PORT}`);
  
})