'use client'

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { quotes, Quote } from "@/data/quotes"
import { Quote as QuoteIcon, Search, Sparkles } from "lucide-react"
/* eslint-disable react/no-unescaped-entities */
export default function Home() {
  const [topic, setTopic] = useState('')
  const [displayedQuotes, setDisplayedQuotes] = useState<Quote[]>([])
  const [isSearched, setIsSearched] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const handleSearch = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!topic.trim()) return

    setIsLoading(true)
    
    // Simulate a brief loading state for better UX
    setTimeout(() => {
      const filteredQuotes = quotes.filter(quote => 
        quote.category.toLowerCase().includes(topic.toLowerCase()) ||
        quote.text.toLowerCase().includes(topic.toLowerCase()) ||
        quote.author.toLowerCase().includes(topic.toLowerCase())
      )

      // Get 3 random quotes from filtered results
      const randomQuotes = filteredQuotes
        .sort(() => 0.5 - Math.random())
        .slice(0, 3)

      setDisplayedQuotes(randomQuotes)
      setIsSearched(true)
      setIsLoading(false)
    }, 500)
  }

  const handleReset = () => {
    setTopic('')
    setDisplayedQuotes([])
    setIsSearched(false)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-4">
            <Sparkles className="w-8 h-8 text-primary" />
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-2">
            Quote Generator
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Discover inspiring quotes tailored to your interests. Enter any topic and get three carefully selected quotes to motivate and inspire you.
          </p>
        </div>

        {/* Search Form */}
        <Card className="max-w-2xl mx-auto mb-12 shadow-lg">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Search className="w-5 h-5" />
              Find Your Inspiration
            </CardTitle>
            <CardDescription>
              Enter a topic like "motivation", "success", "happiness", or any keyword to find relevant quotes
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSearch} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="topic">Topic or Keyword</Label>
                <Input
                  id="topic"
                  type="text"
                  placeholder="e.g., motivation, success, creativity..."
                  value={topic}
                  onChange={(e) => setTopic(e.target.value)}
                  className="text-base"
                  disabled={isLoading}
                />
              </div>
              <div className="flex gap-2">
                <Button 
                  type="submit" 
                  className="flex-1"
                  disabled={!topic.trim() || isLoading}
                >
                  {isLoading ? (
                    <>
                      <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin mr-2" />
                      Searching...
                    </>
                  ) : (
                    <>
                      <Search className="w-4 h-4 mr-2" />
                      Generate Quotes
                    </>
                  )}
                </Button>
                {isSearched && (
                  <Button 
                    type="button" 
                    variant="outline" 
                    onClick={handleReset}
                    disabled={isLoading}
                  >
                    Reset
                  </Button>
                )}
              </div>
            </form>
          </CardContent>
        </Card>

        {/* Results */}
        {isSearched && (
          <div className="max-w-4xl mx-auto">
            {displayedQuotes.length > 0 ? (
              <>
                <div className="text-center mb-8">
                  <h2 className="text-2xl font-semibold text-gray-800 mb-2">
                    Quotes about "{topic}"
                  </h2>
                  <p className="text-gray-600">
                    Here are {displayedQuotes.length} inspiring quotes for you
                  </p>
                </div>
                
                <div className="grid gap-6 md:grid-cols-1 lg:grid-cols-1 space-y-4">
                  {displayedQuotes.map((quote, index) => (
                    <Card 
                      key={quote.id} 
                      className="shadow-md hover:shadow-lg transition-shadow duration-300 border-l-4 border-l-primary"
                    >
                      <CardContent className="p-6">
                        <div className="flex items-start gap-4">
                          <div className="flex-shrink-0">
                            <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                              <QuoteIcon className="w-5 h-5 text-primary" />
                            </div>
                          </div>
                          <div className="flex-1">
                            <blockquote className="text-lg text-gray-700 mb-3 leading-relaxed">
                              "{quote.text}"
                            </blockquote>
                            <div className="flex items-center justify-between">
                              <cite className="font-medium text-gray-900">
                                — {quote.author}
                              </cite>
                              <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-primary/10 text-primary capitalize">
                                {quote.category}
                              </span>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </>
            ) : (
              <Card className="max-w-2xl mx-auto text-center shadow-md">
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Search className="w-8 h-8 text-gray-400" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">
                    No quotes found
                  </h3>
                  <p className="text-gray-600 mb-4">
                    We couldn't find any quotes matching "{topic}". Try searching for topics like:
                  </p>
                  <div className="flex flex-wrap gap-2 justify-center">
                    {['motivation', 'success', 'happiness', 'wisdom', 'life', 'leadership', 'creativity'].map((suggestion) => (
                      <button
                        key={suggestion}
                        onClick={() => setTopic(suggestion)}
                        className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm hover:bg-primary/20 transition-colors"
                      >
                        {suggestion}
                      </button>
                    ))}
                  </div>
                </CardContent>
              </Card>
            )}
          </div>
        )}

        {/* Available Categories */}
        {!isSearched && (
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-2">
                Popular Categories
              </h2>
              <p className="text-gray-600">
                Click on any category below to explore quotes
              </p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-4">
              {['motivation', 'success', 'happiness', 'wisdom', 'life', 'leadership', 'creativity'].map((category) => (
                <button
                  key={category}
                  onClick={() => setTopic(category)}
                  className="p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-all duration-200 border border-gray-200 hover:border-primary/20 group"
                >
                  <div className="text-2xl mb-2">
                    {category === 'motivation' && '🚀'}
                    {category === 'success' && '🏆'}
                    {category === 'happiness' && '😊'}
                    {category === 'wisdom' && '🧠'}
                    {category === 'life' && '🌱'}
                    {category === 'leadership' && '👑'}
                    {category === 'creativity' && '🎨'}
                  </div>
                  <span className="text-sm font-medium text-gray-700 group-hover:text-primary transition-colors capitalize">
                    {category}
                  </span>
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Footer */}
        <footer className="text-center mt-16 py-8 border-t border-gray-200">
          <p className="text-gray-500">
            Built with Next.js, Tailwind CSS, and ShadCN UI
          </p>
        </footer>
      </div>
    </div>
  )
}
