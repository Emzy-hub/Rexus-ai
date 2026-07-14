'use client';

import { useAuthRedirect } from '@/hooks/useAuthRedirect';
import { DashboardNav } from '@/components/DashboardNav';
import { PageTransition } from '@/components/PageTransition';

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { isLoaded } = useAuthRedirect();

  if (!isLoaded) {
    return null;
  }

  return (
    <div className="min-h-screen bg-background dark:bg-dark">
      <DashboardNav />
      <PageTransition>
        <main className="mx-auto max-w-7xl px-6 py-12">{children}</main>
      </PageTransition>
    </div>
  );
}
