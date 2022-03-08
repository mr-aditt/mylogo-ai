var mongoose = require('mongoose');

const userSchema = new mongoose.Schema(
    {
        useremail:{type:String},
        password:{type:String},
    },
    {collection:'credential'}
)
module.exports = mongoose.model('User', userSchema)