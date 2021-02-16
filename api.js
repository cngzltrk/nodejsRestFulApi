const express = require('express');
const bodyParser=require('body-parser');

//create express app
const app = express();

// setup the server port
const port = process.env.PORT || 5000;

//parse request data content type application/x-www-form-rulencoded
app.use(bodyParser.urlencoded({extended : false}));

//parse request data content tpye json
app.use(bodyParser.json());


const employeeRoutes=require('./src/routes/employee.router');

app.use('/api/employee',employeeRoutes);

app.listen(port,()=>{
    console.log('Express Server is running at port '+ port);
});