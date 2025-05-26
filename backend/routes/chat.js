const express = require('express');
const router = express.Router();
const { sendChat, getHistory } = require('../controllers/chatController');
const protect = require('../middleware/authMiddleware');

router.post('/send', protect, sendChat);
router.get('/history', protect, getHistory);

module.exports = router;
