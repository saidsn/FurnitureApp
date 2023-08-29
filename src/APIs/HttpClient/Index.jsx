import axios from 'axios';

export  class HttpClient {
    baseUrl;
    constructor(url) {
        this.baseUrl = url;
    }

    async get(endpoint) {
      const response = await axios.get(`${this.baseUrl}/${endpoint}`);
      return response.data;
    }

    async post(endpoint, model) {
        return await axios.post(`${this.baseUrl}/${endpoint}`, model);
    }

    async put(endpoint, model, id) {
        return await axios.put(`${this.baseUrl}/${endpoint}`, model);
    }

    async delete(endpoint, id) {
        return await axios.delete(`${this.baseUrl}/${endpoint}`);
    }
}

