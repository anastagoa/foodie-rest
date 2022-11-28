import express from 'express'
import mongoose from 'mongoose'
import Router  from 'express'
import CategoryController from './server/CategoryController.mjs'
import PromoController from './server/PromoController.mjs'
import OrderController from './server/OrderController.mjs'
import * as dotenv from 'dotenv'
dotenv.config()

const router = new Router()
const PORT = process.env.PORT
const DB_URL = process.env.DB_URL
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
