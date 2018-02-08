var express = require('express');

const app = express();

app.get('/',(req,res)=>{
  var lang = req.headers['accept-language'].split(",");
  var os = req.headers['user-agent'].split("(");
  var finalOS = os[1].split(")");
  res.send({"ipaddress":req.ip,"language":lang[0],"software":finalOS[0]});
});
const port = process.env.PORT || 3000;
app.listen(port,()=>{
  console.log('server listening on port');
});
