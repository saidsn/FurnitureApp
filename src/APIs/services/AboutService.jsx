import { HttpClient } from "../HttpClient";

class AboutService extends HttpClient {
  constructor() {
    super("https://homedecorapp.netlify.app");
  }

  getAllAbout = () => this.getAll("abouts");
}
export default new AboutService();
