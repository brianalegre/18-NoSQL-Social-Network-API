// Import
const Thought = require('../models/Thought');

module.exports = {

    // ALL THOUGHTS + INCLUDE FRIENDS
    async allThoughts(req, res) {
        try {
            const thoughts = await Thought.find();
            res.status(200).json(thoughts)
        } catch (err) {
            res.status(500).json({ message: 'Error on allThoughts', err })
        }
    },

    // CREATE THOUGHT
    async createThought(req, res) {
        try {
            const newThought = await Thought.create(req.body)
            await User.findOneAndUpdate(
                { username: newThought.username },
                { $push: { thoughts: newThought._id } }
            )
            res.status(200).json(newThought)
        } catch (err) {
            res.status(500).json({ message: 'Error on createThought', err })
        }
    },

    // SINGLE THOUGHT
    async singleThought(req, res) {
        try {
            const thought = await Thought.findOne(
                { _id: req.params.id }
            )
            if (!thought) {
                return res.status(404).json('Thought not found')
            }
            res.status(200).json(thought)
        } catch (err) {
            res.status(500).json({ message: 'Error on singleThought', err })
        }
    },

    // UPDATE THOUGHT
    async updateThought(req, res) {
        try {

            const updatedThought = await Thought.findOneAndUpdate(
                { _id: req.params.friendId },
                { $set: req.body },
            )
            if (!updatedThought) {
                return res.status(404).json('Thought not found')
            }
            res.status(200).json(updatedThought)
        } catch (err) {
            res.status(500).json({ message: 'Error on updateThought', err })
        }
    },

    // DELETE THOUGHT
    async delThought(req, res) {
        try {
            const deleteThought = await Thought.findOneAndUpdate(
                { _id: req.params.id }
            )
            if (!deleteThought) {
                return res.status(404).json('Thought not found')
            }
            res.status(200).json(deleteThought)
        } catch (err) {
            res.status(500).json({ message: 'Error on delThought', err })
        }
    },

    // GET REACTION

    // CREATE REACTION

    // DELETE REACTION

}