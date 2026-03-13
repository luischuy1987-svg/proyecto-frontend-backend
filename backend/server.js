const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

app.post("/insertar",(req,res)=>{

const {nombre,edad,correo}=req.body;

console.log("Datos recibidos:");
console.log(nombre,edad,correo);

res.send("Datos recibidos correctamente");

});

app.listen(3000,()=>{
console.log("Servidor corriendo en puerto 3000");
});
