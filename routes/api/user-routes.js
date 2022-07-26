
const router = require('express').Router();
const { User } = require("../../models")

const {
    allUsers,
    createUser,
    singleUser,
    updateUser,
    delUser,
    addFriend,
    delFriend
} = require('../../controllers/user-controller');

// /api/user
// GET ALL USERS, CREATE USER
router.route('/')
    .get(allUsers)
    .post(createUser);

// /api/user/:id
// GET SINGLE USER, DEL USER, UPD USER
router.route('/:id')
    .get(singleUser)
    .delete(delUser)
    .put(updateUser)

// /api/user/:id/friend/:friendId
// ADD FRIEND, DEL FRIEND
router.route('/:studentId/assignments/:assignmentId')
    .post(addFriend)
    .delete(delFriend);

module.exports = router;
