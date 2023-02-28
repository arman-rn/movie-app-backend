const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// create schema
const commentSchema = new Schema(
  {
    name: {
      type: String,
    },
    content: {
      type: String,
    },
    targetType: {
      type: String,
      required: true,
      enum: ['Movie', 'Series'],
    },
    targetID: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      refPath: 'targetType',
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model('Comment', commentSchema);
