

const mongoose = require("mongoose");

const { Schema } = mongoose;

const jobApplicationSchema = new Schema({
  fullName: {
    type: String,
    required: [true, "Full name is required"],
    trim: true,
    minLength: [3, "Name must be at least 3 characters"],
    maxLength: [100, "Name must be under 100 characters"]
  },
  email: {
    type: String,
    required: [true, "Email is required"],
    trim: true,
    lowercase: true,
    match: [/.+\@.+\..+/, "Please enter a valid email address"]
  },
  phone: {
    type: String,
    required: [true, "Phone number is required"],
    trim: true,
    match: [/^\+?[0-9]{7,15}$/, "Please enter a valid phone number"]
  },
  
  resumeUrl: {
    type: String,
    
  },
  jobId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Listing",
    required: [true, "Job ID reference is required"]
  }
}, { timestamps: true });

const JobApplication = mongoose.model("JobApplication", jobApplicationSchema);

module.exports = JobApplication;

