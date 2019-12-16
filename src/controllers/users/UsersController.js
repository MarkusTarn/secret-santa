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
    let solved = true
    const participants = await User.find({})
    const indexList = []
    do {
      const partyList = participants.map(p => p.name)
      indexList.length = 0
      participants.forEach(papa => {
        let index = Math.floor(Math.random() * partyList.length)
        while (partyList[index] === papa.name && partyList.length > 1) {
          index = Math.floor(Math.random() * partyList.length)
        }
        indexList.push(partyList.splice(index, 1)[0])
      })
      for (let i = 0; i < indexList.length; i++) {
        if (indexList.length !== participants.length && indexList[i] === participants[i].name) {
          solved = false
        }
      }
    } while (!solved)
    for (let u = 0; u < participants.length; u++) {
      await User.findOneAndUpdate({ name: participants[u].name }, { receiver: indexList[u] })
    }
    res.json({ message: 'ok' })
  },

  logout: async (req, res) => {
    req.logout()
    res.json({ message: 'ok' })
  },
}
