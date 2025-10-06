import React from 'react'
import { Button } from '@/components/ui/button.jsx'
import { Badge } from '@/components/ui/badge.jsx'
import { ArrowRight, Newspaper } from 'lucide-react'
import NewsletterSignup from '../components/NewsletterSignup.jsx'
import { Link } from 'react-router-dom'

function Home() {
  return (
    <div>
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
              automation excellence, and AI intelligence.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Link to="/pathai-labs">
                <Button size="lg" className="text-lg px-8 py-6">
                  Explore PathAI Labs
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link to="/latest">
                <Button variant="outline" size="lg" className="text-lg px-8 py-6">
                  Browse Latest Articles
                </Button>
              </Link>
            </div>

            <NewsletterSignup variant="hero" className="mb-12" />

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
    </div>
  )
}

export default Home