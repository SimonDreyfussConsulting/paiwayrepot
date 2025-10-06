import React, { useState } from 'react'
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom'
import { Button } from '@/components/ui/button.jsx'
import { Badge } from '@/components/ui/badge.jsx'
import { Menu, X, Zap } from 'lucide-react'
import PathAIScore from './components/PathAIScore.jsx'
import NewsletterSignup from './components/NewsletterSignup.jsx'

// Import all pages
import HomePage from './pages/HomePage.jsx'
import Latest from './pages/Latest.jsx'
import PathAILabs from './pages/PathAILabs.jsx'
import Automation from './pages/Automation.jsx'
import Intelligence from './pages/Intelligence.jsx'
import CaseStudies from './pages/CaseStudies.jsx'

import './App.css'

// Navigation Component
const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [showPathAIScore, setShowPathAIScore] = useState(false)
  const location = useLocation()

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen)
  const openPathAIScore = () => setShowPathAIScore(true)
  const closePathAIScore = () => setShowPathAIScore(false)

  const navItems = [
    { path: '/latest', label: 'Latest', badge: 'orange' },
    { path: '/pathai-labs', label: 'PathAI Labs', badge: 'purple' },
    { path: '/automation', label: 'Automation', badge: 'green' },
    { path: '/intelligence', label: 'Intelligence', badge: 'blue' },
    { path: '/case-studies', label: 'Case Studies', badge: 'red' }
  ]

  const getBadgeColor = (color) => {
    const colors = {
      orange: 'bg-orange-100 text-orange-800',
      purple: 'bg-purple-100 text-purple-800',
      green: 'bg-green-100 text-green-800',
      blue: 'bg-blue-100 text-blue-800',
      red: 'bg-red-100 text-red-800'
    }
    return colors[color] || 'bg-gray-100 text-gray-800'
  }

  return (
    <>
      <nav className="sticky top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-border">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <Link to="/" className="text-2xl font-bold text-primary">
                Path<span className="text-accent">AI</span>way
              </Link>
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-8">
                {navItems.map((item) => (
                  <Link
                    key={item.path}
                    to={item.path}
                    className={`transition-colors ${
                      location.pathname === item.path
                        ? 'text-primary'
                        : 'text-foreground hover:text-primary'
                    }`}
                  >
                    <Badge variant="secondary" className={getBadgeColor(item.badge)}>
                      {item.label}
                    </Badge>
                  </Link>
                ))}
                <Button variant="outline" className="ml-4" onClick={openPathAIScore}>
                  <Zap className="w-4 h-4 mr-2" />
                  PathAI Score™
                </Button>
              </div>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={toggleMenu}
                className="text-foreground hover:text-primary transition-colors"
              >
                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-background border-t border-border">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`block px-3 py-2 text-base font-medium transition-colors ${
                    location.pathname === item.path
                      ? 'text-primary'
                      : 'text-foreground hover:text-primary'
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  <Badge variant="secondary" className={getBadgeColor(item.badge)}>
                    {item.label}
                  </Badge>
                </Link>
              ))}
              <div className="px-3 py-2">
                <Button variant="outline" className="w-full" onClick={openPathAIScore}>
                  <Zap className="w-4 h-4 mr-2" />
                  PathAI Score™
                </Button>
              </div>
            </div>
          </div>
        )}
      </nav>

      {/* PathAI Score Modal */}
      {showPathAIScore && (
        <PathAIScore onClose={closePathAIScore} />
      )}
    </>
  )
}

// Main App Component
function App() {
  return (
    <Router>
      <div className="min-h-screen bg-background">
        <Navigation />
        
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/latest" element={<Latest />} />
          <Route path="/pathai-labs" element={<PathAILabs />} />
          <Route path="/automation" element={<Automation />} />
          <Route path="/intelligence" element={<Intelligence />} />
          <Route path="/case-studies" element={<CaseStudies />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App
