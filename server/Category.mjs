import mongoose from 'mongoose'

const Category = new mongoose.Schema({
  title: {type: String, required: true},
  id: {type: String, required: true},
  dishes: {type: Array, required: true},
})

export default mongoose.model('Category', Category)
