import axios from 'axios';
axios.defaults.baseURL = 'https://jsonplaceholder.typicode.com';

export default class HttpRequest {
  constructor(private url: string) {}

  async get<T>(id?: number, params?: any): Promise<T> {
    const url = `${this.url}${id ? `/${id}` : ''}`;
    const { data } = await axios.get(url, { params });
    return data as T;
  }
}
