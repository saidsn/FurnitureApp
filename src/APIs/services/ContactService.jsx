import { HttpClient } from "../HttpClient";

class ContactService extends HttpClient {
  constructor() {
    super("http://localhost:3000");
  }

  getAllContact = () => this.getAll("contacts");
}

export default new ContactService();
