const express = require('express');
const compression = require('compression');
const port = 3000;
const db = require('./db');
const path = require('path');
const morgan=require('morgan');
var app = express();
app.use(express.json());
app.use(morgan('dev'));
app.use(compression({level: 6}));
app.use(express.static(path.join(__dirname, 'public')));

app.listen(port, () => {
  console.log(`Express server listening at http://localhost:${port}`)
});

app.post('/email', (req, res) => {
  var queryStr='INSERT INTO emails (email) VALUE (?)';
  db.query(queryStr, [req.body.email], (err)=>{
    if(err){
      res.status(500).send(err);
    }
    res.end();
  })
});

module.exports = app;



