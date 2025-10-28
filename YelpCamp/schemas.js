// =============== Import Joi Validation Library ===============
// Joi is a powerful schema description language and data validator for JavaScript.
// We use Joi to validate the data sent from forms before saving it to the database.

const Joi = require("joi");
const review = require("./models/review");

// =============== Define Campground Validation Schema ===============
// This schema ensures that the data for creating or updating a campground
// has all the required fields with correct data types and constraints.
// It validates that:
// - title is a required string
// - price is a required number and must be at least 0 (no negative prices)
// - image is a required string (usually a URL)
// - location is a required string
// - description is a required string

module.exports.campgroundSchema = Joi.object({
  campground: Joi.object({
    title: Joi.string().required(),
    price: Joi.number().required().min(0),
    // image: Joi.string().required(),
    location: Joi.string().required(),
    description: Joi.string().required(),
  }).required(),
  deleteImages:Joi.array()
});

// =============== Define Review Validation Schema ===============
// This schema ensures that the review data submitted is valid.
// It validates that:
// - rating is a required number
// - body (review text) is a required string

module.exports.reviewSchema = Joi.object({
  review: Joi.object({
    rating: Joi.number().required(),
    body: Joi.string().required(),
  }).required(),
});