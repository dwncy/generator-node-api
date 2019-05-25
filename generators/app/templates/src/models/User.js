import mongoose, { Schema } from 'mongoose';

const UserSchema = new Schema({
  id: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  }
});

export default mongoose.model('User', UserSchema);
