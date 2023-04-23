import { useEffect } from "react";

export const SIZE = 10000;

export const randomInt = (limit = SIZE) => {
  return Math.floor(Math.random() * limit);
};

export const useTiming = (cellsTouchedBox) => {
  useEffect(() => {
    const startTime = Date.now();
    const timerIntervalId = setInterval(() => {
      console.log(
        (cellsTouchedBox.value / (Date.now() - startTime)) * 1000,
        "cells touched/second"
      );
    }, 1000);

    return () => {
      clearInterval(timerIntervalId);
    };
  }, []);
};
