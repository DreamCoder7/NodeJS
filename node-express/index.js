const express = require("express");
const http = require('http');
const morgan = require('morgan');
const bodyParser = require('body-parser');


const hostname = "localhost";
const port = 3000;

const app = express();

const dishRouter = require('./routes/dishRouter');
const promoRouter = require('./routes/promoRouter');
const leaderRouter = require('./routes/leaderRouter');


// app.use((req, res, next) => {
// 	console.log(req.headers);
// 	res.statusCode = 200;
// 	res.setHeader('ContentType', 'text/html');
// 	res.end('<html><body><h1>This is an express app</h1></body></html>');
// });

app.use(morgan('dev'));
app.use(bodyParser.json());

// Dishes
app.use('/dishes', dishRouter);
app.use('/dishes/:dishId', dishRouter);

// Promotions
app.use('/promotions', promoRouter);
app.use('/promotions/:promoId', promoRouter);


// Leaders
app.use('/leaders', leaderRouter);
app.use('/leaders/:leaderId', leaderRouter);


const server = http.createServer(app);

server.listen(port, hostname, () => {
	console.log(`Server is running at ${hostname}:${port}`);
})


app.use(express.static(__dirname + '/public'));