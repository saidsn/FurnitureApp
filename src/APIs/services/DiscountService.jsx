import { HttpClient } from "../HttpClient";

class DiscountService extends HttpClient {
  constructor() {
    super("https://homedecorapp.netlify.app");
  }

  getAllDiscount = () => this.getAll("discounts");
}

export default new DiscountService();