const mongoose = require('mongoose');

const PostSchema = mongoose.Schema({
    imageUrl: {
        type: String,
        required: true,
    },
    autor: {
        type: String,
        required: true,
    },
    title: {
        type: String,
        required: true,
    }
})

module.exports = mongoose.model('Posts', PostSchema)