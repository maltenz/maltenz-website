import { useState } from 'react';

type CounterProps = {
  initialCount?: number;
};

export default function Counter({ initialCount = 0 }: CounterProps) {
  const [count, setCount] = useState(initialCount);

  return (
    <div style={{ padding: '20px', border: '1px solid #ccc', borderRadius: '8px' }}>
      <h3>React Counter Component</h3>
      <p>Current count: {count}</p>

      <button type="button" onClick={() => setCount(count + 1)}>
        Increment
      </button>

      <button type="button" onClick={() => setCount(count - 1)} style={{ marginLeft: '8px' }}>
        Decrement
      </button>

      <button type="button" onClick={() => setCount(0)} style={{ marginLeft: '8px' }}>
        Reset
      </button>
    </div>
  );
}
