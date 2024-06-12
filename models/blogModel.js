const { Schema, default: mongoose } = require("mongoose");

const BlogSchema = new Schema({
    title: { type: String},
    desc: { type: String },
    imagePath: { type: String },
    date: { type: Date, default: Date.now },
  });

  const Blog = mongoose.model('Blog', BlogSchema);
  module.exports = Blog