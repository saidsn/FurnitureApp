import { HttpClient } from "../HttpClient";

class LoginService extends HttpClient {
  constructor() {
    super("https://homedecorapp.netlify.app");
  }

  getAllUser = () => this.getAll("users");
}
export default new LoginService();
