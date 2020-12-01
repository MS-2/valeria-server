import { Schema, model } from "mongoose";

export const ROLES = ["admin"];

const roleSchema = new Schema(
  {
    name: {
      type: String,
      unique: true,
      lowercase: true,
      required: true
    },
    description: String
  },
  {
    versionKey: false,
  }
);

export default model("role", roleSchema);