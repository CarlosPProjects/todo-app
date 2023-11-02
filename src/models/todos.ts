import mongoose, { Schema } from "mongoose";

const todosSchema = new Schema(
  {
    title: String,
  },
  {
    timestamps: true,
  }
);

const Todos = mongoose.models.Todos || mongoose.model("Todos", todosSchema);

export default Todos;