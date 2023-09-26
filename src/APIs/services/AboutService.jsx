import { HttpClient } from "../HttpClient";

class AboutService extends HttpClient {
  constructor() {
    super("http://localhost:3000");
  }

  getAllAbout = () => this.getAll("abouts");
}
export default new AboutService();
