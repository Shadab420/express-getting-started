const express = require('express');

const app = express();

//serving static files
app.use(express.static('public')) //http://localhost:5000/images/apple.jpeg

//port number
const port = 5000;

app.get('/', (req, res) => {
    
    res.send('Hello World!');
});

app.post('/', (req, res) => {
  res.send('Got a POST request');
});

app.put('/user', (req, res) => {
  res.send('Got a PUT request at /user');
});

app.delete('/user', (req, res) => {
  res.send('Got a DELETE request at /user');
});

app.listen(port, () => {
    console.log(`Server started at http://localhost:${port}`);
})
