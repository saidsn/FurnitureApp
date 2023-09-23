import { HttpClient } from "../HttpClient";

class LoginService extends HttpClient {
  constructor() {
    super("http://localhost:3000");
  }

  GetAll = () => this.get("users");
}
export default new LoginService();
