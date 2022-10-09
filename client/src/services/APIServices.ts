import Axios, { AxiosRequestConfig } from 'axios'
import { EStatus } from '../../../types/EStatus';

class APIServices {
  private headerConfig: AxiosRequestConfig

  constructor() {
    this.headerConfig = {
      headers: {
      "Content-Type": "application/json",
    }
  };
  }

  public async post(data: any, url: string, configs: AxiosRequestConfig = this.headerConfig): Promise<any> {
    if (url) {    
        const response = await Axios.post(url, data, configs);
        console.log(response)
        if(response){
            return response;
        }
        throw Error("APIService unexpected post errors");

    }
  }

  public async get(url: string = "",  configs: AxiosRequestConfig = this.headerConfig) {
    if(url){
        const response = await Axios.get(url, configs);
        if (!response) {
        throw Error("APIService unexpected get errors");
        }
        return response;
    }
  }
}

const API = new APIServices();

export default API;