import Promo from "./Promo.mjs";

class PromoService {
  async create(promo) {
    const createdPromo = await Promo.create({...promo});
    return createdPromo;
  }

  async getAll() {
    const promos = await Promo.find();
    return promos;
  }

  async delete(id) {
    if (!id) {
      throw new Error('ID is required')
    }
    const promo = await Promo.findByIdAndDelete(id);
    return promo;
  }
}


export default new PromoService();
