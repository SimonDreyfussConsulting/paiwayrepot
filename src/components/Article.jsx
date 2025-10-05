import React from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card.jsx'
import { Badge } from '@/components/ui/badge.jsx'
import { Button } from '@/components/ui/button.jsx'
import { Calendar, Clock, ArrowRight, User } from 'lucide-react'

const Article = ({ 
  title, 
  excerpt, 
  category, 
  readTime, 
  publishDate, 
  author = "PathAIway Editorial",
  featured = false,
  image,
  slug 
}) => {
  const categoryColors = {
    'Marketing AI': 'bg-blue-100 text-blue-800 border-blue-200',
    'Automation Tools': 'bg-green-100 text-green-800 border-green-200', 
    'Intelligence & Analytics': 'bg-orange-100 text-orange-800 border-orange-200',
    'Case Studies': 'bg-purple-100 text-purple-800 border-purple-200',
    'Industry Analysis': 'bg-gray-100 text-gray-800 border-gray-200'
  }

  if (featured) {
    return (
      <Card className="overflow-hidden hover:shadow-lg transition-shadow duration-300 border-2 border-primary/20">
        <div className="aspect-video bg-gradient-to-br from-primary/10 to-secondary/10 relative overflow-hidden">
          {image ? (
            <img src={image} alt={title} className="w-full h-full object-cover" />
          ) : (
            <div className="w-full h-full flex items-center justify-center">
              <div className="text-6xl font-bold text-primary/20">PathAI</div>
            </div>
          )}
          <div className="absolute top-4 left-4">
            <Badge className={`${categoryColors[category] || categoryColors['Industry Analysis']} font-medium`}>
              {category}
            </Badge>
          </div>
        </div>
        <CardHeader className="pb-4">
          <CardTitle className="text-2xl font-bold leading-tight hover:text-primary transition-colors cursor-pointer">
            {title}
          </CardTitle>
          <CardDescription className="text-base leading-relaxed mt-2">
            {excerpt}
          </CardDescription>
        </CardHeader>
        <CardContent className="pt-0">
          <div className="flex items-center justify-between text-sm text-muted-foreground mb-4">
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-1">
                <User className="w-4 h-4" />
                <span>{author}</span>
              </div>
              <div className="flex items-center gap-1">
                <Calendar className="w-4 h-4" />
                <span>{publishDate}</span>
              </div>
              <div className="flex items-center gap-1">
                <Clock className="w-4 h-4" />
                <span>{readTime} min read</span>
              </div>
            </div>
          </div>
          <Button className="w-full group">
            Read Full Analysis
            <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
          </Button>
        </CardContent>
      </Card>
    )
  }

  return (
    <Card className="overflow-hidden hover:shadow-md transition-shadow duration-300 cursor-pointer group">
      <div className="aspect-video bg-gradient-to-br from-primary/5 to-secondary/5 relative overflow-hidden">
        {image ? (
          <img src={image} alt={title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
        ) : (
          <div className="w-full h-full flex items-center justify-center">
            <div className="text-4xl font-bold text-primary/20">PathAI</div>
          </div>
        )}
        <div className="absolute top-3 left-3">
          <Badge className={`${categoryColors[category] || categoryColors['Industry Analysis']} text-xs`}>
            {category}
          </Badge>
        </div>
      </div>
      <CardHeader className="pb-3">
        <CardTitle className="text-lg font-semibold leading-tight group-hover:text-primary transition-colors line-clamp-2">
          {title}
        </CardTitle>
        <CardDescription className="text-sm leading-relaxed line-clamp-3">
          {excerpt}
        </CardDescription>
      </CardHeader>
      <CardContent className="pt-0">
        <div className="flex items-center justify-between text-xs text-muted-foreground">
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-1">
              <Calendar className="w-3 h-3" />
              <span>{publishDate}</span>
            </div>
            <div className="flex items-center gap-1">
              <Clock className="w-3 h-3" />
              <span>{readTime}m</span>
            </div>
          </div>
          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </div>
      </CardContent>
    </Card>
  )
}

export default Article
