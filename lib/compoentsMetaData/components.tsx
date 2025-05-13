"use client"
import {Button} from '../../packages/components/button/button';
import {Card} from '../../packages/components/card/card';

export const components = {
  button: {
    name: 'Button',
    slug: 'button',
    preview: <Button label= "Click me" />, // import from actual component file
    code: `
    import React from 'react'

    type ButtonProps = {
    label: string;
    onClick?: () => void;
    className?: string;
    }

    export const Button = ({ label, onClick, className = '' }: ButtonProps) => {
    return (
        <button
            onClick={onClick}
            className={\`px-4 py-2 bg-blue-500 text-white rounded \${className}\`}
            >
            {label}
        </button>
    )
    }
    `.trim(),
  },
  card: {
    name: 'Card',
    slug: 'card',
    preview: (
      <Card
        title="Modern UI Card"
        description="This is a reusable card component with image, text, and custom content."
        imageUrl="https://picsum.photos/600/300"
      >
        <button className="mt-2 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
          Learn More
        </button>
      </Card>
    ),
    code: `
  import React from "react"
  
  type CardProps = {
    title: string
    description: string
    imageUrl?: string
    className?: string
    children?: React.ReactNode
  }
  
  export const Card: React.FC<CardProps> = ({
    title,
    description,
    imageUrl,
    className = "",
    children,
  }) => {
    return (
      <div className={\`rounded-2xl shadow-md bg-white overflow-hidden \${className}\`}>
        {imageUrl && (
          <img
            src={imageUrl}
            alt={title}
            className="w-full h-48 object-cover"
          />
        )}
        <div className="p-6">
          <h2 className="text-xl font-semibold mb-2 text-gray-800">{title}</h2>
          <p className="text-gray-600 mb-4">{description}</p>
          {children}
        </div>
      </div>
    )
  }
    `.trim(),
  },
  
};
