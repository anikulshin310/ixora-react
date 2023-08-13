import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

import { IWiperBladesSearch, TAuto, TBrandModel, TFilters, TModifications, TModParams } from "./types";
import { fetchData } from "../../network/api";
import { API_ROUTES } from "../../network/api_routes";

const initialState: IWiperBladesSearch = {
  allAutos: null,
  brandModels: null,
  modifications: null,
  modParams: null,
  loading: false,
  error: null,
  currentFilter: "Autos",
  selectedGoods: {
    brand: null,
    model: null,
    modification: null,
  },
};

export const getAllAuto = createAsyncThunk("getAllAuto", async () => {
  const data = await fetchData(API_ROUTES.AUTO);
  return data as TAuto[];
});

export const getAllModels = createAsyncThunk("getAllModels", async (id: number) => {
  const data = await fetchData(API_ROUTES.MODEL(id));
  return data as TBrandModel[];
});
export const getAllModifications = createAsyncThunk("getAllModifications", async (id: number) => {
  const data = await fetchData(API_ROUTES.MODIFICATIONS(id));
  return data as TModifications[];
});
export const getModParams = createAsyncThunk("getModParams", async (id: number) => {
  const data = await fetchData(API_ROUTES.MODIFICATION_PARAMS(id));
  return data as TModParams[];
});

export const wiperBladesSlice = createSlice({
  name: "wiperBladesSearch",
  initialState,
  reducers: {
    setSelectedBrand: (state, action: PayloadAction<string>) => {
      state.selectedGoods.brand = action.payload;
      state.selectedGoods.model = null;
      state.selectedGoods.modification = null;
    },
    setSelectedModel: (state, action: PayloadAction<string>) => {
      state.selectedGoods.model = action.payload;
      state.selectedGoods.modification = null;
    },
    setSelectedModification: (state, action: PayloadAction<string>) => {
      state.selectedGoods.modification = action.payload;
    },
    setCurrentFilter: (state, action: PayloadAction<TFilters>) => {
      state.currentFilter = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getAllAuto.pending, (state) => {
      state.loading = true;
      state.error = null;
      state.currentFilter = "Autos";
    });
    builder.addCase(getAllAuto.rejected, (state) => {
      state.loading = false;
      state.error = "some error";
    });
    builder.addCase(getAllAuto.fulfilled, (state, action: PayloadAction<TAuto[]>) => {
      state.loading = false;
      state.allAutos = action.payload;
    });
    builder.addCase(getAllModels.pending, (state) => {
      state.loading = true;
      state.error = null;
      state.currentFilter = "Models";
    });
    builder.addCase(getAllModels.rejected, (state) => {
      state.loading = false;
      state.error = "some error";
    });
    builder.addCase(getAllModels.fulfilled, (state, action: PayloadAction<TBrandModel[]>) => {
      state.loading = false;
      state.brandModels = action.payload;
    });
    builder.addCase(getAllModifications.pending, (state) => {
      state.loading = true;
      state.error = null;
      state.currentFilter = "Modifications";
    });
    builder.addCase(getAllModifications.rejected, (state) => {
      state.loading = false;
      state.error = "some error";
    });
    builder.addCase(getAllModifications.fulfilled, (state, action: PayloadAction<TModifications[]>) => {
      state.loading = false;
      state.modifications = action.payload;
    });
    builder.addCase(getModParams.pending, (state) => {
      state.loading = true;
      state.error = null;
      state.currentFilter = "Params";
    });
    builder.addCase(getModParams.rejected, (state) => {
      state.loading = false;
      state.error = "some error";
    });
    builder.addCase(getModParams.fulfilled, (state, action: PayloadAction<TModParams[]>) => {
      state.loading = false;
      state.modParams = action.payload[0];
    });
  },
});

export const { setSelectedBrand, setSelectedModel, setSelectedModification, setCurrentFilter } =
  wiperBladesSlice.actions;
export default wiperBladesSlice.reducer;
