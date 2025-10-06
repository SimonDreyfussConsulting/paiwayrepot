import React, { useState } from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import { Button } from '@/components/ui/button.jsx'
import { Menu, X } from 'lucide-react'
import NewsletterSignup from './components/NewsletterSignup.jsx'
import PathAIScore from './components/PathAIScore.jsx'

// Fix these imports to match your actual file names:
import Home from './pages/home.jsx'
import Latest from './pages/latest.jsx'
import PathAILabs from './pages/labs.jsx'  // You have labs.jsx not PathAILabs.jsx
import Automation from './pages/automation.jsx'
import Intelligence from './pages/intelligence.jsx'
import CaseStudies from './pages/case-studies.jsx'  // You have case-studies.jsx

import './App.css'

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [showPathAIScore, setShowPathAIScore] = useState(false)

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen)
  const openPathAIScore = () => setShowPathAIScore(true)
  const closePathAIScore = () => setShowPathAIScore(false)

  return (
    <Router>
      <div className="min-h-screen bg-background">
        <NewsletterSignup variant="default" />
        
        <nav className="sticky top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-border">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-16">
              <Link to="/" className="flex items-center">
                <div className="text-2xl font-bold text-primary">
                  Path<span className="text-accent">AI</span>way
                </div>
              </Link>
              
              <div className="hidden md:block">
                <div className="ml-10 flex items-baseline space-x-8">
                  <Link to="/latest" className="text-foreground hover:text-primary transition-colors">Latest</Link>
                  <Link to="/pathai-labs" className="text-foreground hover:text-primary transition-colors">PathAI Labs</Link>
                  <Link to="/automation" className="text-foreground hover:text-primary transition-colors">Automation</Link>
                  <Link to="/intelligence" className="text-foreground hover:text-primary transition-colors">Intelligence</Link>
                  <Link to="/case-studies" className="text-foreground hover:text-primary transition-colors">Case Studies</Link>
                  <Button variant="outline" className="ml-4" onClick={openPathAIScore}>
                    PathAI Score™
                  </Button>
                </div>
              </div>

              <div className="md:hidden">
                <Button variant="ghost" size="sm" onClick={toggleMenu}>
                  {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                </Button>
              </div>
            </div>

            {isMenuOpen && (
              <div className="md:hidden">
                <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-card border-t border-border">
                  <Link to="/latest" onClick={toggleMenu} className="block px-3 py-2 text-foreground hover:text-primary transition-colors">Latest</Link>
                  <Link to="/pathai-labs" onClick={toggleMenu} className="block px-3 py-2 text-foreground hover:text-primary transition-colors">PathAI Labs</Link>
                  <Link to="/automation" onClick={toggleMenu} className="block px-3 py-2 text-foreground hover:text-primary transition-colors">Automation</Link>
                  <Link to="/intelligence" onClick={toggleMenu} className="block px-3 py-2 text-foreground hover:text-primary transition-colors">Intelligence</Link>
                  <Link to="/case-studies" onClick={toggleMenu} className="block px-3 py-2 text-foreground hover:text-primary transition-colors">Case Studies</Link>
                  <Button variant="outline" className="mx-3 mt-2" onClick={openPathAIScore}>
                    PathAI Score™
                  </Button>
                </div>
              </div>
            )}
          </div>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/latest" element={<Latest />} />
          <Route path="/pathai-labs" element={<PathAILabs />} />
          <Route path="/automation" element={<Automation />} />
          <Route path="/intelligence" element={<Intelligence />} />
          <Route path="/case-studies" element={<CaseStudies />} />
        </Routes>

        <footer className="bg-gray-900 text-white py-12 mt-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div>
                <div className="text-2xl font-bold mb-4">
                  Path<span className="text-accent">AI</span>way
                </div>
                <p className="text-gray-400 mb-4">
                  The leading digital intelligence platform covering marketing automation, 
                  AI tools, and digital transformation.
                </p>
              </div>
              
              <div>
                <h4 className="font-semibold mb-4">Content</h4>
                <ul className="space-y-2 text-gray-400">
                  <li><Link to="/latest" className="hover:text-white transition-colors">Latest Articles</Link></li>
                  <li><Link to="/case-studies" className="hover:text-white transition-colors">Case Studies</Link></li>
                  <li><Link to="/pathai-labs" className="hover:text-white transition-colors">PathAI Labs</Link></li>
                  <li><Link to="/automation" className="hover:text-white transition-colors">Automation</Link></li>
                </ul>
              </div>
              
              <div>
                <h4 className="font-semibold mb-4">Resources</h4>
                <ul className="space-y-2 text-gray-400">
                  <li><button onClick={openPathAIScore} className="hover:text-white transition-colors text-left">PathAI Score™</button></li>
                  <li><a href="#" className="hover:text-white transition-colors">Newsletter</a></li>
                  <li><Link to="/intelligence" className="hover:text-white transition-colors">AI Intelligence</Link></li>
                  <li><Link to="/automation" className="hover:text-white transition-colors">Automation Blueprints</Link></li>
                </ul>
              </div>
              
              <div>
                <h4 className="font-semibold mb-4">Connect</h4>
                <ul className="space-y-2 text-gray-400">
                  <li><a href="#" className="hover:text-white transition-colors">LinkedIn</a></li>
                  <li><a href="#" className="hover:text-white transition-colors">Twitter</a></li>
                  <li><a href="#" className="hover:text-white transition-colors">Newsletter</a></li>
                  <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
                </ul>
              </div>
            </div>
            
            <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
              <p>&copy; 2025 PathAIway. All rights reserved.</p>
            </div>
          </div>
        </footer>

        {showPathAIScore && (
          <PathAIScore onClose={closePathAIScore} />
        )}
      </div>
    </Router>
  )
}

export default App