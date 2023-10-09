const User = require('../../models/user')

exports.createUser = async (req, res) => {
  try {
    const body = req.body;
    if (body.user_name) {
      const name = body.user_name;
      const user = new User()
      user.user_name = name
      await user.save()
      res.status(201).json({ message: "User created" });
    } else {
      throw Error('User not created, name is required')
    }
    
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
};

exports.getUser = async (req, res) => {
  try {
    const users = await User.find();
    res.status(200).json(users);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
}