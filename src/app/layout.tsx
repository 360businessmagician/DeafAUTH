import type {Metadata} from 'next';
import { GeistSans } from 'geist/font/sans';
import { GeistMono } from 'geist/font/mono';
import './globals.css';
import { Toaster } from "@/components/ui/toaster";
import { cn } from '@/lib/utils';

export const metadata: Metadata = {
  title: 'deafAuth - Accessible Authentication',
  description: 'Secure and accessible authentication including ASL video verification.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={cn(GeistSans.variable, GeistMono.variable, "font-sans antialiased")}>
        <div className="flex flex-col min-h-screen">
          <main className="flex-grow flex flex-col">
            {children}
          </main>
        </div>
        <Toaster />
      </body>
    </html>
  );
}
