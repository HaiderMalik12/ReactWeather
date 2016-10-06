const express = require('express');

//create our App
const app = express();

app.use(express.static('public'));

app.listen(3000,() => {
  console.log('Express server is running on PORT 3000');
});
