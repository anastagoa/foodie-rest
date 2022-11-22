import Order from "./Order.mjs";

class OrderService {
  async create(order) {
    const createdOrder = await Order.create({...order});
    return createdOrder;
  }

  async getAll() {
    const orders = await Order.find();
    return orders;
  }

  async getOne(id) {
    if (!id) {
      throw new Error('не указан ID')
    }
    const order = await Order.findById(id);
    return order;
  }

  async delete(id) {
    if (!id) {
      throw new Error('ID is required')
    }
    const order = await Order.findByIdAndDelete(id);
    return order;
  }
}


export default new OrderService();
