const express = require("express");
const http = require('http');
const morgan = require('morgan');
const bodyParser = require('body-parser');


const hostname = "localhost";
const port = 3000;

const app = express();

const dishRouter = require('./routes/dishRouter');



// app.use((req, res, next) => {
// 	console.log(req.headers);
// 	res.statusCode = 200;
// 	res.setHeader('ContentType', 'text/html');
// 	res.end('<html><body><h1>This is an express app</h1></body></html>');
// });

app.use(morgan('dev'));
app.use(bodyParser.json());

app.use('/dishes', dishRouter);



// For Dishes/dishId

app.get("/dishes/:dishId", (req,res, next) => {
	res.end(`will send details of the dish: ${req.params.dishId} to you!`);
})

app.post("/dishes/:dishId", (req, res, next) => {
	res.statusCode = 403;
	res.end(`POST isn't supported on /dishes/${req.params.dishId}`);
})

app.put("/dishes/:dishId", (req, res, next) => {
	console.log(req.body);
	res.write(`Updating the dish: ${req.params.dishId}`);
	res.end(`with detail: ${req.body.description}`);
})

app.delete("/dishes/:dishId", (req, res, next) => {
	res.end(`Deleting dish: ${req.params.dishId}`);
})


const server = http.createServer(app);

server.listen(port, hostname, () => {
	console.log(`Server is running at ${hostname}:${port}`);
})


app.use(express.static(__dirname + '/public'));