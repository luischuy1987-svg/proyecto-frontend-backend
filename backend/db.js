const mysql = require("mysql2");

const conexion = mysql.createConnection({
host:"localhost",
user:"root",
password:"",
database:"escuela"
});

conexion.connect(function(error){

if(error){
console.log("Error de conexión");
}else{
console.log("Conectado a la base de datos");
}

});

module.exports = conexion;
