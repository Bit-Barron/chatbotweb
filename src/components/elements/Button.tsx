import React from "react";
import { IconType } from "react-icons";

interface ButtonProps {
  onClick: () => void;
  type: "button" | "submit" | "reset";
  Icon: IconType;
  text: string;
}

export const Button: React.FC<ButtonProps> = ({
  onClick,
  type,
  Icon,
  text,
}) => {
  return (
    <button
      onClick={onClick}
      className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground shadow hover:bg-primary/90 h-9 w-9"
      type={type}
    >
      <Icon className="size-4" />
      <span className="sr-only">{text}</span>
    </button>
  );
};
