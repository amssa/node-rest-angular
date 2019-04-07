const express = require('express');
const app = express();
const cors = require('cors')

var fs= require ('fs');
var csv = require('fast-csv');

var allowCrossDomain = function(req, res, next) {
    res.header('Access-Control-Allow-Origin', "*");
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    next();
};
let d = [];
let i=0;

app.use(allowCrossDomain);

app.get('/:key', (req, res) => {
  	let d = [];
	let i=0;
    const requestedCatName = req.params['key'];
    fs.createReadStream('mcdonalds.csv')
	.pipe(csv())
	.on('data', function(data){
		
		if(data[0].split('"')[1].split(',')[1] == requestedCatName){
			key = data[0].split('"')[1].split(',')[1];
			lat = data[0].split(',')[0];
			long = data[0].split(',')[1];
			address = data[0].split('"')[3];
			d[i] = {key:key, lat:lat, long:long, address:address};

			//console.log(d[i]);
			i++;
		}
		
	})
	.on('end',function(data){
		//console.log('finshied');
		res.send(d);

		
	});

	
});



app.listen(3000, () => console.log('McDonalds app listening on port 3000!'));