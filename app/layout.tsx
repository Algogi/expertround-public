// app/layout.tsx
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Script from 'next/script';
import './globals.css';
import { Providers } from './providers';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
	title: 'ExpertRound - Smart Hiring Platform',
	description: 'AI-powered interview ops platform',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang="en" suppressHydrationWarning>
			<Script id="gtag" async src="https://www.googletagmanager.com/gtag/js?id=G-49ZLWB78C6"></Script>
			<Script id="gtag-S">
				{`window.dataLayer = window.dataLayer || [];
			function gtag(){dataLayer.push(arguments);}
			gtag('js', new Date());

			gtag('config', 'G-49ZLWB78C6');`}
			</Script>
			<body className={inter.className}>
				<Providers attribute="class" defaultTheme="system" enableSystem>
					{children}
				</Providers>
			</body>
		</html>
	);
}
