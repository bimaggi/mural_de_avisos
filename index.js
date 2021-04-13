const express= require('express');
const path = require('path');
const apiRoute = require('./routes/api')
const app = express();

const PORT = 5000;

app.use("/", express.static(path.join(__dirname, "public")));
app.use("/api", apiRoute)

app.listen(PORT,()=>{
    console.log("Servidor rodando na porta", PORT)

})

