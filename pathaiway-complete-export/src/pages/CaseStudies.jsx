import React, { useState } from 'react'
import { Button } from '@/components/ui/button.jsx'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card.jsx'
import { Badge } from '@/components/ui/badge.jsx'
import { ArrowRight, FileText, TrendingUp, Clock, Users, DollarSign, CheckCircle, Filter, Search } from 'lucide-react'
import { Input } from '@/components/ui/input.jsx'
import NewsletterSignup from '../components/NewsletterSignup.jsx'

const CaseStudies = () => {
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [searchTerm, setSearchTerm] = useState('')

  const categories = [
    { id: 'all', name: 'All Case Studies', count: 12 },
    { id: 'automation', name: 'Automation', count: 5 },
    { id: 'ai', name: 'AI & Intelligence', count: 4 },
    { id: 'marketing', name: 'Marketing', count: 3 }
  ]

  const caseStudies = [
    {
      id: 1,
      title: 'Energy Giant Generates $10M Revenue with Agentic Automation',
      client: 'Fortune 500 Energy Company',
      industry: 'Energy & Utilities',
      category: 'ai',
      challenge: 'Complex RFP processing taking 3-4 weeks per proposal, limiting bid capacity and revenue potential.',
      solution: 'Implemented agentic automation system with natural language processing for automated RFP analysis, proposal generation, and client communication.',
      results: [
        '$10M additional revenue generated in 6 months',
        '75% reduction in RFP processing time',
        '90% accuracy in automated proposal generation',
        '300% increase in bid capacity'
      ],
      metrics: {
        roi: '400%',
        timeline: '6 months',
        savings: '$10M',
        efficiency: '75%'
      },
      technologies: ['Natural Language Processing', 'Agentic AI', 'Document Automation', 'CRM Integration'],
      featured: true
    },
    {
      id: 2,
      title: 'Automotive Retailer Saves $50M Through Enterprise Transformation',
      client: '1,300-Store Automotive Service Chain',
      industry: 'Automotive Retail',
      category: 'automation',
      challenge: 'Disconnected systems across 1,300 locations causing inventory issues, slow financial cycles, and operational inefficiencies.',
      solution: 'Comprehensive automation platform integrating POS, inventory, CRM, and financial systems with real-time data synchronization.',
      results: [
        '$50M in cost savings over 5 years',
        '30% faster financial close cycles',
        '33% improvement in productivity',
        '95% reduction in data entry errors'
      ],
      metrics: {
        roi: '250%',
        timeline: '18 months',
        savings: '$50M',
        efficiency: '33%'
      },
      technologies: ['Enterprise Integration', 'Process Automation', 'Real-time Analytics', 'Cloud Migration'],
      featured: true
    },
    {
      id: 3,
      title: '806% Growth: How 6click Scaled with HubSpot Integration',
      client: '6click GRC Software',
      industry: 'Software/SaaS',
      category: 'marketing',
      challenge: 'Manual lead management and disconnected sales processes limiting growth potential in competitive GRC market.',
      solution: 'Advanced HubSpot automation with custom workflows, lead scoring, and integrated sales pipeline management.',
      results: [
        '806% operational growth achieved',
        '400% increase in qualified leads',
        '60% reduction in sales cycle length',
        '95% improvement in lead conversion'
      ],
      metrics: {
        roi: '806%',
        timeline: '12 months',
        savings: '$2.5M',
        efficiency: '60%'
      },
      technologies: ['HubSpot Automation', 'Lead Scoring', 'Sales Pipeline', 'Marketing Analytics'],
      featured: true
    },
    {
      id: 4,
      title: 'CPAD Automation Saves 10 Hours Weekly',
      client: 'Community Planning & Development',
      industry: 'Government',
      category: 'automation',
      challenge: 'Manual permit processing workflows causing delays and citizen dissatisfaction.',
      solution: 'Automated permit processing system with digital forms, approval workflows, and citizen portal.',
      results: [
        '10 hours saved per week per employee',
        '75% faster permit processing',
        '90% reduction in processing errors',
        'Improved citizen satisfaction scores'
      ],
      metrics: {
        roi: '300%',
        timeline: '4 months',
        savings: '$150K',
        efficiency: '75%'
      },
      technologies: ['Workflow Automation', 'Digital Forms', 'Document Management', 'Citizen Portal'],
      featured: false
    },
    {
      id: 5,
      title: 'Manufacturing Giant Achieves 205% ROI with Marketo',
      client: 'Multinational Manufacturing Conglomerate',
      industry: 'Manufacturing',
      category: 'marketing',
      challenge: 'Fragmented marketing efforts across multiple business units with poor lead quality and attribution.',
      solution: 'Enterprise Marketo implementation with advanced lead scoring, attribution modeling, and cross-unit reporting.',
      results: [
        '205% ROI achieved in 6 months',
        '150% increase in marketing qualified leads',
        '85% improvement in lead quality scores',
        'Unified reporting across all business units'
      ],
      metrics: {
        roi: '205%',
        timeline: '6 months',
        savings: '$3.2M',
        efficiency: '85%'
      },
      technologies: ['Marketo Engage', 'Lead Scoring', 'Attribution Modeling', 'Enterprise Integration'],
      featured: false
    },
    {
      id: 6,
      title: 'Healthcare Network Reduces Costs 40% with AI Analytics',
      client: 'Regional Healthcare Network',
      industry: 'Healthcare',
      category: 'ai',
      challenge: 'Rising operational costs and inefficient resource allocation across multiple facilities.',
      solution: 'AI-powered analytics platform for predictive staffing, resource optimization, and cost management.',
      results: [
        '40% reduction in operational costs',
        '25% improvement in patient satisfaction',
        '50% better resource utilization',
        'Predictive staffing accuracy of 92%'
      ],
      metrics: {
        roi: '180%',
        timeline: '8 months',
        savings: '$8.5M',
        efficiency: '40%'
      },
      technologies: ['Predictive Analytics', 'Resource Optimization', 'AI Forecasting', 'Healthcare Integration'],
      featured: false
    }
  ]

  const filteredStudies = caseStudies.filter(study => {
    const matchesCategory = selectedCategory === 'all' || study.category === selectedCategory
    const matchesSearch = study.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         study.industry.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         study.client.toLowerCase().includes(searchTerm.toLowerCase())
    return matchesCategory && matchesSearch
  })

  const featuredStudies = caseStudies.filter(study => study.featured)

  const getCategoryColor = (category) => {
    const colors = {
      'automation': 'bg-green-100 text-green-800',
      'ai': 'bg-blue-100 text-blue-800',
      'marketing': 'bg-purple-100 text-purple-800'
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
              <FileText className="w-4 h-4 mr-2" />
              Success Stories
            </Badge>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
              Case <span className="text-primary">Studies</span>
            </h1>
            
            <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
              Real results from our automation, AI, and marketing intelligence implementations. 
              Discover how leading organizations transformed their operations and achieved measurable growth.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-2xl mx-auto">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
                <Input
                  placeholder="Search case studies..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
              </div>
              <Button variant="outline">
                <Filter className="w-4 h-4 mr-2" />
                Filter
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 bg-background border-b border-border">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-center">
            <div className="flex flex-wrap gap-2 bg-muted p-1 rounded-lg">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                    selectedCategory === category.id 
                      ? 'bg-background text-foreground shadow-sm' 
                      : 'text-muted-foreground hover:text-foreground'
                  }`}
                >
                  {category.name} ({category.count})
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Featured Case Studies */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Featured Success Stories
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Our most impactful transformations with measurable business results.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
            {featuredStudies.map((study) => (
              <Card key={study.id} className="group hover:shadow-lg transition-shadow duration-300 relative">
                <div className="absolute top-4 right-4">
                  <Badge variant="secondary" className="bg-yellow-100 text-yellow-800">
                    Featured
                  </Badge>
                </div>
                
                <CardHeader>
                  <div className="flex items-center gap-2 mb-2">
                    <Badge variant="secondary" className={getCategoryColor(study.category)}>
                      {study.category.charAt(0).toUpperCase() + study.category.slice(1)}
                    </Badge>
                    <span className="text-sm text-muted-foreground">{study.industry}</span>
                  </div>
                  
                  <CardTitle className="text-xl font-bold leading-tight group-hover:text-primary transition-colors">
                    {study.title}
                  </CardTitle>
                  
                  <CardDescription className="text-muted-foreground">
                    {study.client}
                  </CardDescription>
                </CardHeader>
                
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-medium mb-2">Challenge</h4>
                      <p className="text-sm text-muted-foreground">{study.challenge}</p>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div className="text-center p-3 bg-muted rounded-lg">
                        <div className="text-2xl font-bold text-primary">{study.metrics.roi}</div>
                        <div className="text-xs text-muted-foreground">ROI</div>
                      </div>
                      <div className="text-center p-3 bg-muted rounded-lg">
                        <div className="text-2xl font-bold text-primary">{study.metrics.efficiency}</div>
                        <div className="text-xs text-muted-foreground">Efficiency</div>
                      </div>
                    </div>

                    <Button variant="outline" className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                      View Full Case Study
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* All Case Studies */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              All Case Studies
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Comprehensive collection of our client success stories across industries.
            </p>
          </div>

          <div className="space-y-8">
            {filteredStudies.map((study) => (
              <Card key={study.id} className="group hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-2">
                      <Badge variant="secondary" className={getCategoryColor(study.category)}>
                        {study.category.charAt(0).toUpperCase() + study.category.slice(1)}
                      </Badge>
                      <span className="text-sm text-muted-foreground">{study.industry}</span>
                    </div>
                    <div className="flex items-center gap-4 text-sm text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        <span>{study.metrics.timeline}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <TrendingUp className="w-4 h-4" />
                        <span>{study.metrics.roi} ROI</span>
                      </div>
                    </div>
                  </div>
                  
                  <CardTitle className="text-2xl font-bold group-hover:text-primary transition-colors">
                    {study.title}
                  </CardTitle>
                  
                  <CardDescription className="text-muted-foreground text-lg">
                    {study.client}
                  </CardDescription>
                </CardHeader>
                
                <CardContent>
                  <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                    <div className="lg:col-span-2 space-y-4">
                      <div>
                        <h4 className="font-medium mb-2">Challenge</h4>
                        <p className="text-sm text-muted-foreground">{study.challenge}</p>
                      </div>

                      <div>
                        <h4 className="font-medium mb-2">Solution</h4>
                        <p className="text-sm text-muted-foreground">{study.solution}</p>
                      </div>

                      <div>
                        <h4 className="font-medium mb-2">Key Results</h4>
                        <ul className="space-y-1">
                          {study.results.slice(0, 2).map((result, index) => (
                            <li key={index} className="text-sm text-muted-foreground flex items-center gap-2">
                              <CheckCircle className="w-4 h-4 text-primary" />
                              {result}
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div>
                        <h4 className="font-medium mb-2">Technologies Used</h4>
                        <div className="flex flex-wrap gap-2">
                          {study.technologies.map((tech, index) => (
                            <Badge key={index} variant="outline" className="text-xs">
                              {tech}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </div>

                    <div className="space-y-4">
                      <div className="grid grid-cols-2 gap-3">
                        <div className="text-center p-3 bg-background rounded-lg border">
                          <div className="text-xl font-bold text-primary">{study.metrics.roi}</div>
                          <div className="text-xs text-muted-foreground">ROI</div>
                        </div>
                        <div className="text-center p-3 bg-background rounded-lg border">
                          <div className="text-xl font-bold text-primary">{study.metrics.savings}</div>
                          <div className="text-xs text-muted-foreground">Savings</div>
                        </div>
                        <div className="text-center p-3 bg-background rounded-lg border">
                          <div className="text-xl font-bold text-primary">{study.metrics.efficiency}</div>
                          <div className="text-xs text-muted-foreground">Efficiency</div>
                        </div>
                        <div className="text-center p-3 bg-background rounded-lg border">
                          <div className="text-xl font-bold text-primary">{study.metrics.timeline}</div>
                          <div className="text-xs text-muted-foreground">Timeline</div>
                        </div>
                      </div>

                      <Button className="w-full">
                        Read Full Case Study
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {filteredStudies.length === 0 && (
            <div className="text-center py-12">
              <p className="text-muted-foreground">No case studies found matching your criteria.</p>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Ready to Create Your Success Story?
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Join the growing list of organizations that have transformed their operations 
              with our automation, AI, and marketing intelligence solutions.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="text-lg px-8 py-6">
                Schedule a Consultation
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button variant="outline" size="lg" className="text-lg px-8 py-6">
                Download Case Study Guide
                <FileText className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default CaseStudies
