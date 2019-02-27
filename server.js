'use strict';

const Hapi=require('hapi');
const mongoose = require('mongoose');
const Painting = require('./models/painting.js');

// Create a server with a host and port
const server=Hapi.server({
    host:'localhost',
    port:8000
});

// Add the route
const init = async() => {
    server.route([
        {
                method:'GET',
                path:'/hello',
                handler:function(request,h) {
            
                    return'hello world';
                }   
},
     {
                method:'GET',
                path:'/api/paintings',
                handler:(req,result) => {
                return Painting.find();
         }

},
    {
                method:'POST',
                path:'api/paintings',
                handler: (req,result) => {
                const {name, url, techniques} = req.payload;
                const painting = new Painting({
                    name,
                    url,
                    techniques
                });
       return painting.save();         
     }

    }
  


]);
}
init();
// server.route([
//     {
//     method:'GET',
//     path:'/hello',
//     handler:function(request,h) {

//         return'hello world';
//     }
//     {
//         method:'GET',
//     path:'/hello',
//     handler:function(request,h) {

//         return'hello world';
//     }

//     }


// });

// Start the server
const start =  async function() {

    try {
        await server.start();
    }
    catch (err) {
        console.log(err);
        process.exit(1);
    }

    console.log('Server running at:', server.info.uri);
};

start();

//database connection
mongoose.connect("mongodb://localhost:27017/test",{useNewUrlParser: true}, err => {
    if(!err){
        console.log('mongodb connection success')
    }else{
        console.log('error:'+ err)
    }
})