import React, { FC, useEffect, useState } from "react";
import { GoodsListItem } from "../GoodsListItem";

type TGoodsList = {
  goods: any;
  isCurrent: boolean;
  onClick: (id: number, name: string) => void;
};

export const GoodsList: FC<TGoodsList> = ({ goods, isCurrent, onClick }) => {
  const [listGoods, setListGoods] = useState<any>(null);
  useEffect(() => {
    setListGoods(goods);
  }, [goods]);
  return (
    <>
      {listGoods &&
        isCurrent &&
        listGoods.map((item: any) => (
          <GoodsListItem
            key={item.name}
            id={item.id}
            title={item.name}
            onClick={onClick}
          />
        ))}
    </>
  );
};
