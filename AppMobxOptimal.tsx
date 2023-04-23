import React, { useState, useEffect } from "react";
import { observable } from "mobx";
import { observer, useLocalObservable } from "mobx-react";
import { SIZE, randomInt } from "./constants";
import { runInAction } from "mobx";

const Cell = observer(({ board, i, incrementRerenders }) => {
  setTimeout(() => incrementRerenders(), 0);
  return (
    <div
      style={{
        fontFamily: "monospace",
        display: "inline-block",
        height: "10px",
        width: "10px",
        backgroundColor: `rgba(0, 0, 0, ${board[i].get() / 10})`,
      }}
    />
  );
});

let shouldLog = false;

const startTime = Date.now();

const Counter = observer(({ count }) => {
  return (
    <div>
      {count.get()} {count.get() / (Date.now() - startTime)} rerenders/ms
    </div>
  );
});

type Y = ReturnType<typeof observable.box<number>>;

export const App = observer(() => {
  const board = useLocalObservable(() => {
    const res: Y[] = [];
    for (let i = 0; i < SIZE; i++) {
      res.push(observable.box(0));
    }
    return res;
  });

  const numRerenders = useLocalObservable(() => observable.box(0));

  useEffect(() => {
    // for (let i = 0; i < SIZE; i++) {
    //   setTimeout(() => {
    //     runInAction(() => {
    //       board[SIZE - i - 1].set(randomInt(10));
    //     });
    //   }, i * 1);
    // }
    setInterval(() => {
      runInAction(() => {
        board[randomInt()].set(randomInt(10));
      });
    });
  }, []);

  const incrementRerenders = () => {
    numRerenders.set(numRerenders.get() + 1);
  };

  return (
    <div>
      {/* <Counter count={numRerenders} /> */}

      <div style={{ lineHeight: "0px" }}>
        {Array(SIZE)
          .fill(0)
          .map((_row, i) => {
            return (
              <Cell
                board={board}
                i={i}
                incrementRerenders={incrementRerenders}
              />
            );
          })}
      </div>
    </div>
  );
});
