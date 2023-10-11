import { HttpClient } from "../HttpClient";

class CategoryService extends HttpClient {
  constructor() {
    super("http://localhost:3000");
  }

  getAllCategory = ()=> this.getAll("categories");
}

export default new CategoryService();
