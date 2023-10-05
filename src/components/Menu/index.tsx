import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  faPencil,
  faEraser,
  faRotateLeft,
  faRotateRight,
  faFileArrowDown,
} from "@fortawesome/free-solid-svg-icons";
import styles from "./index.module.css";
import { useDispatch } from "react-redux";
import { MENU_ITEMS } from "@/constants";
import { menuItemClick } from "@/slice/menuSlice";
import { useSelector } from "react-redux";
import { RootState } from "@/store";
import cx from "classnames";
const Menu = () => {
  const dispatch = useDispatch();
  const handleMenuClick = (itemName: string) => {
    dispatch(menuItemClick(itemName));
  };
  const activeMenuItem = useSelector(
    (state: RootState) => state.menu.activeMenuItem
  );
  return (
    <div className={styles.menuContainer}>
      <div
        className={cx(styles.iconWrapper, {
          [styles.active]: activeMenuItem === MENU_ITEMS.PENCIL,
        })}
        onClick={() => handleMenuClick(MENU_ITEMS.PENCIL)}
      >
        <FontAwesomeIcon icon={faPencil} className={styles.icon} />
      </div>
      <div
        className={cx(styles.iconWrapper, {
          [styles.active]: activeMenuItem === MENU_ITEMS.ERASER,
        })}
        onClick={() => handleMenuClick(MENU_ITEMS.ERASER)}
      >
        <FontAwesomeIcon icon={faEraser} className={styles.icon} />
      </div>
      <div className={styles.iconWrapper}>
        <FontAwesomeIcon icon={faRotateLeft} className={styles.icon} />
      </div>
      <div className={styles.iconWrapper}>
        <FontAwesomeIcon icon={faRotateRight} className={styles.icon} />
      </div>
      <div className={styles.iconWrapper}>
        <FontAwesomeIcon icon={faFileArrowDown} className={styles.icon} />
      </div>
    </div>
  );
};
export default Menu;
