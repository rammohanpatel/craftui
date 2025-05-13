"use client"
import Link from "next/link"
import Navbar from "@/components/Navbar"


export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <Navbar />

      {/* Hero Section */}
      <section className="py-16 sm:py-24 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-gray-900 tracking-tight">
              Beautiful UI components for modern applications
            </h1>
            <p className="mt-6 text-xl text-gray-600">
              A professionally designed, fully responsive, and accessible component library to build your next React
              application with speed and consistency.
            </p>
            <div className="mt-10 flex justify-center space-x-4">        
              <Link
                href="/get-started"
                className="inline-flex items-center px-6 py-3 border border-gray-300 text-base font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
              >
                Get Started in 10 sec
              </Link>
              <Link
                href="/components/button"
                className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-gray-900 hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
              >
                Explore Components
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Components Showcase Section */}
      <section id="components" className="py-16 sm:py-24 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">Component Showcase</h2>
            <p className="mt-4 max-w-2xl text-xl text-gray-600 mx-auto">
              Explore our extensive collection of UI components
            </p>
          </div>
        </div>
      </section>

      {/* Documentation Section */}
      

      {/* Footer */}
      <footer className="bg-gray-900 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-lg font-bold mb-4">UI Kit</h3>
              <p className="text-gray-400">
                Beautiful, accessible, and customizable UI components for modern React applications.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-4">Resources</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="#" className="text-gray-400 hover:text-white">
                    Documentation
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-400 hover:text-white">
                    Components
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-400 hover:text-white">
                    Examples
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-400 hover:text-white">
                    Tutorials
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-4">Community</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="#" className="text-gray-400 hover:text-white">
                    GitHub
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-400 hover:text-white">
                    Discord
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-400 hover:text-white">
                    Twitter
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-400 hover:text-white">
                    Stack Overflow
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-4">Legal</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="#" className="text-gray-400 hover:text-white">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-400 hover:text-white">
                    Terms of Service
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-400 hover:text-white">
                    License
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-12 pt-8 border-t border-gray-800 text-center text-gray-400">
            <p>© {new Date().getFullYear()} UI Kit. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
