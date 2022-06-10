const  mongoose =  require('mongoose');
const { Schema } = mongoose;

const schema = new Schema({
    message: { type: String, required: true},
})

const Message = mongoose.model('Message', schema, 'messages');
module.exports = Message