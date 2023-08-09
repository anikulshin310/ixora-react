import React, { FC } from "react";
import styles from "./index.module.scss";

type TSelectionHeader = {
  title: string;
  misc: (string | null)[];
};

export const SelectionHeader: FC<TSelectionHeader> = ({ title, misc }) => {
  return (
    <div className={styles.title}>
      <h3>{title}</h3>
      <span className={styles.model_name}>
        {misc?.[0]} {misc?.[1]}
      </span>{" "}
      {misc?.[2]}
    </div>
  );
};
