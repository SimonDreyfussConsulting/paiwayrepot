import React, { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button.jsx'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card.jsx'
import { Badge } from '@/components/ui/badge.jsx'
import { ArrowRight, Calendar, Clock, User } from 'lucide-react'
import NewsletterSignup from '../components/NewsletterSignup.jsx'

const Latest = () => {
  const [posts, setPosts] = useState([])
  const [loading, setLoading] = useState(true)

  // Sanity configuration
  const SANITY_PROJECT_ID = 'fpt8mqtx'
  const SANITY_DATASET = 'production'
  const SANITY_API_VERSION = '2025-01-01'

  useEffect(() => {
    fetchPosts()
  }, [])

  const fetchPosts = async () => {
    try {
      const query = `*[_type == "post"] | order(publishedAt desc) {
        _id,
        title,
        slug,
        excerpt,
        publishedAt,
        author,
        categories,
        "imageUrl": mainImage.asset->url
      }`
      
      const url = `https://${SANITY_PROJECT_ID}.api.sanity.io/v${SANITY_API_VERSION}/data/query/${SANITY_DATASET}?query=${encodeURIComponent(query)}`
      
      const response = await fetch(url)
      const data = await response.json()
      
      if (data.result) {
        setPosts(data.result)
      }
    } catch (error) {
      console.error('Error fetching posts:', error)
      // Fallback to placeholder data if Sanity fails
      setPosts(placeholderPosts)
    } finally {
      setLoading(false)
    }
  }

  // Placeholder posts in case Sanity is not available
  const placeholderPosts = [
    {
      _id: '1',
      title: 'How an Energy Giant Generated $10M Revenue with Agentic Automation',
      excerpt: 'Deep dive into the first enterprise-scale agentic automation implementation that transformed RFP processing and customer engagement, delivering unprecedented ROI in just 6 months.',
      publishedAt: '2025-10-03',
      author: 'PathAIway Editorial',
      categories: ['Case Studies'],
      slug: { current: 'energy-giant-10m-automation' }
    },
    {
      _id: '2',
      title: 'Automotive Retailer Saves $50M Through Enterprise Automation',
      excerpt: 'How a 1,300-store automotive service chain achieved 30% faster financial cycles, 33% productivity gains, and massive cost reductions through strategic automation across five business functions.',
      publishedAt: '2025-10-02',
      author: 'PathAIway Editorial',
      categories: ['Case Studies'],
      slug: { current: 'automotive-50m-transformation' }
    },
    {
      _id: '3',
      title: 'HubSpot vs Marketo vs Pardot: 2025 Enterprise Comparison',
      excerpt: 'Comprehensive analysis of the top three marketing automation platforms, including pricing, features, integration capabilities, and real-world performance metrics from 500+ implementations.',
      publishedAt: '2025-10-01',
      author: 'PathAIway Editorial',
      categories: ['Marketing AI'],
      slug: { current: 'hubspot-marketo-pardot-2025' }
    },
    {
      _id: '4',
      title: 'ChatGPT vs Claude vs Gemini for Marketing Copy: Which AI Wins?',
      excerpt: 'We tested 100 marketing campaigns across three leading AI models to determine which produces the highest-converting copy for different industries and use cases.',
      publishedAt: '2025-09-30',
      author: 'PathAIway Editorial',
      categories: ['Marketing AI'],
      slug: { current: 'ai-copywriting-comparison' }
    },
    {
      _id: '5',
      title: 'Email Deliverability Crisis: What Changed in 2024',
      excerpt: 'Analysis of the major email provider policy changes that affected deliverability rates across the industry, plus actionable strategies to maintain inbox placement.',
      publishedAt: '2025-09-28',
      author: 'PathAIway Editorial',
      categories: ['Marketing AI'],
      slug: { current: 'email-deliverability-crisis-2024' }
    },
    {
      _id: '6',
      title: 'Zapier Alternatives: n8n, Make, and Power Automate Tested',
      excerpt: 'Hands-on comparison of automation platforms including cost analysis, complexity ratings, and performance benchmarks for enterprise and SMB use cases.',
      publishedAt: '2025-09-27',
      author: 'PathAIway Editorial',
      categories: ['Automation Tools'],
      slug: { current: 'zapier-alternatives-2025' }
    }
  ]

  const formatDate = (dateString) => {
    const date = new Date(dateString)
    return date.toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'short', 
      day: 'numeric' 
    })
  }

  const getCategoryColor = (category) => {
    const colors = {
      'Case Studies': 'bg-blue-100 text-blue-800',
      'Marketing AI': 'bg-green-100 text-green-800',
      'Automation Tools': 'bg-orange-100 text-orange-800',
      'Intelligence Reports': 'bg-purple-100 text-purple-800'
    }
    return colors[category] || 'bg-gray-100 text-gray-800'
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Newsletter Bar */}
      <NewsletterSignup variant="default" />

      {/* Header */}
      <section className="py-16 bg-gradient-to-br from-background via-background to-primary/5">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <Badge variant="secondary" className="mb-6 text-sm font-medium">
              <Calendar className="w-4 h-4 mr-2" />
              Latest Articles
            </Badge>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
              Latest <span className="text-primary">Intelligence</span>
            </h1>
            
            <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
              Stay ahead of the curve with our latest insights on marketing automation, 
              AI tools, and digital transformation strategies from industry leaders.
            </p>
          </div>
        </div>
      </section>

      {/* Articles Grid */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {loading ? (
            <div className="text-center py-12">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto"></div>
              <p className="mt-4 text-muted-foreground">Loading latest articles...</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {posts.map((post) => (
                <Card key={post._id} className="group hover:shadow-lg transition-shadow duration-300">
                  {post.imageUrl && (
                    <div className="aspect-video overflow-hidden rounded-t-lg">
                      <img 
                        src={post.imageUrl} 
                        alt={post.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                  )}
                  
                  <CardHeader>
                    <div className="flex items-center gap-2 mb-2">
                      {post.categories && post.categories.map((category, index) => (
                        <Badge 
                          key={index} 
                          variant="secondary" 
                          className={getCategoryColor(category)}
                        >
                          {category}
                        </Badge>
                      ))}
                    </div>
                    
                    <CardTitle className="text-xl font-bold leading-tight group-hover:text-primary transition-colors">
                      {post.title}
                    </CardTitle>
                    
                    <CardDescription className="text-muted-foreground line-clamp-3">
                      {post.excerpt || post.title}
                    </CardDescription>
                  </CardHeader>
                  
                  <CardContent>
                    <div className="flex items-center justify-between text-sm text-muted-foreground mb-4">
                      <div className="flex items-center gap-4">
                        <div className="flex items-center gap-1">
                          <User className="w-4 h-4" />
                          <span>{post.author}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Calendar className="w-4 h-4" />
                          <span>{formatDate(post.publishedAt)}</span>
                        </div>
                      </div>
                    </div>
                    
                    <Button 
                      variant="outline" 
                      className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors"
                    >
                      Read Full Analysis
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}

          {/* Load More Button */}
          <div className="text-center mt-12">
            <Button variant="outline" size="lg">
              Load More Articles
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Never Miss an Update
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Get the latest articles delivered to your inbox every morning at 7 AM.
            </p>
            
            <NewsletterSignup variant="hero" />
          </div>
        </div>
      </section>
    </div>
  )
}

export default Latest
