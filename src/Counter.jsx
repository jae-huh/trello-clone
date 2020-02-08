import React, { useContext } from 'react';
import { CounterContext } from './App';

const Counter = () => {
  const { count } = useContext(CounterContext);

  return (
    <h3>Counter: {count}</h3>
  );
};

export default Counter;
