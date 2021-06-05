import {
  AxiosStatic,
  AxiosResponse,
  ResponseType,
  AxiosRequestConfig,
} from "axios";
import { tokenHandler } from "../services";

export abstract class APIService {
  protected axiosInstance: AxiosStatic;
  constructor({ api }: { api: AxiosStatic }) {
    this.axiosInstance = api;
    this.enableInterceptors();
  }
  private enableInterceptors(): void {
    this.axiosInstance.interceptors.response.use(
      this.successResponseHandler(),
      this.errorResponseHandler()
    );
  }
  private successResponseHandler(): (response: any) => any {
    return (response: any) => {
      return response;
    };
  }
  private errorResponseHandler(): (error: any) => Promise<any> {
    return (error: any) => {
      return tokenHandler.handleUpdateAccessToken(error, this.axiosInstance);
    };
  }
  protected get<T>({
    url,
    params,
    headers,
  }: {
    url: string;
    params?: {};
    headers?: {};
  }): Promise<AxiosResponse<T>> {
    return this.axiosInstance({ method: "GET", url, params, headers });
  }
  protected post<T>({
    url,
    data,
    params,
    headers,
  }: {
    url: string;
    data: {};
    params?: {};
    headers?: {};
  }): Promise<AxiosResponse<T>> {
    return this.axiosInstance({ method: "POST", url, data, params, headers });
  }
  protected put<T>({
    url,
    data,
    params,
    headers,
  }: {
    url: string;
    data: {};
    params?: {};
    headers?: {};
  }): Promise<AxiosResponse<T>> {
    return this.axiosInstance({ method: "PUT", url, data, params, headers });
  }
  protected delete<T>({
    url,
    params,
    headers,
  }: {
    url: string;
    params?: {};
    headers?: {};
  }): Promise<AxiosResponse<T>> {
    return this.axiosInstance({ method: "DELETE", url, params, headers });
  }
}
