import {
  AccessToken,
  RefreshToken,
} from "../../../shared/services/dtos/ITokenDTO";

export interface ITokenDTO {
  accessToken: AccessToken;
  refreshToken: RefreshToken;
}

export interface ICustomerDTO {
  customerName: string;
  email?: string;
  license: string;
  isEmailVerified?: boolean;
  isDeleted?: boolean;
}
