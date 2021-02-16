const mysql=require('mysql');

// create here mysql conneciton

const dbConn=mysql.createConnection({
        host:'localhost',
        user:'root',
        password:'123456',
        database:'node_mysql_crud_db'
    });
    
dbConn.connect(function(err){
    if(err) throw err;;
    console.log('Database connected successfuly!!');
});

module.exports =dbConn;