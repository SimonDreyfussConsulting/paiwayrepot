import React, { useState } from 'react'
import { Button } from '@/components/ui/button.jsx'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card.jsx'
import { Badge } from '@/components/ui/badge.jsx'
import { ArrowRight, Target, Bot, BarChart3, Menu, X, Star, TrendingUp, Zap, CheckCircle, Mail, Calendar, Clock, Users, Newspaper } from 'lucide-react'
import PathAIScore from './components/PathAIScore.jsx'
import Article from './components/Article.jsx'
import NewsletterSignup from './components/NewsletterSignup.jsx'
import ContentSections from './components/ContentSections.jsx'
import { getFeaturedArticles, getLatestArticles } from './data/articles.js'
import './App.css'

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [showPathAIScore, setShowPathAIScore] = useState(false)

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen)
  const openPathAIScore = () => setShowPathAIScore(true)
  const closePathAIScore = () => setShowPathAIScore(false)

  const featuredArticles = getFeaturedArticles()
  const latestArticles = getLatestArticles(6)

  return (
    <div className="min-h-screen bg-background">
      {/* Newsletter Bar */}
      <NewsletterSignup variant="default" />

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
                <a href="#latest" className="text-foreground hover:text-primary transition-colors">Latest</a>
                <a href="#pathai-labs" className="text-foreground hover:text-primary transition-colors">PathAI Labs</a>
                <a href="#automation" className="text-foreground hover:text-primary transition-colors">Automation</a>
                <a href="#intelligence" className="text-foreground hover:text-primary transition-colors">Intelligence</a>
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
                <a href="#latest" className="block px-3 py-2 text-foreground hover:text-primary transition-colors">Latest</a>
                <a href="#pathai-labs" className="block px-3 py-2 text-foreground hover:text-primary transition-colors">PathAI Labs</a>
                <a href="#automation" className="block px-3 py-2 text-foreground hover:text-primary transition-colors">Automation</a>
                <a href="#intelligence" className="block px-3 py-2 text-foreground hover:text-primary transition-colors">Intelligence</a>
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
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
          <div className="text-center max-w-4xl mx-auto">
            <Badge variant="secondary" className="mb-6 text-sm font-medium">
              <Newspaper className="w-4 h-4 mr-2" />
              Digital Intelligence Media
            </Badge>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
              Where Marketing Meets 
              <span className="text-primary"> Automation</span> Meets 
              <span className="text-accent"> Intelligence</span>
            </h1>
            
            <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
              PathAIway is the leading digital intelligence platform covering the intersection of marketing mastery, 
              automation excellence, and AI intelligence. Get daily insights, case studies, and actionable strategies 
              from the world's most successful digital transformations.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Button size="lg" className="text-lg px-8 py-6" onClick={openPathAIScore}>
                Take the PathAI Score™ Assessment
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button variant="outline" size="lg" className="text-lg px-8 py-6">
                Browse Latest Articles
              </Button>
            </div>

            {/* Newsletter Signup Hero */}
            <NewsletterSignup variant="hero" className="mb-12" />

            {/* Social Proof Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">10,000+</div>
                <div className="text-sm text-muted-foreground">Daily Readers</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-secondary mb-2">500+</div>
                <div className="text-sm text-muted-foreground">Case Studies</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-accent mb-2">50+</div>
                <div className="text-sm text-muted-foreground">Tool Reviews</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">$100M+</div>
                <div className="text-sm text-muted-foreground">ROI Documented</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Articles */}
      <section id="latest" className="py-16 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Featured Analysis
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Deep-dive investigations into the most impactful automation and AI implementations 
              driving real business results.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
            {featuredArticles.map((article) => (
              <Article key={article.id} {...article} />
            ))}
          </div>

          {/* Latest Articles Grid */}
          <div className="border-t border-border pt-16">
            <h3 className="text-2xl font-bold text-foreground mb-8">Latest Articles</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {latestArticles.map((article) => (
                <Article key={article.id} {...article} />
              ))}
            </div>
          </div>

          <div className="text-center mt-12">
            <Button variant="outline" size="lg">
              View All Articles
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </section>

      {/* Content Sections */}
      <ContentSections />

      {/* PathAI Method - Simplified */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              The PathAI Method
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Our editorial framework for analyzing and reporting on digital transformation success stories.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="text-center border-primary/20 hover:border-primary/40 transition-colors">
              <CardHeader>
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Target className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="text-primary">Marketing Intelligence</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Analyzing customer acquisition, retention strategies, and campaign optimization 
                  across channels and platforms.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center border-secondary/20 hover:border-secondary/40 transition-colors">
              <CardHeader>
                <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Bot className="h-8 w-8 text-secondary" />
                </div>
                <CardTitle className="text-secondary">Automation Excellence</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Documenting workflow optimization, process automation, and operational 
                  efficiency improvements.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center border-accent/20 hover:border-accent/40 transition-colors">
              <CardHeader>
                <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <BarChart3 className="h-8 w-8 text-accent" />
                </div>
                <CardTitle className="text-accent">Data Intelligence</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Investigating analytics implementation, predictive modeling, and 
                  data-driven decision making.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Never Miss a Breakthrough
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Join 10,000+ professionals getting daily insights on the latest automation tools, 
              AI implementations, and digital transformation case studies.
            </p>
            
            <NewsletterSignup variant="hero" />
            
            <div className="flex items-center justify-center gap-8 mt-8 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-600" />
                <span>Daily insights at 7 AM</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-600" />
                <span>Exclusive case studies</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-600" />
                <span>Tool reviews & comparisons</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
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
                <li><a href="#" className="hover:text-white transition-colors">Latest Articles</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Case Studies</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Tool Reviews</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Industry Reports</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Resources</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">PathAI Score™</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Newsletter</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Free Templates</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Automation Blueprints</a></li>
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

      {/* PathAI Score Modal */}
      {showPathAIScore && (
        <PathAIScore onClose={closePathAIScore} />
      )}
    </div>
  )
}

export default App
