const User = require('../../models/User')

module.exports = {
  get: async (req, res) => {
    const participants = await User.find({}, { name: 1, avatarUrl: 1 })
    res.json(participants)
  },

  getMe: async (req, res) => {
    res.json(req.user)
  },

  assign: async (req, res) => {
    const participants = await User.findOneAndUpdate({ name: 'Markus Tarn' }, { receiver: 'Test' })
    res.json(participants)
  },

  logout: async (req, res) => {
    req.logout()
    res.json({ message: 'ok' })
  },
}
