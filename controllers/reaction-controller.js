// Import
const { User, Thought, Reaction } = require('../models')


module.exports = {

    // ALL REACTIONS + INCLUDE FRIENDS
    async allReactions(req, res) {
        try {
            const reactions = await Reaction.find();
            res.status(200).json(reactions)
        } catch (err) {
            res.status(500).json({ message: 'Error on allThoughts', err })
        }
    },

    // SINGLE REACTION
    async singleReaction(req, res) {
        try {
            const reaction = await Reaction.findOne(
                { id_: req.params.reactionId },
            )
            if (!reaction) {
                return res.status(404).json('Reaction not found')
            }
            res.status(200).json(reaction)
        } catch (err) {
            res.status(500).json({ message: 'Error on singleReaction', err })
        }
    },

}