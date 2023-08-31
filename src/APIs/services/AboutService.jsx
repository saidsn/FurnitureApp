import { HttpClient } from "../HttpClient/Index";

class AboutService extends HttpClient {
  constructor() {
    super("http://localhost:3000");
  }

  GetAll() {
    return this.get("about");
  }
}
export default new AboutService();
