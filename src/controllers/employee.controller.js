
const employeeModel=require('../models/employee.model');

//get all employee list
exports.getEmployeeList=(req,res)=>{
    employeeModel.getAllEmployees((err,employees)=>{
       
        if(err) res.send(err);
        res.send(employees);
    })
}

exports.getEmployeeById=(req,res)=>{
    employeeModel.getEmployeeByid(req.params.id,(err,employees)=>{
       
        if(err) res.send(err);
        res.send(employees);
    })
}

exports.createNewEmployee=(req,res)=>{
    const employeReqData=new employeeModel(req.body);
    employeeModel.createEmployee(employeReqData,(err,employee)=>{
        if(err){
            res.send(err);
            res.json({status: false,message:'Employe created failed'})
        }
        else{
            res.json({status: true,message:'Employe created successfuly!!',data:employee})
        }
    })
}

exports.updateEmployee=(req,res)=>{
    const employeReqData=new employeeModel(req.body);
    employeeModel.updateEmployee(req.params.id,employeReqData,(err,employee)=>{
        if(err){
            res.send(err);
            res.json({status: false,message:'Employe updated failed'})
        }
        else{
            res.json({status: true,message:'Employe updated successfuly!!'})
        }
    })
}

exports.deleteEmployee=(req,res)=>{
    employeeModel.deleteEmployee(req.params.id,(err,employee)=>{
        if(err){
            res.send(err);
            res.json({status: false,message:'Employe deleted failed'})
        }
        else{
            res.json({status: true,message:'Employe deleted successfuly!!'})
        }
    })
}