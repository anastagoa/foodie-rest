import mongoose from 'mongoose'

const Order = new mongoose.Schema({
  name: {type: String, required: true},
  email: {type: String, required: true},
  phone: {type: String, required: true},
  address: {type: String, required: true},
  comment: {type: String, required: false},
  total: {type: Number, required: true},
  dishes: {type: String, required: true}
})

export default mongoose.model('Order', Order)
