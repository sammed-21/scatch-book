"use client";
import React, { ChangeEvent } from "react";
import styles from "./index.module.css";
import { COLORS, MENU_ITEMS } from "@/constants";
import { useSelector } from "react-redux";
import { socket } from "@/socket";

import { RootState } from "@/store";
import cx from "classnames";
import { useDispatch } from "react-redux";
import { changeColor, changeBrushSize } from "@/slice/toolboxSlice";

import ColorBox from "../ColorBox";
type toolColor = string;
const Toolbox = () => {
  const dispatch = useDispatch();
  function updateBrushSize(event: ChangeEvent<HTMLInputElement>): void {
    dispatch(
      changeBrushSize({
        item: activeMenuItem,
        size: Number(event.target.value),
      })
    );
    socket.emit("changeConfig", { color, size: event.target.value });
  }
  function updateColor(newColor: string): void {
    dispatch(changeColor({ item: activeMenuItem, color: newColor }));
    socket.emit("changeConfig", { color: newColor, size });
  }
  const activeMenuItem = useSelector(
    (state: RootState) => state.menu.activeMenuItem
  );
  const showStrokToolOption = activeMenuItem === MENU_ITEMS.PENCIL;
  const showBurshToolOption =
    activeMenuItem === MENU_ITEMS.PENCIL ||
    activeMenuItem === MENU_ITEMS.ERASER;
  const { color, size } = useSelector(
    (state: RootState) => state.toolbox[activeMenuItem]
  );
  let colorConstant: toolColor[] = Object.values(COLORS);

  return (
    <div className={styles.toolboxContainer}>
      {showStrokToolOption && (
        <div className={styles.toolItem}>
          <h4 className={styles.toolText}>Stroke Color</h4>
          <div className={styles.itemContainer}>
            {/* {colorConstant.map((item) => {
              return <ColorBox colors={item} updateColor={updateColor} />;
            })} */}
            {/* <div className={styles.itemContainerElement}> */}
            <div
              className={cx(styles.colorBox, {
                [styles.active]: color === COLORS.BLACK,
              })}
              style={{ backgroundColor: COLORS.BLACK }}
              onClick={() => updateColor(COLORS.BLACK)}
            />

            <div
              className={cx(styles.colorBox, {
                [styles.active]: color === COLORS.RED,
              })}
              style={{ backgroundColor: COLORS.RED }}
              onClick={() => updateColor(COLORS.RED)}
            />
            {/* </div> */}
            {/* <div className={styles.itemContainerElement}> */}
            <div
              className={cx(styles.colorBox, {
                [styles.active]: color === COLORS.GREEN,
              })}
              style={{ backgroundColor: COLORS.GREEN }}
              onClick={() => updateColor(COLORS.GREEN)}
            />
            <div
              className={cx(styles.colorBox, {
                [styles.active]: color === COLORS.BLUE,
              })}
              style={{ backgroundColor: COLORS.BLUE }}
              onClick={() => updateColor(COLORS.BLUE)}
            />
            {/* </div> */}
            {/* <div className={styles.itemContainerElement}> */}
            <div
              className={cx(styles.colorBox, {
                [styles.active]: color === COLORS.ORANGE,
              })}
              style={{ backgroundColor: COLORS.ORANGE }}
              onClick={() => updateColor(COLORS.ORANGE)}
            />
            <div
              className={cx(styles.colorBox, {
                [styles.active]: color === COLORS.YELLOW,
              })}
              style={{ backgroundColor: COLORS.YELLOW }}
              onClick={() => updateColor(COLORS.YELLOW)}
            />
            {/* </div> */}
            {/* <div className={styles.itemContainerElement}> */}
            <div
              className={cx(styles.colorBox, {
                [styles.active]: color === COLORS.PURPLE,
              })}
              style={{ backgroundColor: COLORS.PURPLE }}
              onClick={() => updateColor(COLORS.PURPLE)}
            />
            {/* </div> */}
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
              value={size}
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
