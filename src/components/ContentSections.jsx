import React from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card.jsx'
import { Button } from '@/components/ui/button.jsx'
import { Badge } from '@/components/ui/badge.jsx'
import { 
  Microscope, 
  Workflow, 
  BarChart3, 
  Trophy, 
  ArrowRight, 
  Download,
  ExternalLink,
  Star,
  Clock,
  Users
} from 'lucide-react'

const ContentSections = () => {
  const sections = [
    {
      id: 'pathai-labs',
      title: 'PathAI Labs',
      description: 'In-depth tool reviews, comparisons, and hands-on testing of the latest marketing automation and AI platforms.',
      icon: Microscope,
      color: 'text-blue-600',
      bgColor: 'bg-blue-50',
      borderColor: 'border-blue-200',
      items: [
        {
          title: 'HubSpot vs Marketo vs Pardot: 2025 Enterprise Comparison',
          type: 'Tool Review',
          readTime: '12 min',
          rating: 4.8,
          featured: true
        },
        {
          title: 'ChatGPT vs Claude vs Gemini for Marketing Copy',
          type: 'AI Comparison',
          readTime: '8 min',
          rating: 4.6
        },
        {
          title: 'Zapier Alternatives: n8n, Make, and Power Automate Tested',
          type: 'Platform Review',
          readTime: '15 min',
          rating: 4.7
        }
      ]
    },
    {
      id: 'automation-blueprints',
      title: 'Automation Blueprints',
      description: 'Free templates, workflows, and step-by-step guides to implement proven automation strategies.',
      icon: Workflow,
      color: 'text-green-600',
      bgColor: 'bg-green-50',
      borderColor: 'border-green-200',
      items: [
        {
          title: 'Complete Lead Scoring Automation Template',
          type: 'Free Template',
          downloads: '2.3K',
          featured: true
        },
        {
          title: 'Email Nurture Sequence: SaaS Onboarding',
          type: 'Workflow',
          downloads: '1.8K'
        },
        {
          title: 'Customer Churn Prevention Automation',
          type: 'Blueprint',
          downloads: '1.5K'
        }
      ]
    },
    {
      id: 'intelligence-reports',
      title: 'Intelligence Reports',
      description: 'Data-driven studies, industry analysis, and predictive insights on marketing automation trends.',
      icon: BarChart3,
      color: 'text-orange-600',
      bgColor: 'bg-orange-50',
      borderColor: 'border-orange-200',
      items: [
        {
          title: 'State of Marketing Automation 2025: 10,000 Company Analysis',
          type: 'Industry Report',
          pages: '47 pages',
          featured: true
        },
        {
          title: 'AI Adoption in B2B Marketing: ROI Benchmarks',
          type: 'Data Study',
          pages: '23 pages'
        },
        {
          title: 'Email Deliverability Crisis: What Changed in 2024',
          type: 'Analysis',
          pages: '18 pages'
        }
      ]
    },
    {
      id: 'success-stories',
      title: 'Success Stories',
      description: 'Real case studies with detailed breakdowns of automation implementations and their business impact.',
      icon: Trophy,
      color: 'text-purple-600',
      bgColor: 'bg-purple-50',
      borderColor: 'border-purple-200',
      items: [
        {
          title: 'How Energy Giant Generated $10M with Agentic Automation',
          type: 'Case Study',
          impact: '$10M Revenue',
          featured: true
        },
        {
          title: 'Automotive Retailer Saves $50M Through Enterprise Transformation',
          type: 'Case Study',
          impact: '$50M Savings'
        },
        {
          title: '806% Growth: How 6click Scaled with HubSpot Integration',
          type: 'Case Study',
          impact: '806% Growth'
        }
      ]
    }
  ]

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Explore PathAI Content
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Dive deep into the intersection of marketing, automation, and intelligence with our 
            comprehensive content library designed for modern digital professionals.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {sections.map((section) => {
            const IconComponent = section.icon
            return (
              <Card key={section.id} className={`overflow-hidden border-2 ${section.borderColor} hover:shadow-lg transition-shadow duration-300`}>
                <CardHeader className={`${section.bgColor} pb-4`}>
                  <div className="flex items-center gap-3 mb-2">
                    <div className={`p-2 rounded-lg bg-white ${section.color}`}>
                      <IconComponent className="w-6 h-6" />
                    </div>
                    <CardTitle className="text-xl font-bold">{section.title}</CardTitle>
                  </div>
                  <CardDescription className="text-gray-700 leading-relaxed">
                    {section.description}
                  </CardDescription>
                </CardHeader>
                
                <CardContent className="p-6">
                  <div className="space-y-4">
                    {section.items.map((item, index) => (
                      <div key={index} className={`p-4 rounded-lg border ${item.featured ? 'border-primary bg-primary/5' : 'border-gray-200 bg-white'} hover:shadow-sm transition-shadow cursor-pointer group`}>
                        <div className="flex items-start justify-between">
                          <div className="flex-1">
                            <h4 className="font-semibold text-gray-900 group-hover:text-primary transition-colors mb-2 leading-tight">
                              {item.title}
                            </h4>
                            <div className="flex items-center gap-3 text-sm text-gray-600">
                              <Badge variant="secondary" className="text-xs">
                                {item.type}
                              </Badge>
                              {item.readTime && (
                                <div className="flex items-center gap-1">
                                  <Clock className="w-3 h-3" />
                                  <span>{item.readTime}</span>
                                </div>
                              )}
                              {item.downloads && (
                                <div className="flex items-center gap-1">
                                  <Download className="w-3 h-3" />
                                  <span>{item.downloads} downloads</span>
                                </div>
                              )}
                              {item.pages && (
                                <span>{item.pages}</span>
                              )}
                              {item.impact && (
                                <Badge className="bg-green-100 text-green-800 text-xs">
                                  {item.impact}
                                </Badge>
                              )}
                              {item.rating && (
                                <div className="flex items-center gap-1">
                                  <Star className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                                  <span>{item.rating}</span>
                                </div>
                              )}
                            </div>
                          </div>
                          <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-primary group-hover:translate-x-1 transition-all flex-shrink-0 ml-2" />
                        </div>
                      </div>
                    ))}
                  </div>
                  
                  <div className="mt-6 pt-4 border-t border-gray-200">
                    <Button variant="outline" className="w-full group">
                      View All {section.title}
                      <ExternalLink className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            )
          })}
        </div>

        <div className="text-center mt-12">
          <div className="inline-flex items-center gap-2 text-sm text-gray-600 bg-white px-4 py-2 rounded-full border">
            <Users className="w-4 h-4" />
            <span>Trusted by 10,000+ automation professionals worldwide</span>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ContentSections
