import CategoryService from './CategoryService.mjs'

class CategoryController {
  async create(req, res) {
    try {
      const category = await CategoryService.create(req.body)
      res.json(category)
    } catch (e) {
      res.status(500).json(e)
    }
  }

  async getAll(req, res) {
    try {
      const categories = await CategoryService.getAll();
      return res.json(categories);
    } catch (e) {
      res.status(500).json(e)
    }
  }

  async delete(req, res) {
    try {
      const category = await CategoryService.delete(req.params.id);
      return res.json(category)
    } catch (e) {
      res.status(500).json(e)
    }
  }
}

export default new CategoryController();
