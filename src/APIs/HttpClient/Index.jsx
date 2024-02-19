import axios from 'axios';

export class HttpClient {
  constructor(baseUrl) {
    this.url = baseUrl;
  }

  async getAll(endpoint) {
    const response = await axios.get(`${this.url}/${endpoint}`);
    return response.data;
  }

  async getById(endpoint, id) {
    const response = await axios.get(`${this.url}/${endpoint}/${id}`);
    return response.data;
  }

    //   "start-json-server": "json-server --watch db.json --port 3000",
    // "start": "npm run build && npm run start-json-server",

  // async post(endpoint, model) {
  //   const response = await axios.post(`${this.url}/${endpoint}`, model);
  //   return response.data;
  // }

  // async put(endpoint, model, id) {
  //   const response = await axios.put(`${this.url}/${endpoint}`, model);
  //   return response.data;
  // }

  // async delete(endpoint, id) {
  //   const response = await axios.delete(`${this.url}/${endpoint}`);
  //   return response.data;
  // }
}

