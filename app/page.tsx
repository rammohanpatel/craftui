import React from 'react';
import { ButtonPreview } from '../components/ButtonPreview';

export default function Home() {
  return (
    <main className="min-h-screen p-10 bg-gray-100">
      <h1 className="text-3xl font-bold mb-6">UI Components Showcase</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <ButtonPreview />
        {/* Add more components like <InputPreview />, <CardPreview /> here later */}
      </div>
    </main>
  );
}

