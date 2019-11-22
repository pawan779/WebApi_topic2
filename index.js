const express = require('express');
const app = express();

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
    res.send('Nurse Akali');
})


//route
app.get('/',function(req,res){
//handle
console.log('True damage akali');
//json format
var x = {name: "true damage",test:'akali'};
//set
res.status(200);
res.set({'Content-Type':'application/json'});
//res.json(x);
res.send('KDA akali');
})
app.listen(3091);