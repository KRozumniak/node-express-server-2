import mongoose from 'mongoose';

// const { Schema } = mongoose;
const Schema = mongoose.Schema;

const Model = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    author: {
      type: [String],
    },
  },
  { timestamp: {} },
);

export default mongoose.model('Book', Model);
