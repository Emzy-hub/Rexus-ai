import { SignUp } from '@clerk/nextjs';
import Link from 'next/link';

export default function SignUpPage() {
  return (
    <div className="min-h-screen flex flex-col md:flex-row">
      {/* Left side - Branding */}
      <div className="hidden md:flex md:w-1/2 bg-gradient-to-br from-primary to-secondary text-white flex-col justify-between p-12">
        <div>
          <h1 className="text-4xl font-bold mb-4">Rexus AI</h1>
          <p className="text-xl opacity-90">The AI Business Operating System</p>
        </div>
        <div className="space-y-4">
          <div className="flex gap-3">
            <div className="h-12 w-12 rounded-lg bg-white/20 flex items-center justify-center">✨</div>
            <div>
              <p className="font-semibold">AI-Powered Insights</p>
              <p className="text-sm opacity-80">Get actionable business advice instantly</p>
            </div>
          </div>
          <div className="flex gap-3">
            <div className="h-12 w-12 rounded-lg bg-white/20 flex items-center justify-center">📊</div>
            <div>
              <p className="font-semibold">Smart Dashboard</p>
              <p className="text-sm opacity-80">Track revenue, expenses, and growth</p>
            </div>
          </div>
          <div className="flex gap-3">
            <div className="h-12 w-12 rounded-lg bg-white/20 flex items-center justify-center">🎨</div>
            <div>
              <p className="font-semibold">Marketing Studio</p>
              <p className="text-sm opacity-80">Generate content in seconds</p>
            </div>
          </div>
        </div>
      </div>

      {/* Right side - Form */}
      <div className="w-full md:w-1/2 flex flex-col justify-center items-center px-6 py-12">
        <div className="w-full max-w-sm">
          <div className="mb-8 md:hidden">
            <h1 className="text-3xl font-bold text-primary mb-2">Rexus AI</h1>
            <p className="text-dark/70 dark:text-background/70">Create an account to get started</p>
          </div>

          <SignUp
            appearance={{
              elements: {
                rootBox: 'w-full',
                card: 'bg-transparent border-0 shadow-none',
                formButtonPrimary: 'bg-primary hover:bg-primary/90 text-white',
                headerTitle: 'hidden',
                headerSubtitle: 'hidden',
                socialButtonsBlockButton: 'border border-primary/20 text-dark dark:text-background hover:bg-primary/5',
                dividerLine: 'bg-primary/10',
                dividerText: 'text-dark/60 dark:text-background/60',
                formFieldLabel: 'text-dark dark:text-background font-medium',
                formFieldInput: 'border-primary/20 focus:border-primary focus:ring-primary',
                footerActionLink: 'text-primary hover:text-primary/80',
              },
            }}
          />

          <p className="text-center text-sm text-dark/60 dark:text-background/60 mt-6">
            Already have an account?{' '}
            <Link href="/auth/login" className="text-primary hover:underline">
              Sign in
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
