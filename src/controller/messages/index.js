exports.helloFromMessage = async (req, res) => {

    try {
     
      res.status(200).json({'message': 'helloFromMessage'});
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  }
exports.byeFromMessage = async (req, res) => {

    try {
     
      res.status(200).json({'message': 'byeFromMessage'});
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  }
