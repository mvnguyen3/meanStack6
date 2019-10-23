//console.log("server.js loaded, further we need express to handle api request's");

let express = require('express'), //express reference
app = express(); //express application created (instantiated)

app.get('/', (req, res) =>
{ 
    res.send('Hello World'); 
});

app.all('/sayhello', (req, res) =>
{ 
    console.log("============================================================");
    console.log("Respones Object", res);
    console.log("name :", req.query.name);
    res.send(`<h4>Hello </h4><b>${req.query ? req.query.name : "No Name"}!</b>`)
});

// app.get('/sayhello', (req, res) =>
// { 
//     console.log("name :", req.query.name);
//     res.send(`<h4>Hello </h4><b>${req.query ? req.query.name : "No Name"}!</b>`)
// });


app.get('/mernstack6', (req, res) =>
{ 
    res.json({
        "status":200,
        "Message": "Mernstack started successfully"
    }) 
});

app.get('*', (req, res) =>
{ 
    res.send("<h1>This is default URI</h1>");
});

let server = app.listen(8081, () =>
{ 
    let host = server.address().address,
    port = server.address().port

    console.log("Example app listening at http://%s:%s", host, port) 
});