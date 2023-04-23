import React, { useRef, useState, useEffect, useCallback } from "react";
import { SIZE, randomInt } from "./constants";

let rerenders = 0;

const Cell = ({ board, i, incrementRerenders }) => {
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

const Cells = ({ incrementRerenders, incrementNumTouched }) => {
  const [board, setBoard] = useState(() => {
    return Array(SIZE).fill(0);
  });

  useEffect(() => {
    // for (let i = 0; i < SIZE; i++) {
    //   setTimeout(() => {
    //     setBoard((board) => {
    //       const boardCopy = [...board];
    //       boardCopy[SIZE - i - 1] = randomInt(10);
    //       return boardCopy;
    //     });
    //   }, i);
    // }
    setInterval(() => {
      setBoard((board) => {
        const boardCopy = [...board];
        boardCopy[randomInt()] = randomInt(10);
        return boardCopy;
      });
    });
  }, []);

  return (
    <div style={{ lineHeight: "0px" }}>
      {Array(SIZE)
        .fill(0)
        .map((_row, i) => {
          return (
            <Cell
              key={i}
              board={board}
              i={i}
              incrementRerenders={incrementRerenders}
            />
          );
        })}
    </div>
  );
};

export const App = () => {
  // const [numRerenders, setNumRerenders] = useState(0);
  // const [cellsTouched, setCellsTouched] = useState(0);
  // const startTime = useRef(Date.now());
  // const incrementRerenders = useCallback(
  //   () => setNumRerenders((x) => x + 1),
  //   []
  // );
  // const incrementNumTouched = useCallback(
  //   () => setCellsTouched((x) => x + 1),
  //   []
  // );

  return (
    <div>
      {/* <div>
        {numRerenders} {numRerenders / (Date.now() - startTime.current)}{" "}
        rerenders/ms
      </div> */}

      <Cells />
    </div>
  );
};
