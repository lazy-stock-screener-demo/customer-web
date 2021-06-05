import { EitherError } from "./EitherError";
import { APIResult } from "./APIResult";
import { IAxiosResDTO } from "../services/dtos/IAxiosDTO";

export type APIResponse<T> = EitherError<
  APIResult<APIErrorMessage>,
  APIResult<T>
>;
export type APIErrorMessage = string | IAxiosResDTO;
