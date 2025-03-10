
import mongoose from "mongoose";

const { Schema } = mongoose;

const listingSchema = new Schema({
  title: {
    type: String,
    required: [true, "Title is required"],
    trim: true,
    minLength: [3, "Title must be at least 3 characters long"],
    maxLength: [100, "Title cannot exceed 100 characters"]
  },
  description: {
    type: String,
    required: [true, "Description is required"],
    trim: true,
    minLength: [10, "Description must be at least 10 characters long"],
    maxLength: [1000, "Description cannot exceed 1000 characters"]
  },
  salary: {
    type: Number,
    required: [true, "Salary is required"],
    min: [0, "Salary must be a positive number"]
  },
  location: {
    type: String,
    required: [true, "Location is required"],
    trim: true,
    minLength: [2, "Location must be at least 2 characters long"],
    maxLength: [100, "Location cannot exceed 100 characters"]
  }
}, { timestamps: true });

const Listing = mongoose.model("Listing", listingSchema);

export default Listing;
