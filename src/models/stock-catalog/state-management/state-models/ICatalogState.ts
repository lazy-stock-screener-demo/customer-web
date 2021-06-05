import { ICatalogDTO } from "../../data-fetching/dtos/ICatalogDTO";

export interface ICatalogState {
  catalog: ICatalogDTO | {};
  catalogs: ICatalogDTO[];

  isReadingCatalog: boolean;
  isReadingCatalogSuccess: boolean;
  isReadingCatalogFailure: boolean;

  error: string;
}
