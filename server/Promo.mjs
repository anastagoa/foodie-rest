import mongoose from 'mongoose'

const Promo = new mongoose.Schema({
  id: {type: Number, required: true},
  title: {type: String, required: true},
  description: {type: String, required: true},
  lang: {type: String, required: true}
})

export default mongoose.model('Promo', Promo)
