
const router = require('express').Router();
const { Thought, Reaction } = require('../../models')

// Controller
const {
    allThoughts,
    createThought,
    singleThought,
    updateThought,
    delThought,
    addReaction,
    delReaction,
    singleReaction,
} = require('../../controllers/thought-controller');


// /api/thoughts
// GET ALL THOUGHTS, CREATE THOUGHT
router.route('/')
    .get(allThoughts)
    .post(createThought);

// /api/thoughts/:id
// GET SINGLE THOUGHT, DEL THOUGHT, UPD THOUGHT
router.route('/:id')
    .get(singleThought)
    .delete(delThought)
    .put(updateThought)
    .put()

// /api/:id/reactions
// ADD REACTION
router.route('/:id/reactions')
    .post(addReaction)

// /api//:id/reactions/:reactionId
// GET SINGLE REACTION, DEL REACTION
router.route('/:id/reactions/:reactionId')
    .get(singleReaction)
    .delete(delReaction)

module.exports = router;
