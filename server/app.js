const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const mongoose = require('mongoose');
require('./Employee')

app.use(bodyParser.json());
const Employee = mongoose.model("employee")
const mongoUri = "mongodb+srv://ozan:DGRDrSiDHVG6UlgD@cluster0.fnbis.mongodb.net/test?retryWrites=true&w=majority"

mongoose.connect(mongoUri, { 
    useNewUrlParser: true, 
    useUnifiedTopology: true}, () =>
    console.log('Bağlantı başarılı')
);

app.get('/',(req,res) => {
    res.send('Welcome node js')
})

app.post('/send-data', (req,res) => {
    const employee = new Employee({
        name: req.body.name,
        email:req.body.email,
        phone:req.body.phone,
        picture:req.body.picture,
        salary:req.body.salary,
        position:req.body.position
    })
    employee.save().then(data=> {
        console.log(data);
        res.send('Success');
    }).catch(err => {
        console.log(err);
    })
});

app.post('/delete',(req,res) => {
    Employee.findByIdAndRemove(req.body.id).
    then(data => {
        console.log(data)
        res.send('deleted')
    })
})

app.post('/update',(req,res) => {
    Employee.findByIdAndUpdate(req.body.id, {
        name: req.body.name,
        email:req.body.email,
        phone:req.body.phone,
        picture:req.body.picture,
        salary:req.body.salary,
        position:req.body.position
    }).
    then(data => {
        console.log(data)
        res.send('updated')
    }).catch(err => {
        console.log(err);
    })
})





app.listen(3000,() => {
    console.log("server running");
})