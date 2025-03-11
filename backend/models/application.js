

import mongoose from "mongoose";

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
  coverLetter: {
    type: String,
    required: [true, "Cover letter is required"],
    minLength: [50, "Cover letter should be at least 50 characters"],
    maxLength: [2000, "Cover letter should not exceed 2000 characters"]
  },
  resumeUrl: {
    type: String,
    required: [true, "Resume URL is required"],
   
  },
  jobId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Listing", // reference to the job listing
    required: [true, "Job ID reference is required"]
  }
  
}, { timestamps: true });

const JobApplication = mongoose.model("JobApplication", jobApplicationSchema);

export default JobApplication;
