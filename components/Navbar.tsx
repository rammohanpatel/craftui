import React from 'react'
import Link from 'next/link'

const Navbar = () => {
  return (
    <header className="border-b">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center">
              <Link href='/' className="text-xl font-bold">CraftUI</Link>
            </div>
            <nav className="hidden md:flex space-x-8">
              <Link href="/components/button" className="text-gray-600 hover:text-gray-900">
                Components
              </Link>
              <Link href="/get-started" className="text-gray-600 hover:text-gray-900">
                Documentation
              </Link>
            </nav>
          </div>
        </div>
      </header>
  )
}

export default Navbar
