import React, { useEffect, useRef } from "react";

const Board = () => {
  const canvaseRef = useRef<HTMLCanvasElement | null>(null);
  useEffect(() => {
    if (!canvaseRef.current) return;
    const canvas = canvaseRef.current;
    const context = canvas.getContext("2d");

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  }, []);
  return <canvas ref={canvaseRef}></canvas>;
};

export default Board;
