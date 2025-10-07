import React, { useState } from 'react'
import { Button } from '@/components/ui/button.jsx'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card.jsx'
import { Badge } from '@/components/ui/badge.jsx'
import { ArrowRight, Brain, BarChart3, Target, Lightbulb, CheckCircle, Calendar, TrendingUp, Users, Zap } from 'lucide-react'
import NewsletterSignup from '../components/NewsletterSignup.jsx'

const Intelligence = () => {
  const [activeService, setActiveService] = useState('predictive')

  const intelligenceServices = [
    {
      id: 'predictive',
      name: 'Predictive Analytics',
      description: 'Advanced machine learning models that predict customer behavior, market trends, and business outcomes with 94% accuracy.',
      icon: BarChart3,
      features: [
        'Customer lifetime value prediction',
        'Churn risk assessment',
        'Sales forecasting',
        'Market trend analysis',
        'Real-time model updates'
      ],
      benefits: [
        '94% prediction accuracy',
        '40% increase in conversion',
        '60% reduction in churn',
        '25% revenue growth'
      ],
      pricing: 'Starting at $4,000/month'
    },
    {
      id: 'nlp',
      name: 'Natural Language Processing',
      description: 'AI-powered text analysis and generation for customer insights, content optimization, and automated communication.',
      icon: Brain,
      features: [
        'Sentiment analysis',
        'Content generation',
        'Customer feedback analysis',
        'Automated responses',
        'Multi-language support'
      ],
      benefits: [
        '85% faster content creation',
        '90% sentiment accuracy',
        '70% support automation',
        'Improved customer satisfaction'
      ],
      pricing: 'Starting at $3,000/month'
    },
    {
      id: 'personalization',
      name: 'AI Personalization',
      description: 'Dynamic content and experience personalization that adapts to individual user behavior and preferences in real-time.',
      icon: Target,
      features: [
        'Real-time personalization',
        'Behavioral targeting',
        'Dynamic content optimization',
        'A/B testing automation',
        'Cross-channel consistency'
      ],
      benefits: [
        '300% engagement increase',
        '45% conversion improvement',
        '80% relevance score',
        'Enhanced user experience'
      ],
      pricing: 'Starting at $5,500/month'
    }
  ]

  const analyticsCapabilities = [
    {
      name: 'Customer Journey Mapping',
      description: 'Comprehensive analysis of customer touchpoints and behavior patterns across all channels.',
      metrics: ['Journey completion rate', 'Drop-off points', 'Conversion paths', 'Channel attribution'],
      icon: Users
    },
    {
      name: 'Performance Intelligence',
      description: 'Real-time monitoring and optimization of marketing campaigns and business processes.',
      metrics: ['ROI tracking', 'Performance alerts', 'Optimization suggestions', 'Competitive analysis'],
      icon: TrendingUp
    },
    {
      name: 'Predictive Modeling',
      description: 'Advanced statistical models that forecast business outcomes and identify opportunities.',
      metrics: ['Revenue forecasting', 'Risk assessment', 'Opportunity scoring', 'Trend prediction'],
      icon: Lightbulb
    }
  ]

  const caseStudySnippets = [
    {
      id: 1,
      title: 'Energy Giant: $10M Revenue with AI Agents',
      industry: 'Energy & Utilities',
      challenge: 'Complex RFP processing taking weeks to complete',
      aiSolution: 'Agentic automation with natural language processing',
      results: [
        '$10M additional revenue generated',
        '75% faster RFP processing',
        '90% accuracy in proposal generation',
        '6-month ROI achievement'
      ],
      accuracy: '94%',
      timeframe: '6 months'
    },
    {
      id: 2,
      title: 'Automotive Chain: Predictive Maintenance AI',
      industry: 'Automotive Retail',
      challenge: 'Reactive maintenance causing costly downtime',
      aiSolution: 'Predictive analytics for equipment maintenance',
      results: [
        '50% reduction in downtime',
        '$2M saved in maintenance costs',
        '85% prediction accuracy',
        'Improved customer satisfaction'
      ],
      accuracy: '85%',
      timeframe: '4 months'
    },
    {
      id: 3,
      title: 'SaaS Platform: AI-Powered Lead Scoring',
      industry: 'Software',
      challenge: 'Low conversion rates from marketing qualified leads',
      aiSolution: 'Machine learning lead scoring and personalization',
      results: [
        '205% increase in conversion rate',
        '60% more qualified leads',
        '40% reduction in sales cycle',
        'Improved sales team efficiency'
      ],
      accuracy: '92%',
      timeframe: '3 months'
    }
  ]

  const currentService = intelligenceServices.find(service => service.id === activeService)
  const ServiceIcon = currentService?.icon

  return (
    <div className="min-h-screen bg-background">
      {/* Newsletter Bar */}
      <NewsletterSignup variant="default" />

      {/* Header */}
      <section className="py-16 bg-gradient-to-br from-background via-background to-orange-500/5">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <Badge variant="secondary" className="mb-6 text-sm font-medium">
              <Brain className="w-4 h-4 mr-2" />
              AI Intelligence
            </Badge>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
              Intelligence <span className="text-orange-500">& Analytics</span>
            </h1>
            
            <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
              Harness the power of artificial intelligence and advanced analytics to unlock insights, 
              predict outcomes, and make data-driven decisions that drive exponential growth.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="text-lg px-8 py-6">
                Take PathAI Score™ Assessment
                <Zap className="ml-2 h-5 w-5" />
              </Button>
              <Button variant="outline" size="lg" className="text-lg px-8 py-6">
                View AI Case Studies
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Navigation */}
      <section className="py-8 bg-background border-b border-border">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-center">
            <div className="flex space-x-1 bg-muted p-1 rounded-lg">
              {intelligenceServices.map((service) => (
                <button
                  key={service.id}
                  onClick={() => setActiveService(service.id)}
                  className={`px-6 py-2 rounded-md text-sm font-medium transition-colors ${
                    activeService === service.id 
                      ? 'bg-background text-foreground shadow-sm' 
                      : 'text-muted-foreground hover:text-foreground'
                  }`}
                >
                  {service.name}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Service Details */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {currentService && (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-orange-500/10 rounded-full flex items-center justify-center">
                    <ServiceIcon className="h-6 w-6 text-orange-500" />
                  </div>
                  <h2 className="text-3xl font-bold text-foreground">{currentService.name}</h2>
                </div>
                
                <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                  {currentService.description}
                </p>

                <div className="space-y-6">
                  <div>
                    <h3 className="text-lg font-semibold mb-4">AI Capabilities</h3>
                    <ul className="space-y-2">
                      {currentService.features.map((feature, index) => (
                        <li key={index} className="flex items-center gap-3">
                          <CheckCircle className="w-5 h-5 text-orange-500" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex items-center gap-4 text-sm text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      <span>{currentService.pricing}</span>
                    </div>
                  </div>

                  <Button size="lg" className="w-full sm:w-auto">
                    Get Started with {currentService.name}
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </div>
              </div>

              <div>
                <Card className="p-6">
                  <h3 className="text-xl font-semibold mb-4">Expected Results</h3>
                  <div className="grid grid-cols-2 gap-4">
                    {currentService.benefits.map((benefit, index) => (
                      <div key={index} className="text-center p-4 bg-muted rounded-lg">
                        <div className="text-2xl font-bold text-orange-500 mb-1">
                          {benefit.split(' ')[0]}
                        </div>
                        <div className="text-sm text-muted-foreground">
                          {benefit.split(' ').slice(1).join(' ')}
                        </div>
                      </div>
                    ))}
                  </div>
                </Card>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Analytics Capabilities */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Advanced Analytics Capabilities
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Comprehensive intelligence solutions that transform raw data into actionable insights.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {analyticsCapabilities.map((capability, index) => {
              const CapabilityIcon = capability.icon
              return (
                <Card key={index} className="text-center group hover:shadow-lg transition-shadow duration-300">
                  <CardHeader>
                    <div className="w-12 h-12 bg-orange-500/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <CapabilityIcon className="h-6 w-6 text-orange-500" />
                    </div>
                    <CardTitle className="text-xl font-bold group-hover:text-orange-500 transition-colors">
                      {capability.name}
                    </CardTitle>
                    <CardDescription className="text-muted-foreground">
                      {capability.description}
                    </CardDescription>
                  </CardHeader>
                  
                  <CardContent>
                    <div>
                      <h4 className="font-medium mb-3">Key Metrics</h4>
                      <ul className="space-y-2">
                        {capability.metrics.map((metric, index) => (
                          <li key={index} className="text-sm text-muted-foreground flex items-center gap-2">
                            <div className="w-1.5 h-1.5 bg-orange-500 rounded-full"></div>
                            {metric}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* AI Case Study Snippets */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              AI Intelligence Success Stories
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Real-world implementations of AI and machine learning that delivered measurable business impact.
            </p>
          </div>

          <div className="space-y-8">
            {caseStudySnippets.map((study) => (
              <Card key={study.id} className="group hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <Badge variant="secondary" className="bg-orange-500/10 text-orange-500">
                      {study.industry}
                    </Badge>
                    <div className="flex items-center gap-4 text-sm text-muted-foreground">
                      <span>Accuracy: {study.accuracy}</span>
                      <span>Timeline: {study.timeframe}</span>
                    </div>
                  </div>
                  
                  <CardTitle className="text-2xl font-bold group-hover:text-orange-500 transition-colors">
                    {study.title}
                  </CardTitle>
                  
                  <CardDescription className="text-muted-foreground text-lg">
                    <strong>Challenge:</strong> {study.challenge}
                  </CardDescription>
                </CardHeader>
                
                <CardContent>
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-medium mb-2">AI Solution</h4>
                      <p className="text-sm text-muted-foreground mb-4">{study.aiSolution}</p>
                      
                      <h4 className="font-medium mb-2">Results Achieved</h4>
                      <ul className="space-y-1">
                        {study.results.map((result, index) => (
                          <li key={index} className="text-sm text-muted-foreground flex items-center gap-2">
                            <CheckCircle className="w-4 h-4 text-orange-500" />
                            {result}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="flex items-center justify-center">
                      <div className="text-center p-6 bg-orange-500/5 rounded-lg">
                        <div className="text-4xl font-bold text-orange-500 mb-2">
                          {study.results[0].split(' ')[0]}
                        </div>
                        <div className="text-sm text-muted-foreground">
                          {study.results[0].split(' ').slice(1).join(' ')}
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="flex justify-end pt-4 border-t border-border mt-6">
                    <Button variant="outline">
                      Read Full Case Study
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* PathAI Score CTA */}
      <section className="py-16 bg-orange-500/5">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Discover Your Intelligence Potential
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Take our PathAI Score™ assessment to understand your current AI and analytics maturity 
              and get personalized recommendations for improvement.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="text-lg px-8 py-6">
                Take PathAI Score™ Assessment
                <Zap className="ml-2 h-5 w-5" />
              </Button>
              <Button variant="outline" size="lg" className="text-lg px-8 py-6">
                Schedule AI Consultation
                <Calendar className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Intelligence
