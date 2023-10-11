import { HttpClient } from "../HttpClient";

class FooterService extends HttpClient{
    constructor(){
        super("http://localhost:3000");
    }

    getAllFooter = () => this.getAll('footers');
}

export default new FooterService();