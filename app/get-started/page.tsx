"use client"
import Navbar from "@/components/Navbar"
import { Terminal, Download, Package } from "lucide-react"

export default function Page() {
  return (
    <>
    <Navbar />
      
      <section id="docs" className="py-5">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">🚀 Getting Started</h2>
          <p className="mt-4 text-xl text-gray-600">Quick and easy setup to start building with our UI components</p>
        </div>

        <div className="mt-12 max-w-3xl mx-auto space-y-8">
          {/* Method 1 */}
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
            <div className="px-6 py-4 border-b border-gray-200 flex items-center">
              <Terminal className="h-5 w-5 mr-2 text-gray-700" />
              <h3 className="text-lg font-medium text-gray-900">🔹 1. Use It Instantly (No Install Needed)</h3>
            </div>
            <div className="p-6">
              <p className="text-gray-600 mb-4">Use npx to run the CLI directly without installing it:</p>
              <div className="bg-gray-800 rounded-lg overflow-hidden">
                <div className="p-4 text-white overflow-x-auto">
                  <pre className="text-sm">
                    <code>
                      npx @curious_ram/craftui add &lt;component-name&gt; --lang &lt;js|ts|tsx&gt; --dest
                      &lt;destination-folder&gt;
                    </code>
                  </pre>
                </div>
              </div>
              <p className="text-gray-600 mt-4 mb-2">Example:</p>
              <div className="bg-gray-800 rounded-lg overflow-hidden">
                <div className="p-4 text-white overflow-x-auto">
                  <pre className="text-sm">
                    <code>npx @curious_ram/craftui add button --lang js --dest ./src/component</code>
                  </pre>
                </div>
              </div>
            </div>
          </div>

          {/* Method 2 */}
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
            <div className="px-6 py-4 border-b border-gray-200 flex items-center">
              <Download className="h-5 w-5 mr-2 text-gray-700" />
              <h3 className="text-lg font-medium text-gray-900">🔹 2. Install It Globally (One-Time Setup)</h3>
            </div>
            <div className="p-6">
              <p className="text-gray-600 mb-4">If you want to use craftui like a system-wide command:</p>
              <div className="bg-gray-800 rounded-lg overflow-hidden">
                <div className="p-4 text-white overflow-x-auto">
                  <pre className="text-sm">
                    <code>npm install -g @curious_ram/craftui</code>
                  </pre>
                </div>
              </div>
              <p className="text-gray-600 mt-4 mb-2">Now you can run:</p>
              <div className="bg-gray-800 rounded-lg overflow-hidden">
                <div className="p-4 text-white overflow-x-auto">
                  <pre className="text-sm">
                    <code>
                      craftui add &lt;component-name&gt; --lang &lt;js|ts|tsx&gt; --dest &lt;destination-folder&gt;
                    </code>
                  </pre>
                </div>
              </div>
              <p className="text-gray-600 mt-4 mb-2">Example:</p>
              <div className="bg-gray-800 rounded-lg overflow-hidden">
                <div className="p-4 text-white overflow-x-auto">
                  <pre className="text-sm">
                    <code>craftui add card --lang tsx --dest ./src/components</code>
                  </pre>
                </div>
              </div>
            </div>
          </div>

          {/* Method 3 */}
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
            <div className="px-6 py-4 border-b border-gray-200 flex items-center">
              <Package className="h-5 w-5 mr-2 text-gray-700" />
              <h3 className="text-lg font-medium text-gray-900">🔹 3. Add It to Your Project (package.json)</h3>
            </div>
            <div className="p-6">
              <p className="text-gray-600 mb-4">
                If you'd prefer to install it locally so your team can use it via npm run or pnpm:
              </p>
              <div className="bg-gray-800 rounded-lg overflow-hidden">
                <div className="p-4 text-white overflow-x-auto">
                  <pre className="text-sm">
                    <code>npm install -D @curious_ram/craftui</code>
                  </pre>
                </div>
              </div>
              <p className="text-gray-600 mt-4 mb-2">Then in your package.json scripts section:</p>
              <div className="bg-gray-800 rounded-lg overflow-hidden">
                <div className="p-4 text-white overflow-x-auto">
                  <pre className="text-sm">
                    <code>{`"scripts": {\n  "add:button": "craftui add button --lang js --dest ./src/components"\n}`}</code>
                  </pre>
                </div>
              </div>
              <p className="text-gray-600 mt-4 mb-2">Now you can run:</p>
              <div className="bg-gray-800 rounded-lg overflow-hidden">
                <div className="p-4 text-white overflow-x-auto">
                  <pre className="text-sm">
                    <code>npm run add:button</code>
                  </pre>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
      </>
    
  )
}
