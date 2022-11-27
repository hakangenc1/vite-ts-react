import React, { ChangeEvent } from 'react';

interface IInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  onChange: (value: ChangeEvent<HTMLInputElement>) => void;
  value: string;
}

export default function Input({ onChange, value, ...restProps }: IInputProps) {
  return (
    <input
      {...restProps}
      type="text"
      placeholder="Enter your name"
      value={value}
      onChange={(e) => onChange(e)}
    />
  );
}
