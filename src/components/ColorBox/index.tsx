import { Dispatch, DispatchWithoutAction, ReactNode } from "react";
import { MENU_ITEMS, COLORS } from "@/constants";
import cx from "classnames";
import styles from "./index.module.css";
interface Props {
  colors: string;
  updateColor: Dispatch<string>;
}

const ColorBox = ({ colors, updateColor }: Props) => {
  return (
    <div className={styles.itemContainer}>
      <div
        className={cx(styles.colorBox, {
          [styles.active]: colors === colors,
        })}
        style={{ backgroundColor: colors }}
        onClick={() => updateColor(colors)}
      />
    </div>
  );
};

export default ColorBox;
