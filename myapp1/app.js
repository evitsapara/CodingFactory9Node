const express = require("express");
const app = express();
const port = 3000;

app.get('/', (req, res)=>{
    res.send('Hello World');
});

app.get('/about', (req, res)=>{
    console.log('About Page');
    res.send('This is: About Page');
});

app.get('/help', (req, res)=>{
    console.log('Help Page');
    res.send('This is: Help Page');
});

app.get('/user', (req, res)=>{
    let query = req.query;
    let name = query.name;
    let surname = query.surname;
    console.log('Query Parameters', query.name, query.surname);
    res.send('This is: User Page, name: ' + name + ', surname: ' + surname);
});

app.get('/user/:name/:surname', (req, res)=>{
    let query = req.params;
    let name = query.name;
    let surname = query.surname;
    console.log('Query Parameters', query.name, query.surname);
    res.send('This is: User Page with query, name: ' + name + ', surname: ' + surname);
});

app.listen(port, ()=>{
    console.log("Server is up");
})