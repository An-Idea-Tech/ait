import mongoose from "mongoose";

const testimonialSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    designation: {
      type: String,
      trim: true,
    },
    company: {
      type: String,
      trim: true,
    },
    avatar: {
      url: String,
      publicId: String,
    },
    rating: {
      type: Number,
      min: 1,
      max: 5,
      default: 5,
    },
    testimonial: {
      type: String,
      required: true,
    },
    isPublished: {
      type: Boolean,
      default: true,
    },
    order: {
      type: Number,
      default: 0,
    },
    isDeleted: {
      type: Boolean,
      default: false,
      select: false,
    },
  },
  { timestamps: true }
);

testimonialSchema.index({ isPublished: 1, order: 1 });

const Testimonial = mongoose.model("Testimonial", testimonialSchema);
export default Testimonial;
