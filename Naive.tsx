import React, {
  useContext,
  useRef,
  useState,
  useEffect,
  useCallback,
} from "react";
import { randomInt, useTiming } from "./constants";
import { SizeContext } from "./App";

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

const NaiveImpl = ({ size }) => {
  const [board, setBoard] = useState(() => {
    return Array(size).fill(0);
  });

  useEffect(() => {
    cellsTouchedBox.value = 0;

    const intervalId = setInterval(() => {
      cellsTouchedBox.value++;
      setBoard((board) => {
        const boardCopy = [...board];
        boardCopy[randomInt(size)] = randomInt(10);
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
      {Array(size)
        .fill(0)
        .map((_row, i) => {
          return <Cell key={i} board={board} i={i} />;
        })}
    </div>
  );
};

export const Naive = () => {
  const size = useContext(SizeContext);

  return <NaiveImpl key={size} size={size} />;
};
