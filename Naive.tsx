import React, { useRef, useState, useEffect, useCallback } from "react";
import { SIZE, randomInt, useTiming } from "./constants";

let cellsTouchedBox = { value: 0 };

const Cell = ({ board, i }) => {
  return (
    <div
      style={{
        fontFamily: "monospace",
        display: "inline-block",
        height: "10px",
        width: "10px",
        backgroundColor: `rgba(0, 0, 0, ${board[i] / 10})`,
      }}
    />
  );
};

export const Naive = () => {
  const [board, setBoard] = useState(() => {
    return Array(SIZE).fill(0);
  });

  useEffect(() => {
    cellsTouchedBox.value = 0;

    const intervalId = setInterval(() => {
      cellsTouchedBox.value++;
      setBoard((board) => {
        const boardCopy = [...board];
        boardCopy[randomInt()] = randomInt(10);
        return boardCopy;
      });
    });

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  useTiming(cellsTouchedBox);

  return (
    <div style={{ lineHeight: "0px" }}>
      {Array(SIZE)
        .fill(0)
        .map((_row, i) => {
          return <Cell key={i} board={board} i={i} />;
        })}
    </div>
  );
};
