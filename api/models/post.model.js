import mongoose from 'mongoose';

const postSchema = new mongoose.Schema({
    coffeeName: {
      type: String,
      required: true,
      minlength: 1
    },
    brewingMethod: {
      type: String,
      enum: ['select', 'aeropress', 'chemex', 'frenchPress', 'pourOver'],
    },
    brewTime: {
      type: Number,
      min: 0
    },
    grindSize: {
      type: String
    },
    waterTemperature: {
      type: Number,
      min: 0
    },
    coffeeWaterRatio: {
      type: String,
    },
    notes: {
      type: String,
      required: true
    },
    
  });
  
const Post = mongoose.model('Post', postSchema);

export default Post;