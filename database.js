
const Mongoose = require('mongoose');

// load database
Mongoose.connect('mongodb://localhost/hapi');
const db = Mongoose.connection;

db.on('error', console.error.bind(console, 'connection error'));
db.once('open', () => {
	console.log('Connection with database succeeded.');
});

exports.db = db;
// mongoose.connect("mongodb://localhost:27017/test",{useNewUrlParser: true}, err => {
//     if(!err){
//         console.log('mongodb connection success')
//     }else{
//         console.log('error:'+ err)
//     }
// })
