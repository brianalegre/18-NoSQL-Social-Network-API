// IMPORT
const connection = require("../config/connection");
const { User, Thought, Reaction } = require("../models");

// USER SEED DATA
const userSeed = [
    {
        'username': 'userOne',
        'email': 'userOne@gmail.com',
    },
    {
        'username': 'userTwo',
        'email': 'userTwo@gmail.com',
    },
    {
        'username': 'userThree',
        'email': 'userThree@gmail.com',
    },
    {
        'username': 'userFour',
        'email': 'userFour@gmail.com',
    },
]

// THOUGHT SEED DATA
const thoughtSeed = [
    {
        'thoughtText': 'First Thought',
        'username': 'userOne'
    },
    {
        'thoughtText': 'Second Thought',
        'username': 'userTwo'
    },
    {
        'thoughtText': 'Third Thought',
        'username': 'userThree'
    },
    {
        'thoughtText': 'Fourth Thought',
        'username': 'userFour'
    },
]

// REACTION SEED DATA
const reactionSeed = [
    {
        'reactionBody': 'First Reaction',
        'username': 'userOne'
    },
    {
        'reactionBody': 'Second Reaction',
        'username': 'userTwo'
    },
    {
        'reactionBody': 'Third Reaction',
        'username': 'userThree'
    },
    {
        'reactionBody': 'Fourth Reaction',
        'username': 'userFour'
    },
]

// SEED DATABASE
connection.once("open", async () => {

    // DEL EXISTING SEED
    await User.deleteMany({});
    await Thought.deleteMany({});
    await Reaction.deleteMany({});

    // INSERT TO DB
    await User.collection.insertMany(userSeed);
    console.log("Users successfully seeded!");

    await Thought.collection.insertMany(thoughtSeed);
    console.log("Thoughts successfully seeded!");

    await Reaction.collection.insertMany(reactionSeed);
    console.log("Reactions successfully seeded!");

    console.info(' --- Seeding complete! ---');
    process.exit(0);
});



