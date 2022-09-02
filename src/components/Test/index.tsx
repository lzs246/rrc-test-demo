import React from "react";

const Test = ({ data }: { data: number[] }) => {
  return <div>{data.reduce((sum, n) => sum + n)}</div>;
};

export default Test;
