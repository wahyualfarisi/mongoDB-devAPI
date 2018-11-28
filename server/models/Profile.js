const validator = require('validator');
const mongoose  = require('mongoose');

var ProfileSchema = new mongoose.Schema({
  email: {
    type: String,
    minlength: 1,
    trim: true,
    required: true,
    unique: true,
    validate: {
      validator: (value) => {
        return validator.isEmail(value)
      },
      message: '{VALUE} is not valid email '
    }
  },
  firstName: {
    type: String,
    required: true,
    trim: true
  },
  lastName: {
    type: String,
    required: true,
    trim: true
  },
  age: {
    type: Number,
    required: true
  },
  birth: {
    type: Number,
    required: true
  },
  address: {
    type: String,
    required: true
  }
});


var Profile = mongoose.model('Profile', ProfileSchema);
module.exports = { Profile }
