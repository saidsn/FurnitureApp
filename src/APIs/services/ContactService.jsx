import { HttpClient } from "../HttpClient";

class ContactService extends HttpClient {
  constructor() {
    super("https://homedecorapp.netlify.app");
  }

  getAllContact = () => this.getAll("contacts");
}

export default new ContactService();
