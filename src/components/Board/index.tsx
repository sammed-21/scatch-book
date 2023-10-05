import { RootState } from "@/store";
import React, { useEffect, useLayoutEffect, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
const Board = () => {
  const canvaseRef = useRef<HTMLCanvasElement | null>(null);
  const shouldDraw = useRef<HTMLCanvasElement | boolean>(false);
  const activeMenuItem = useSelector(
    (state: RootState) => state.menu.activeMenuItem
  );
  const { color, size } = useSelector(
    (state: RootState) => state.toolbox[activeMenuItem]
  );

  useEffect(() => {
    console.log(typeof size);
    if (!canvaseRef.current) return;
    const canvas = canvaseRef.current;
    const context = canvas.getContext("2d");

    if (!context) return; // Check if context is truthy

    const changeConfig = () => {
      context.lineWidth = Number(size);
      context.strokeStyle = String(color);
    };

    changeConfig();
  }, [color, size]);

  useLayoutEffect(() => {
    if (!canvaseRef.current) return;
    const canvas = canvaseRef.current;
    const context = canvas.getContext("2d");

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    const beginPath = (x: number, y: number) => {
      if (context) {
        context.beginPath();
        context.moveTo(x, y);
      }
    };
    const drawLine = (x: number, y: number) => {
      if (context) {
        context.lineTo(x, y);
        context.stroke();
      }
    };
    const handleMouseDown = (e: MouseEvent) => {
      shouldDraw.current = true;
      beginPath(e.clientX, e.clientY);
    };

    const handleMouseMove = (e: MouseEvent) => {
      if (!shouldDraw.current || !context) return;
      drawLine(e.clientX, e.clientY);
    };

    const handleMouseUp = () => {
      shouldDraw.current = false;
    };

    canvas.addEventListener("mousedown", handleMouseDown);
    canvas.addEventListener("mousemove", handleMouseMove);
    canvas.addEventListener("mouseup", handleMouseUp);
    return () => {
      canvas.removeEventListener("mousedown", handleMouseDown);
      canvas.removeEventListener("mousemove", handleMouseMove);
      canvas.removeEventListener("mouseup", handleMouseUp);
    };
  }, []);
  console.log(color, size);
  return <canvas ref={canvaseRef}></canvas>;
};

export default Board;
