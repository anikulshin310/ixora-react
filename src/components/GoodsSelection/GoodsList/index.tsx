import React, { FC } from "react";
import { GoodsListItem } from "../GoodsListItem";
import styles from "./index.module.scss";

type TGoodsList = {
  goods: any;
  isCurrent: boolean;
  onClick: (id: number) => void;
  handleSelected: (name: string) => void;
};

export const GoodsList: FC<TGoodsList> = ({ goods, isCurrent, onClick, handleSelected }) => {
  return (
    <>
      {goods && isCurrent && (
        <ul className={styles.list}>
          {goods.map((item: any) => (
            <GoodsListItem
              key={item.name}
              id={item.id}
              title={item.name}
              onClick={onClick}
              handleSelected={handleSelected}
            />
          ))}
        </ul>
      )}
    </>
  );
};
