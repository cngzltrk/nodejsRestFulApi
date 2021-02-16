var dbConn=require('../../config/db.config');

var Employee=function(employee){
    this.name=employee.name;
    this.last_name=employee.last_name;
    this.email=employee.email;
}

Employee.getAllEmployees = (result) => {
    dbConn.query('Select * from employees',(err,res)=>{
        if(err){
            console.log('Error while fetching employess',err);
            result(null,err);
        }
        else{
            console.log('Employees fetched succesfully');
            result(null,res);
        }
    })
}

Employee.getEmployeeByid = (id,result) => {
    dbConn.query('Select * from employees where id=?',id,(err,res)=>{
        if(err){
            console.log('Error while fetching employee by id',err);
            result(null,err);
        }
        else{
            console.log('Employees fetched succesfully');
            result(null,res);
        }
    })
}

Employee.createEmployee = (data,result) => {
    dbConn.query('INSERT INTO employees SET ? ',data,(err,res)=>{
        if(err){
            console.log('Error while inserting data',err);
            result(null,err);
        }
        else{
            console.log('Employees created succesfully');
            result(null,res);
        }
    })
}

Employee.updateEmployee = (id,data,result) => {
    dbConn.query('UPDATE employees SET name=?,  last_name=?, email=? where id=?',[data.name,data.last_name,data.email,id],(err,res)=>{
        if(err){
            console.log('Error while updated data',err);
            result(null,err);
        }
        else{
            console.log('Employees updated succesfully');
            result(null,res);
        }
    })
}

Employee.deleteEmployee = (id,result) => {
    dbConn.query('delete from employees where id=?',id,(err,res)=>{
        if(err){
            console.log('Error while deleted data',err);
            result(null,err);
        }
        else{
            console.log('Employees deleted succesfully');
            result(null,res);
        }
    })
}

module.exports=Employee;

