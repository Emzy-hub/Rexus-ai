'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import { Alert } from '@/components/Alert';
import { Copy, Download, RefreshCw, Zap } from 'lucide-react';

interface ContentTemplate {
  id: string;
  name: string;
  description: string;
  icon: string;
  category: string;
}

const contentTemplates: ContentTemplate[] = [
  {
    id: 'instagram',
    name: 'Instagram Post',
    description: 'Engaging social media post with hashtags',
    icon: '📱',
    category: 'social',
  },
  {
    id: 'facebook',
    name: 'Facebook Ad',
    description: 'Compelling ad copy for Facebook campaigns',
    icon: '👍',
    category: 'ads',
  },
  {
    id: 'tiktok',
    name: 'TikTok Script',
    description: 'Viral-worthy TikTok video script',
    icon: '🎬',
    category: 'video',
  },
  {
    id: 'email',
    name: 'Email Campaign',
    description: 'Professional email marketing copy',
    icon: '✉️',
    category: 'email',
  },
  {
    id: 'seo',
    name: 'SEO Article',
    description: 'Optimized blog post for search engines',
    icon: '📝',
    category: 'blog',
  },
  {
    id: 'landing',
    name: 'Landing Page',
    description: 'High-converting landing page copy',
    icon: '🎯',
    category: 'web',
  },
  {
    id: 'product',
    name: 'Product Description',
    description: 'Compelling product description',
    icon: '📦',
    category: 'ecommerce',
  },
  {
    id: 'business',
    name: 'Business Name',
    description: 'Creative business name ideas',
    icon: '💼',
    category: 'branding',
  },
];

export default function MarketingPage() {
  const [selectedTemplate, setSelectedTemplate] = useState<ContentTemplate | null>(null);
  const [prompt, setPrompt] = useState('');
  const [generatedContent, setGeneratedContent] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [copySuccess, setCopySuccess] = useState(false);

  const handleGenerate = async () => {
    if (!prompt.trim() || !selectedTemplate) return;

    setIsLoading(true);

    // Simulate API call - replace with actual OpenAI integration
    setTimeout(() => {
      const mockContent = {
        instagram: `✨ Transform Your Business Today! ✨

Discover the power of AI-driven growth with Rexus AI. From marketing strategies to financial insights, we've got you covered.

Don't settle for guessing. Get data-driven decisions that work.

🚀 Join hundreds of founders already using Rexus AI
📊 See your business grow faster
💡 Get instant AI advice

Start your free trial now! Link in bio 🔗

#RexusAI #BusinessGrowth #AIMarketing #Entrepreneur #StartupLife`,

        facebook: `🚀 Ready to Grow Your Business Faster?

Your business deserves intelligent growth.

Rexus AI combines marketing, finance, and business strategy in one AI-powered platform. Get instant insights, generate content in seconds, and make data-driven decisions.

✅ AI Business Assistant (24/7)
✅ Smart Analytics Dashboard
✅ Marketing Studio

Transform your business today. Start free!`,

        tiktok: `POV: Your business just got smarter 🤖

Ever wish you had a business expert available 24/7? Meet Rexus AI.

[Hook: Your business metrics pop up on screen]
[Transition: Transform to AI dashboard]
[CTA: Join thousands of founders]

Rexus AI - The AI Business Operating System.`,

        email: `Subject: Your 7-Day Business Growth Plan Awaits 🚀

Hi there!

Imagine having a business expert who knows your numbers, understands your market, and gives you actionable advice every single day.

That's Rexus AI.

In the next 7 days, we'll help you:
• Identify your biggest revenue opportunities
• Optimize your marketing spend
• Create engaging content in seconds
• Understand your business health

Get started free—no credit card required.`,

        seo: `The Complete Guide to AI-Powered Business Growth in 2024

Running a business is complex. Managing marketing, finances, and strategy simultaneously is even harder.

But what if there was a better way?

Enter Rexus AI, the AI Business Operating System that consolidates everything you need to grow.

## Why Businesses Are Switching to AI

[Article content continues...]`,

        landing: `Transform Your Business with AI

Stop guessing. Start growing.

Rexus AI gives you the insights, tools, and guidance you need to scale your business faster.

✨ AI Business Assistant - Get advice instantly
📊 Smart Dashboard - Visualize your growth
🎨 Marketing Studio - Create content in seconds

Start Free Today - No credit card required.`,

        product: `Rexus AI - The All-In-One Business Operating System

Tired of juggling multiple tools to manage your business? Rexus AI brings everything together.

Features:
• AI-powered business insights and recommendations
• Real-time financial dashboard and analytics
• Content generation studio for all your marketing needs
• 24/7 business advisor available anytime

Perfect for entrepreneurs, founders, and small business owners.`,

        business: `Rexus AI
(The AI Business Operating System)

Other suggestions:
- Quantum Growth
- Nexus Business
- Elevate AI
- BizFlow
- GrowthAI Pro`,
      };

      setGeneratedContent(
        mockContent[selectedTemplate.id as keyof typeof mockContent] ||
          'Great content generated! Customize it for your brand.'
      );
      setIsLoading(false);
    }, 2000);
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(generatedContent);
    setCopySuccess(true);
    setTimeout(() => setCopySuccess(false), 2000);
  };

  return (
    <div className="space-y-8">
      {/* Header */}
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.3 }}>
        <div>
          <h1 className="text-4xl font-bold mb-2">Marketing Studio</h1>
          <p className="text-dark/70 dark:text-background/70">
            Generate engaging content for all your marketing channels in seconds
          </p>
        </div>
      </motion.div>

      <div className="grid lg:grid-cols-3 gap-8">
        {/* Templates Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.1 }}
          className="lg:col-span-1"
        >
          <Card>
            <CardHeader>
              <CardTitle>Content Types</CardTitle>
              <CardDescription>Choose what to create</CardDescription>
            </CardHeader>
            <CardContent className="space-y-2">
              {contentTemplates.map((template) => (
                <motion.button
                  key={template.id}
                  onClick={() => {
                    setSelectedTemplate(template);
                    setGeneratedContent('');
                    setPrompt('');
                  }}
                  whileHover={{ x: 4 }}
                  className={`w-full text-left px-4 py-3 rounded-lg border-2 transition-all ${
                    selectedTemplate?.id === template.id
                      ? 'border-primary bg-primary/10 dark:bg-primary/20'
                      : 'border-primary/10 dark:border-white/10 hover:border-primary/20'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <span className="text-2xl">{template.icon}</span>
                    <div>
                      <p className="font-medium text-sm">{template.name}</p>
                      <p className="text-xs text-dark/60 dark:text-background/60">{template.category}</p>
                    </div>
                  </div>
                </motion.button>
              ))}
            </CardContent>
          </Card>
        </motion.div>

        {/* Content Generator Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.2 }}
          className="lg:col-span-2 space-y-6"
        >
          {!selectedTemplate ? (
            <Card className="h-full flex items-center justify-center min-h-[400px]">
              <CardContent className="text-center">
                <div className="text-6xl mb-4">🎨</div>
                <h3 className="text-xl font-bold mb-2">Select a Content Type</h3>
                <p className="text-dark/70 dark:text-background/70">
                  Choose a template on the left to start generating content
                </p>
              </CardContent>
            </Card>
          ) : (
            <>
              {/* Input Section */}
              <Card>
                <CardHeader>
                  <CardTitle>{selectedTemplate.name}</CardTitle>
                  <CardDescription>{selectedTemplate.description}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <label className="text-sm font-medium mb-2 block">
                      Brief Description (what should the content be about?)
                    </label>
                    <Textarea
                      placeholder={`Example: "Create an Instagram post about our new eco-friendly product launch"`}
                      value={prompt}
                      onChange={(e) => setPrompt(e.target.value)}
                      disabled={isLoading}
                      className="min-h-[120px]"
                    />
                  </div>

                  <Button
                    variant="primary"
                    onClick={handleGenerate}
                    disabled={!prompt.trim() || isLoading}
                    className="w-full gap-2"
                  >
                    <Zap className="h-4 w-4" />
                    {isLoading ? 'Generating...' : 'Generate Content'}
                  </Button>
                </CardContent>
              </Card>

              {/* Output Section */}
              {generatedContent && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <Card>
                    <CardHeader className="flex flex-row items-center justify-between">
                      <div>
                        <CardTitle>Generated Content</CardTitle>
                        <CardDescription>Ready to use or customize</CardDescription>
                      </div>
                      <div className="flex gap-2">
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => handleGenerate()}
                          className="gap-2"
                        >
                          <RefreshCw className="h-4 w-4" />
                          Regenerate
                        </Button>
                      </div>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="bg-primary/5 dark:bg-primary/10 p-4 rounded-lg">
                        <p className="text-dark dark:text-background whitespace-pre-wrap text-sm leading-relaxed">
                          {generatedContent}
                        </p>
                      </div>

                      <div className="flex gap-3">
                        <Button
                          variant="primary"
                          onClick={handleCopy}
                          className="flex-1 gap-2"
                        >
                          <Copy className="h-4 w-4" />
                          {copySuccess ? 'Copied!' : 'Copy to Clipboard'}
                        </Button>
                        <Button variant="outline" className="flex-1 gap-2">
                          <Download className="h-4 w-4" />
                          Download
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              )}
            </>
          )}
        </motion.div>
      </div>

      {/* Tips Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, delay: 0.3 }}
      >
        <Alert
          type="info"
          title="💡 Pro Tips"
          description="Be specific in your prompts for better results. Include details about your target audience, tone, and key message."
        />
      </motion.div>

      {/* Recent Generations */}
      {generatedContent && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.4 }}
        >
          <Card>
            <CardHeader>
              <CardTitle>Your Generated Content</CardTitle>
              <CardDescription>View and manage all your generated content</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {[
                  { type: 'Instagram Post', created: '5 min ago' },
                  { type: 'Facebook Ad', created: '1 hour ago' },
                  { type: 'Email Campaign', created: '2 hours ago' },
                ].map((item, i) => (
                  <div key={i} className="flex items-center justify-between p-3 rounded-lg border border-primary/10 dark:border-white/10">
                    <div>
                      <p className="font-medium text-sm">{item.type}</p>
                      <p className="text-xs text-dark/60 dark:text-background/60">{item.created}</p>
                    </div>
                    <Button variant="ghost" size="sm">
                      View
                    </Button>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </motion.div>
      )}
    </div>
  );
}
