import {
  IReadMeActionType,
  READING_ME,
  READING_ME_SUCCESS,
  READING_ME_FAILURE,
} from "./readMeActionNames";
import { IReadMeResDTO } from "./readMeDTO";

export interface IReadMeAction {
  type: IReadMeActionType;
  data?: IReadMeResDTO;
  error?: string;
}

export function readingMe(): IReadMeAction {
  return {
    type: READING_ME,
  };
}
export function readingMeSuccess(data: IReadMeResDTO): IReadMeAction {
  return {
    type: READING_ME_SUCCESS,
    data,
  };
}
export function readingMeFailure(error: string): IReadMeAction {
  return {
    type: READING_ME_FAILURE,
    // error,
  };
}
