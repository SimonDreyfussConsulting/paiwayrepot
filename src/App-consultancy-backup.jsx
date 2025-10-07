// This is the original consultancy version of App.jsx
// Backed up before transforming to media platform

import React, { useState } from 'react'
import { Button } from '@/components/ui/button.jsx'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card.jsx'
import { Badge } from '@/components/ui/badge.jsx'
import { ArrowRight, Target, Bot, BarChart3, Menu, X, Star, TrendingUp, Zap, CheckCircle } from 'lucide-react'
import PathAIScore from './components/PathAIScore.jsx'
import ServicePackages from './components/ServicePackages.jsx'
import CaseStudies from './components/CaseStudies.jsx'
import './App.css'

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [showPathAIScore, setShowPathAIScore] = useState(false)

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen)
  const openPathAIScore = () => setShowPathAIScore(true)
  const closePathAIScore = () => setShowPathAIScore(false)

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-border">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <div className="text-2xl font-bold text-primary">
                Path<span className="text-accent">AI</span>way
              </div>
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-8">
                <a href="#methodology" className="text-foreground hover:text-primary transition-colors">Methodology</a>
                <a href="#services" className="text-foreground hover:text-primary transition-colors">Services</a>
                <a href="#pathways" className="text-foreground hover:text-primary transition-colors">Pathways</a>
                <a href="#case-studies" className="text-foreground hover:text-primary transition-colors">Case Studies</a>
                <Button variant="outline" className="ml-4" onClick={openPathAIScore}>
                  PathAI Score™
                </Button>
              </div>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <Button variant="ghost" size="sm" onClick={toggleMenu}>
                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </Button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden">
              <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-card border-t border-border">
                <a href="#methodology" className="block px-3 py-2 text-foreground hover:text-primary transition-colors">Methodology</a>
                <a href="#services" className="block px-3 py-2 text-foreground hover:text-primary transition-colors">Services</a>
                <a href="#pathways" className="block px-3 py-2 text-foreground hover:text-primary transition-colors">Pathways</a>
                <a href="#case-studies" className="block px-3 py-2 text-foreground hover:text-primary transition-colors">Case Studies</a>
                <Button variant="outline" className="mx-3 mt-2" onClick={openPathAIScore}>
                  PathAI Score™
                </Button>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-background via-background to-primary/5">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
          <div className="text-center max-w-4xl mx-auto">
            <Badge variant="secondary" className="mb-6 text-sm font-medium">
              The Triple Intersection Advantage
            </Badge>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
              Where Marketing Meets 
              <span className="text-primary"> Automation</span> Meets 
              <span className="text-accent"> Intelligence</span>
            </h1>
            
            <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
              PathAIway is the only consultancy operating at the intersection of marketing mastery, 
              automation excellence, and AI intelligence. Transform your business with our proven methodology 
              that doesn't just add value—it multiplies it exponentially.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Button size="lg" className="text-lg px-8 py-6" onClick={openPathAIScore}>
                Take the PathAI Score™ Assessment
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button variant="outline" size="lg" className="text-lg px-8 py-6">
                Explore Our Methodology
              </Button>
            </div>

            {/* Social Proof Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">15+</div>
                <div className="text-sm text-muted-foreground">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-secondary mb-2">$10M+</div>
                <div className="text-sm text-muted-foreground">Ad Spend Managed</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-accent mb-2">1,000+</div>
                <div className="text-sm text-muted-foreground">Hours Saved</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">11,400:1</div>
                <div className="text-sm text-muted-foreground">ROI Record</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Rest of the original consultancy content would continue here... */}
      
      {/* PathAI Score Modal */}
      {showPathAIScore && (
        <PathAIScore onClose={closePathAIScore} />
      )}
    </div>
  )
}

export default App
