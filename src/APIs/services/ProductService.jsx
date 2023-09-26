import { HttpClient } from "../HttpClient";

class ProductService extends HttpClient {
  constructor() {
    super("http://localhost:3000");
  }

  getAllProduct = () => this.getAll("products");
  getProduct = (id) => this.getById("products", id);
}

export default new ProductService();
