exports.helloFromUser = async (req, res) => {
  try {
    res.status(200).json({ message: "helloFromUser" });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
exports.byeFromUser = async (req, res) => {
  try {
    res.status(200).json({ message: "byeFromUser" });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
