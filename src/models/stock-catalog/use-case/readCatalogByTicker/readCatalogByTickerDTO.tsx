import { ICatalogDTO } from "../../data-fetching/dtos/ICatalogDTO";

export interface IReadCatalogByTickerReqDTO {
  stockVID: string;
}

export interface IReadCatalogByTickerResDTO {
  catalog: ICatalogDTO;
}
