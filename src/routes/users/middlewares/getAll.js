const User = require('../model')

module.exports = async (req, res) => {
  const users = await User.find({}, '-password -hash -salt')
  const usersCount = await User.estimatedDocumentCount()

  res.status(200).send({
    message: 'Get all users',
    data: {
      usersCount: usersCount,
      users: users
    }
  })
}
