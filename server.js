const express = require('express');
const bodyParser = require('body-parser');
const app = express();


app.get('/profile',(request,response) => {
	const user =  {
		name:"sally",
		hobby:"football",
	}
	response.send(JSON.stringify(user));
})

//app.use(bodyParser.urlencoded({extended:false}));

app.post('/home',(request,response) => {
	
	console.log(request.body);
	const user =  {
		name:"sally",
		hobby:"football",
	}
	response.send(JSON.stringify(user));
})


app.get('/',(request,response) => {
	const user =  {
		name:"sally",
		hobby:"football",
	}
	response.send(JSON.stringify(user));
})

app.listen(3000);