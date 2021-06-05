import { ITokenDTO } from "../../data-fetching/dtos/ICustomerDTO";

export interface ISigninReqDTO {
  userName: string;
  userPWD: string;
}
export interface ISigninResDTO {
  identity: ITokenDTO;
}
