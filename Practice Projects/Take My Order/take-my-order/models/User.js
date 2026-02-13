import mongoose from "mongoose";
const { Schema, model } = mongoose;

const UserSchema = new Schema(
  {
    email: { type: String, required: true },
    name: { type: String },
    username: { type: String },
    profilepic: { type: String },
    coverpic: { type: String },
    // createdAt: { type: Date, default: Date.now },
    // UpdatedAt: { type: Date, default: Date.now },
  },
  {
    timestamps: true,    // Automatically handles createdAt & updatedAt
  },
);

export default mongoose.models.User || model("User", UserSchema);
