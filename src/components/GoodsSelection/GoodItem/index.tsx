import React, { FC } from "react";
import { TModParams } from "../../../types";
import styles from "./index.module.scss";

type TGoodItem = {
  item: TModParams;
};
enum PARAMS_NAMES {
  LENGTH1 = "Длина щетки со стороны водителя (см)",
  LENGTH2 = "Длина щетки со стороны пассажира (см)",
  LENGTH3 = "Длина задней щетки (см)",
  FASTEN = "Тип крепления",
}

export const GoodItem: FC<TGoodItem> = ({ item }) => {
  return (
    <>
      {item && (
        <ul className={styles.list}>
          <li>
            {PARAMS_NAMES.LENGTH1} - {item.length1}
          </li>
          <li>
            {PARAMS_NAMES.LENGTH2} - {item.length2}
          </li>
          {item?.length3 && (
            <li>
              {PARAMS_NAMES.LENGTH3} - {item.length3}
            </li>
          )}
          <li>
            {PARAMS_NAMES.FASTEN} - {item.fasten}
          </li>
        </ul>
      )}
      {!item && "Loading..."}
    </>
  );
};
