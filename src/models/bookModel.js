const mongoose = require("mongoose");
const ObjectId = mongoose.Schema.Types.ObjectId;


const bookModel = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        unique: true,
        
    },
    excerpt: {
        type :String,
        required: true
    },
    userId: {
        type: ObjectId,
        required: true,
        ref: "usermbook"
    }, //refs to user model},
    ISBN: {
        type: String,
        required: true,
        unique: true
    },
    category: {
        type: String,
        required: true
    },
    subcategory: {
        type: String,
        required: true
    },
    reviews: {
        tyep: Number,
        default: 0,
       // comment: []
    }, // comment: Holds number of reviews of this book},
    deletedAt: {
        type: Date,
        default: ""
    }, //when the document is deleted},
    isDeleted: {
        type: Boolean,
        default: false
    },
    releasedAt: {
        type: Date,
      required: true,

    }, //format("YYYY-MM-DD")},
},{timestamps:true});

module.exports = mongoose.model("bookmdata", bookModel);