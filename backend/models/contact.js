



const mongoose = require("mongoose");

const { Schema } = mongoose;

const contact = new Schema({
 
  email: {
    type: String,
    required: [true, "Email is required"],
    trim: true,
    lowercase: true,
    match: [/.+\@.+\..+/, "Please enter a valid email address"]
  },
  
  
  message: {
    type: String,
    
  }
}, { timestamps: true });

const Contact= mongoose.model("contact", contact);

module.exports = Contact;

