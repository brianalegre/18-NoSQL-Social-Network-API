// USED FOR TESTING PURPOSES ONLY

// Import
const router = require('express').Router();
const { User, Thought, Reaction } = require('../../models')

// Controller
const {
    allReactions,
} = require('../../controllers/reaction-controller');

// /api/reactions
// GET ALL REACTIONS
router.route('/')
    .get(allReactions)

module.exports = router;
