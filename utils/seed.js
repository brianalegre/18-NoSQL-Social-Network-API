// Import
const connection = require('../config/connection');
const { User, Thought, Reaction } = require('../models');
const userSeed = require('./data');

connection.on('error', (err) => err);

connection.once('open', async () => {
    console.log('connected');

    // Drop existing Users
    await User.deleteMany({});
    await Thought.deleteMany({});
    await Reaction.deleteMany({});

    // Add Users to the collection and await the results
    await User.collection.insertMany(userSeed);

    // Log out the seed data to indicate what should appear in the database
    console.table(userSeed);
    console.info('Seeding Users Complete! 🌱');
    process.exit(0);
});
