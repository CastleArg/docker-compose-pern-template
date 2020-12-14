const db = require("../db");
module.exports = {
    getMessages: async () => {
        const result = await db.query("SELECT id, message from message");
        return result.rows;
    }
}