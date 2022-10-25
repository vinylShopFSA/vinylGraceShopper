"use strict";

const {
  db,
  models: { User, Vinyl },
} = require("../server/db");

/**
 * seed - this function clears the database, updates tables to
 *      match the models, and populates the database.
 */
async function seed() {
  await db.sync({ force: true }); // clears db and matches models to tables
  console.log("db synced!");

  // Creating Users
  const users = await Promise.all([
    User.create({ username: "cody", password: "123" }),
    User.create({ username: "murphy", password: "123" }),
  ]);

  const vinyls = await Promise.all([
    Vinyl.create({
      vinylName: "Thriller",
      year: "1982",
      quantity: 5,
      price: 19.99,
      artist: "Michael Jackson",
      description: "this is an great album, buy it!",
      genre: "Pop",
      imageUrl:
        "https://upload.wikimedia.org/wikipedia/en/5/55/Michael_Jackson_-_Thriller.png",
    }),
    Vinyl.create({
      vinylName: "The Blueprint",
      year: "2001",
      quantity: 3,
      price: 16.99,
      artist: "Jay-Z",
      description: "coolest record",
      genre: "Hip-Hop",
      imageUrl:
        "https://upload.wikimedia.org/wikipedia/en/2/2c/The_Blueprint.png",
    }),
    Vinyl.create({
      vinylName: "What's Going On",
      year: "1971",
      quantity: 3,
      price: 16.99,
      artist: "Marvin Gaye",
      description: "coolest record",
      genre: "Soul",
      imageUrl:
        "https://upload.wikimedia.org/wikipedia/en/8/84/MarvinGayeWhat%27sGoingOnalbumcover.jpg",
    }),
    Vinyl.create({
      vinylName: "The Wall",
      year: "1979",
      quantity: 3,
      price: 16.99,
      artist: "Pink Floyd",
      description: "coolest record",
      genre: "Rock",
      imageUrl:
        "https://upload.wikimedia.org/wikipedia/en/1/13/PinkFloydWallCoverOriginalNoText.jpg",
    }),
    Vinyl.create({
      vinylName: "Legend",
      year: "1984",
      quantity: 3,
      price: 16.99,
      artist: "Bob Marley and the Wailers",
      description: "coolest record",
      genre: "Reggae",
      imageUrl:
        "https://upload.wikimedia.org/wikipedia/en/c/c2/BobMarley-Legend.jpg",
    }),
    Vinyl.create({
      vinylName: "Songs in the Key of Life",
      year: "1976",
      quantity: 3,
      price: 16.99,
      artist: "Stevie Wonder",
      description: "coolest record",
      genre: "R&B",
      imageUrl:
        "https://upload.wikimedia.org/wikipedia/en/e/e2/Songs_in_the_key_of_life.jpg",
    }),
    Vinyl.create({
      vinylName: "Purple Rain",
      year: "1984",
      quantity: 3,
      price: 16.99,
      artist: "Prince",
      description: "coolest record",
      genre: "pop",
      imageUrl:
        "https://upload.wikimedia.org/wikipedia/en/9/9c/Princepurplerain.jpg",
    }),
    Vinyl.create({
      vinylName: "To Pimp a Butterfly",
      year: "2015",
      quantity: 3,
      price: 16.99,
      artist: "Kendrick Lamar",
      description: "coolest record",
      genre: "Hip-Hop",
      imageUrl:
        "https://upload.wikimedia.org/wikipedia/en/f/f6/Kendrick_Lamar_-_To_Pimp_a_Butterfly.png",
    }),
    Vinyl.create({
      vinylName: "The Low End Theory",
      year: "1991",
      quantity: 3,
      price: 16.99,
      artist: "A Tribe Called Quest",
      description: "coolest record",
      genre: "Hip-Hop",
      imageUrl:
        "https://upload.wikimedia.org/wikipedia/en/4/42/ATribeCalledQuestTheLowEndtheory.jpg",
    }),
    Vinyl.create({
      vinylName: "Rumours",
      year: "1976",
      quantity: 3,
      price: 16.99,
      artist: "Fleetwood Mac",
      description: "coolest record",
      genre: "pop",
      imageUrl:
        "https://upload.wikimedia.org/wikipedia/en/f/fb/FMacRumours.PNG",
    }),
  ]);

  console.log(`seeded ${users.length} users`);
  console.log(`seeded successfully`);
  return {
    users: {
      cody: users[0],
      murphy: users[1],
    },
    vinyls,
  };
}

/*
 We've separated the `seed` function from the `runSeed` function.
 This way we can isolate the error handling and exit trapping.
 The `seed` function is concerned only with modifying the database.
*/
async function runSeed() {
  console.log("seeding...");
  try {
    await seed();
  } catch (err) {
    console.error(err);
    process.exitCode = 1;
  } finally {
    console.log("closing db connection");
    await db.close();
    console.log("db connection closed");
  }
}

/*
  Execute the `seed` function, IF we ran this module directly (`node seed`).
  `Async` functions always return a promise, so we can use `catch` to handle
  any errors that might occur inside of `seed`.
*/
if (module === require.main) {
  runSeed();
}

// we export the seed function for testing purposes (see `./seed.spec.js`)
module.exports = seed;
