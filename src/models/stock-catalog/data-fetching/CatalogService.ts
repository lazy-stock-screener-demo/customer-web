import { errorInstance, successInstance } from "../../shared/infra/EitherError";
import { APIResult } from "../../shared/infra/APIResult";
import { APIService } from "../../shared/infra/APIService";
import { IAxiosResDTO } from "../../shared/services/dtos/IAxiosDTO";
import { APIResponse } from "../../shared/infra/IAPIResults";
import { IReadCatalogByTickerResDTO } from "../use-case/readCatalogByTicker/readCatalogByTickerDTO";
import { IReadSearchAutoCompleteResDTO } from "../use-case/readSearchAutoComplete/readSearchAutoCompleteDTO";
import { AxiosStatic, AxiosResponse } from "axios";

export interface ICatalogService {
  readCatalogByTicker({
    params,
    headers,
  }): Promise<APIResponse<IReadCatalogByTickerResDTO>>;
  readSearchAutoComplete({
    params,
    headers,
  }): Promise<APIResponse<IReadSearchAutoCompleteResDTO>>;
}

export class CatalogService extends APIService implements ICatalogService {
  constructor({ api }: { api: AxiosStatic }) {
    super({
      api,
    });
  }
  async readSearchAutoComplete({
    params,
    headers,
  }): Promise<APIResponse<IReadSearchAutoCompleteResDTO>> {
    try {
      const axiosRes: AxiosResponse<IReadSearchAutoCompleteResDTO> = await this.get(
        {
          url: "/search",
          params,
          headers,
        }
      );

      const dto: IReadSearchAutoCompleteResDTO = axiosRes.data;
      return successInstance(APIResult.ok<IReadSearchAutoCompleteResDTO>(dto));
    } catch (err) {
      console.log("error", err);
      return errorInstance(APIResult.fail<IAxiosResDTO>(err.response));
    }
  }
  async readCatalogByTicker({
    params,
    headers,
  }): Promise<APIResponse<IReadCatalogByTickerResDTO>> {
    try {
      const axiosRes: AxiosResponse<IReadCatalogByTickerResDTO> = await this.get(
        {
          url: "/stock",
          params,
          headers,
        }
      );
      const dto: IReadCatalogByTickerResDTO = axiosRes.data;
      return successInstance(APIResult.ok<IReadCatalogByTickerResDTO>(dto));
    } catch (err) {
      console.log("error", err);
      return errorInstance(APIResult.fail<IAxiosResDTO>(err.response));
    }
  }
}
