const express = require('express');
const app = express();

// Everything used on the client-side (images, scripts) 
// are pulled from the 'public' folder AS IF THEY WERE
// FROM THE ROOT URL ('/'). So '/public/script.js' is now
// simply 'script.js'
app.use(express.static('public'));

// Resolves GET requests to homepage, sends index.html
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

// API: request originates from client-side JS (in public folder)
// and the server (this) responds with the Patrick object
app.post('/get-info', (req, res) => {
  var info = getPatrickObject("big dog");
  res.send(info);
});

// You can write functions that do whatever you want
// before sending a response.
function getPatrickObject(status){
  return info = {
    name: "Patrick",
    status,
  }
}

// Listening on Port 3000
app.listen(3000, () => {
  console.log('listening on *:3000');
});
