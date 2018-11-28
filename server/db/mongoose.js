const mongoose = require('mongoose');

mongoose.Promise = global.Promise;
let db = {
  localhost: 'mongodb://localhost:27017/basicApi',
  mlab: ''
}

mongoose.set('useCreateIndex', true);
mongoose.connect(process.env.PORT ? db.mlab : db.localhost, {useNewUrlParser: true} );


module.exports = {
  mongoose
}
