"use strict";

const {
  db,
  models: { User, Vinyl, Order, VinylOrder },
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
    // User.create({ username: "cody", password: "123" }),
    // User.create({ username: "murphy", password: "123" }),
    User.create({
      username: "cody",
      email: "cody123@gmail.com",
      password: "123",
      firstName: "Cody",
      lastName: "Chan",
      isAdmin: false,
    }),
    User.create({
      username: "murphy",
      email: "murphy123@gmail.com",
      password: "123",
      firstName: "Murphy",
      lastName: "Sod",
      isAdmin: false,
    }),
    User.create({
      username: "paul",
      email: "paul123@gmail.com",
      password: "123",
      firstName: "paul",
      lastName: "doe",
      isAdmin: true,
    }),
    User.create({
      username: "ida",
      email: "ida123@gmail.com",
      password: "123",
      firstName: "ida",
      lastName: "doe",
      isAdmin: true,
    }),
    User.create({
      username: "david",
      email: "david123@gmail.com",
      password: "123",
      firstName: "david",
      lastName: "doe",
      isAdmin: true,
    }),
    User.create({
      username: "bob",
      password: "123",
      firstName: "Bob",
      lastName: "ross",
      email: "bob123@gmail.com",
      isAdmin: false,
    }),
  ]);

  // VinylOrder.create({
  // await VinylOrder[0].setVinyl(vinyls[0])

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
  // Creating Orders
  const orders = await Promise.all([
    Order.create({
      purchaseDate: 10 - 27 - 2000,
      status: "fulfilled",
    }),
    Order.create({
      purchaseDate: 10 - 27 - 2000,
      status: "fulfilled",
    }),
    Order.create({
      purchaseDate: 10 - 27 - 2000,
      status: "unfulfilled",
    }),
    Order.create({
      purchaseDate: 10 - 27 - 2000,
      status: "fulfilled",
    }),
    Order.create({
      purchaseDate: 12 - 27 - 2000,
      status: "unfulfilled",
    }),
    Order.create({
      purchaseDate: 11 - 27 - 2000,
      status: "fulfilled",
    }),
    Order.create({
      purchaseDate: 10 - 29 - 2000,
      status: "unfulfilled",
    }),
    Order.create({
      purchaseDate: 10 - 28 - 2000,
      status: "unfulfilled",
    }),
    Order.create({
      purchaseDate: 10 - 27 - 2000,
      status: "unfulfilled",
    }),
  ]);
  // Creating Vinyl Orders
  const vinylOrders = await Promise.all([
    VinylOrder.create({
      quantity: 5,
      VinylId: 2,
      orderId: 1,
    }),
    VinylOrder.create({
      quantity: 3,
      VinylId: 5,
      orderId: 6,
    }),
    VinylOrder.create({
      quantity: 2,
      VinylId: 4,
      orderId: 8,
    }),
    VinylOrder.create({
      quantity: 8,
      VinylId: 4,
      orderId: 3,
    }),
    VinylOrder.create({
      quantity: 9,
      VinylId: 3,
      orderId: 7,
    }),
    VinylOrder.create({
      quantity: 2,
      VinylId: 4,
      orderId: 2,
    }),
    VinylOrder.create({
      quantity: 4,
      VinylId: 2,
      orderId: 5,
    }),
    VinylOrder.create({
      quantity: 3,
      VinylId: 9,
      orderId: 8,
    }),
    VinylOrder.create({
      quantity: 2,
      VinylId: 7,
      orderId: 5,
    }),
    VinylOrder.create({
      quantity: 2,
      VinylId: 10,
      orderId: 1,
    }),
  ]);
  await orders[0].setUser(users[1].id);
  await orders[1].setUser(users[0].id);
  await orders[2].setUser(users[3].id);
  await orders[3].setUser(users[4].id);
  await orders[4].setUser(users[5].id);
  await orders[5].setUser(users[5].id);
  await orders[6].setUser(users[2].id);
  await orders[7].setUser(users[3].id);
  await orders[8].setUser(users[1].id);

  console.log(`seeded ${users.length} users`);
  console.log(`seeded successfully`);
  return {
    users,
    vinyls,
    orders,
    vinylOrders,
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
