import Promo from './Promo.mjs'

class PromoController {
  async create (req, res) {
    try {
      const { id, title, description  } = req.body
      const promo = await Promo.create({ id, title, description })
      res.json(promo)
    } catch (e) {
      res.status(500).json(e)
    }
  }

  async getAll (req, res) {
    try {
      const promos = await Promo.find()
      return res.json(promos)
    } catch (e) {
      res.status(500).json(e)
    }
  }

  async delete (req, res) {
    try {
      const {id} = req.params
      const promo = await Promo.findByIdAndDelete(id)
      return res.json(promo)
    } catch (e) {
      res.status(500).json(e)
    }
  }
}

export default new PromoController();
