import PromoService from './PromoService.mjs'

class PromoController {
  async create(req, res) {
    try {
      const promo = await PromoService.create(req.body)
      res.json(promo)
    } catch (e) {
      res.status(500).json(e)
    }
  }

  async getAll(req, res) {
    try {
      const promos = await PromoService.getAll();
      return res.json(promos);
    } catch (e) {
      res.status(500).json(e)
    }
  }

  async delete(req, res) {
    try {
      const promo = await PromoService.delete(req.params.id);
      return res.json(promo)
    } catch (e) {
      res.status(500).json(e)
    }
  }
}

export default new PromoController();
