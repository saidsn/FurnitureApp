import { HttpClient } from "../HttpClient";

class CategoryService extends HttpClient {
  constructor() {
    super("https://homedecorapp.netlify.app");
  }

  getAllCategory = ()=> this.getAll("categories");
}

export default new CategoryService();
