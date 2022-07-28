// Import
const User = require('../models/User');


module.exports = {

    // ALL USERS + INCLUDE FRIENDS
    async allUsers(req, res) {
        try {
            const users = await User.find();
            res.status(200).json(users);
        } catch (err) {
            res.status(500).json({ message: 'Error on allUsers', err });
        }
    },

    // CREATE USER
    async createUser(req, res) {
        try {
            const newUser = await User.create(req.body)
            res.status(200).json(newUser)
        } catch (err) {
            res.status(500).json({ message: 'Error on newUser', err })
        }
    },

    // SINGLE USER
    async singleUser(req, res) {
        try {
            const user = await User.findOne(
                { _id: req.params.id }
            )
            if (!user) {
                return res.status(404).json({ message: 'User does not exist' })
            }
            res.status(200).json(user)
        } catch (err) {
            res.status(500).json({ message: 'Error on singleUser', err })
        }
    },

    // UPDATE USER
    async updateUser(req, res) {
        try {
            const updatedUser = await User.findOneAndUpdate(
                { _id: req.params.id },
                { $set: req.body },
                { new: true }
            )
            if (!updatedUser) {
                return res.status(404).json(`Can't find User`)
            }
            res.status(200).json(updatedUser)
        } catch (err) {
            res.status(500).json({ message: 'Error on updateUser', err })
        }
    },

    // DELETE UESR
    async delUser(req, res) {
        try {
            const deleteUser = await User.findOneAndDelete(
                { _id: req.params.id }
            )
            if (!deleteUser) {
                return res.status(404).json(`Can't find User`)
            }
            res.status(200).json(deleteUser)
        } catch (err) {
            res.status(500).json({ message: 'Error on delUser', err })
        }
    },

    // ADD USER FRIEND
    async addFriend(req, res) {
        try {
            // FIND USER
            const updatedUser = await User.findByIdAndUpdate(
                { _id: req.params.id },
                { $push: { friends: req.params.friendId } },
            )
            if (!updatedUser) {
                return res.status(404).json(`Can't find User`)
            }
            // FIND FRIEND
            const updatedFriend = await User.findByIdAndUpdate(
                { _id: req.params.friendId },
                { $push: { friends: req.params.id } },
            )
            if (!updatedFriend) {
                return res.status(404).json(`Can't find Friend`)
            }
            res.status(200).json('Friend Added')
        } catch (err) {
            res.status(500).json({ message: 'Error on addFriend', err })
        }
    },

    // DELETE USER FRIEND
    async delFriend(req, res) {
        try {
            // FIND USER
            const updatedUser = await User.findByIdAndUpdate(
                { _id: req.params.id },
                { $pull: { friends: req.params.friendId } },
            )
            if (!updatedUser) {
                return res.status(404).json(`Can't find User`)
            }
            // FIND FRIEND
            const updatedFriend = await User.findByIdAndUpdate(
                req.params.friendId,
                { $pull: { friends: req.params.id } },
            )
            // GETS BSON ERROR IF STRING USED IN ID
            // NEED TO DEBUG LATER
            if (!updatedFriend || !updatedUser) {
                return res.status(404).json(`Can't find Friend`)
            }
            res.status(200).json('Friend Deleted')
        } catch (err) {
            res.status(500).json({ message: 'Error ond delFriend', err })
        }
    },



}
