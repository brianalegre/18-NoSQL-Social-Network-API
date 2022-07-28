// Import
const { User, Thought, Reaction } = require('../models')


module.exports = {

    // ALL THOUGHTS + INCLUDE FRIENDS
    async allReactions(req, res) {
        try {
            const reactions = await Reaction.find();
            res.status(200).json(reactions)
        } catch (err) {
            res.status(500).json({ message: 'Error on allThoughts', err })
        }
    },

}