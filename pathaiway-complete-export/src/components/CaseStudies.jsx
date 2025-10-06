import { Button } from '@/components/ui/button.jsx'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card.jsx'
import { Badge } from '@/components/ui/badge.jsx'
import { ArrowRight, Clock, DollarSign, TrendingUp, Zap, Target, BarChart3 } from 'lucide-react'

const CaseStudies = () => {
  const caseStudies = [
    {
      title: "CPAD Automation Revolution",
      client: "Financial Services Company",
      challenge: "Manual customer onboarding taking 2.5 hours per application",
      solution: "Complete automation workflow with AI-powered document processing",
      results: [
        { metric: "Time Saved", value: "100%", description: "From 2.5 hours to fully automated" },
        { metric: "ROI", value: "11,400:1", description: "Record-breaking return on investment" },
        { metric: "Processing Speed", value: "Instant", description: "Real-time application processing" }
      ],
      pillars: ["Automation Excellence", "Intelligence & Analytics"],
      icon: Zap,
      color: "secondary",
      timeline: "3 months",
      industry: "Financial Services"
    },
    {
      title: "Metropolitan Cabinets SEO Analysis",
      client: "Manufacturing & E-commerce",
      challenge: "Declining organic traffic and missed growth opportunities",
      solution: "Comprehensive 107-page SEO analysis with AI-powered insights",
      results: [
        { metric: "Opportunity Identified", value: "$2.9M", description: "Annual revenue potential discovered" },
        { metric: "Analysis Depth", value: "107 pages", description: "Comprehensive strategic roadmap" },
        { metric: "Implementation Timeline", value: "12 months", description: "Phased rollout strategy" }
      ],
      pillars: ["Marketing Mastery", "Intelligence & Analytics"],
      icon: Target,
      color: "primary",
      timeline: "6 weeks",
      industry: "Manufacturing"
    },
    {
      title: "Kapitus Operational Efficiency",
      client: "Business Lending Platform",
      challenge: "Inefficient manual processes across multiple departments",
      solution: "Integrated automation and intelligence platform",
      results: [
        { metric: "Annual Savings", value: "$78,000", description: "Documented cost reduction" },
        { metric: "Process Efficiency", value: "300%", description: "Improvement in workflow speed" },
        { metric: "Error Reduction", value: "95%", description: "Elimination of manual errors" }
      ],
      pillars: ["Automation Excellence", "Marketing Mastery"],
      icon: BarChart3,
      color: "accent",
      timeline: "4 months",
      industry: "Financial Technology"
    }
  ]

  const getColorClasses = (color) => {
    switch (color) {
      case 'primary':
        return {
          border: 'border-primary/20',
          bg: 'bg-primary/10',
          text: 'text-primary',
          badge: 'bg-primary/20 text-primary'
        }
      case 'secondary':
        return {
          border: 'border-secondary/20',
          bg: 'bg-secondary/10',
          text: 'text-secondary',
          badge: 'bg-secondary/20 text-secondary'
        }
      case 'accent':
        return {
          border: 'border-accent/20',
          bg: 'bg-accent/10',
          text: 'text-accent',
          badge: 'bg-accent/20 text-accent'
        }
    }
  }

  return (
    <section id="case-studies" className="py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Proven Results Across Industries
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Real transformations from real businesses. See how the PathAIway methodology 
            delivers exponential value through the integration of marketing, automation, and intelligence.
          </p>
        </div>

        <div className="space-y-12">
          {caseStudies.map((study, index) => {
            const Icon = study.icon
            const colors = getColorClasses(study.color)
            
            return (
              <Card key={index} className={`group hover:shadow-xl transition-all duration-300 ${colors.border}`}>
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 p-8">
                  {/* Left Column - Overview */}
                  <div className="lg:col-span-1 space-y-6">
                    <div className="flex items-start gap-4">
                      <div className={`w-12 h-12 ${colors.bg} rounded-full flex items-center justify-center flex-shrink-0`}>
                        <Icon className={`h-6 w-6 ${colors.text}`} />
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-foreground mb-2">{study.title}</h3>
                        <p className="text-muted-foreground font-medium">{study.client}</p>
                      </div>
                    </div>

                    <div className="space-y-4">
                      <div>
                        <h4 className="font-semibold text-foreground mb-2">Challenge</h4>
                        <p className="text-muted-foreground">{study.challenge}</p>
                      </div>
                      
                      <div>
                        <h4 className="font-semibold text-foreground mb-2">Solution</h4>
                        <p className="text-muted-foreground">{study.solution}</p>
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-2">
                      {study.pillars.map((pillar, pIndex) => (
                        <Badge key={pIndex} className={colors.badge}>
                          {pillar}
                        </Badge>
                      ))}
                    </div>

                    <div className="flex items-center gap-4 text-sm text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <Clock className="h-4 w-4" />
                        {study.timeline}
                      </div>
                      <div className="flex items-center gap-1">
                        <Target className="h-4 w-4" />
                        {study.industry}
                      </div>
                    </div>
                  </div>

                  {/* Right Column - Results */}
                  <div className="lg:col-span-2">
                    <h4 className="text-xl font-bold text-foreground mb-6">Results Achieved</h4>
                    
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                      {study.results.map((result, rIndex) => (
                        <Card key={rIndex} className="bg-muted/50 border-0">
                          <CardContent className="p-6 text-center">
                            <div className={`text-3xl font-bold ${colors.text} mb-2`}>
                              {result.value}
                            </div>
                            <div className="font-semibold text-foreground mb-1">
                              {result.metric}
                            </div>
                            <div className="text-sm text-muted-foreground">
                              {result.description}
                            </div>
                          </CardContent>
                        </Card>
                      ))}
                    </div>

                    <div className="mt-8 flex flex-col sm:flex-row gap-4">
                      <Button className="flex-1">
                        Read Full Case Study
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                      <Button variant="outline" className="flex-1">
                        Schedule Similar Results Call
                      </Button>
                    </div>
                  </div>
                </div>
              </Card>
            )
          })}
        </div>

        {/* Stats Summary */}
        <div className="mt-20">
          <Card className="bg-gradient-to-r from-primary/5 via-secondary/5 to-accent/5">
            <CardContent className="p-12">
              <div className="text-center mb-12">
                <h3 className="text-3xl font-bold text-foreground mb-4">
                  PathAIway by the Numbers
                </h3>
                <p className="text-xl text-muted-foreground">
                  Cumulative impact across all client engagements
                </p>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                <div className="text-center">
                  <div className="text-4xl font-bold text-primary mb-2">$10M+</div>
                  <div className="text-muted-foreground">Ad Spend Managed</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-secondary mb-2">1,000+</div>
                  <div className="text-muted-foreground">Hours Automated</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-accent mb-2">$3M+</div>
                  <div className="text-muted-foreground">Value Identified</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-primary mb-2">15+</div>
                  <div className="text-muted-foreground">Years Experience</div>
                </div>
              </div>

              <div className="text-center mt-12">
                <Button size="lg">
                  Start Your Transformation
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Customer Match Automation - In Progress */}
        <div className="mt-12">
          <Card className="border-dashed border-2 border-muted-foreground/30">
            <CardContent className="p-8 text-center">
              <Badge className="mb-4 bg-blue-100 text-blue-700">In Progress</Badge>
              <h3 className="text-2xl font-bold text-foreground mb-4">
                Customer Match Automation Project
              </h3>
              <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                Currently implementing automated customer match uploads across 6 daily processes. 
                Expected completion: Q1 2025. Projected time savings: 2+ hours daily.
              </p>
              <div className="flex justify-center gap-4">
                <Button variant="outline">
                  Follow Progress
                </Button>
                <Button>
                  Discuss Similar Automation
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}

export default CaseStudies
