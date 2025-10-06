import React, { useState } from 'react'
import { Button } from '@/components/ui/button.jsx'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card.jsx'
import { Badge } from '@/components/ui/badge.jsx'
import { ArrowRight, Target, Bot, BarChart3, Star, TrendingUp, Zap, CheckCircle, Mail, Calendar, Clock, Users, Newspaper } from 'lucide-react'
import PathAIScore from '../components/PathAIScore.jsx'
import Article from '../components/Article.jsx'
import NewsletterSignup from '../components/NewsletterSignup.jsx'
import ContentSections from '../components/ContentSections.jsx'
import { getFeaturedArticles, getLatestArticles } from '../data/articles.js'

const HomePage = () => {
  const [showPathAIScore, setShowPathAIScore] = useState(false)

  const openPathAIScore = () => setShowPathAIScore(true)
  const closePathAIScore = () => setShowPathAIScore(false)

  const featuredArticles = getFeaturedArticles()
  const latestArticles = getLatestArticles(6)

  return (
    <div className="min-h-screen bg-background">
      {/* Newsletter Bar */}
      <NewsletterSignup variant="default" />

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-background via-background to-primary/5">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-5xl mx-auto">
            <Badge variant="secondary" className="mb-6 text-sm font-medium">
              <Newspaper className="w-4 h-4 mr-2" />
              Digital Intelligence Media
            </Badge>
            
            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-foreground mb-6 leading-tight">
              Where Marketing Meets<br />
              <span className="text-primary">Automation</span> Meets <span className="text-accent">Intelligence</span>
            </h1>
            
            <p className="text-xl sm:text-2xl text-muted-foreground mb-10 max-w-4xl mx-auto leading-relaxed">
              PathAIway is the leading digital intelligence platform covering the intersection of 
              marketing mastery, automation excellence, and AI intelligence. Get daily insights, 
              case studies, and actionable strategies from the world's most successful digital transformations.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Button size="lg" className="text-lg px-8 py-6" onClick={openPathAIScore}>
                Take the PathAI Score™ Assessment
                <Zap className="ml-2 h-6 w-6" />
              </Button>
              <Button variant="outline" size="lg" className="text-lg px-8 py-6">
                Browse Latest Articles
                <ArrowRight className="ml-2 h-6 w-6" />
              </Button>
            </div>

            {/* Newsletter Signup */}
            <div className="max-w-2xl mx-auto">
              <h3 className="text-2xl font-semibold mb-4">Get the Daily PathAI Brief</h3>
              <p className="text-muted-foreground mb-6">
                Join 10,000+ professionals getting daily insights on marketing automation, 
                AI tools, and digital intelligence. Delivered every morning at 7 AM.
              </p>
              
              <NewsletterSignup variant="hero" />
              
              <div className="flex items-center justify-center gap-8 mt-6 text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-primary" />
                  <span>Daily insights</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-primary" />
                  <span>Tool reviews</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-primary" />
                  <span>Case studies</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl md:text-5xl font-bold text-primary mb-2">10,000+</div>
              <div className="text-muted-foreground">Daily Readers</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold text-primary mb-2">500+</div>
              <div className="text-muted-foreground">Case Studies</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold text-primary mb-2">50+</div>
              <div className="text-muted-foreground">Tool Reviews</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold text-primary mb-2">$100M+</div>
              <div className="text-muted-foreground">ROI Documented</div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Analysis */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Featured Analysis</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Deep-dive investigations into the most impactful automation and AI implementations driving real business results.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {featuredArticles.map((article) => (
              <Article key={article.id} article={article} featured={true} />
            ))}
          </div>
        </div>
      </section>

      {/* Latest Articles */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Latest Articles</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {latestArticles.map((article) => (
              <Article key={article.id} article={article} />
            ))}
          </div>

          <div className="text-center mt-12">
            <Button variant="outline" size="lg">
              View All Articles
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* Content Sections */}
      <ContentSections />

      {/* The PathAI Method */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">The PathAI Method</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Our editorial framework for analyzing and reporting on digital transformation success stories.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="text-center group hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Target className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="text-xl font-bold group-hover:text-primary transition-colors">
                  Marketing Intelligence
                </CardTitle>
                <CardDescription className="text-muted-foreground">
                  Analyzing customer acquisition, retention strategies, and campaign optimization across channels and platforms.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="text-center group hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Bot className="h-8 w-8 text-secondary" />
                </div>
                <CardTitle className="text-xl font-bold group-hover:text-secondary transition-colors">
                  Automation Excellence
                </CardTitle>
                <CardDescription className="text-muted-foreground">
                  Documenting workflow optimization, process automation, and operational efficiency improvements.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="text-center group hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <BarChart3 className="h-8 w-8 text-accent" />
                </div>
                <CardTitle className="text-xl font-bold group-hover:text-accent transition-colors">
                  Data Intelligence
                </CardTitle>
                <CardDescription className="text-muted-foreground">
                  Investigating analytics implementation, predictive modeling, and data-driven decision making.
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Final Newsletter CTA */}
      <section className="py-16 bg-primary/5">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Never Miss a Breakthrough</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
              Join 10,000+ professionals getting daily insights on the latest automation tools, 
              AI implementations, and digital transformation case studies.
            </p>
          </div>

          <div className="max-w-2xl mx-auto">
            <NewsletterSignup variant="hero" />
            
            <div className="flex items-center justify-center gap-8 mt-6 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                <span>Daily insights at 7 AM</span>
              </div>
              <div className="flex items-center gap-2">
                <Star className="w-4 h-4" />
                <span>Exclusive case studies</span>
              </div>
              <div className="flex items-center gap-2">
                <TrendingUp className="w-4 h-4" />
                <span>Tool reviews & comparisons</span>
              </div>
            </div>
          </div>

          <div className="text-center mt-8">
            <p className="text-sm text-muted-foreground">
              Trusted by 10,000+ automation professionals worldwide
            </p>
          </div>
        </div>
      </section>

      {/* PathAI Score Modal */}
      {showPathAIScore && (
        <PathAIScore onClose={closePathAIScore} />
      )}
    </div>
  )
}

export default HomePage
