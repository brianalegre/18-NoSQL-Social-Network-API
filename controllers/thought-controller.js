// Import
const { User, Thought, Reaction } = require('../models')

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
                { _id: req.params.thoughtId }
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
                { _id: req.params.thoughtId },
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
            const deleteThought = await Thought.findOneAndDelete(
                { _id: req.params.thoughtId }
            )
            if (!deleteThought) {
                return res.status(404).json('Thought not found')
            }
            res.status(200).json(deleteThought)
        } catch (err) {
            res.status(500).json({ message: 'Error on delThought', err })
        }
    },

    // ADD REACTION
    async addReaction(req, res) {
        try {
            const newReaction = await Thought.findOneAndUpdate(
                { _id: req.params.thoughtId },
                { $push: { reactions: req.body } },
                { new: true },
            )
            if (!newReaction) {
                return res.status(404).json('Thought not found')
            }
            res.status(200).json(newReaction)
        } catch (err) {
            res.status(500).json({ message: 'Error on addReaction', err })
        }
    },

    // SINGLE REACTION
    async singleReaction(req, res) {
        try {
            const reaction = await Reaction.findOne(
                { _id: req.params.reactionId },
            )
            if (!reaction) {
                return res.status(404).json('Reaction not found')
            }
            res.status(200).json(reaction)
        } catch (err) {
            res.status(500).json({ message: 'Error on singleReaction', err })
        }
    },

    // DELETE REACTION
    async delReaction(req, res) {
        try {
            const deleteReaction = await Thought.findOneAndUpdate(
                { _id: req.params.thoughtId },
                { $pull: { reactions: { _id: req.params.reactionId } } },
                { new: true }
            )
            if (!deleteReaction) {
                return res.status(404).json('Reaction not found')
            }
            res.status(200).json('Reaction Deleted')
        } catch (err) {
            res.status(500).json({ message: 'Error on delReaction', err })
        }
    },

}