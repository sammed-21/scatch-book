import { RootState } from "@/store";
import React, { useEffect, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
const Board = () => {
  const canvaseRef = useRef<HTMLCanvasElement | null>(null);
  const activeMenuItem = useSelector(
    (state: RootState) => state.menu.activeMenuItem
  );
  const { color, size } = useSelector(
    (state: RootState) => state.toolbox[activeMenuItem]
  );
  useEffect(() => {
    if (!canvaseRef.current) return;
    const canvas = canvaseRef.current;
    const context = canvas.getContext("2d");

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  }, []);
  console.log(color, size);
  return <canvas ref={canvaseRef}></canvas>;
};

export default Board;
