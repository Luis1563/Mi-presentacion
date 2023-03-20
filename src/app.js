const express = require ('express');
const app = express();
const PORT = 3001;
app.get ('/api',(req,res)=>{
    console.log('paso por aca');
    res.json({mensaje: 'hola mundo'}).status (200)
});
app.listen(PORT,()=>{console.log('estoy excuchando en el puerto:'+ PORT)});