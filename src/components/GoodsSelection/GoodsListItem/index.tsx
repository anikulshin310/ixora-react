import React, { FC } from "react";

type TGoodsListItem = {
  title: string;
  id: number;
  onClick: (id: number) => void;
  handleSelected: (name: string) => void;
};

export const GoodsListItem: FC<TGoodsListItem> = ({ title, onClick, id, handleSelected }) => {
  const handleClick = (id: number, name: string) => {
    onClick(id);
    handleSelected(name);
  };
  return (
    <li key={title} onClick={() => handleClick(id, title)}>
      {title}
    </li>
  );
};
