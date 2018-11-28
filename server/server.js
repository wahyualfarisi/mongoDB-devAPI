const _           = require('lodash');
const express     = require('express');
const bodyParser  = require('body-parser');
const {ObjectID}  = require('mongodb');
const {mongoose}  = require('./db/mongoose');
const {Profile}   = require('./models/Profile');


var app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.json() );

//post profile
app.post('/profile', (req, res) => {
  var body    = _.pick(req.body, ['email', 'firstName', 'lastName', 'age', 'birth', 'address'] );

  var profile = new Profile(body);
  profile.save().then( (doc) => {
    res.send(doc)
  }, (e) => {
    res.status(400).send()
  })
})
















//listen port
app.listen(port, () => {
  console.log(`starting on port ${port}`);
})
