const express = require('express');
const app = express();

app.use(express.static('public'));


app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

app.get('/get-info', (req, res) => {
  info = {
    name: "Patrick",
    status: "big dog",
  }
  res.send(info);
});


app.listen(3000, () => {
  console.log('listening on *:3000');
});
