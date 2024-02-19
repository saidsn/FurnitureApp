import { HttpClient } from "../HttpClient";

class DiscountService extends HttpClient {
  constructor() {
    super("http://localhost:3000");
  }

  getAllDiscount = () => this.getAll("discounts");
}

export default new DiscountService();
