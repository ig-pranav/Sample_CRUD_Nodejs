var mongoose = require('mongoose');

var userSchema = new mongoose.Schema({
    name : {type : 'string',required: true},
    phoneNumber : {type : 'string',required: true}
})
module.exports = mongoose.model('User',userSchema);