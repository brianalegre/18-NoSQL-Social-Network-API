
const router = require('express').Router();
const { Thought, Reaction } = require('../../models')

// Controller
const {
    allThoughts,
    createThought,
    singleThought,
    updateThought,
    delThought,
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


//TODO: ROUTE TO ADD REACTION TO A THOUGHT
router.post('/:thoughtId/reactions', (req, res) => {

});

//TODO: ROUTE TO DELETE A REACTION ON A THOUGHT
router.delete('/:thoughtId/reactions/:reactionId', (req, res) => {

})

module.exports = router;
