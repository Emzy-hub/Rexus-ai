import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles, Zap, TrendingUp } from 'lucide-react';

export default function HomePage() {
  return (
    <main className="overflow-hidden">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-white/80 dark:bg-dark/80 backdrop-blur-md border-b border-primary/10 dark:border-white/10">
        <div className="mx-auto max-w-7xl flex items-center justify-between px-6 py-4">
          <div className="text-2xl font-bold text-primary">Rexus AI</div>
          <div className="flex gap-4">
            <Link href="/auth/login">
              <Button variant="ghost">Sign In</Button>
            </Link>
            <Link href="/auth/signup">
              <Button variant="primary">Start Free</Button>
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6 bg-gradient-to-br from-background via-background to-primary/5 dark:from-dark dark:via-dark dark:to-primary/10">
        <div className="mx-auto max-w-4xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-6"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary mb-6">
              <Sparkles className="h-4 w-4" />
              <span className="text-sm font-medium">Powered by AI</span>
            </div>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-5xl md:text-7xl font-bold mb-6 tracking-tight"
          >
            The AI Business Operating System
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-dark/70 dark:text-background/70 mb-8 max-w-2xl mx-auto leading-relaxed"
          >
            Create marketing. Understand your finances. Grow your business—all from one intelligent AI platform.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link href="/auth/signup">
              <Button variant="primary" size="lg" className="gap-2">
                Start Free <ArrowRight className="h-5 w-5" />
              </Button>
            </Link>
            <Button variant="outline" size="lg">
              Watch Demo
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-6">
        <div className="mx-auto max-w-7xl">
          <h2 className="text-4xl font-bold text-center mb-16">Everything you need to grow</h2>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Zap,
                title: 'AI Business Assistant',
                description: 'Get instant advice on marketing, finance, sales, and strategy. Ask anything about your business.',
              },
              {
                icon: TrendingUp,
                title: 'Smart Dashboard',
                description: 'Visualize your revenue, expenses, and business health in real-time with interactive charts.',
              },
              {
                icon: Sparkles,
                title: 'Marketing Studio',
                description: 'Generate Instagram posts, Facebook ads, emails, and more—all powered by AI in seconds.',
              },
            ].map((feature, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="rounded-xl border border-primary/10 bg-white dark:border-white/10 dark:bg-dark/50 p-8 hover:shadow-soft-lg transition-shadow"
              >
                <feature.icon className="h-12 w-12 text-primary mb-4" />
                <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                <p className="text-dark/70 dark:text-background/70">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 px-6 bg-primary/5 dark:bg-primary/10">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-4xl font-bold text-center mb-16">How it works</h2>

          <div className="space-y-8">
            {[
              {
                step: '01',
                title: 'Sign Up',
                description: 'Create your account in seconds with Google or email.',
              },
              {
                step: '02',
                title: 'Connect Your Data',
                description: 'Add your business information, financials, and goals.',
              },
              {
                step: '03',
                title: 'Get Insights',
                description: 'Receive AI-powered recommendations tailored to your business.',
              },
              {
                step: '04',
                title: 'Take Action',
                description: 'Use our tools to implement strategies and grow faster.',
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="flex gap-6"
              >
                <div className="flex-shrink-0">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-white font-bold">
                    {item.step}
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                  <p className="text-dark/70 dark:text-background/70">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 px-6">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-4xl font-bold text-center mb-16">Loved by founders</h2>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                quote: 'Rexus AI saved me hours every week. The insights are actionable and the marketing studio is a game-changer.',
                author: 'Sarah Johnson',
                role: 'E-commerce Founder',
              },
              {
                quote: 'Finally, an AI tool that actually understands business. No more guessing—just data-driven decisions.',
                author: 'Mike Chen',
                role: 'SaaS Founder',
              },
            ].map((testimonial, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="rounded-xl border border-primary/10 bg-white dark:border-white/10 dark:bg-dark/50 p-8"
              >
                <p className="text-lg mb-4 text-dark/80 dark:text-background/80">"{testimonial.quote}"</p>
                <div>
                  <p className="font-bold">{testimonial.author}</p>
                  <p className="text-sm text-dark/60 dark:text-background/60">{testimonial.role}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-20 px-6 bg-primary/5 dark:bg-primary/10">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-4xl font-bold text-center mb-4">Simple, transparent pricing</h2>
          <p className="text-center text-dark/70 dark:text-background/70 mb-16">Start free. Scale as you grow.</p>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                name: 'Free',
                price: '₦0',
                description: 'Perfect for getting started',
                features: [
                  'AI Business Assistant (limited)',
                  'Dashboard with basic metrics',
                  'Up to 10 content generations/month',
                  'Email support',
                ],
              },
              {
                name: 'Pro',
                price: '₦9,999',
                description: 'For growing businesses',
                features: [
                  'Unlimited AI Assistant',
                  'Advanced analytics & insights',
                  'Unlimited content generation',
                  'Priority support',
                  'Custom integrations',
                ],
              },
            ].map((plan, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className={`rounded-xl border p-8 ${
                  i === 1
                    ? 'border-primary bg-white dark:bg-dark shadow-soft-lg'
                    : 'border-primary/10 bg-white dark:border-white/10 dark:bg-dark/50'
                }`}
              >
                <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                <p className="text-dark/70 dark:text-background/70 mb-4">{plan.description}</p>
                <p className="text-4xl font-bold mb-6">
                  {plan.price}
                  <span className="text-lg text-dark/60 dark:text-background/60">/month</span>
                </p>
                <Button variant={i === 1 ? 'primary' : 'outline'} className="w-full mb-6">
                  Get Started
                </Button>
                <ul className="space-y-3">
                  {plan.features.map((feature, j) => (
                    <li key={j} className="flex items-center gap-2">
                      <div className="h-2 w-2 rounded-full bg-primary" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 px-6">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-4xl font-bold text-center mb-16">Frequently asked questions</h2>

          <div className="space-y-4">
            {[
              {
                q: 'Is my data secure?',
                a: 'Yes, we use enterprise-grade encryption and comply with all data protection regulations.',
              },
              {
                q: 'Can I cancel anytime?',
                a: 'Absolutely. No long-term contracts. Cancel your subscription anytime.',
              },
              {
                q: 'Do you offer a free trial?',
                a: 'Yes! Start with our free plan and upgrade whenever you\'re ready.',
              },
              {
                q: 'What payment methods do you accept?',
                a: 'We accept all major credit cards and local payment methods in Nigeria.',
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: i * 0.05 }}
                className="rounded-lg border border-primary/10 dark:border-white/10 p-6"
              >
                <h3 className="font-bold mb-2">{item.q}</h3>
                <p className="text-dark/70 dark:text-background/70">{item.a}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6 bg-gradient-to-r from-primary to-secondary">
        <div className="mx-auto max-w-4xl text-center text-white">
          <h2 className="text-4xl font-bold mb-6">Ready to grow your business?</h2>
          <p className="text-xl mb-8 opacity-90">Join hundreds of entrepreneurs using Rexus AI.</p>
          <Link href="/auth/signup">
            <Button variant="primary" size="lg" className="bg-white text-primary hover:bg-white/90">
              Start Free Today
            </Button>
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-primary/10 bg-white dark:border-white/10 dark:bg-dark/50 py-12 px-6">
        <div className="mx-auto max-w-7xl">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <p className="font-bold text-lg mb-2">Rexus AI</p>
              <p className="text-dark/70 dark:text-background/70 text-sm">The AI Business Operating System.</p>
            </div>
            <div>
              <p className="font-bold mb-4">Product</p>
              <ul className="space-y-2 text-sm text-dark/70 dark:text-background/70">
                <li><Link href="#" className="hover:text-primary">Features</Link></li>
                <li><Link href="#" className="hover:text-primary">Pricing</Link></li>
                <li><Link href="#" className="hover:text-primary">Security</Link></li>
              </ul>
            </div>
            <div>
              <p className="font-bold mb-4">Company</p>
              <ul className="space-y-2 text-sm text-dark/70 dark:text-background/70">
                <li><Link href="#" className="hover:text-primary">About</Link></li>
                <li><Link href="#" className="hover:text-primary">Blog</Link></li>
                <li><Link href="#" className="hover:text-primary">Contact</Link></li>
              </ul>
            </div>
            <div>
              <p className="font-bold mb-4">Legal</p>
              <ul className="space-y-2 text-sm text-dark/70 dark:text-background/70">
                <li><Link href="#" className="hover:text-primary">Privacy</Link></li>
                <li><Link href="#" className="hover:text-primary">Terms</Link></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-primary/10 dark:border-white/10 pt-8 text-center text-sm text-dark/60 dark:text-background/60">
            <p>&copy; 2024 Rexus AI. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </main>
  );
}
