"use client"
import React from 'react';

export const ButtonPreview = () => {
  const handleCopy = () => {
    navigator.clipboard.writeText('craftui add button --lang ts --dest ./src/components');
    alert('Copied CLI command!');
  };

  return (
    <div className="border p-4 rounded shadow">
      <h2 className="text-lg font-semibold mb-2">Button Component</h2>
      <button className="px-4 py-2 bg-blue-500 text-white rounded">Click Me</button>
      <div className="mt-4">
        <button
          onClick={handleCopy}
          className="text-sm bg-gray-200 px-3 py-1 rounded hover:bg-gray-300"
        >
          Copy CLI Command
        </button>
      </div>
    </div>
  );
};
