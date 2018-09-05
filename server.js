const http = require('http');
const server = http.createServer((request,response) => {
	response.setHeader('Content-Type','application/json');
	const user = {
		name:'tim',
		hobby:'football',
	}
	console.log('headers', request.header);
	console.log('url',request.url);
	response.end(JSON.stringify(user));
})

server.listen(3000);