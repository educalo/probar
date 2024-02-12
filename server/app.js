const express = require('express')
const mysql = require('mysql')
const cors = require('cors')
const { json } = require('express')
const app = express()

app.use(express.json())
app.use(cors())
//Establecemos los prámetros de conexión
const conexion = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'',
    database:'agenda'
})
//Conexión a la database
conexion.connect(function(error){
    if(error){
        throw error
    }else{
        console.log("¡Conexión exitosa a la base de datos!")
    }
})
app.get('/', function(req,res){
    res.send('Ruta INICIO')
})
//Mostrar todos los nombres
app.get('/getAll', (req,res)=>{
    conexion.query('SELECT * FROM nombres', (error,filas)=>{
        if(error){
            throw error
        }else{
            res.send(filas)
        }
    })
})
//Mostrar un SOLO nombre
//????????????mirar
app.get('/:id', (req,res)=>{
    conexion.query('SELECT * FROM nombres WHERE id = ?', [req.params.id], (error, fila)=>{
        if(error){
            throw error
        }else{
            res.send(fila)
        }
    })
})

app.get('/search/:name', (req, res) => {
    const  nombre  = req.params.name;
    //si lo quiero pasar el parametro a través del body
    //let nombre = {nombre:req.body.name}      
    const query = 'SELECT * FROM nombres WHERE nombre = ?';

    conexion.query(query, [nombre], (error, resultados) => {
        console.log(resultados); 
        if(error){
            throw error
        }else{
            res.send(resultados)
        }
    })
})

//fecha no toda cero?????????????????
//Crear un nombre
app.post('/insert', (req,res)=>{
    //podia haber cogido de forma independiente el body
    //let nombre = {nombre:req.body.nombre}
    //let fecha_alta = {nombre:req.body.fecha_alta}
    let data = {nombre:req.body.nombre, fecha_alta:req.body.fecha_alta, fecha_actualizacion:req.body.fecha_act}
    console.log(data)
    let sql = "INSERT INTO nombres SET ?"
    console.log(sql);
    conexion.query(sql, [data], function(error, results){
            if(error){
               throw error
            }else{         
             //añado el id al principio del data        
             var obj=Object.assign({id: results.insertId }, data) //agregamos el ID al objeto data             
             res.send(obj) //enviamos los valores                         
        }
    })
})
//Editar articulo
//lo puedo pasar como parametro de la url o desde el body directamente
//app.put('/update/:id', (req, res)=>{
app.put('/update', (req, res)=>{
    //let id = req.params.id
    let id = req.body.id
    let nombre = req.body.nombre
    let fecha_actualizacion = req.body.fecha_actualizacion
    
    let sql = "UPDATE nombres SET nombre = ?, fecha_actualizacion = ? WHERE id = ?"
    conexion.query(sql, [nombre, fecha_actualizacion, id], function(error, results){
        if(error){
            throw error
        }else{              
            res.send(results)
        }
    })
})
//Eliminar articulo
app.delete('/delete/:id', (req,res)=>{
    conexion.query('DELETE FROM nombres WHERE id = ?', [req.params.id], function(error, filas){
        if(error){
            throw error
        }else{              
            res.send(filas)
        }
    })
})
const puerto = process.env.PUERTO || 3000
app.listen(puerto, function(){
    console.log("Servidor Ok en puerto:"+puerto)
})