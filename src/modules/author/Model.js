import mongoose from 'mongoose';

// const { Schema } = mongoose;
const Schema = mongoose.Schema;

const Model = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    book: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Book',
        required: false,
      },
    ],
  },
  { timestamp: {} },
);

export default mongoose.model('Author', Model);
