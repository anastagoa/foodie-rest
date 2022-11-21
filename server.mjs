import express from 'express'
import mongoose from 'mongoose'
import Router  from 'express'
const router = new Router()

import CategoryController from './server/CategoryController.mjs'
import PromoController from './server/PromoController.mjs'
import OrderController from './server/OrderController.mjs'

const PORT = 5000
const DB_URL = 'mongodb+srv://user:user@cluster0.9rh1ntz.mongodb.net/?retryWrites=true&w=majority'
const app = express()

app.use(express.json())
app.use('/api', router)

router.post('/categories', CategoryController.create)
router.get('/categories', CategoryController.getAll)
router.delete('/categories/:id', CategoryController.delete)

router.post('/promos', PromoController.create)
router.get('/promos', PromoController.getAll)
router.delete('/promos/:id', PromoController.delete)

router.post('/orders', OrderController.create)
router.get('/orders', OrderController.getAll)
router.get('/orders/:id', OrderController.getOne)
router.delete('/orders/:id', OrderController.delete)

async function startApp() {
  try {
    await mongoose.connect(DB_URL)
    app.listen(PORT)
  } catch (e) {
    console.log(e)
  }
}

startApp()
