import React, { useState } from 'react'
import { Button } from '@/components/ui/button.jsx'
import { Card, CardContent } from '@/components/ui/card.jsx'
import { Mail, ArrowRight, CheckCircle, TrendingUp, Zap, BarChart3 } from 'lucide-react'

const NewsletterSignup = ({ variant = 'default', className = '' }) => {
  const [email, setEmail] = useState('')
  const [isSubscribed, setIsSubscribed] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    if (email) {
      // Here you would integrate with your email service (ConvertKit, etc.)
      console.log('Newsletter signup:', email)
      setIsSubscribed(true)
      setEmail('')
      
      // Reset after 3 seconds
      setTimeout(() => setIsSubscribed(false), 3000)
    }
  }

  if (variant === 'hero') {
    return (
      <div className={`bg-gradient-to-r from-primary/10 via-secondary/10 to-accent/10 rounded-2xl p-8 ${className}`}>
        <div className="text-center max-w-2xl mx-auto">
          <div className="flex justify-center mb-4">
            <div className="bg-primary/10 p-3 rounded-full">
              <Mail className="w-8 h-8 text-primary" />
            </div>
          </div>
          <h3 className="text-2xl font-bold text-foreground mb-3">
            Get the Daily PathAI Brief
          </h3>
          <p className="text-muted-foreground mb-6 leading-relaxed">
            Join 10,000+ professionals getting daily insights on marketing automation, 
            AI tools, and digital intelligence. Delivered every morning at 7 AM.
          </p>
          
          {isSubscribed ? (
            <div className="flex items-center justify-center gap-2 text-green-600 font-medium">
              <CheckCircle className="w-5 h-5" />
              <span>Welcome to the PathAI community!</span>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email address"
                className="flex-1 px-4 py-3 rounded-lg border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                required
              />
              <Button type="submit" size="lg" className="px-6">
                Subscribe
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </form>
          )}
          
          <div className="flex items-center justify-center gap-6 mt-6 text-sm text-muted-foreground">
            <div className="flex items-center gap-1">
              <TrendingUp className="w-4 h-4 text-primary" />
              <span>Daily insights</span>
            </div>
            <div className="flex items-center gap-1">
              <Zap className="w-4 h-4 text-secondary" />
              <span>Tool reviews</span>
            </div>
            <div className="flex items-center gap-1">
              <BarChart3 className="w-4 h-4 text-accent" />
              <span>Case studies</span>
            </div>
          </div>
        </div>
      </div>
    )
  }

  if (variant === 'sidebar') {
    return (
      <Card className={`sticky top-8 ${className}`}>
        <CardContent className="p-6">
          <div className="text-center">
            <div className="bg-primary/10 p-3 rounded-full w-fit mx-auto mb-4">
              <Mail className="w-6 h-6 text-primary" />
            </div>
            <h4 className="font-bold text-lg mb-2">Never Miss an Update</h4>
            <p className="text-sm text-muted-foreground mb-4">
              Get the latest automation insights delivered to your inbox.
            </p>
            
            {isSubscribed ? (
              <div className="flex items-center justify-center gap-2 text-green-600 font-medium text-sm">
                <CheckCircle className="w-4 h-4" />
                <span>Subscribed!</span>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-3">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Your email"
                  className="w-full px-3 py-2 rounded-md border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent text-sm"
                  required
                />
                <Button type="submit" size="sm" className="w-full">
                  Subscribe
                </Button>
              </form>
            )}
          </div>
        </CardContent>
      </Card>
    )
  }

  // Default bar variant
  return (
    <div className={`bg-primary text-primary-foreground py-4 ${className}`}>
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <Mail className="w-5 h-5" />
            <div>
              <span className="font-semibold">Join 10,000+ professionals</span>
              <span className="hidden sm:inline"> getting daily automation insights</span>
            </div>
          </div>
          
          {isSubscribed ? (
            <div className="flex items-center gap-2 text-green-200">
              <CheckCircle className="w-4 h-4" />
              <span className="font-medium">Thanks for subscribing!</span>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex gap-2">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="px-3 py-2 rounded-md border-0 bg-white/10 text-white placeholder:text-white/70 focus:outline-none focus:ring-2 focus:ring-white/30 min-w-[200px]"
                required
              />
              <Button 
                type="submit" 
                variant="secondary" 
                size="sm"
                className="bg-white text-primary hover:bg-white/90"
              >
                Subscribe
              </Button>
            </form>
          )}
        </div>
      </div>
    </div>
  )
}

export default NewsletterSignup
