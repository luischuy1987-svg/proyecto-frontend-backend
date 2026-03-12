const express = require("express");

const app = express();

app.use(express.json());

app.post("/insertar",(req,res)=>{

const {nombre,edad,correo} = req.body;

console.log(nombre,edad,correo);

res.send("Datos recibidos");

});

app.listen(3000,()=>{
console.log("Servidor funcionando");
});
