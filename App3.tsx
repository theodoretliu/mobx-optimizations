import React, { useState, useEffect } from "react";
import { observer, useLocalObservable } from "mobx-react";
import { SIZE, randomInt } from "./constants";
import { runInAction } from "mobx";

let rerenders = 0;
let startTime = Date.now();

const Cell = observer(({ board, i }) => {
  return (
    <div
      style={{
        fontFamily: "monospace",
        display: "inline-block",
        height: "10px",
        width: "10px",
        backgroundColor: `rgba(0, 0, 0, ${board[i] / 10})`,
        transition: "background-color 500ms",
      }}
    />
  );
});

let shouldLog = false;

export const App = observer(() => {
  const board = useLocalObservable(() => {
    const res = [];
    for (let i = 0; i < SIZE; i++) {
      res.push(0);
    }
    return res;
  });

  useEffect(() => {
    const intervalId = setInterval(() => {
      const indexToUpdate = randomInt();
      runInAction(() => {
        board[indexToUpdate] = randomInt(10);
      });
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
          return <Cell key={i} board={board} i={i} />;
        })}
    </div>
  );
});
