"use client";
import { Button } from "antd";
import { useState } from "react";
const CounterPage = () => {
  const [couter, setCounter] = useState(0);
  return (
    <div className="items-center justify-center min-h-screen">
      <h1 className="p-16">counter: {couter}</h1>
      <Button onClick={() => setCounter(couter + 1)} type="primary">
        Increment
      </Button>
      <Button onClick={() => setCounter(couter - 1)} type="primary">
        Increment
      </Button>
    </div>
  );
};

export default CounterPage;
