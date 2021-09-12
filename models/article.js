const mongoose = require("mongoose");
const articleSchema = new mongoose.Schema({
    title: String,
    image: String,
    description: String,
    theme: String,
    views: {type: Number, default: 0}, 
    createdAt: { type: Date, default: Date.now },
    comments: [
        {
           type: mongoose.Schema.Types.ObjectId,
           ref: "comment"
        }
     ]
 });

module.exports = mongoose.model("article", articleSchema);