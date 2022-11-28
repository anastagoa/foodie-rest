import Category from "./Category.mjs";

class CategoryService {
  async create(category) {
    const createdCategory = await Category.create({...category});
    return createdCategory;
  }

  async getAll() {
    const categories = await Category.find();
    return categories;
  }

  async delete(id) {
    if (!id) {
      throw new Error('ID is required')
    }
    const category = await Category.findByIdAndDelete(id);
    return category;
  }
}


export default new CategoryService();
