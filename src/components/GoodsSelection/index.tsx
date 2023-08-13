import React, { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { GoodItem } from "./GoodItem";
import { GoodsList } from "./GoodsList";
import {
  getAllAuto,
  getAllModels,
  getAllModifications,
  getModParams,
  setCurrentFilter,
  setSelectedBrand,
  setSelectedModel,
  setSelectedModification,
} from "../../store/WiperBladesSearch";
import {
  allAutosSelector,
  brandModelsSelector,
  currentFilterSelector,
  loading,
  modificationsSelector,
  modParamsSelector,
  selectedGoodsSelector,
} from "../../store/WiperBladesSearch/selectors";
import styles from "./index.module.scss";
import { SelectionHeader } from "./SelectionHeader";

export const GoodsSelection = () => {
  const dispatch = useAppDispatch();
  const allAutos = useAppSelector(allAutosSelector);
  const allBrands = useAppSelector(brandModelsSelector);
  const allModifications = useAppSelector(modificationsSelector);
  const modParams = useAppSelector(modParamsSelector);
  const currentFilter = useAppSelector(currentFilterSelector);
  const isLoading = useAppSelector(loading);
  const { brand, model, modification } = useAppSelector(selectedGoodsSelector);
  const filtersObject = [
    {
      name: "Подбор стеклоочестителей",
      handleSelect: () => dispatch(setCurrentFilter("Autos")),
    },
    {
      name: brand,
      handleSelect: () => {
        dispatch(setCurrentFilter("Models"));
      },
      visible: currentFilter === "Modifications" || currentFilter === "Params" || currentFilter === "Models",
    },
    {
      name: model,
      handleSelect: () => dispatch(setCurrentFilter("Modifications")),
      visible: currentFilter === "Modifications" || currentFilter === "Params",
    },
    { name: modification, visible: currentFilter === "Params" },
  ];

  useEffect(() => {
    dispatch(getAllAuto());
  }, [dispatch]);
  return (
    <div className={styles.wrapper}>
      <SelectionHeader misc={filtersObject} />
      {!isLoading && (
        <>
          <GoodsList
            isCurrent={currentFilter === "Autos"}
            goods={allAutos}
            onClick={(id: number) => dispatch(getAllModels(id))}
            handleSelected={(name: string) => dispatch(setSelectedBrand(name))}
          />
          <GoodsList
            isCurrent={currentFilter === "Models"}
            goods={allBrands}
            onClick={(id: number) => dispatch(getAllModifications(id))}
            handleSelected={(name: string) => dispatch(setSelectedModel(name))}
          />
          <GoodsList
            isCurrent={currentFilter === "Modifications"}
            goods={allModifications}
            onClick={(id: number) => dispatch(getModParams(id))}
            handleSelected={(name: string) => dispatch(setSelectedModification(name))}
          />
        </>
      )}
      {modParams && currentFilter === "Params" && !isLoading && <GoodItem item={modParams} />}
      {isLoading && "Loading..."}
    </div>
  );
};
