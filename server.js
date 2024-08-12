//criar uma quary(consulta) simples
const express = require('express');
const mysql = require('mysql2');

const app = express();

app.listen(3000,()=>{
    console.log("servidor em execução");
})

//criação da conexão com o banco de dados

const conection = mysql.createConnection({
    host:'localhost',
    user:'user_bd_tasks',
    password: 'QL0PYESP4TDcQGB2R97Djet7vXYHggatTSZE4',
    database: 'nodejs_task',
})                       
 

//testar a conexão
connection.connect(error =>{
    if(error){
        console.log("Erro na conexão ao MySql:"+ error.message)
        return
    }
    console.log("Conexão realizada com prazar<3")
})