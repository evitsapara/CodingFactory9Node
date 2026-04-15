const express = require('express');
const app = express();

app.use(express.json());

app.post('/user', (req, res)=>{
    console.log(req.body);
    let user = req.body;
    let name = user.name;
    let surname = user.surname;
    
    console.log('Post variables', name, surname)
    res.send('Name ' + name + ' Surname ' + surname);
})

app.listen(3000, () => {
    console.log('Server is up');
})