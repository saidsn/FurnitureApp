import { HttpClient } from "../HttpClient";

class CollectionService extends HttpClient{
    constructor(){
        super("https://homedecorapp.netlify.app");
    }

    getAllCollection = ()=> this.getAll('collections');
}

export default new CollectionService();