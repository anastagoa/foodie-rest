import mongoose from 'mongoose'

const Promo = new mongoose.Schema({
  title: {type: String, required: true},
  description: {type: String, required: true}
})

export default mongoose.model('Promo', Promo)
