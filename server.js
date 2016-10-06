const express = require('express');

//create our App
const app = express();
app.use(function(req,res,next){
    if(req.headers['x-forwarded-proto'] === 'http'){
    next();
    } else {
   res.redirect('http://'+req.hostname + req.url);
    }
});
const PORT =process.env.PORT || 3000;

app.use(express.static('public'));

app.listen(PORT,() => {
  console.log('Express server is running on PORT 3000');
});
