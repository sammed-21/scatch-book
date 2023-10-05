"use client";
import React, { ChangeEvent } from "react";
import styles from "./index.module.css";
import { COLORS, MENU_ITEMS } from "@/constants";
import { useSelector } from "react-redux";
import { RootState } from "@/store";
const Toolbox = () => {
  function updateBrushSize(event: ChangeEvent<HTMLInputElement>): void {
    console.log(event.target.value);
  }
  const activeMenuItem = useSelector(
    (state: RootState) => state.menu.activeMenuItem
  );
  const showStrokToolOption = activeMenuItem === MENU_ITEMS.PENCIL;
  const showBurshToolOption =
    activeMenuItem === MENU_ITEMS.PENCIL ||
    activeMenuItem === MENU_ITEMS.ERASER;
  return (
    <div className={styles.toolboxContainer}>
      {showStrokToolOption && (
        <div className={styles.toolItem}>
          <h4 className={styles.toolText}>Stroke Color</h4>
          <div className={styles.itemContainer}>
            <div
              className={styles.colorBox}
              style={{ backgroundColor: COLORS.BLACK }}
            />
            <div
              className={styles.colorBox}
              style={{ backgroundColor: COLORS.BLACK }}
            />
            <div
              className={styles.colorBox}
              style={{ backgroundColor: COLORS.RED }}
            />
            <div
              className={styles.colorBox}
              style={{ backgroundColor: COLORS.GREEN }}
            />
            <div
              className={styles.colorBox}
              style={{ backgroundColor: COLORS.BLUE }}
            />
            <div
              className={styles.colorBox}
              style={{ backgroundColor: COLORS.ORANGE }}
            />
            <div
              className={styles.colorBox}
              style={{ backgroundColor: COLORS.YELLOW }}
            />
            <div
              className={styles.colorBox}
              style={{ backgroundColor: COLORS.WHITE }}
            />
          </div>
        </div>
      )}
      {showBurshToolOption && (
        <div className={styles.toolItem}>
          <h4 className={styles.toolText}>Brush size {activeMenuItem}</h4>
          <div className={styles.itemContainer}>
            <input
              type="range"
              min={1}
              max={10}
              step={1}
              onChange={updateBrushSize}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default Toolbox;
