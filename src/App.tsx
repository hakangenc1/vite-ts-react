import { ChangeEvent, useState } from 'react';

import Button from './components/Button';
import Input from './components/Input';

export default function App() {
  const [name, setName] = useState('');
  const handleOnChange = (e: ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };
  return (
    <div>
      <Button />
      <Input onChange={handleOnChange} value={name} />

      <div>Name: {name}</div>
    </div>
  );
}
