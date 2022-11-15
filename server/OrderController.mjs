import Order from './Order.mjs'

class OrderController {
  async create (req, res) {
    try {
      const { name, email, phone, address, comment, total, dishes } = req.body
      const order = await Order.create({ name, email, phone, address, comment, total, dishes })
      res.json(order)
    } catch (e) {
      res.status(500).json(e)
    }
  }
  async getAll (req, res) {
    try {
      const orders = await Order.find()
      return res.json(orders)
    } catch (e) {
      res.status(500).json(e)
    }
  }
  async getOne (req, res) {
    try {
      const {id} = req.params
      if(!id) {
        res.status(400).json({message: 'Id is not specified'})
      }
      const order = await Order.findById(id)
      return res.json(order)
    } catch (e) {
      res.status(500).json(e)
    }
  }

  async delete (req, res) {
    try {
      const {id} = req.params
      const order = await Order.findByIdAndDelete(id)
      return res.json(order)
    } catch (e) {
      res.status(500).json(e)
    }
  }
}

export default new OrderController();
