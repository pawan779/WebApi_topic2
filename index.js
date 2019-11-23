var express = require('express');
var app = express();

//authenticating middleware
app.get('/auth', 
function(req,res,next){
    console.log('in first middleware do something');
    next();
},
function(req,res,next){
    console.log('in second middleware do something');
    res.status(200);
    res.set({
        'Content-Type' : 'plain'
    });
    
})


//route
app.get('/',function(req,res){
//handle
console.log('MY name');
//json format
var x = {name: "Pawan",lname:'Dharel'};
//set
res.status(200);

res.json(x);

})
app.listen(3091);