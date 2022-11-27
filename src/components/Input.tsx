import React, { useState } from 'react';

export default function Input() {
  const [name, setName] = useState('');
  return (
    <div>
      <input
        type="text"
        placeholder="Enter your name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <p id="name">Name: {name}</p>
    </div>
  );
}
