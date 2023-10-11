import { HttpClient } from "../HttpClient";

class MainHeaderService extends HttpClient {
  constructor() {
    super("https://homedecorapp.netlify.app");
  }

  getAllMainHeader = () => this.getAll("mainheaders");
}

export default new MainHeaderService();
