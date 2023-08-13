export type TAuto = {
  id: number;
  name: string;
  link: string;
};

export type TBrandModel = {
  id: number;
  name: string;
  link: string;
  parent_id: number;
};

export type TModifications = {
  id: number;
  name: string;
  link: string;
  parent_id: number;
};
export type TModParams = {
  length1: string;
  length2: string;
  length3?: string;
  fasten: string;
};
export type TFilters = "Autos" | "Models" | "Modifications" | "Params";
export interface IWiperBladesSearch {
  allAutos: TAuto[] | null;
  brandModels: TBrandModel[] | null;
  modifications: TModifications[] | null;
  modParams: TModParams | null;
  currentFilter: TFilters;
  loading: boolean;
  error: string | null;
  selectedGoods: {
    brand: string | null;
    model: string | null;
    modification: string | null;
  };
}
