import User from '../models/User';

export default async (req, res) => {
  try {
    const userResults = await User.find();
    res.send(userResults);
  } catch(e) {
    res.sendStatus(500);
  }
};
