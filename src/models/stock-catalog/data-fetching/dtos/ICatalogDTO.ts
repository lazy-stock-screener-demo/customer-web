interface Value {
  [key: string]: number;
}

interface ISafetyDTO {
  longTermDebt: Value[];
  currentRatio: Value[];
}

interface IProfitDTO {
  netIncome: Value[];
  operatingCashFlow: Value[];
}

export interface ICatalogDTO {
  ticker: string;
  profitDetails: IProfitDTO;
  safetyDetails: ISafetyDTO;
}
