import { HttpClient } from "../HttpClient";

class LoginService extends HttpClient {
  constructor() {
    super("http://localhost:3000");
  }

  getAllUser = () => this.getAll("users");
}
export default new LoginService();
