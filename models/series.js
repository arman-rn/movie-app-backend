const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// create schema
const seriesSchema = new Schema({
  id: {
    type: Number,
    required: true,
  },
  genres: [
    {
      id: Number,
      name: String,
    },
  ],
  original_language: {
    type: String,
  },
  original_name: {
    type: String,
    required: true,
  },
  popularity: {
    type: Number,
  },
  name: {
    type: String,
    required: true,
  },
  overview: {
    type: String,
    required: true,
  },
  origin_country: {
    type: String,
    required: true,
  },
  poster_path: {
    type: String,
  },
  backdrop_path: {
    type: String,
  },
  first_air_date: {
    type: String,
  },
  vote_average: {
    type: Number,
  },
  vote_count: {
    type: Number,
  },
  cast: [
    {
      adult: { type: Boolean },
      gender: { type: Number },
      id: { type: Number },
      known_for_department: { type: String },
      name: { type: String },
      original_name: { type: String },
      popularity: { type: Number },
      profile_path: { type: String },
      cast_id: { type: Number },
      character: { type: String },
      credit_id: { type: String },
      order: { type: Number },
    },
  ],
});

module.exports = mongoose.model('Series', seriesSchema);
