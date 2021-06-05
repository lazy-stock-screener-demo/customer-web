import { ICustomerDTO } from "../../data-fetching/dtos/ICustomerDTO";

export interface IReadMeReqDTO {}
export interface IReadMeResDTO {
  customer: ICustomerDTO;
}
