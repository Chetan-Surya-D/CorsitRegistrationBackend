const mongoose = require('mongoose');

const regSchema = mongoose.Schema({
    name: {type: String, required: true},
    usn: {type: String, required: true},
    stdEmail: {type: String, required: true},
    contact: {type: Number, required: true},
    teamName: {type: String, required: true},
    billImg: {type: String, required: true}
});

module.exports = mongoose.model("Registration", regSchema);
