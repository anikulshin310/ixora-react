import React, { FC, useCallback, useEffect, useState } from "react";
import { fetchData } from "../../network/api";
import { API_ROUTES } from "../../network/api_routes";
import { TAuto, TBrandModel, TModifications, TModParams } from "../../types";
import { GoodItem } from "./GoodItem";
import { GoodsList } from "./GoodsList";
import { SelectionHeader } from "./SelectionHeader";
import styles from "./index.module.scss";

export const GoodsSelection = () => {
  const [allBrands, setAllBrands] = useState<TAuto[] | null>(null);
  const [brandModels, setBrandModels] = useState<TBrandModel[] | null>(null);
  const [modifications, setModifications] = useState<TModifications[] | null>(null);
  const [modParams, setModParams] = useState<TModParams | null>(null);
  const [currentTab, setCurrentTab] = useState<number>(0);
  const [currentBrand, setCurrentBrand] = useState<string | null>(null);
  const [currentModel, setCurrentModel] = useState<string | null>(null);
  const [currentMod, setCurrentMod] = useState<string | null>(null);
  const getAllBrands = useCallback(() => {
    fetchData(API_ROUTES.AUTO).then((data: TAuto[]) => setAllBrands(data));
  }, []);
  const getBrandModels = useCallback((id: number, name: string) => {
    fetchData(API_ROUTES.MODEL(id)).then((data: TBrandModel[]) => setBrandModels(data));
    setCurrentTab(1);
    setCurrentBrand(name);
  }, []);
  const getModifications = useCallback((id: number, name: string) => {
    fetchData(API_ROUTES.MODIFICATIONS(id)).then((data: TModifications[]) => setModifications(data));
    setCurrentTab(2);
    setCurrentModel(name);
  }, []);
  const getModificationParams = useCallback((id: number, name: string) => {
    fetchData(API_ROUTES.MODIFICATION_PARAMS(id)).then((data: TModParams[]) => {
      setModParams(data[0]);
    });
    setCurrentTab(3);
    setCurrentMod(name);
  }, []);

  useEffect(() => {
    getAllBrands();
  }, []);

  return (
    <div className={styles.wrapper}>
      <SelectionHeader
        title={!currentMod ? "Подбор стеклоочистителей" : "Стеклоочистители для"}
        misc={[currentBrand, currentModel, currentMod]}
      />
      <GoodsList isCurrent={currentTab === 0} goods={allBrands} onClick={getBrandModels} />
      <GoodsList isCurrent={currentTab === 1} goods={brandModels} onClick={getModifications} />
      <GoodsList isCurrent={currentTab === 2} goods={modifications} onClick={getModificationParams} />
      {modParams && currentTab === 3 && <GoodItem item={modParams} />}
    </div>
  );
};
