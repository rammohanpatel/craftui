"use client"
import React from 'react';

type ButtonProps = {
  label: string;
  onClick?: () => void;
  className?: string;
};

export const Button = ({ label, onClick, className = '' }: ButtonProps) => {
  return (
    <button
      onClick={onClick}
      className={`px-4 py-2 bg-blue-500 text-white rounded ${className}`}
    >
      {label}
    </button>
  );
};
