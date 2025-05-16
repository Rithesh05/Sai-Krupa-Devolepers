import express from "express";
import path from "path";
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app=express();

//middlewares
app.set("views",path.join(__dirname,"views"));
app.set("view engine","ejs");
app.use(express.static(path.join(__dirname,"public")))



app.get("/",(req,res)=>{
    res.render("index");
})

app.get("/saidevihomes",(req,res)=>{
    res.render("saidevi");
})



app.listen(3000,(req,res)=>{
    console.log(`listening in http://localhost:3000/`)
});




