import React, { useState } from 'react'
import { Button } from '@/components/ui/button.jsx'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card.jsx'
import { Badge } from '@/components/ui/badge.jsx'
import { Progress } from '@/components/ui/progress.jsx'
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group.jsx'
import { Label } from '@/components/ui/label.jsx'
import { ArrowRight, Target, Bot, BarChart3, CheckCircle, AlertCircle, TrendingUp } from 'lucide-react'

const PathAIScore = ({ onClose }) => {
  const [currentSection, setCurrentSection] = useState(0)
  const [answers, setAnswers] = useState({})
  const [showResults, setShowResults] = useState(false)

  const sections = [
    {
      title: "Marketing Maturity",
      icon: Target,
      color: "text-primary",
      bgColor: "bg-primary/10",
      questions: [
        {
          id: "marketing_1",
          question: "How would you rate your current digital marketing strategy?",
          options: [
            { value: 1, label: "No formal strategy in place" },
            { value: 2, label: "Basic strategy, limited execution" },
            { value: 3, label: "Solid strategy with regular execution" },
            { value: 4, label: "Advanced strategy with data-driven optimization" }
          ]
        },
        {
          id: "marketing_2",
          question: "What's your approach to paid advertising?",
          options: [
            { value: 1, label: "No paid advertising" },
            { value: 2, label: "Basic Google Ads or Facebook Ads" },
            { value: 3, label: "Multi-platform campaigns with some optimization" },
            { value: 4, label: "Advanced campaigns with sophisticated targeting and optimization" }
          ]
        },
        {
          id: "marketing_3",
          question: "How do you measure marketing ROI?",
          options: [
            { value: 1, label: "We don't track ROI systematically" },
            { value: 2, label: "Basic tracking through platform analytics" },
            { value: 3, label: "Multi-touch attribution with some advanced metrics" },
            { value: 4, label: "Comprehensive attribution modeling with predictive analytics" }
          ]
        }
      ]
    },
    {
      title: "Automation Level",
      icon: Bot,
      color: "text-secondary",
      bgColor: "bg-secondary/10",
      questions: [
        {
          id: "automation_1",
          question: "How automated are your marketing processes?",
          options: [
            { value: 1, label: "Everything is manual" },
            { value: 2, label: "Basic email automation only" },
            { value: 3, label: "Multiple automated workflows in place" },
            { value: 4, label: "Comprehensive automation across all marketing functions" }
          ]
        },
        {
          id: "automation_2",
          question: "What's your current use of AI tools?",
          options: [
            { value: 1, label: "No AI tools in use" },
            { value: 2, label: "Basic AI tools for content creation" },
            { value: 3, label: "AI tools for multiple functions (content, analysis, etc.)" },
            { value: 4, label: "Advanced AI integration across operations" }
          ]
        },
        {
          id: "automation_3",
          question: "How do you handle data integration?",
          options: [
            { value: 1, label: "Manual data collection and reporting" },
            { value: 2, label: "Some automated data collection" },
            { value: 3, label: "Integrated systems with automated reporting" },
            { value: 4, label: "Real-time data pipelines with automated insights" }
          ]
        }
      ]
    },
    {
      title: "Intelligence Usage",
      icon: BarChart3,
      color: "text-accent",
      bgColor: "bg-accent/10",
      questions: [
        {
          id: "intelligence_1",
          question: "How do you use data for decision making?",
          options: [
            { value: 1, label: "Decisions based on intuition/experience" },
            { value: 2, label: "Basic reporting guides some decisions" },
            { value: 3, label: "Regular data analysis informs strategy" },
            { value: 4, label: "Advanced analytics and predictive modeling drive all decisions" }
          ]
        },
        {
          id: "intelligence_2",
          question: "What's your approach to business intelligence?",
          options: [
            { value: 1, label: "No formal BI tools or processes" },
            { value: 2, label: "Basic dashboards and reports" },
            { value: 3, label: "Comprehensive BI platform with regular insights" },
            { value: 4, label: "Advanced BI with predictive analytics and AI-driven insights" }
          ]
        },
        {
          id: "intelligence_3",
          question: "How do you track customer journey and attribution?",
          options: [
            { value: 1, label: "No systematic customer journey tracking" },
            { value: 2, label: "Basic first-touch or last-touch attribution" },
            { value: 3, label: "Multi-touch attribution with customer journey mapping" },
            { value: 4, label: "Advanced attribution modeling with predictive customer lifetime value" }
          ]
        }
      ]
    }
  ]

  const handleAnswerChange = (questionId, value) => {
    setAnswers(prev => ({
      ...prev,
      [questionId]: parseInt(value)
    }))
  }

  const calculateScores = () => {
    const marketingQuestions = sections[0].questions.map(q => q.id)
    const automationQuestions = sections[1].questions.map(q => q.id)
    const intelligenceQuestions = sections[2].questions.map(q => q.id)

    const marketingScore = marketingQuestions.reduce((sum, id) => sum + (answers[id] || 0), 0)
    const automationScore = automationQuestions.reduce((sum, id) => sum + (answers[id] || 0), 0)
    const intelligenceScore = intelligenceQuestions.reduce((sum, id) => sum + (answers[id] || 0), 0)

    // Convert to /10 scale
    const marketingScoreOut10 = Math.round((marketingScore / 12) * 10)
    const automationScoreOut10 = Math.round((automationScore / 12) * 10)
    const intelligenceScoreOut10 = Math.round((intelligenceScore / 12) * 10)

    return {
      marketing: marketingScoreOut10,
      automation: automationScoreOut10,
      intelligence: intelligenceScoreOut10,
      total: marketingScoreOut10 + automationScoreOut10 + intelligenceScoreOut10
    }
  }

  const getScoreLevel = (score) => {
    if (score >= 25) return { level: "Transformation Ready", color: "text-green-600", icon: CheckCircle }
    if (score >= 20) return { level: "Growth Potential", color: "text-blue-600", icon: TrendingUp }
    if (score >= 15) return { level: "Foundation Building", color: "text-yellow-600", icon: AlertCircle }
    return { level: "Getting Started", color: "text-red-600", icon: AlertCircle }
  }

  const nextSection = () => {
    if (currentSection < sections.length - 1) {
      setCurrentSection(currentSection + 1)
    } else {
      setShowResults(true)
    }
  }

  const prevSection = () => {
    if (currentSection > 0) {
      setCurrentSection(currentSection - 1)
    }
  }

  const isCurrentSectionComplete = () => {
    const currentQuestions = sections[currentSection].questions
    return currentQuestions.every(q => answers[q.id])
  }

  if (showResults) {
    const scores = calculateScores()
    const scoreLevel = getScoreLevel(scores.total)
    const ScoreLevelIcon = scoreLevel.icon

    return (
      <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
        <Card className="w-full max-w-4xl max-h-[90vh] overflow-y-auto">
          <CardHeader className="text-center">
            <CardTitle className="text-3xl mb-2">Your PathAI Score™</CardTitle>
            <CardDescription className="text-lg">
              Here's your comprehensive digital transformation assessment
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-8">
            {/* Total Score */}
            <div className="text-center">
              <div className="text-6xl font-bold text-primary mb-2">{scores.total}/30</div>
              <div className={`flex items-center justify-center gap-2 text-xl font-semibold ${scoreLevel.color}`}>
                <ScoreLevelIcon className="h-6 w-6" />
                {scoreLevel.level}
              </div>
            </div>

            {/* Individual Scores */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card className="border-primary/20">
                <CardHeader className="text-center pb-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-2">
                    <Target className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-primary">Marketing Maturity</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <div className="text-3xl font-bold text-primary mb-2">{scores.marketing}/10</div>
                  <Progress value={scores.marketing * 10} className="mb-2" />
                  <p className="text-sm text-muted-foreground">
                    {scores.marketing >= 8 ? "Excellent foundation" : 
                     scores.marketing >= 6 ? "Good progress" : 
                     scores.marketing >= 4 ? "Room for improvement" : "Needs attention"}
                  </p>
                </CardContent>
              </Card>

              <Card className="border-secondary/20">
                <CardHeader className="text-center pb-4">
                  <div className="w-12 h-12 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-2">
                    <Bot className="h-6 w-6 text-secondary" />
                  </div>
                  <CardTitle className="text-secondary">Automation Level</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <div className="text-3xl font-bold text-secondary mb-2">{scores.automation}/10</div>
                  <Progress value={scores.automation * 10} className="mb-2" />
                  <p className="text-sm text-muted-foreground">
                    {scores.automation >= 8 ? "Highly automated" : 
                     scores.automation >= 6 ? "Good automation" : 
                     scores.automation >= 4 ? "Basic automation" : "Manual processes"}
                  </p>
                </CardContent>
              </Card>

              <Card className="border-accent/20">
                <CardHeader className="text-center pb-4">
                  <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-2">
                    <BarChart3 className="h-6 w-6 text-accent" />
                  </div>
                  <CardTitle className="text-accent">Intelligence Usage</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <div className="text-3xl font-bold text-accent mb-2">{scores.intelligence}/10</div>
                  <Progress value={scores.intelligence * 10} className="mb-2" />
                  <p className="text-sm text-muted-foreground">
                    {scores.intelligence >= 8 ? "Data-driven excellence" : 
                     scores.intelligence >= 6 ? "Good insights" : 
                     scores.intelligence >= 4 ? "Basic analytics" : "Limited intelligence"}
                  </p>
                </CardContent>
              </Card>
            </div>

            {/* Personalized Content Recommendations */}
            <Card className="bg-gradient-to-r from-primary/5 via-secondary/5 to-accent/5">
              <CardHeader>
                <CardTitle>Your Personalized Content Track</CardTitle>
                <CardDescription>Based on your score, here's what we recommend you focus on:</CardDescription>
              </CardHeader>
              <CardContent>
                {scores.total >= 25 ? (
                  <div>
                    <h4 className="font-semibold text-lg mb-2">🚀 Advanced Practitioner Track</h4>
                    <p className="text-muted-foreground mb-4">
                      You're operating at an advanced level. Get cutting-edge insights on emerging AI tools, 
                      enterprise automation strategies, and predictive intelligence frameworks.
                    </p>
                    <div className="text-sm text-muted-foreground">
                      <strong>Recommended content:</strong> Enterprise case studies, AI tool deep-dives, advanced automation blueprints
                    </div>
                  </div>
                ) : scores.total >= 15 ? (
                  <div>
                    <h4 className="font-semibold text-lg mb-2">📈 Growth Accelerator Track</h4>
                    <p className="text-muted-foreground mb-4">
                      You have solid foundations. Focus on scaling your automation, integrating AI tools, 
                      and building sophisticated measurement frameworks.
                    </p>
                    <div className="text-sm text-muted-foreground">
                      <strong>Recommended content:</strong> Tool comparisons, automation templates, ROI optimization guides
                    </div>
                  </div>
                ) : (
                  <div>
                    <h4 className="font-semibold text-lg mb-2">🎯 Foundation Builder Track</h4>
                    <p className="text-muted-foreground mb-4">
                      Start with the fundamentals. Learn marketing automation basics, essential AI tools, 
                      and simple measurement strategies to build your foundation.
                    </p>
                    <div className="text-sm text-muted-foreground">
                      <strong>Recommended content:</strong> Getting started guides, tool tutorials, basic automation workflows
                    </div>
                  </div>
                )}
                <div className="space-y-3 mt-6">
                  <input
                    type="email"
                    placeholder="Enter your email for personalized insights"
                    className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                  />
                  <Button className="w-full">
                    Get My Personalized Daily Brief
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>

            <div className="flex justify-center gap-4">
              <Button variant="outline" onClick={onClose}>
                Close Assessment
              </Button>
              <Button onClick={() => window.open('/newsletter-sample', '_blank')}>
                Browse Sample Newsletter
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
            
            <div className="text-center mt-4">
              <p className="text-xs text-muted-foreground">
                Join 10,000+ professionals • Free newsletter • Unsubscribe anytime
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    )
  }

  const currentSectionData = sections[currentSection]
  const SectionIcon = currentSectionData.icon

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
      <Card className="w-full max-w-2xl max-h-[90vh] overflow-y-auto">
        <CardHeader>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className={`w-10 h-10 ${currentSectionData.bgColor} rounded-full flex items-center justify-center`}>
                <SectionIcon className={`h-5 w-5 ${currentSectionData.color}`} />
              </div>
              <div>
                <CardTitle className="text-xl">{currentSectionData.title}</CardTitle>
                <CardDescription>
                  Section {currentSection + 1} of {sections.length}
                </CardDescription>
              </div>
            </div>
            <Button variant="ghost" size="sm" onClick={onClose}>
              ×
            </Button>
          </div>
          <Progress value={((currentSection + 1) / sections.length) * 100} className="mt-4" />
        </CardHeader>
        
        <CardContent className="space-y-6">
          {currentSectionData.questions.map((question, qIndex) => (
            <div key={question.id} className="space-y-3">
              <h4 className="font-medium text-foreground">
                {qIndex + 1}. {question.question}
              </h4>
              <RadioGroup
                value={answers[question.id]?.toString() || ""}
                onValueChange={(value) => handleAnswerChange(question.id, value)}
              >
                {question.options.map((option) => (
                  <div key={option.value} className="flex items-center space-x-2">
                    <RadioGroupItem value={option.value.toString()} id={`${question.id}_${option.value}`} />
                    <Label htmlFor={`${question.id}_${option.value}`} className="flex-1 cursor-pointer">
                      {option.label}
                    </Label>
                  </div>
                ))}
              </RadioGroup>
            </div>
          ))}
        </CardContent>

        <div className="p-6 border-t border-border flex justify-between">
          <Button 
            variant="outline" 
            onClick={prevSection}
            disabled={currentSection === 0}
          >
            Previous
          </Button>
          <Button 
            onClick={nextSection}
            disabled={!isCurrentSectionComplete()}
          >
            {currentSection === sections.length - 1 ? 'Get My Score' : 'Next Section'}
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </Card>
    </div>
  )
}

export default PathAIScore
