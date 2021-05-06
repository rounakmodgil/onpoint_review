const mongoose = require("mongoose");
let contactSchema = new mongoose.Schema(
  {
    email: String,
    password: String,
    phone: Number,
    description: String,
  },
  { collection: "contact" }
);

var Contacts = mongoose.model("Contact", contactSchema);
module.exports = { Contacts };
