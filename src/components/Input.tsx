import React, { ChangeEvent, useState } from 'react';

interface IInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  onChange: (value: ChangeEvent<HTMLInputElement>) => void;
  value: string;
  type?: string;
}

export default function Input({
  onChange,
  value,
  type,
  ...restProps
}: IInputProps) {
  return (
    <>
      <input
        {...restProps}
        type={type}
        className="px-3 py-2 outline-none rounded-sm"
        value={value}
        onChange={(e) => onChange(e)}
      />
    </>
  );
}
