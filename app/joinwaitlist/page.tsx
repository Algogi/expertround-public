'use client';
import { ModeToggle } from '../components/mode-toggle';
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function BookDemoPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <motion.div 
        initial={{ opacity: 0 }} 
        animate={{ opacity: 1 }} 
        className="absolute inset-0 -z-10 overflow-hidden"
      >
        <svg className="absolute inset-0 w-full h-full opacity-15 dark:opacity-10">
          <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
            <path d="M40 0H0V40" fill="none" stroke="currentColor" strokeWidth="1" />
          </pattern>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </motion.div>
      <nav className="fixed w-full z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 shadow-sm">
        <div className="container flex h-16 items-center justify-between px-4 sm:px-6">
        <Link href="/" className="text-xl sm:text-2xl font-bold flex items-center gap-2 sm:gap-4">
  expertRound
</Link>
          <div className="flex items-center gap-2 sm:gap-4">
            <ModeToggle />
          </div>
        </div>
      </nav>

     
      <main className="flex-1 pt-16">
        <div className="container py-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto" 
          >
            <h1 className="text-4xl font-bold text-center mb-8 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Join Waitlist
            </h1>
            
            
            <div className="bg-background p-8 rounded-xl shadow-lg border border-muted">
              <div className="w-full overflow-hidden rounded-lg">
                <iframe
                  src="https://docs.google.com/forms/d/e/1FAIpQLSdxkZg5NiQ5knfrfU6DKiNgDkqVoc5zHW1VrtTHUh4016RGPA/viewform?embedded=true"
                  width="100%"
                  height="1000" 
                  style={{ 
                    border: 'none',
                    minHeight: '70vh',
                    display: 'block' 
                  }}
                  loading="lazy"
                  title="Expert Round Demo Form"
                  className="bg-transparent"
                >
                  Loading…
                </iframe>
              </div>
            </div>
            
            
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="mt-8 text-center text-muted-foreground"
            >
              <p className="text-lg mb-4">Your responses help us tailor the platform to suit your hiring needs!</p>
              <Link 
                href="/" 
                className="text-primary hover:underline mt-4 inline-flex items-center gap-2 text-lg"
              >
                ← Return to homepage
              </Link>
            </motion.div>
          </motion.div>

          
        </div>
      </main>
      <footer className="border-t py-8 mt-20">
            <div className="container text-center text-sm text-muted-foreground">
              © 2025 expertRound.com. All rights reserved.
            </div>
          </footer>
    </div>
  );
}

