import { HttpClient } from "../HttpClient";

class MainHeaderService extends HttpClient {
  constructor() {
    super("http://localhost:3000");
  }

  GetAll = () => this.get("mainheaders");
}

export default new MainHeaderService();
