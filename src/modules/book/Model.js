import mongoose from 'mongoose';

// const { Schema } = mongoose;
const Schema = mongoose.Schema;

const Model = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    author: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Author',
        required: false,
      },
    ],
  },
  { timestamp: {} },
);

export default mongoose.model('Book', Model);
