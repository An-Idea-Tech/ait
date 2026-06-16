import mongoose from "mongoose";

const feedSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
    },
    content: {
      type: String,
      required: true,
    },
    type: {
      type: String,
      enum: ["update", "announcement", "news", "milestone"],
      default: "update",
    },
    image: {
      url: String,
      publicId: String,
    },
    link: {
      type: String,
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

feedSchema.index({ isPublished: 1, createdAt: -1 });

const Feed = mongoose.model("Feed", feedSchema);
export default Feed;
