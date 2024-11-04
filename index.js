var express = require('express');

var app=express();
app.use(express.urlencoded({
    extended: true
}));

app.use(express.json())

app.get('/', function (req,res){
    res.send('hello word!');
});

app.listen(3000, function(){
    console.log("listening on port: localhost:3000");
});
app.post('/users', function (req, res){
    console.log(req.body)
    users.push(req.body)
    console.log(users)
    res.send("usuario salvo com sucesso!")
})

app.get('/info', function(req,res){
    console.log(req.query.id)
    var user = users.find(user=>user.id==req.query.id)//igual um for
    res.send(user)
})

app.put('/update', function(req,res){
    var user=users.find(user=>user.id==req.query.id)
    console.log(user)
    user.saldo =req.body.saldo
    res.send(user)
})

app.delete('/delet', function(req, res){
    var user=users.findIndex(user=>user.id==req.query.id)//pra remover eu tenho q passar o index
    console.log(user)
    users.splice(user,1)
    res.send("deletado!")
})

var users =[];






//entry point é o primeiro arquivo a ser executado
// get post delete put e patch e update


//get pra pegar o saldo
//post criar o usuário
//delete para apagar a conta
//update para atualizar o saldo