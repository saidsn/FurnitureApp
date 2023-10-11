import { HttpClient } from "../HttpClient";

class FooterService extends HttpClient{
    constructor(){
        super("https://homedecorapp.netlify.app");
    }

    getAllFooter = () => this.getAll('footers');
}

export default new FooterService();