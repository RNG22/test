import React, { useState } from 'react';

const Counter = () => {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h1 data-testid="count">{count}</h1>
      <button onClick={() => setCount(count + 1)} data-testid="increment">Increment</button>
      <button onClick={() => setCount(count - 1)} data-testid="decrement">Decrement</button>
      <button onClick={() => setCount(0)} data-testid="reset">Reset</button>
    </div>
  );
};


export default Counter;
