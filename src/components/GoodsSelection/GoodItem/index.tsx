import React, { FC } from "react";
import { TModParams } from "../../../types";

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
      {item?.length1 && (
        <li>
          {PARAMS_NAMES.LENGTH1} - {item.length1}
        </li>
      )}
      {item?.length2 && (
        <li>
          {PARAMS_NAMES.LENGTH2} - {item.length2}
        </li>
      )}
      {item?.length3 && (
        <li>
          {PARAMS_NAMES.LENGTH3} - {item.length3}
        </li>
      )}
      {item?.fasten && (
        <li>
          {PARAMS_NAMES.FASTEN} - {item.fasten}
        </li>
      )}
    </>
  );
};
