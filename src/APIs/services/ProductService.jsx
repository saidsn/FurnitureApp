import { HttpClient } from "../HttpClient";

class ProductService extends HttpClient {
  constructor() {
    super("https://homedecorapp.netlify.app");
  }

  getAllProduct = () => this.getAll("products");
  getProduct = (id) => this.getById("products", id);
}

export default new ProductService();
