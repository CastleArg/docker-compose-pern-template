const Message = require('../models/Message');
const {connect} = require('../db');
connect();
module.exports = {
    getMessages: async () => {
        try {
        const result = await Message.find();
        return result;
        } catch (e) {
            console.error(e);
        }
    }
}
