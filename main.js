import express from "express";

const app = express();

app.get("/", (req, res) => {
  res.json({message: "Hello World!"});
});


// CRUD functionality of movies

app.get("/movies", (req, res) => {

});


app.post("/movies", () => {

});


app.get("/movies/:id", () => {

});


app.put("/movies/:id", () => {

});


app.delete("/movies:id", () => {

});



let PORT = 3000;

app.listen(PORT, () => {
  console.log(`Server Started Successfully on ${PORT}`);
  
})