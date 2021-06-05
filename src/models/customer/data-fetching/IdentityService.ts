import { errorInstance, successInstance } from "../../shared/infra/EitherError";
import { APIResult } from "../../shared/infra/APIResult";
import { APIService } from "../../shared/infra/APIService";
import { IAxiosResDTO } from "../../shared/services/dtos/IAxiosDTO";
import { APIResponse } from "../../shared/infra/IAPIResults";
import { AxiosStatic, AxiosResponse } from "axios";
import { ISigninResDTO } from "../use-case/signin/signinDTO";
import { ISignupResDTO } from "../use-case/signup/signupDTO";
import { authService } from "../../shared/services";

export interface IIdentityService {
  signin({ params, headers, data }): Promise<APIResponse<ISigninResDTO>>;
  signout(): any;
  signup({ params, headers, data }): Promise<APIResponse<ISignupResDTO>>;
}

export class IdentityService extends APIService implements IIdentityService {
  constructor({ api }: { api: AxiosStatic }) {
    super({
      api,
    });
  }
  public signout() {}
  async signup({ params, headers, data }): Promise<APIResponse<ISignupResDTO>> {
    try {
      const axiosRes: AxiosResponse<ISigninResDTO> = await this.post({
        url: "/signup",
        params,
        headers,
        data,
      });
      const dto: ISignupResDTO = axiosRes.data;
      return successInstance(APIResult.ok<ISignupResDTO>(dto));
    } catch (err) {
      return errorInstance(APIResult.fail<IAxiosResDTO>(err.response));
    }
  }
  public async signin({
    params,
    headers,
    data,
  }): Promise<APIResponse<ISigninResDTO>> {
    try {
      const axiosRes: AxiosResponse<ISigninResDTO> = await this.post({
        url: "/login",
        params,
        headers,
        data,
      });
      const dto: ISigninResDTO = axiosRes.data;
      return successInstance(APIResult.ok<ISigninResDTO>(dto));
    } catch (err) {
      return errorInstance(APIResult.fail<IAxiosResDTO>(err.response));
    }
  }
}
