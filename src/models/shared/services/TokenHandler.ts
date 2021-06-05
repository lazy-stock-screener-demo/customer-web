import { AxiosStatic, AxiosResponse } from "axios";
import { AccessToken } from "./dtos/ITokenDTO";
import { ILoginDTO } from "../../customer/data-fetching/dtos/ILoginDTO";
import { IAuthService, AuthService } from "../services/AuthService";
import { APIService } from "../infra/APIService";

export class TokenHandler {
  private authService: IAuthService;
  constructor({ authService }: { authService: IAuthService }) {
    this.authService = authService;
  }
  private isAccessTokenExpired(response: any): boolean {
    // console.log(response);
    return response.data.message === "Token signature expired.";
  }
  public async handleUpdateAccessToken(error, api: AxiosStatic) {
    if (this.isAccessTokenExpired(error.response)) {
      const refreshToken = this.authService.getToken("refresh-token");
      if (!!refreshToken) {
        try {
          const accessToken = await this.askForNewAccessToken(api);
          // Set New Token that just fetched
          this.authService.setToken("access-token", accessToken);
          // Retry request
          error.config.headers["authorization"] = accessToken;
          return api.request(error.config);
        } catch (e) {
          // remove access and refresh tokens
          this.authService.removeToken("access-token");
          this.authService.removeToken("refresh-token");
          console.log(e);
        }
      }
    }
    return Promise.reject({ ...error });
  }
  public async askForNewAccessToken(api: AxiosStatic): Promise<AccessToken> {
    const data = {
      refreshToken: this.authService.getToken("refresh-token"),
    };
    const response: AxiosResponse<ILoginDTO> = await api.post(
      `/token/refresh`,
      data
    );
    return response.data.accessToken;
  }
}
