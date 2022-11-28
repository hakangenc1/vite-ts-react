import { ChangeEvent, useState } from 'react';

import Button from './components/Button';
import Input from './components/Input';

export default function App() {
  const [name, setName] = useState('');
  const handleOnChange = (e: ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };
  return (
    <div className="h-screen w-full flex bg-slate-600 justify-center items-center">
      <div>
        <Button />
        <Input
          onChange={handleOnChange}
          value={name}
          type="text"
          placeholder="Enter your name"
        />
        <div className="py-2 text-white">Name: {name}</div>
      </div>
    </div>
  );
}
