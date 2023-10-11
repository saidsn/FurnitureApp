import { HttpClient } from "../HttpClient";

class CollectionService extends HttpClient{
    constructor(){
        super('http://localhost:3000');
    }

    getAllCollection = ()=> this.getAll('collections');
}

export default new CollectionService();