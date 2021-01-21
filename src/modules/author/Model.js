import mongoose from 'mongoose';

// const { Schema } = mongoose;
const Schema = mongoose.Schema;

const Model = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
  },
  { timestamp: {} },
);

export default mongoose.model('Author', Model);
