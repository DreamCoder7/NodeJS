const http = require('http');
const express = require('express');



const hostname = "localhost";
const port = 3000;

const app = express();



const userData = {
	name: "Dream Coder",
	email: "dreamcoder@gmail.com",
	country: "Ethiopia",
	zipCode: "3483",
	otherData: {
		other: ""
	},
	arr: ["", 34, null, undefined]
}

app.use((req, res, next) => {
	console.log(req.headers);

	if (req.method === "GET") {
		res.statusCode = 200;
		res.setHeader('ContentType', "text/html");
		res.end(`
<html>
		<head>
			<title>Express example</title>
			<style>
				h1 {
					font-size: 40px;
					font-weight: 600;
					color: #43d;
				}

				span {
					font-size: 20px;
					color: #5e1;
					text-transform: uppercase;
				}
			</style>
		</head>
		<body>
			<h1>This is a GET mehtod: <span>with Express App</span></h1>
		</body>
	</html>
`);
	}

	else if (req.method === "POST") {
		console.log(req);
		console.log(res);
		console.log(next);
		res.statusCode = 201;
		// Passing {userData} object and convert to JSON
		res.end(JSON.stringify(userData));
	}

	else if (req.method === "PUT") {
		res.end("Updating the server!");
	}

	else if (req.method === "DELETE") {
		// Copy the object (just for fun!!😁)
		res.end(JSON.stringify({
			...userData
		}))
	}
 
});


const server = http.createServer(app);

server.listen(port, hostname, () => {
	console.log(`Server running at port ${hostname}:${port}`);
})
