import { useState } from 'react';

export default function Button() {
  const [counter, setCounter] = useState(0);
  return (
    <div>
      <button
        type="button"
        onClick={() => setCounter((prev) => prev + 1)}
        className="px-3 py-2 border bg-gray-900 text-white border-none rounded-md active:relative active:top-[1px]"
      >
        Button
      </button>
      <p id="counter">{counter}</p>
    </div>
  );
}
