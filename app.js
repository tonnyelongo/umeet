const express = require('express')
const https = require('http')
var cors = require('cors')
const session=require("express-session")
var FileStore = require('session-file-store')(session);
const app = express()
const bodyParser = require('body-parser')
const path = require("path")
var xss = require("xss")
const fs = require('fs')



app.get("/sistema",(req,res)=>{
	app.use(express.static(__dirname+"/build"))
	res.sendFile(path.join(__dirname+"/build/index.html"))
})

app.use(session({ secret: 'keyboard cat',
    resave: false,
    saveUninitialized: false,
    store: new FileStore({logFn: function(){}}),
    cookie: { maxAge: 3600000,secure: false, httpOnly: true }
  })
);



var server = https.createServer(app)
var io = require('socket.io')(server)

app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}));

var connection = mysql.createConnection({
	host     : 'localhost',
	user     : 'root',
	password : '',
	database : 'almadb'
});

/*
   


app.get("/estudantes",(req,res)=>{
	connection.query("SELECT * FROM `ESTUDANTE` ",function(err,rows,fields){
		if(err)
		{
			console.log(err);
			connection.end();
			res.end()
		}
		else
		{
			res.json(rows);
			connection.end();
			res.end()
		}
	   })
});
*/
app.get("/",(req,res)=>{
	res.json("ola")
})
app.post("/login",(req,res)=>{

	let nome=req.body.nome;//"FABIO ASSUNCAO";
	let senha=req.body.senha;//"1998MARS";

	console.log("dados: "+nome+" senha: "+senha);

	connection.query("SELECT ESTUDANTE.ID_ESTUDANTE,ESTUDANTE.NOME,CODIFICACAO.CODIGO FROM `ESTUDANTE` INNER JOIN CODIFICACAO ON ESTUDANTE.ID_CODIF=CODIFICACAO.ID_COD WHERE NOME=? AND SENHA=?",[nome,senha],function(error,results,rows){
		console.log(results);
		 if(error)
		 {
			console.log(error);
			connection.end();
			res.end();
		 }
		 else
		 {
			 if(results.length>0)
			 {
				//req.session.loggedin=true
				console.log("logado")
				req.session.key=nome
				res.json({message:"logado",data:{id:results[0].ID_ESTUDANTE,nome:results[0].NOME,codificacao:results[0].CODIGO}})
				res.end();
			 
			 }
			 else
			 {
				res.json({message:"erro"});
				connection.end();
				res.end();
			 }
		 }
	})
	 
});

app.get("/get_estudante_by_id/:id",(req,res)=>{

	console.log(req.params.id)
	
	let id=req.params.id


	connection.query("SELECT ESTUDANTE.ID_ESTUDANTE,ESTUDANTE.NOME,CODIFICACAO.CODIGO FROM `ESTUDANTE` INNER JOIN CODIFICACAO ON ESTUDANTE.ID_CODIF=CODIFICACAO.ID_COD WHERE ID_ESTUDANTE=?",[id],function(error,results,rows){
		console.log(results);
		 if(error)
		 {
			console.log(error);
			connection.end();
			res.end();
		 }
		 else
		 {
			 if(results.length>0)
			 {

				res.json({id:results[0].ID_ESTUDANTE,nome:results[0].NOME,codificacao:results[0].CODIGO})
				res.end();
			 
			 }
			 else
			 {
				res.json({message:"erro"});
				connection.end();
				res.end();
			 }
		 }
	})
	 
});

app.get("/get_artigos",(req,res)=>{

	let codigo="ALAM10CFB"

	connection.query("SELECT * FROM `artigos` WHERE CODIGO=?",[codigo],function(error,results,fields){

		 if(error)
		 {
			console.log(error);
			res.json("erro")
			res.end();
		 }
		 else
		 {

		  res.json(results)

		  res.end();
			 
			 

		 }
	})

})

/*
app.get("/ola",(req,res)=>{
	res.json({message:"helloworld"})
	console.log(req.session.key);
 });

 app.get("/logout",(req,res)=>{

	req.session.destroy((err)=>{
		if(err){
			console.log(err)
			res.json({message:err})
		}
        console.log("loggedout")
		res.json({message:"loggedout"})
	})
 });

*/

if(process.env.NODE_ENV==='production'){
	app.use(express.static(__dirname+"/build"))
	app.get("*", (req, res) => {
		res.sendFile(path.join(__dirname+"/build/index.html"))
	})
}
app.set('port', (process.env.PORT || 8080))

sanitizeString = (str) => {
	return xss(str)
}

connections = {}
messages = {}
timeOnline = {}

io.on('connection', (socket) => {
	console.log("connectado")

	socket.on('join-call', (path) => {
		if(connections[path] === undefined){
			connections[path] = []
		}
		connections[path].push(socket.id)

		timeOnline[socket.id] = new Date()

		for(let a = 0; a < connections[path].length; ++a){
			io.to(connections[path][a]).emit("user-joined", socket.id, connections[path])
		}

		if(messages[path] !== undefined){
			for(let a = 0; a < messages[path].length; ++a){
				io.to(socket.id).emit("chat-message", messages[path][a]['data'], 
					messages[path][a]['sender'], messages[path][a]['socket-id-sender'])
			}
		}

		console.log(path, connections[path])
	})

	socket.on('signal', (toId, message) => {
		io.to(toId).emit('signal', socket.id, message)
	})

	socket.on('chat-message', (data, sender) => {
		data = sanitizeString(data)
		sender = sanitizeString(sender)

		var key
		var ok = false
		for (const [k, v] of Object.entries(connections)) {
			for(let a = 0; a < v.length; ++a){
				if(v[a] === socket.id){
					key = k
					ok = true
				}
			}
		}

		if(ok === true){
			if(messages[key] === undefined){
				messages[key] = []
			}
			messages[key].push({"sender": sender, "data": data, "socket-id-sender": socket.id})
			console.log("message", key, ":", sender, data)

			for(let a = 0; a < connections[key].length; ++a){
				io.to(connections[key][a]).emit("chat-message", data, sender, socket.id)
			}
		}
	})

	socket.on('disconnect', () => {
		var diffTime = Math.abs(timeOnline[socket.id] - new Date())
		var key
		for (const [k, v] of JSON.parse(JSON.stringify(Object.entries(connections)))) {
			for(let a = 0; a < v.length; ++a){
				if(v[a] === socket.id){
					key = k

					for(let a = 0; a < connections[key].length; ++a){
						io.to(connections[key][a]).emit("user-left", socket.id)
					}
			
					var index = connections[key].indexOf(socket.id)
					connections[key].splice(index, 1)

					console.log(key, socket.id, Math.ceil(diffTime / 1000))

					if(connections[key].length === 0){
						delete connections[key]
					}
				}
			}
		}
	})
})

server.listen(app.get('port'), () => {
	console.log("listening on", app.get('port'))
})
