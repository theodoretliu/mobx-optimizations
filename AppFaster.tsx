import React, { useRef, useState, useEffect, useCallback } from "react";
import { SIZE, randomInt } from "./constants";

const Cell = ({ value, incrementRerenders }) => {
  incrementRerenders();

  return (
    <div
      style={{
        fontFamily: "monospace",
        display: "inline-block",
        height: "10px",
        width: "10px",
        backgroundColor: `rgba(0, 0, 0, ${value.value / 10})`,
        transition: "background-color 500ms",
      }}
    />
  );
};

const Cells = ({ incrementRerenders }) => {
  const boardStates = [];
  const boardStateSetters = [];

  for (let i = 0; i < SIZE; i++) {
    const [cell, setCell] = useState({ value: 0 });
    boardStates.push(cell);
    boardStateSetters.push(setCell);
  }

  useEffect(() => {
    const intervalId = setInterval(() => {
      const idx = randomInt();
      const newValue = randomInt(10);
      boardStateSetters[idx]({ value: newValue });
    }, 0);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return (
    <div style={{ lineHeight: "0px" }}>
      {Array(SIZE)
        .fill(0)
        .map((_row, i) => {
          return (
            <Cell
              key={i}
              value={boardStates[i]}
              incrementRerenders={incrementRerenders}
            />
          );
        })}
    </div>
  );
};

export const App = () => {
  const [numRerenders, setNumRerenders] = useState(0);
  const startTime = useRef(Date.now());
  const incrementRerenders = useCallback(
    () => setNumRerenders((x) => x + 1),
    []
  );

  return (
    <div>
      <div>
        {numRerenders} {numRerenders / (Date.now() - startTime.current)}{" "}
        rerenders/s
      </div>

      <Cells incrementRerenders={incrementRerenders} />
    </div>
  );
};
