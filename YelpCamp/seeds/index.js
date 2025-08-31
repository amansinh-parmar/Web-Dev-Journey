// =============== Connecting with Database ===============
const mongoose = require("mongoose");
// const cities = require("./copy_city");
const cities = require("./cities");
const { places, descriptors } = require("./seedHelpers");
const Campground = require("../models/campground");

// mongodb://server port/'database name'
mongoose.connect("mongodb://127.0.0.1:27017/yelp-camp", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// mongoose.connect("mongodb://127.0.0.1:27017/yelp-camp");

// check there is an error or not
const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", () => {
  console.log("Database Connected!!");
});

const sample = (array) => array[Math.floor(Math.random() * array.length)];

// API Key for fetch images
// const PEXELS_API_KEY =
//   "qf4WkaFrva8Ktd5ydWNa6hb9hvEAcFG9clJo8SLDVOQpZSyhObEeQqF6";

const seedDB = async () => {
  await Campground.deleteMany({});
  for (let i = 1; i < 50; i++) {
    const randomIndex = Math.floor(Math.random() * 500);
    const price = Math.floor(Math.random() * 20) + 10;
    // const image = await fetchCampingImage(); // get a fresh image for each campground
    const camp = new Campground({
      location: `${cities[randomIndex].city}, ${cities[randomIndex].state}`,
      title: `${sample(descriptors)} ${sample(places)}`,
      image: `https://picsum.photos/400?random=${Math.random()}`,
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto ex ducimus libero architecto, nulla sunt.",
      price,
    });
    await camp.save();
  }
};

seedDB().then(() => {
  mongoose.connection.close();
});
