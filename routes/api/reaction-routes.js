// USED FOR TESTING PURPOSES ONLY

// Import
const router = require('express').Router();
const { User, Thought, Reaction } = require('../../models')

// Controller
const {
    allReactions,
    singleReaction
} = require('../../controllers/reaction-controller');

// /api/reactions
// GET ALL REACTIONS
router.route('/')
    .get(allReactions)


// /api/reaction/:id
// GET SINGLE REACTION
router.route('/:reactionId')
    .get(singleReaction)

module.exports = router;
