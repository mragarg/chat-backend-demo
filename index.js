
const express = require('express');
const app = express();
app.use(express.urlencoded({extended: true}));

// This is my 'database'
const db = [
    'Welcome to the Chat App!'
];

// When GET request comes in,
// send bac all the messages.
app.get('/api', (req, res) => {
    res.json(db);
});

// When POST request comes in,
// add message to array of messages. 
app.post('/api', (req, res) => {
    // What to do
    console.log(req.body.message);
    db.push(req.body.message);
    res.json({
        'message': req.body.message
    })
})

app.listen(31337, () => {
    console.log(`You're running!`);
});