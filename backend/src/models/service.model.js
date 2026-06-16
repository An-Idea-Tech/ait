import mongoose from "mongoose";

const serviceSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
    },
    slug: {
      type: String,
      unique: true,
      lowercase: true,
      trim: true,
    },
    shortDescription: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    icon: {
      type: String, // icon name or URL
    },
    image: {
      url: String,
      publicId: String,
    },
    features: [
      {
        title: String,
        description: String,
      },
    ],
    order: {
      type: Number,
      default: 0,
    },
    isPublished: {
      type: Boolean,
      default: true,
    },
    isDeleted: {
      type: Boolean,
      default: false,
      select: false,
    },
  },
  { timestamps: true }
);

serviceSchema.index({ order: 1 });
serviceSchema.index({ isPublished: 1, isDeleted: 1 });

const Service = mongoose.model("Service", serviceSchema);
export default Service;
