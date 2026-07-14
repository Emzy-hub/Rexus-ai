'use client';

import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useUser } from '@clerk/nextjs';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Skeleton } from '@/components/Skeleton';
import { Send, Bot, User } from 'lucide-react';

interface Message {
  id: string;
  role: 'user' | 'assistant';
  content: string;
  timestamp: Date;
}

export default function AssistantPage() {
  const { user } = useUser();
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      role: 'assistant',
      content: `Hi ${user?.firstName || 'there'}! 👋 I'm your AI Business Assistant. I can help you with:

• **Marketing Advice** - Social media strategies, content ideas, campaign planning
• **Financial Insights** - Budget optimization, expense analysis, revenue forecasting
• **Sales Strategies** - Customer acquisition, retention tactics, pricing strategies
• **Business Growth** - Market analysis, competitor research, scaling strategies

What would you like to know about your business today?`,
      timestamp: new Date(),
    },
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSendMessage = async () => {
    if (!input.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      role: 'user',
      content: input,
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInput('');
    setIsLoading(true);

    // Simulate API call - replace with actual OpenAI integration
    setTimeout(() => {
      const assistantMessage: Message = {
        id: (Date.now() + 1).toString(),
        role: 'assistant',
        content: `Great question about "${input}"! Here are my insights:

Based on your business data, I recommend:

1. **Immediate Actions** - Focus on your top 3 revenue drivers
2. **Medium-term (1-3 months)** - Invest in customer retention programs
3. **Long-term (3-12 months)** - Scale to new markets

Your current business health score is 85/100. Keep up the momentum!

Would you like more details on any of these recommendations?`,
        timestamp: new Date(),
      };

      setMessages((prev) => [...prev, assistantMessage]);
      setIsLoading(false);
    }, 1500);
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.3 }}>
        <div>
          <h1 className="text-4xl font-bold mb-2">AI Business Assistant</h1>
          <p className="text-dark/70 dark:text-background/70">Get instant advice on marketing, finance, sales, and strategy</p>
        </div>
      </motion.div>

      {/* Chat Container */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, delay: 0.1 }}
      >
        <Card className="flex flex-col h-[600px]">
          {/* Messages Area */}
          <CardContent className="flex-1 overflow-y-auto p-6 space-y-4">
            {messages.map((message, index) => (
              <motion.div
                key={message.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                className={`flex gap-4 ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                {message.role === 'assistant' && (
                  <div className="flex-shrink-0">
                    <div className="h-8 w-8 rounded-full bg-primary/20 flex items-center justify-center">
                      <Bot className="h-5 w-5 text-primary" />
                    </div>
                  </div>
                )}

                <div
                  className={`max-w-md px-4 py-3 rounded-lg ${
                    message.role === 'user'
                      ? 'bg-primary text-white'
                      : 'bg-primary/10 text-dark dark:bg-primary/20 dark:text-background'
                  }`}
                >
                  <p className="whitespace-pre-wrap text-sm">{message.content}</p>
                  <p
                    className={`text-xs mt-1 ${
                      message.role === 'user' ? 'text-white/70' : 'text-dark/60 dark:text-background/60'
                    }`}
                  >
                    {message.timestamp.toLocaleTimeString([], {
                      hour: '2-digit',
                      minute: '2-digit',
                    })}
                  </p>
                </div>

                {message.role === 'user' && (
                  <div className="flex-shrink-0">
                    <div className="h-8 w-8 rounded-full bg-secondary/20 flex items-center justify-center">
                      <User className="h-5 w-5 text-secondary" />
                    </div>
                  </div>
                )}
              </motion.div>
            ))}

            {isLoading && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="flex gap-4"
              >
                <div className="flex-shrink-0">
                  <div className="h-8 w-8 rounded-full bg-primary/20 flex items-center justify-center">
                    <Bot className="h-5 w-5 text-primary" />
                  </div>
                </div>
                <div className="bg-primary/10 dark:bg-primary/20 px-4 py-3 rounded-lg">
                  <div className="flex gap-2">
                    <Skeleton className="h-2 w-2 rounded-full" />
                    <Skeleton className="h-2 w-2 rounded-full" />
                    <Skeleton className="h-2 w-2 rounded-full" />
                  </div>
                </div>
              </motion.div>
            )}

            <div ref={messagesEndRef} />
          </CardContent>

          {/* Input Area */}
          <div className="border-t border-primary/10 dark:border-white/10 p-6">
            <div className="flex gap-3">
              <Input
                placeholder="Ask me anything about your business..."
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                disabled={isLoading}
                className="flex-1"
              />
              <Button
                variant="primary"
                onClick={handleSendMessage}
                disabled={!input.trim() || isLoading}
                className="gap-2"
              >
                <Send className="h-4 w-4" />
                <span className="hidden sm:inline">Send</span>
              </Button>
            </div>
          </div>
        </Card>
      </motion.div>

      {/* Suggested Questions */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, delay: 0.2 }}
      >
        <div>
          <h3 className="text-sm font-semibold mb-3 text-dark/70 dark:text-background/70">Suggested questions:</h3>
          <div className="grid sm:grid-cols-2 gap-2">
            {[
              'How can I improve my marketing strategy?',
              'What are my biggest expense categories?',
              'How do I acquire more customers?',
              'What is my business health score?',
            ].map((question, i) => (
              <motion.button
                key={i}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.2 + i * 0.05 }}
                onClick={() => {
                  setInput(question);
                }}
                className="text-left px-4 py-2 rounded-lg border border-primary/20 hover:bg-primary/5 dark:hover:bg-primary/10 transition-colors text-sm text-dark dark:text-background hover:border-primary/40"
              >
                {question}
              </motion.button>
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  );
}
