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
    Vinyl.create({
      vinylName: "The Miseducation of Lauryn Hill",
      year: "1998",
      quantity: 3,
      price: 16.99,
      artist: "Lauryn Hill",
      description: "coolest record",
      genre: "R&B",
      imageUrl:
        "https://upload.wikimedia.org/wikipedia/en/5/55/LaurynHillTheMiseducationofLaurynHillalbumcover.jpg",
    }),
    Vinyl.create({
      vinylName: "Innervisions",
      year: "1973",
      quantity: 3,
      price: 16.99,
      artist: "Stevie Wonder",
      description: "coolest record",
      genre: "Soul",
      imageUrl:
        "https://www.rollingstone.com/wp-content/uploads/2020/09/R1344-034-Stevie-Wonder-Innervisions.jpg",
    }),
    Vinyl.create({
      vinylName: "Kind of Blue",
      year: "1959",
      quantity: 3,
      price: 16.99,
      artist: "Miles Davis",
      description: "coolest record",
      genre: "Jazz",
      imageUrl:
        "https://www.rollingstone.com/wp-content/uploads/2020/09/R1344-031-Miles-Davis-KIND-OF-BLUE.jpg",
    }),
    Vinyl.create({
      vinylName: "Are You Experienced",
      year: "1967",
      quantity: 3,
      price: 16.99,
      artist: "Jimi Hendrix",
      description: "coolest record",
      genre: "Blues",
      imageUrl:
        "https://www.rollingstone.com/wp-content/uploads/2020/09/R1344-030-Jimi-Hendrix-Exp-ARE-YOU-EXPERIENCED.jpg",
    }),
    Vinyl.create({
      vinylName: "The Chronic",
      year: "1992",
      quantity: 3,
      price: 16.99,
      artist: "Dr. Dre",
      description: "coolest record",
      genre: "Hip-Hop",
      imageUrl:
        "https://www.rollingstone.com/wp-content/uploads/2020/09/R1344-037-dr-dre-the-chronic.jpg",
    }),
    Vinyl.create({
      vinylName: "Aquemini",
      year: "1998",
      quantity: 3,
      price: 16.99,
      artist: "OutKast",
      description: "coolest record",
      genre: "Hip-Hop",
      imageUrl:
        "https://www.rollingstone.com/wp-content/uploads/2020/09/R1344-049-Outkast-Aquemini.jpg",
    }),
    Vinyl.create({
      vinylName: "First Take",
      year: "1969",
      quantity: 3,
      price: 16.99,
      artist: "Roberta Flack",
      description: "coolest record",
      genre: "pop",
      imageUrl:
        "https://www.rollingstone.com/wp-content/uploads/2020/09/R1344-451-Roberta-Flack-First-Take.jpg",
    }),
    Vinyl.create({
      vinylName: "Man on the Moon: The End of the Day",
      year: "2009",
      quantity: 3,
      price: 16.99,
      artist: "Kid Cudi",
      description: "coolest record",
      genre: "Hip-Hop",
      imageUrl:
        "https://www.rollingstone.com/wp-content/uploads/2020/09/R1344-459-Kid-Cudi-Man-of-the-Moon.jpg",
    }),
    Vinyl.create({
      vinylName: "Channel Orange",
      year: "2012",
      quantity: 3,
      price: 16.99,
      artist: "Frank Ocean",
      description: "coolest record",
      genre: "pop",
      imageUrl:
        "https://www.rollingstone.com/wp-content/uploads/2020/09/R1344-148-Frank-Ocean-Channel-Orange.jpg",
    }),
    Vinyl.create({
      vinylName: "Definitely Maybe",
      year: "1994",
      quantity: 3,
      price: 16.99,
      artist: "Oasis",
      description: "coolest record",
      genre: "pop",
      imageUrl:
        "https://www.rollingstone.com/wp-content/uploads/2020/09/R1344-217-Oasis-Definitely-Maybe.jpg",
    }),
    Vinyl.create({
      vinylName: "The Velvet Underground",
      year: "1969",
      quantity: 3,
      price: 16.99,
      artist: "The Velvet Underground",
      description: "coolest record",
      genre: "Rock",
      imageUrl:
        "https://www.rollingstone.com/wp-content/uploads/2020/09/R1344-143-The-Velvet-Underground-The-Velvet-Underground.jpg",
    }),
    Vinyl.create({
      vinylName: "Sticky Fingers",
      year: "1971",
      quantity: 3,
      price: 16.99,
      artist: "The Rolling Stones",
      description: "coolest record",
      genre: "pop",
      imageUrl:
        "https://www.rollingstone.com/wp-content/uploads/2020/09/R1344-104-The-Rolling-Stones-Sticky-Fingers.jpg",
    }),
    Vinyl.create({
      vinylName: "Forever Changes",
      year: "1967",
      quantity: 3,
      price: 16.99,
      artist: "Love",
      description: "coolest record",
      genre: "pop",
      imageUrl:
        "https://www.rollingstone.com/wp-content/uploads/2020/09/R1344-139-Love-Forever-Changes.jpg?w=1000",
    }),
    Vinyl.create({
      vinylName: "American Beauty",
      year: "1970",
      quantity: 3,
      price: 16.99,
      artist: "Grateful Dead",
      description: "coolest record",
      genre: "Rock",
      imageUrl:
        "https://www.rollingstone.com/wp-content/uploads/2020/09/R1344-215-Grateful-Dead-American-Beauty.jpg",
    }),
    Vinyl.create({
      vinylName: "Wild is the Wind",
      year: "1966",
      quantity: 3,
      price: 16.99,
      artist: "Nina Simone",
      description: "coolest record",
      genre: "pop",
      imageUrl:
        "https://www.rollingstone.com/wp-content/uploads/2020/09/R1344-212-Nina-Simone-Wild-is-the-Wind.jpg",
    }),
    Vinyl.create({
      vinylName: "Eagles",
      year: "1972",
      quantity: 3,
      price: 16.99,
      artist: "Eagles",
      description: "coolest record",
      genre: "Rock",
      imageUrl:
        "https://www.rollingstone.com/wp-content/uploads/2020/09/R1344-207-Eagles-the-Eagles.jpg",
    }),
    Vinyl.create({
      vinylName: "Live at the Regal",
      year: "1965",
      quantity: 3,
      price: 16.99,
      artist: "B.B. King",
      description: "coolest record",
      genre: "Blue",
      imageUrl:
        "https://www.rollingstone.com/wp-content/uploads/2020/09/R1344-299-BB-King-Live-at-the-Regal.jpg",
    }),
    Vinyl.create({
      vinylName: "Random Access Memories",
      year: "2013",
      quantity: 3,
      price: 16.99,
      artist: "Daft Punk",
      description: "coolest record",
      genre: "Disco",
      imageUrl:
        "https://www.rollingstone.com/wp-content/uploads/2020/09/R1344-295-Daft-Punk-Random-Access-Memories.jpg",
    }),
    Vinyl.create({
      vinylName: "Curtis",
      year: "1970",
      quantity: 3,
      price: 16.99,
      artist: "Curtis Mayfield",
      description: "coolest record",
      genre: "R&B",
      imageUrl:
        "https://www.rollingstone.com/wp-content/uploads/2020/09/R1344-275-Curtis-Mayfield-Curtis.jpg",
    }),
    Vinyl.create({
      vinylName: "Head Hunters",
      year: "1973",
      quantity: 3,
      price: 16.99,
      artist: "Herbie Hancock",
      description: "coolest record",
      genre: "Funk",
      imageUrl:
        "https://www.rollingstone.com/wp-content/uploads/2020/09/R1344-254-Herbie-Hancock-Head-Hunters.jpg",
    }),
    Vinyl.create({
      vinylName: "AM",
      year: "2013",
      quantity: 3,
      price: 16.99,
      artist: "Arctic Monkeys",
      description: "coolest record",
      genre: "Rock",
      imageUrl:
        "https://www.rollingstone.com/wp-content/uploads/2020/09/R1344-346-Arctic-Monkeys-AM.jpg",
    }),
    Vinyl.create({
      vinylName: "Funky Kingston",
      year: "1973",
      quantity: 3,
      price: 16.99,
      artist: "Toots and the Maytals",
      description: "coolest record",
      genre: "Roots, Reggae",
      imageUrl:
        "https://www.rollingstone.com/wp-content/uploads/2020/09/R1344-344-Toots-and-the-Maytals-Funky-Kingston.jpg?w=1000",
    }),
    Vinyl.create({
      vinylName: "Donuts",
      year: "2006",
      quantity: 3,
      price: 16.99,
      artist: "J Dilla",
      description: "coolest record",
      genre: "Hip-Hop",
      imageUrl:
        "https://www.rollingstone.com/wp-content/uploads/2020/09/R1344-386-jdilla-donuts.jpg",
    }),
    Vinyl.create({
      vinylName: "Illmatic",
      year: "1994",
      quantity: 3,
      price: 16.99,
      artist: "Nas",
      description: "coolest record",
      genre: "Hip-Hop",
      imageUrl:
        "https://www.rollingstone.com/wp-content/uploads/2020/09/R1344-044-Nas-Illmatic.jpg",
    }),
    Vinyl.create({
      vinylName: "Back to Black",
      year: "2006",
      quantity: 3,
      price: 16.99,
      artist: "Amy Winehouse,",
      description: "coolest record",
      genre: "Soul",
      imageUrl:
        "https://www.rollingstone.com/wp-content/uploads/2020/09/R1344-033-Amy-Winehouse-Back-to-Black.jpg",
    }),
    Vinyl.create({
      vinylName: "Nevermind",
      year: "1991",
      quantity: 3,
      price: 16.99,
      artist: "Nirvana",
      description: "coolest record",
      genre: "Grunge",
      imageUrl:
        "https://www.rollingstone.com/wp-content/uploads/2020/09/R1344-006-Nirvana-NEVERMIND-HR.jpg",
    }),
    Vinyl.create({
      vinylName: "Ready to Die",
      year: "1994",
      quantity: 3,
      price: 16.99,
      artist: "The Notorious B.I.G.",
      description: "coolest record",
      genre: "Hip-Hop",
      imageUrl:
        "https://www.rollingstone.com/wp-content/uploads/2020/09/R1344-022-notorious-BIG-ready-to-die.jpg",
    }),
    Vinyl.create({
      vinylName: "Sign O’ the Times",
      year: "2006",
      quantity: 3,
      price: 16.99,
      artist: "Prince",
      description: "coolest record",
      genre: "Rock",
      imageUrl:
        "https://www.rollingstone.com/wp-content/uploads/2020/09/R1344-045-Prince-Sign-O-the-Times.jpg",
    }),
    Vinyl.create({
      vinylName: "Superfly",
      year: "1972",
      quantity: 3,
      price: 16.99,
      artist: "Curtis Mayfield",
      description: "coolest record",
      genre: "Soul",
      imageUrl:
        "https://www.rollingstone.com/wp-content/uploads/2020/09/R1344-076-Curtis-Mayfield-Superfly.jpg",
    }),
    Vinyl.create({
      vinylName: "Live at the Apollo",
      year: "1963",
      quantity: 3,
      price: 16.99,
      artist: "James Brown",
      description: "coolest record",
      genre: "Soul",
      imageUrl:
        "https://www.rollingstone.com/wp-content/uploads/2020/09/R1344-065-James-Brown-Live-at-the-Apollo.jpg",
    }),
    Vinyl.create({
      vinylName: "Station to Station",
      year: "1976",
      quantity: 3,
      price: 16.99,
      artist: "David Bowie",
      description: "coolest record",
      genre: "Rock",
      imageUrl:
        "https://www.rollingstone.com/wp-content/uploads/2020/09/R1344-052-David-Bowie-Station-to-Station.jpg",
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
