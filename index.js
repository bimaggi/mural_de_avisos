const express= require('express');
const bodyParser = require('body-parser');

const app = express();
const PORT = 5000;

let posts = [
    {
        id: "00000",
        title:"Por fios de poesia",
        description: "Poesia"
    },
] 

app.get("/all",(req,res)=>{
    res.json(JSON.stringify(posts))
    
})

app.post("/new",express.json(),(req,res)=>{
   let id = generateID();
   let title = req.body.title;
   let description = req.body.description;

   posts.push({ id, title, description})

   res.send("Post adicionado");

})
app.listen(PORT,()=>{
    console.log("Servidor rodando na porta", PORT)

})

function generateID(){
    return Math.random().toString(36).substr(2,9)
}