'use client'

import { useState } from 'react'

interface MainProps {
  className?: string
}

export default function Main({ className = '' }: MainProps) {
  const [isLoading, setIsLoading] = useState(false)

  return (
    <div className={`bg-white rounded-lg shadow-sm border p-6 ${className}`}>
      <h2 className="text-xl font-semibold mb-4 text-gray-900">
        Main
      </h2>

      <div className="space-y-4">
        <p className="text-gray-600">
          This is the Main component generated for your Next.js application.
        </p>

        <button
          onClick={() => setIsLoading(!isLoading)}
          className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg transition-colors"
          disabled={isLoading}
        >
          {isLoading ? 'Loading...' : 'Interact'}
        </button>
      </div>
    </div>
  )
}