import { Button } from '@/components/ui/button.jsx'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card.jsx'
import { Badge } from '@/components/ui/badge.jsx'
import { CheckCircle, ArrowRight, Target, Rocket, Gem, Star } from 'lucide-react'

const ServicePackages = () => {
  const packages = [
    {
      name: "Foundation Path",
      price: "$2,500",
      period: "per month",
      icon: Target,
      color: "primary",
      badge: "Getting Started",
      description: "Perfect for businesses ready to excel in one core pillar",
      features: [
        "Single pillar focus (Marketing, Automation, OR Intelligence)",
        "Monthly strategy sessions",
        "Basic implementation support",
        "Performance tracking & reporting",
        "Email support",
        "Quarterly business reviews"
      ],
      highlights: [
        "Ideal for: Small to medium businesses",
        "Timeline: 3-6 months to see results",
        "Best for: Building strong foundation"
      ]
    },
    {
      name: "Growth Path",
      price: "$5,000",
      period: "per month",
      icon: Rocket,
      color: "secondary",
      badge: "Most Popular",
      popular: true,
      description: "Accelerate growth by integrating two pillars for multiplied impact",
      features: [
        "Two pillar integration (Marketing + Automation OR Automation + Intelligence)",
        "Bi-weekly strategy sessions",
        "Advanced implementation support",
        "Real-time performance dashboards",
        "Priority support (24-hour response)",
        "Monthly optimization reviews",
        "Custom automation development",
        "Advanced analytics setup"
      ],
      highlights: [
        "Ideal for: Growing businesses ready to scale",
        "Timeline: 2-4 months to see significant results",
        "Best for: Businesses with existing foundation"
      ]
    },
    {
      name: "Transformation Path",
      price: "$10,000",
      period: "per month",
      icon: Gem,
      color: "accent",
      badge: "Enterprise",
      description: "Full PathAIway methodology - all three pillars for exponential value",
      features: [
        "Complete three-pillar integration",
        "Weekly strategy sessions",
        "White-glove implementation",
        "Custom AI agent development",
        "Advanced predictive analytics",
        "Dedicated account manager",
        "24/7 priority support",
        "Custom dashboard development",
        "Quarterly executive reviews",
        "ROI guarantee program"
      ],
      highlights: [
        "Ideal for: Established businesses ready for transformation",
        "Timeline: 1-3 months to see exponential results",
        "Best for: Maximum competitive advantage"
      ]
    }
  ]

  const getColorClasses = (color) => {
    switch (color) {
      case 'primary':
        return {
          border: 'border-primary/20 hover:border-primary/40',
          bg: 'bg-primary/10',
          text: 'text-primary',
          button: 'bg-primary hover:bg-primary/90'
        }
      case 'secondary':
        return {
          border: 'border-secondary/20 hover:border-secondary/40',
          bg: 'bg-secondary/10',
          text: 'text-secondary',
          button: 'bg-secondary hover:bg-secondary/90'
        }
      case 'accent':
        return {
          border: 'border-accent/20 hover:border-accent/40',
          bg: 'bg-accent/10',
          text: 'text-accent',
          button: 'bg-accent hover:bg-accent/90'
        }
      default:
        return {
          border: 'border-border',
          bg: 'bg-muted',
          text: 'text-foreground',
          button: 'bg-primary hover:bg-primary/90'
        }
    }
  }

  return (
    <section id="pathways" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Choose Your PathAIway
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Three distinct service packages designed to meet you where you are and take you where you want to go. 
            Each pathway builds on proven methodologies with measurable results.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {packages.map((pkg, index) => {
            const Icon = pkg.icon
            const colors = getColorClasses(pkg.color)
            
            return (
              <Card 
                key={index} 
                className={`relative group transition-all duration-300 hover:shadow-xl ${colors.border} ${pkg.popular ? 'ring-2 ring-secondary/50 scale-105' : ''}`}
              >
                {pkg.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <Badge className="bg-secondary text-secondary-foreground px-4 py-1">
                      <Star className="w-3 h-3 mr-1" />
                      {pkg.badge}
                    </Badge>
                  </div>
                )}
                
                <CardHeader className="text-center pb-4">
                  <div className={`w-16 h-16 ${colors.bg} rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform`}>
                    <Icon className={`h-8 w-8 ${colors.text}`} />
                  </div>
                  
                  <div className="space-y-2">
                    <CardTitle className="text-2xl">{pkg.name}</CardTitle>
                    <div className="flex items-baseline justify-center gap-1">
                      <span className={`text-4xl font-bold ${colors.text}`}>{pkg.price}</span>
                      <span className="text-muted-foreground">/{pkg.period}</span>
                    </div>
                    {!pkg.popular && (
                      <Badge variant="outline" className="mt-2">
                        {pkg.badge}
                      </Badge>
                    )}
                  </div>
                  
                  <CardDescription className="text-base mt-4">
                    {pkg.description}
                  </CardDescription>
                </CardHeader>

                <CardContent className="space-y-6">
                  {/* Features */}
                  <div className="space-y-3">
                    <h4 className="font-semibold text-foreground">What's Included:</h4>
                    {pkg.features.map((feature, fIndex) => (
                      <div key={fIndex} className="flex items-start space-x-3">
                        <CheckCircle className={`h-5 w-5 ${colors.text} flex-shrink-0 mt-0.5`} />
                        <span className="text-sm text-foreground">{feature}</span>
                      </div>
                    ))}
                  </div>

                  {/* Highlights */}
                  <div className={`p-4 ${colors.bg} rounded-lg space-y-2`}>
                    <h4 className="font-semibold text-foreground text-sm">Package Highlights:</h4>
                    {pkg.highlights.map((highlight, hIndex) => (
                      <div key={hIndex} className="text-sm text-muted-foreground">
                        {highlight}
                      </div>
                    ))}
                  </div>

                  {/* CTA Button */}
                  <Button 
                    className={`w-full ${colors.button} text-white`}
                    size="lg"
                  >
                    Get Started with {pkg.name}
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>

                  <div className="text-center">
                    <Button variant="ghost" size="sm" className={colors.text}>
                      Schedule a consultation
                    </Button>
                  </div>
                </CardContent>
              </Card>
            )
          })}
        </div>

        {/* Additional Info */}
        <div className="mt-16 text-center">
          <Card className="max-w-4xl mx-auto bg-gradient-to-r from-primary/5 via-secondary/5 to-accent/5">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-foreground mb-4">
                Not sure which path is right for you?
              </h3>
              <p className="text-muted-foreground mb-6 text-lg">
                Take our PathAI Score™ assessment to get a personalized recommendation 
                based on your current marketing maturity, automation level, and intelligence usage.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" variant="outline">
                  Take PathAI Score™ Assessment
                </Button>
                <Button size="lg">
                  Schedule Strategy Call
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Guarantee */}
        <div className="mt-12 text-center">
          <div className="inline-flex items-center gap-2 bg-green-50 text-green-700 px-6 py-3 rounded-full border border-green-200">
            <CheckCircle className="h-5 w-5" />
            <span className="font-medium">30-day satisfaction guarantee on all pathways</span>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ServicePackages
