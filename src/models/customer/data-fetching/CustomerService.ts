import { AxiosStatic, AxiosResponse } from "axios";
import { errorInstance, successInstance } from "../../shared/infra/EitherError";
import { APIResult } from "../../shared/infra/APIResult";
import { APIService } from "../../shared/infra/APIService";
import { APIResponse } from "../../shared/infra/IAPIResults";
import { IReadMeResDTO } from "../use-case/readMe/readMeDTO";
import { IAxiosResDTO } from "../../shared/services/dtos/IAxiosDTO";
import { IDeleteAccountResDTO } from "../use-case/deleteAccount/deleteAccountDTO";
import { authService } from "../../shared/services";

export interface ICustomerService {
  readMe({ params, headers }): Promise<APIResponse<IReadMeResDTO>>;
  deleteAccount({
    params,
    headers,
  }): Promise<APIResponse<IDeleteAccountResDTO>>;
  updatePassword(): any;
}

// function WithAccessTokeninHeader() {
//   return function (
//     target: any,
//     targetPropertyKey: string,
//     propDesc: PropertyDescriptor
//   ) {
//     let originalFunction: Function = propDesc.value;
//     propDesc.value = function () {
//       let argValue = arguments[index];
//       let newArgs = [];
//       for (let i = 0; i < arguments.length; i++) newArgs.push(arguments[i]);
//       newArgs[index] = argValue || {};

//       return originalFunction.apply(this, newArgs);
//     };
//     return propDesc;
//   };
// }

export class CustomerService extends APIService implements ICustomerService {
  constructor({ api }: { api: AxiosStatic }) {
    super({
      api,
    });
  }
  public async deleteAccount({
    params,
    headers,
  }): Promise<APIResponse<IDeleteAccountResDTO>> {
    const accessToken = authService.getToken("access-token");
    const enrichedHeaders = {
      ...headers,
      authorization: accessToken,
    };
    try {
      const axiosRes: AxiosResponse<IDeleteAccountResDTO> = await this.get({
        url: "/delete",
        params,
        headers: enrichedHeaders,
      });
      const dto: IDeleteAccountResDTO = axiosRes.data;
      return successInstance(APIResult.ok<IDeleteAccountResDTO>(dto));
    } catch (err) {
      return errorInstance(APIResult.fail<IAxiosResDTO>(err.response));
    }
  }
  public updatePassword(): any {}
  public async readMe({
    params,
    headers,
  }): Promise<APIResponse<IReadMeResDTO>> {
    const accessToken = authService.getToken("access-token");
    const enrichedHeaders = {
      ...headers,
      Authorization: "Bearer " + accessToken,
    };
    try {
      const axiosRes: AxiosResponse<IReadMeResDTO> = await this.get({
        url: "/customer",
        params,
        headers: enrichedHeaders,
      });
      const dto: IReadMeResDTO = axiosRes.data;
      return successInstance(APIResult.ok<IReadMeResDTO>(dto));
    } catch (err) {
      return errorInstance(APIResult.fail<IAxiosResDTO>(err.response));
    }
  }
}
