'use client'

import { useState } from 'react'
import Header from './components/Header'
import Main from './components/Main'
import Sidebar from './components/Sidebar'
import Footer from './components/Footer'

export default function HomePage() {
  return (
    <main className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-center mb-8 text-gray-900">
          Can You Build
        </h1>

        <div className="grid gap-6">
          <Header />
          <Main />
          <Sidebar />
          <Footer />
        </div>
      </div>
    </main>
  )
}