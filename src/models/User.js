const mongoose = require('mongoose')

const UserSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  googleId: String,
  avatarUrl: String,
  receiver: String,
}, { timestamps: true })

UserSchema.index({ googleId: 1 }, { unique: true })

UserSchema.methods.assignReceiver = async (receiver) => {
  this.receiver.push(receiver)
  await this.save()
}

module.exports = mongoose.model('User', UserSchema)
