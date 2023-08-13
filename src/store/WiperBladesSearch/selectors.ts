import { RootState } from "..";

export const allAutosSelector = (state: RootState) => state.wiperBladesSearch.allAutos;
export const brandModelsSelector = (state: RootState) => state.wiperBladesSearch.brandModels;
export const modificationsSelector = (state: RootState) => state.wiperBladesSearch.modifications;
export const modParamsSelector = (state: RootState) => state.wiperBladesSearch.modParams;
export const currentFilterSelector = (state: RootState) => state.wiperBladesSearch.currentFilter;
export const selectedGoodsSelector = (state: RootState) => state.wiperBladesSearch.selectedGoods;
export const error = (state: RootState) => state.wiperBladesSearch.error;
export const loading = (state: RootState) => state.wiperBladesSearch.loading;
