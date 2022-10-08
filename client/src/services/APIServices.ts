import Axios, { AxiosRequestConfig } from 'axios'
import { EStatus } from '../types/EStatus';

class APIServices {
  private URL_ENDPOINT: string | undefined;
  private headerConfig: AxiosRequestConfig

  constructor() {
    this.URL_ENDPOINT = process.env.REACT_APP_IS_LOCAL
      ? process.env.REACT_APP_LOCAL_ENDPOINT_URL
      : process.env.REACT_APP_PROD_ENDPOINT_URL;
    this.headerConfig = {headers: {"Content-Type": "application/json"}};
  }

  public async post(data: any, url: string, configs: AxiosRequestConfig = this.headerConfig): Promise<any> {
    if (this.URL_ENDPOINT) {    
        const response = await Axios.post(`${this.URL_ENDPOINT}${url}`, data, configs);
        console.log(response)
        if(response){
            return response;
        }
        throw Error("APIService unexpected post errors");

    }
  }

  public async get(url: string = "",  configs: AxiosRequestConfig = this.headerConfig) {
    if(this.URL_ENDPOINT){
        const response = await Axios.get(`${this.URL_ENDPOINT}/${url}`, configs);
        if (!response) {
        throw Error("APIService unexpected get errors");
        }
        return response;
    }
  }
}

const API = new APIServices();

export default API;