import mongoose from 'mongoose';
import Bluebird from 'bluebird';

export default callback => {
  mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true });
  mongoose.Promise = Bluebird;

  const db = mongoose.connection;

  callback(db);
};
