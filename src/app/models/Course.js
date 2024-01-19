const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Course = new Schema({
    name: String,
    logo: String,
    slug: String,
});

module.exports = mongoose.model('Course', Course);