import React, { FC } from "react";
import styles from "./index.module.scss";

type TMisc = {
  name: string | null;
  handleSelect?: () => void;
  visible?: boolean;
};

type TSelectionHeader = {
  misc: TMisc[];
};

export const SelectionHeader: FC<TSelectionHeader> = ({ misc }) => {
  return (
    <div className={styles.title}>
      <h3 onClick={misc[0].handleSelect}>{misc[0].name}</h3>
      <span className={styles.model_name}>
        {misc[1].visible && <span onClick={misc[1].handleSelect}>{misc[1].name} </span>}
        {misc[2].visible && <span onClick={misc[2].handleSelect}>{misc[2].name}</span>}
      </span>
      {misc[3].visible && <span onClick={misc[3].handleSelect}>{misc[3].name}</span>}
    </div>
  );
};
