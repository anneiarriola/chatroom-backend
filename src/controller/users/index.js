const User = require('../../models/user')

exports.getUser = async (req, res) => {
  try {
    const users = await User.find();
    res.status(200).json(users);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
}

exports.createUser = async (req, res) => {
  try {
    const { user_name } = req.body;
    // Check if user with the same username
    const existingUser = await User.findOne({ $or: [{ user_name }] });
    if (existingUser) {
      return res.status(400).json({ error: 'User already exists' });
    }
    // If user doesn't exist, create a new user
    const newUser = new User({ user_name });
    await newUser.save();
    res.status(201).json({ message: 'User created successfully', user: newUser });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
}