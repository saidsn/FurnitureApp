import { HttpClient } from "../HttpClient";

class MainHeaderService extends HttpClient {
  constructor() {
    super("http://localhost:3000");
  }

  getAllMainHeader = () => this.getAll("mainheaders");
}

export default new MainHeaderService();
