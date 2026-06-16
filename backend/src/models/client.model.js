import mongoose from "mongoose";

const clientSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    logo: {
      url: { type: String, required: true },
      publicId: String,
    },
    website: {
      type: String,
    },
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

clientSchema.index({ order: 1, isPublished: 1 });

const Client = mongoose.model("Client", clientSchema);
export default Client;
