
const mongoose = require('mongoose');


const connect = () => {
    // connect to mongo
    mongoose.connect(process.env.MONGODB_CONNSTRING, (err) => {
        if (err) {
            return console.error(err)
        }
        console.log('connected to Mongo!!')
    })
}


const disconnect = () => {
    mongoose.disconnect();
}

module.exports = { connect, disconnect }