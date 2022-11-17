import Category from './Category.mjs'

class CategoryController {
  async create (req, res) {
    try {
      const { title, id, dishes, lang } = req.body
      const category = await Category.create({ title, id, dishes, lang })
      res.json(category)
    } catch (e) {
      res.status(500).json(e)
    }
  }
  async getAll (req, res) {
    try {
      const categories = await Category.find()
      return res.json(categories)
    } catch (e) {
      res.status(500).json(e)
    }
  }

  async delete (req, res) {
    try {
      const {id} = req.params
      const category = await Category.findByIdAndDelete(id)
      return res.json(category)
    } catch (e) {
      res.status(500).json(e)
    }
  }
}

export default new CategoryController();
