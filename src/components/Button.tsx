import { useState } from 'react';

export default function Button() {
  const [counter, setCounter] = useState(0);
  return (
    <div>
      <button type="button" onClick={() => setCounter((prev) => prev + 1)}>
        Button
      </button>
      <p id="counter">{counter}</p>
    </div>
  );
}
