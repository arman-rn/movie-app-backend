const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// create schema
const movieSchema = new Schema({
  id: {
    type: Number,
    required: true,
  },
  adult: {
    type: Boolean,
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
  original_title: {
    type: String,
    required: true,
  },
  popularity: {
    type: Number,
  },
  title: {
    type: String,
    required: true,
  },
  overview: {
    type: String,
    required: true,
  },
  release_date: {
    type: String,
    required: true,
  },
  poster_path: {
    type: String,
  },
  backdrop_path: {
    type: String,
  },
  video: {
    type: Boolean,
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

module.exports = mongoose.model('Movie', movieSchema);
