import React, { FC } from "react";

type TGoodsListItem = {
  title: string;
  id: number;
  onClick: (id: number, name: string) => void;
};

export const GoodsListItem: FC<TGoodsListItem> = ({ title, onClick, id }) => {
  return (
    <li key={title} onClick={() => onClick(id, title)}>
      {title}
    </li>
  );
};
