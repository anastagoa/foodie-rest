import express from 'express'
import mongoose from 'mongoose'
import Router  from 'express'
const router = new Router()
import CategoryController from './CategoryController.js'
import PromoController from './PromoController.js'

const PORT = 5000
const DB_URL = 'mongodb+srv://user:user@cluster0.9rh1ntz.mongodb.net/?retryWrites=true&w=majority'
const app = express()

app.use(express.json())
app.use('/api', router)

// app.use((req, res, next) => {
//   res.setHeader('Access-Control-Allow-Origin', '*');
//   res.setHeader('Access-Control-Allow-Headers', 'origin, content-type, accept');
//
//   // res.header("Access-Control-Allow-Credentials", "true");
//   // res.header( "Access-Control-Allow-Methods", "PUT, POST, GET, DELETE, PATCH, OPTIONS" );
//   // res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
//   next();
// });



router.post('/categories', CategoryController.create)
router.get('/categories', CategoryController.getAll)
router.delete('/categories/:id', CategoryController.delete)

router.post('/promos', PromoController.create)
router.get('/promos', PromoController.getAll)
router.delete('/promos/:id', PromoController.delete)


async function startApp() {
  try {
    await mongoose.connect(DB_URL)
    app.listen(PORT, () => console.log('port5'))
  } catch (e) {
    console.log(e)
  }
}

startApp()

// export default router //delete
