import React, { useState } from 'react';

export default function Counter() {
  const [count, setCount] = useState(0);

  const incr = () => {
    setCount(count + 1);
  };

  const decr = () => {
    setCount(count - 1);
  };
  const res = () => {
    setCount(0);
  };

  return (
    <div style={{ width: 'auto', background: 'lightYellow' }}>
      <h2 style={{ color: 'teal' }}>how much:{count}</h2>
      <button className="btn btn-danger" onClick={decr}>
        -
      </button>
      <button className="btn btn-dark" onClick={incr}>
        +
      </button>
      <button className="btn btn-warning" onClick={res}>
        res
      </button>
    </div>
  );
}
