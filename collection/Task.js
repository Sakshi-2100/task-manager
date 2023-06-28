import mongoose from "mongoose";

const Schema = mongoose.Schema;

const taskSchema = new Schema({
  name: {
    type: String,
    required: [true, "Must provide name"],
    trime: true,
    maxLength: [20, "Cannot be more than 20 characters"],
  },
  completed: {
    type: Boolean,
    default: false,
  },
});

export default mongoose.model("Task", taskSchema);
