import React, { useState } from 'react'
import { Button } from '@/components/ui/button.jsx'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card.jsx'
import { Badge } from '@/components/ui/badge.jsx'
import { ArrowRight, Beaker, Zap, Star, ExternalLink, Play, Download, Users } from 'lucide-react'
import NewsletterSignup from '../components/NewsletterSignup.jsx'

const PathAILabs = () => {
  const [activeTab, setActiveTab] = useState('tools')

  const experimentalTools = [
    {
      id: 1,
      name: 'AI Campaign Optimizer',
      description: 'Machine learning algorithm that automatically optimizes ad campaigns across multiple platforms in real-time.',
      status: 'Beta',
      rating: 4.8,
      users: '2.3K',
      category: 'Marketing AI',
      features: ['Real-time optimization', 'Multi-platform support', 'ROI prediction'],
      demoUrl: '#',
      downloadUrl: '#'
    },
    {
      id: 2,
      name: 'Workflow Intelligence Engine',
      description: 'Advanced automation platform that learns from your business processes and suggests optimization opportunities.',
      status: 'Alpha',
      rating: 4.6,
      users: '890',
      category: 'Automation',
      features: ['Process mining', 'Smart suggestions', 'Integration hub'],
      demoUrl: '#',
      downloadUrl: '#'
    },
    {
      id: 3,
      name: 'Predictive Lead Scorer',
      description: 'AI-powered lead scoring system that predicts conversion probability with 94% accuracy.',
      status: 'Beta',
      rating: 4.9,
      users: '1.8K',
      category: 'Intelligence',
      features: ['Behavioral analysis', 'Predictive modeling', 'Real-time scoring'],
      demoUrl: '#',
      downloadUrl: '#'
    }
  ]

  const researchProjects = [
    {
      id: 1,
      title: 'Agentic Automation Framework',
      description: 'Developing autonomous agents that can handle complex business processes without human intervention.',
      progress: 75,
      timeline: 'Q2 2025',
      team: 'PathAI Research Team',
      status: 'In Progress'
    },
    {
      id: 2,
      title: 'Natural Language Workflow Builder',
      description: 'Create complex automation workflows using plain English descriptions powered by advanced NLP.',
      progress: 60,
      timeline: 'Q3 2025',
      team: 'PathAI Research Team',
      status: 'In Progress'
    },
    {
      id: 3,
      title: 'Cross-Platform Intelligence Hub',
      description: 'Unified intelligence layer that connects and analyzes data across all marketing and sales platforms.',
      progress: 40,
      timeline: 'Q4 2025',
      team: 'PathAI Research Team',
      status: 'Research Phase'
    }
  ]

  const betaFeatures = [
    {
      id: 1,
      name: 'Smart Content Generator',
      description: 'AI-powered content creation tool specifically trained on high-converting marketing copy.',
      accessLevel: 'Early Access',
      signupCount: '500+',
      category: 'Content AI'
    },
    {
      id: 2,
      name: 'Automation Health Monitor',
      description: 'Real-time monitoring and alerting system for all your automation workflows.',
      accessLevel: 'Beta',
      signupCount: '1.2K+',
      category: 'Monitoring'
    },
    {
      id: 3,
      name: 'ROI Prediction Engine',
      description: 'Predict the ROI of marketing campaigns before launch using historical data and AI models.',
      accessLevel: 'Alpha',
      signupCount: '300+',
      category: 'Analytics'
    }
  ]

  const getStatusColor = (status) => {
    const colors = {
      'Beta': 'bg-blue-100 text-blue-800',
      'Alpha': 'bg-orange-100 text-orange-800',
      'In Progress': 'bg-green-100 text-green-800',
      'Research Phase': 'bg-purple-100 text-purple-800',
      'Early Access': 'bg-yellow-100 text-yellow-800'
    }
    return colors[status] || 'bg-gray-100 text-gray-800'
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
              <Beaker className="w-4 h-4 mr-2" />
              Innovation Lab
            </Badge>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
              PathAI <span className="text-primary">Labs</span>
            </h1>
            
            <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
              Explore cutting-edge tools, experimental features, and research projects that are shaping 
              the future of marketing automation and AI intelligence.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="text-lg px-8 py-6">
                Get Early Access
                <Zap className="ml-2 h-5 w-5" />
              </Button>
              <Button variant="outline" size="lg" className="text-lg px-8 py-6">
                View Research Papers
                <ExternalLink className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Navigation Tabs */}
      <section className="py-8 bg-background border-b border-border">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-center">
            <div className="flex space-x-1 bg-muted p-1 rounded-lg">
              <button
                onClick={() => setActiveTab('tools')}
                className={`px-6 py-2 rounded-md text-sm font-medium transition-colors ${
                  activeTab === 'tools' 
                    ? 'bg-background text-foreground shadow-sm' 
                    : 'text-muted-foreground hover:text-foreground'
                }`}
              >
                Experimental Tools
              </button>
              <button
                onClick={() => setActiveTab('research')}
                className={`px-6 py-2 rounded-md text-sm font-medium transition-colors ${
                  activeTab === 'research' 
                    ? 'bg-background text-foreground shadow-sm' 
                    : 'text-muted-foreground hover:text-foreground'
                }`}
              >
                Research Projects
              </button>
              <button
                onClick={() => setActiveTab('beta')}
                className={`px-6 py-2 rounded-md text-sm font-medium transition-colors ${
                  activeTab === 'beta' 
                    ? 'bg-background text-foreground shadow-sm' 
                    : 'text-muted-foreground hover:text-foreground'
                }`}
              >
                Beta Features
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Content Sections */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Experimental Tools */}
          {activeTab === 'tools' && (
            <div>
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                  Experimental Tools
                </h2>
                <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                  Beta and alpha versions of our latest AI-powered tools. Get early access and help shape the future.
                </p>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
                {experimentalTools.map((tool) => (
                  <Card key={tool.id} className="group hover:shadow-lg transition-shadow duration-300">
                    <CardHeader>
                      <div className="flex items-center justify-between mb-2">
                        <Badge variant="secondary" className={getStatusColor(tool.status)}>
                          {tool.status}
                        </Badge>
                        <div className="flex items-center gap-1 text-sm text-muted-foreground">
                          <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                          <span>{tool.rating}</span>
                        </div>
                      </div>
                      
                      <CardTitle className="text-xl font-bold group-hover:text-primary transition-colors">
                        {tool.name}
                      </CardTitle>
                      
                      <CardDescription className="text-muted-foreground">
                        {tool.description}
                      </CardDescription>
                    </CardHeader>
                    
                    <CardContent>
                      <div className="space-y-4">
                        <div className="flex items-center justify-between text-sm">
                          <span className="text-muted-foreground">Active Users</span>
                          <div className="flex items-center gap-1">
                            <Users className="w-4 h-4" />
                            <span className="font-medium">{tool.users}</span>
                          </div>
                        </div>

                        <div>
                          <h4 className="font-medium mb-2">Key Features</h4>
                          <ul className="space-y-1">
                            {tool.features.map((feature, index) => (
                              <li key={index} className="text-sm text-muted-foreground flex items-center gap-2">
                                <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                                {feature}
                              </li>
                            ))}
                          </ul>
                        </div>

                        <div className="flex gap-2">
                          <Button variant="outline" size="sm" className="flex-1">
                            <Play className="w-4 h-4 mr-2" />
                            Demo
                          </Button>
                          <Button size="sm" className="flex-1">
                            <Download className="w-4 h-4 mr-2" />
                            Access
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          )}

          {/* Research Projects */}
          {activeTab === 'research' && (
            <div>
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                  Research Projects
                </h2>
                <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                  Cutting-edge research initiatives that will define the next generation of automation and AI tools.
                </p>
              </div>

              <div className="space-y-8">
                {researchProjects.map((project) => (
                  <Card key={project.id} className="group hover:shadow-lg transition-shadow duration-300">
                    <CardHeader>
                      <div className="flex items-center justify-between mb-2">
                        <Badge variant="secondary" className={getStatusColor(project.status)}>
                          {project.status}
                        </Badge>
                        <span className="text-sm text-muted-foreground">{project.timeline}</span>
                      </div>
                      
                      <CardTitle className="text-2xl font-bold group-hover:text-primary transition-colors">
                        {project.title}
                      </CardTitle>
                      
                      <CardDescription className="text-muted-foreground text-lg">
                        {project.description}
                      </CardDescription>
                    </CardHeader>
                    
                    <CardContent>
                      <div className="space-y-4">
                        <div>
                          <div className="flex items-center justify-between mb-2">
                            <span className="text-sm font-medium">Progress</span>
                            <span className="text-sm text-muted-foreground">{project.progress}%</span>
                          </div>
                          <div className="w-full bg-muted rounded-full h-2">
                            <div 
                              className="bg-primary h-2 rounded-full transition-all duration-300" 
                              style={{ width: `${project.progress}%` }}
                            ></div>
                          </div>
                        </div>

                        <div className="flex items-center justify-between text-sm">
                          <span className="text-muted-foreground">Research Team</span>
                          <span className="font-medium">{project.team}</span>
                        </div>

                        <Button variant="outline" className="w-full">
                          Learn More About This Research
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          )}

          {/* Beta Features */}
          {activeTab === 'beta' && (
            <div>
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                  Beta Features
                </h2>
                <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                  Get early access to new features before they're released to the public. Help us test and improve.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {betaFeatures.map((feature) => (
                  <Card key={feature.id} className="group hover:shadow-lg transition-shadow duration-300">
                    <CardHeader>
                      <div className="flex items-center justify-between mb-2">
                        <Badge variant="secondary" className={getStatusColor(feature.accessLevel)}>
                          {feature.accessLevel}
                        </Badge>
                        <span className="text-sm text-muted-foreground">{feature.category}</span>
                      </div>
                      
                      <CardTitle className="text-xl font-bold group-hover:text-primary transition-colors">
                        {feature.name}
                      </CardTitle>
                      
                      <CardDescription className="text-muted-foreground">
                        {feature.description}
                      </CardDescription>
                    </CardHeader>
                    
                    <CardContent>
                      <div className="space-y-4">
                        <div className="flex items-center justify-between text-sm">
                          <span className="text-muted-foreground">Beta Testers</span>
                          <span className="font-medium">{feature.signupCount}</span>
                        </div>

                        <Button className="w-full">
                          Request Access
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Early Access CTA */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Get Early Access to PathAI Labs
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Join our exclusive community of beta testers and be the first to experience 
              the future of marketing automation and AI intelligence.
            </p>
            
            <NewsletterSignup variant="hero" />
            
            <p className="text-sm text-muted-foreground mt-4">
              Early access members get priority access to all new tools and features.
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}

export default PathAILabs
