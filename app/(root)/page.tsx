import React from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'

export default function Page() {
  return (
    <main className="flex flex-col items-center justify-center px-6 py-20 min-h-screen bg-background transition-colors duration-300">
      {/* Root Page */}
    
      {/* Hero */}
      <section className="max-w-3xl text-center mb-12">
        <h1 className="text-5xl sm:text-6xl font-extrabold text-foreground mb-4">
          ShadowAI
        </h1>
        <p className="text-lg sm:text-xl text-muted-foreground mb-6">
          Master your interview skills with AI-powered mock interviews, instant
          feedback, and detailed analytics.
        </p>
        <p className="text-sm sm:text-base text-muted-foreground">
          Your personal, on-demand interview coach—no scheduling required. With
          ShadowAI, you get a personal interview coach right in your browser.
          Practice realistic technical and behavioral questions anytime. The AI
          will push you with dynamic follow-ups, rate your responses in real
          time, and offer concrete tips for improvement.
        </p>
      </section>

      {/* Primary Call to Action */}
      <div className="flex flex-col sm:flex-row gap-4 mb-16">
        <Link href="/sign-up">
          <Button size="lg">Get Started</Button>
        </Link>
        <Link href="/sign-in">
          <Button variant="outline" size="lg">
            Sign In
          </Button>
        </Link>
      </div>

      {/* Features */}
      <section className="w-full max-w-5xl mb-16">
        <h2 className="text-3xl font-semibold text-foreground text-center mb-8">
          Key Features
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="flex flex-col items-center p-6 bg-white dark:bg-gray-800 rounded-lg shadow">
            <span className="text-4xl mb-4">🎤</span>
            <h3 className="text-xl font-semibold mb-2">Mock Interviews</h3>
            <p className="text-center text-muted-foreground">
              Practice realistic interview scenarios driven by AI.
            </p>
          </div>
          <div className="flex flex-col items-center p-6 bg-white dark:bg-gray-800 rounded-lg shadow">
            <span className="text-4xl mb-4">📝</span>
            <h3 className="text-xl font-semibold mb-2">Instant Feedback</h3>
            <p className="text-center text-muted-foreground">
              Receive real-time ratings and actionable tips to sharpen your answers.
            </p>
          </div>
          <div className="flex flex-col items-center p-6 bg-white dark:bg-gray-800 rounded-lg shadow">
            <span className="text-4xl mb-4">⚙️</span>
            <h3 className="text-xl font-semibold mb-2">Full Customization</h3>
            <p className="text-center text-muted-foreground">
              Tune AI tone, update prompts, and add your own few-shot examples.
            </p>
          </div>
          <div className="flex flex-col items-center p-6 bg-white dark:bg-gray-800 rounded-lg shadow">
            <span className="text-4xl mb-4">📈</span>
            <h3 className="text-xl font-semibold mb-2">Analytics & History</h3>
            <p className="text-center text-muted-foreground">
              Track stats, token usage, costs, and review past sessions on a visual dashboard.
            </p>
          </div>
        </div>
      </section>

      {/* Audience */}
      <section className="w-full max-w-3xl text-center mb-16">
        <h2 className="text-3xl font-semibold text-foreground mb-6">Who It&apos;s For</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          <div className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow">
            <span className="text-3xl">🎓</span>
            <h4 className="mt-2 text-xl font-semibold text-foreground">
              Recent Graduates
            </h4>
            <p className="text-muted-foreground">
              Build confidence for your first coding interview with step-by-step practice.
            </p>
          </div>
          <div className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow">
            <span className="text-3xl">👔</span>
            <h4 className="mt-2 text-xl font-semibold text-foreground">
              Senior Professionals
            </h4>
            <p className="text-muted-foreground">
              Brush up on behavioral skills and ace leadership or advanced technical screenings.
            </p>
          </div>
        </div>
      </section>

      {/* Secondary Call to Action */}
      <div className="flex flex-col sm:flex-row gap-4 mb-12">
        <Link href="/sign-up">
          <Button size="lg">Start Free Practice</Button>
        </Link>
        <Link href="/sign-in">
          <Button variant="outline" size="lg">
            Explore Dashboard
          </Button>
        </Link>
      </div>

      {/* Footer */}
      <footer className="mt-12 text-sm text-muted-foreground">
        © {new Date().getFullYear()} ShadowAI. All rights reserved.
      </footer>
    </main>
  )
}