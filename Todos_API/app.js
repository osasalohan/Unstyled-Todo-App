var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var todoRoutes = require('./routes/todos');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(__dirname + '/public'));
app.use(express.static(__dirname + '/views'));

app.get('/', (req, res) => {
	res.sendFile('index.html');
});

app.use('/api/todos', todoRoutes);

app.listen(process.env.PORT || 3000, () => {
	console.log('Listening on server!');
});