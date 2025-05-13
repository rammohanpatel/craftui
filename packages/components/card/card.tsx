"use client"
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
    <div className={`rounded-2xl shadow-md bg-white overflow-hidden ${className}`}>
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
