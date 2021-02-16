
const employeeModel=require('../models/employee.model');

//get all employee list
exports.getEmployeeList=(req,res)=>{
    employeeModel.findAll().then(notes => res.json(notes));

}

exports.getEmployeeById=(req,res)=>{
    employeeModel.findAll({ where: { id: req.params.id } }).then(notes => res.json(notes));
}

exports.createNewEmployee=(req,res)=>{
   employeeModel.create({
        name : req.body.name,
        last_name:req.body.last_name,
        email:req.body.email}).then(function(note) {
            res.json(note);
          });
}

exports.updateEmployee=(req,res)=>{
    employeeModel.findByPk(req.params.id).then(function(note) {
        note.update({
            name : req.body.name,
            last_name:req.body.last_name,
            email:req.body.email
        }).then((note) => {
          res.json(note);
        });
      });
}

exports.deleteEmployee=(req,res)=>{
    employeeModel.findByPk(req.params.id).then(function(note) {
        note.destroy();
      }).then((note) => {
        res.sendStatus(200);
      });
}