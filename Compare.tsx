import React from "react";

const onClick = () => {
  const width = screen.width;
  const height = screen.height;
  const halfWidth = Math.floor(width / 2);

  window.open(
    "/naive",
    "_blank",
    `left=0,top=0,width=${halfWidth},height=${height}`
  );
  window.open(
    "/mobx-optimal",
    "_blank",
    `left=${halfWidth},top=0,width=${halfWidth},height=${height}`
  );
};

export const Compare = () => {
  return (
    <div>
      <button onClick={onClick}>Click to compare</button>
    </div>
  );
};
