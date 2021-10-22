const express = require('express');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(express.json())

const port = 5000;

app.get('/', (req, res) => {
    res.send('hello from module-63. i am very happy to learn node js hai i am coming')
})

const users = [
    {id:0, name:'shabna', email: 'shabna@gmail.com', phone: '018888888888' },
    {id:1, name:'shabnoor', email: 'shabnoor@gmail.com', phone: '018888888888' },
    {id:2, name:'shakila', email: 'shakila@gmail.com', phone: '018888888888' },
    {id:3, name:'shapla', email: 'shapla@gmail.com', phone: '018888888888' },
    {id:4, name:'sharabonti', email: 'sharabonti@gmail.com', phone: '018888888888' },
    {id:5, name:'shakila', email: 'shakila@gmail.com', phone: '018888888888' },
    {id:6, name: 'labib', }
]


app.get('/users', (req, res) => {
    const search = (req.query.search)
// use query parameter
    if(search){
        const searchResult = users.filter(user => user.name.toLowerCase().includes(search));
        res.send(searchResult)
    }
    else{
        res.send(users)
    }
   
})



// app method
app.post('/users', (req, res) => {
    const newUser = req.body;
    newUser.id = users.length;
    users.push(newUser);
    console.log('hitting the  post', req.body)
    // res.send(JSON.stringify(newUser))
    res.json(newUser)
})




// dynamic api
app.get('/users/:id', (req, res) => {
    const id = req.params.id;
    const user = users[id];
    res.send(user)
    // console.log(req.params.id)
})





app.get('/fruits', (req, res) => {
    res.send(['mango', 'orange', 'banana'])
})



app.get('/fruits/mangoes/fazli', (req, res ) => {
    res.send('oooh fazle is not very good ')
})


app.listen(port, () => {
    console.log('listening to my port', port )
})