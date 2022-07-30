// IMPORT
const connection = require("../config/connection");
const { User, Thought } = require("../models");

// USER SEED DATA
const userSeed = [
    {
        username: 'userOne',
        email: 'userOne@gmail.com',
    },
    {
        username: 'userTwo',
        email: 'userTwo@gmail.com',
    },
    {
        username: 'userThree',
        email: 'userThree@gmail.com',
    },
    {
        username: 'userFour',
        email: 'userFour@gmail.com',
    },
]


// SEED DATABASE
connection.once("open", async () => {

    // DEL EXISTING SEED
    await User.deleteMany({});
    await Thought.deleteMany({});

    // INSERT TO DB
    await User.collection.insertMany(userSeed);
    console.log("Users successfully seeded!");

    console.info(' --- Seeding complete! ---');
    console.table(userSeed)
    process.exit(0);
});



