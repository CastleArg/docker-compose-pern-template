const express = require("express");
const router = express.Router();
const messageRepository = require("../data-access/messageRepository");
const db = require('../db');

router.get("/", async (req, res) => {
    try {
        const msgs = await messageRepository.getMessages();
        res.json(msgs);
    } catch (err) {
        console.log(err)
    }
});

module.exports = router;