const express = require('express');
const app = express();
const morgan = require('morgan');
const index = require('./views/index');

//middleware
app.use(morgan('dev'));
//not sure if the args are correct
app.use(express.static(__dirname + '/public'));
app.use(express.urlencoded());

app.get('/', (req, res, next) => {
	const layout = index.main('');
	res.send(layout);
});

app.listen(3000, () => {
	console.log('Up and running on port 3000');
});
