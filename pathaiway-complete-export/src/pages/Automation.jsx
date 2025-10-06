import React, { useState } from 'react'
import { Button } from '@/components/ui/button.jsx'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card.jsx'
import { Badge } from '@/components/ui/badge.jsx'
import { ArrowRight, Bot, Zap, Clock, TrendingUp, CheckCircle, Calendar, Users, DollarSign } from 'lucide-react'
import NewsletterSignup from '../components/NewsletterSignup.jsx'

const Automation = () => {
  const [activeService, setActiveService] = useState('workflow')

  const automationServices = [
    {
      id: 'workflow',
      name: 'Workflow Automation',
      description: 'End-to-end process automation that eliminates manual tasks and reduces errors by up to 95%.',
      icon: Bot,
      features: [
        'Custom workflow design',
        'Multi-platform integration',
        'Real-time monitoring',
        'Error handling & recovery',
        'Performance analytics'
      ],
      benefits: [
        '10+ hours saved per week',
        '95% error reduction',
        '300% faster processing',
        'ROI within 3 months'
      ],
      pricing: 'Starting at $2,500/month'
    },
    {
      id: 'intelligent',
      name: 'Intelligent Agents',
      description: 'AI-powered agents that handle complex decision-making and customer interactions autonomously.',
      icon: Zap,
      features: [
        'Natural language processing',
        'Decision tree automation',
        'Customer interaction handling',
        'Learning & adaptation',
        'Multi-channel support'
      ],
      benefits: [
        '24/7 availability',
        '85% query resolution',
        '50% cost reduction',
        'Improved customer satisfaction'
      ],
      pricing: 'Starting at $5,000/month'
    },
    {
      id: 'integration',
      name: 'System Integration',
      description: 'Seamless connection between all your business systems for unified data flow and operations.',
      icon: TrendingUp,
      features: [
        'API development & management',
        'Data synchronization',
        'Legacy system modernization',
        'Cloud migration support',
        'Security & compliance'
      ],
      benefits: [
        'Unified data access',
        '99.9% uptime guarantee',
        'Scalable architecture',
        'Enhanced security'
      ],
      pricing: 'Starting at $3,500/month'
    }
  ]

  const caseStudies = [
    {
      id: 1,
      client: 'CPAD (Community Planning & Development)',
      industry: 'Government',
      challenge: 'Manual permit processing taking 2-3 weeks per application',
      solution: 'Automated workflow with intelligent document processing and approval routing',
      results: [
        '10 hours saved per week',
        '75% faster processing time',
        '90% reduction in errors',
        'Improved citizen satisfaction'
      ],
      timeline: '3 months implementation',
      roi: '400% ROI in first year'
    },
    {
      id: 2,
      client: 'Metropolitan Cabinets',
      industry: 'Manufacturing',
      challenge: 'Disconnected systems causing inventory and order management issues',
      solution: 'Integrated automation platform connecting CRM, inventory, and production systems',
      results: [
        '40% reduction in order processing time',
        '25% improvement in inventory accuracy',
        '60% fewer manual data entry errors',
        'Real-time production visibility'
      ],
      timeline: '4 months implementation',
      roi: '250% ROI in 18 months'
    }
  ]

  const automationTools = [
    {
      name: 'n8n',
      description: 'Open-source workflow automation with 200+ integrations',
      category: 'Workflow Engine',
      rating: 4.8,
      useCases: ['Data processing', 'API integrations', 'Notifications']
    },
    {
      name: 'Power Automate',
      description: 'Microsoft\'s enterprise automation platform with deep Office 365 integration',
      category: 'Enterprise Platform',
      rating: 4.6,
      useCases: ['Document automation', 'Approval workflows', 'Data collection']
    },
    {
      name: 'Zapier',
      description: 'User-friendly automation platform connecting 5000+ apps',
      category: 'Integration Platform',
      rating: 4.7,
      useCases: ['App connections', 'Lead management', 'Social media automation']
    }
  ]

  const currentService = automationServices.find(service => service.id === activeService)
  const ServiceIcon = currentService?.icon

  return (
    <div className="min-h-screen bg-background">
      {/* Newsletter Bar */}
      <NewsletterSignup variant="default" />

      {/* Header */}
      <section className="py-16 bg-gradient-to-br from-background via-background to-secondary/5">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <Badge variant="secondary" className="mb-6 text-sm font-medium">
              <Bot className="w-4 h-4 mr-2" />
              Automation Excellence
            </Badge>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
              Automation <span className="text-secondary">Solutions</span>
            </h1>
            
            <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
              Transform your business operations with intelligent automation that eliminates manual tasks, 
              reduces errors, and accelerates growth. From simple workflows to complex AI agents.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="text-lg px-8 py-6">
                Book a Consultation
                <Calendar className="ml-2 h-5 w-5" />
              </Button>
              <Button variant="outline" size="lg" className="text-lg px-8 py-6">
                View Case Studies
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
              {automationServices.map((service) => (
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
                  <div className="w-12 h-12 bg-secondary/10 rounded-full flex items-center justify-center">
                    <ServiceIcon className="h-6 w-6 text-secondary" />
                  </div>
                  <h2 className="text-3xl font-bold text-foreground">{currentService.name}</h2>
                </div>
                
                <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                  {currentService.description}
                </p>

                <div className="space-y-6">
                  <div>
                    <h3 className="text-lg font-semibold mb-4">Key Features</h3>
                    <ul className="space-y-2">
                      {currentService.features.map((feature, index) => (
                        <li key={index} className="flex items-center gap-3">
                          <CheckCircle className="w-5 h-5 text-secondary" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex items-center gap-4 text-sm text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <DollarSign className="w-4 h-4" />
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
                  <h3 className="text-xl font-semibold mb-4">Expected Benefits</h3>
                  <div className="grid grid-cols-2 gap-4">
                    {currentService.benefits.map((benefit, index) => (
                      <div key={index} className="text-center p-4 bg-muted rounded-lg">
                        <div className="text-2xl font-bold text-secondary mb-1">
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

      {/* Case Studies */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Success Stories
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Real results from our automation implementations across different industries.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {caseStudies.map((study) => (
              <Card key={study.id} className="group hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <Badge variant="secondary" className="bg-secondary/10 text-secondary">
                      {study.industry}
                    </Badge>
                    <span className="text-sm text-muted-foreground">{study.timeline}</span>
                  </div>
                  
                  <CardTitle className="text-xl font-bold group-hover:text-secondary transition-colors">
                    {study.client}
                  </CardTitle>
                  
                  <CardDescription className="text-muted-foreground">
                    <strong>Challenge:</strong> {study.challenge}
                  </CardDescription>
                </CardHeader>
                
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-medium mb-2">Solution</h4>
                      <p className="text-sm text-muted-foreground">{study.solution}</p>
                    </div>

                    <div>
                      <h4 className="font-medium mb-2">Results</h4>
                      <ul className="space-y-1">
                        {study.results.map((result, index) => (
                          <li key={index} className="text-sm text-muted-foreground flex items-center gap-2">
                            <div className="w-1.5 h-1.5 bg-secondary rounded-full"></div>
                            {result}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="flex items-center justify-between pt-4 border-t border-border">
                      <span className="text-lg font-bold text-secondary">{study.roi}</span>
                      <Button variant="outline" size="sm">
                        View Full Case Study
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Automation Tools */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Our Automation Stack
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We leverage the best automation platforms to deliver powerful, scalable solutions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {automationTools.map((tool, index) => (
              <Card key={index} className="text-center group hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <CardTitle className="text-xl font-bold group-hover:text-secondary transition-colors">
                    {tool.name}
                  </CardTitle>
                  <Badge variant="secondary" className="mx-auto">
                    {tool.category}
                  </Badge>
                  <CardDescription className="text-muted-foreground">
                    {tool.description}
                  </CardDescription>
                </CardHeader>
                
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-center justify-center gap-1">
                      <span className="text-2xl font-bold">{tool.rating}</span>
                      <div className="flex">
                        {[...Array(5)].map((_, i) => (
                          <div key={i} className="w-4 h-4 text-yellow-400">★</div>
                        ))}
                      </div>
                    </div>

                    <div>
                      <h4 className="font-medium mb-2">Common Use Cases</h4>
                      <ul className="space-y-1">
                        {tool.useCases.map((useCase, index) => (
                          <li key={index} className="text-sm text-muted-foreground">
                            • {useCase}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-secondary/5">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Ready to Automate Your Business?
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Schedule a consultation to discuss your automation needs and get a custom solution designed for your business.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="text-lg px-8 py-6">
                Book Free Consultation
                <Calendar className="ml-2 h-5 w-5" />
              </Button>
              <Button variant="outline" size="lg" className="text-lg px-8 py-6">
                Download Automation Guide
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Automation
