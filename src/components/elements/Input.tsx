import React from "react";

interface InputProps {
  placeholder: string;
  name: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  value: string;
}

export const Input: React.FC<InputProps> = ({
  placeholder,
  name,
  onChange,
  value,
}) => {
  return (
    <div>
      <input
        placeholder={placeholder}
        className="min-h-[40px] w-full md:w-[600px] resize-none bg-transparent px-4 py-[1.3rem] focus-within:outline-none"
        name={name}
        onChange={onChange}
        value={value}
      />
    </div>
  );
};
