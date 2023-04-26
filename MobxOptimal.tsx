import React, { useState, useEffect } from "react";
import { observable } from "mobx";
import { observer, useLocalObservable } from "mobx-react";
import { SIZE, randomInt, useTiming } from "./constants";
import { runInAction } from "mobx";

let cellsTouchedBox = { value: 0 };

const Cell = observer(({ board, i }) => {
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

type Y = ReturnType<typeof observable.box<number>>;

export const MobxOptimal = observer(() => {
  const board = useLocalObservable(() => {
    const res: Y[] = [];
    for (let i = 0; i < SIZE; i++) {
      res.push(observable.box(0));
    }
    return res;
  });

  useEffect(() => {
    cellsTouchedBox.value = 0;

    const intervalId = setInterval(() => {
      runInAction(() => {
        board[randomInt()].set(randomInt(10));
      });
      cellsTouchedBox.value++;
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
          return <Cell board={board} i={i} />;
        })}
    </div>
  );
});
