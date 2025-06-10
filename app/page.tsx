'use client';

import { motion, useInView } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ModeToggle } from './components/mode-toggle';
import {
	Bar,
	BarChart,
	CartesianGrid,
	Legend,
	Line,
	LineChart,
	ResponsiveContainer,
	Tooltip,
	XAxis,
	YAxis,
} from 'recharts';
import {
	RocketIcon,
	FileTextIcon,
	StarIcon,
	UsersIcon,
	CoinsIcon,
	ClockIcon,
	MessageSquareIcon,
	TrendingUpIcon,
} from 'lucide-react';
import { useRef } from 'react';
import { FeatureCard } from './components/FeaturedCard';
import Link from 'next/link';
import Image from 'next/image';
import { useTheme } from 'next-themes';
import report from '../public/report.png';

const costData = [
	{ month: 'Jan', traditional: 8500, expertround: 4200 },
	{ month: 'Feb', traditional: 9200, expertround: 3800 },
	{ month: 'Mar', traditional: 8800, expertround: 3500 },
	{ month: 'Apr', traditional: 9500, expertround: 3200 },
];

const hiringTimelineData = [
	{ stage: 'Screening', traditional: 7, expertround: 1 },
	{ stage: 'Interviews', traditional: 14, expertround: 3 },
	{ stage: 'Evaluation', traditional: 3, expertround: 0.5 },
];

export default function HomePage() {
	const { theme } = useTheme();
	return (
		<div className="flex flex-col min-h-screen">
			{/* Navigation */}
			<nav className="fixed w-full z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 shadow-sm">
				<div className="container flex h-16 items-center justify-between">
					<Image
						src={theme === 'dark' ? '/logo_rect_white.png' : '/logo_rect.png'}
						alt="ExpertRound Logo"
						width={125}
						height={150}
					/>
					<div className="flex items-center gap-4">
						<ModeToggle />
						<Link href="https://app.expertround.com/signup">
							<Button className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-6 rounded-lg transition-colors">
								Sign Up
							</Button>
						</Link>
						<Link href="https://app.expertround.com/login">
							<Button className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-6 rounded-lg transition-colors">
								Login
							</Button>
						</Link>
					</div>
				</div>
			</nav>
			{/* Hero Section */}
			<section className="relative h-screen flex items-center justify-center">
				<AnimatedBackground />
				<div className="container text-center z-10">
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.8 }}
					>
						<Link href="https://app.expertround.com/signup">
							<button className="glow-on-hover">
								Join now and unlock 100 free async, AI-driven text interviews!
							</button>
						</Link>
						<h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent mb-6">
							Smarter Hiring
							<br />
							<span className="text-3xl md:text-4xl font-normal bg-gradient-to-r from-foreground to-muted-foreground bg-clip-text text-transparent">
								Powered by AI
							</span>
						</h1>
						<p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
							Reduce hiring costs by 60% and time-to-hire by 75% with our AI-driven interview platform
						</p>
						{/* <Button size="lg" className="text-lg gap-2">
							<PlayIcon className="h-5 w-5" />
							Watch Demo
						</Button> */}
					</motion.div>
				</div>
			</section>
			{/* Cost Savings Section */}
			<section className="py-20 bg-muted/50">
				<div className="container">
					<h2 className="text-4xl font-bold text-center mb-16">Hiring Cost Reduction</h2>
					<div className="grid lg:grid-cols-2 gap-12 items-center">
						<div className="space-y-8">
							<MetricItem
								icon={<CoinsIcon className="h-6 w-6" />}
								title="Average Cost Savings"
								value="62%"
								description="Reduction in hiring costs compared to traditional methods"
							/>
							<MetricItem
								icon={<ClockIcon className="h-6 w-6" />}
								title="Time Saved"
								value="340 hrs/month"
								description="Average time saved for technical teams"
							/>
							<MetricItem
								icon={<UsersIcon className="h-6 w-6" />}
								title="Candidate Satisfaction"
								value="94%"
								description="Positive candidate feedback on interview process"
							/>
						</div>
						<div className="bg-background p-6 rounded-xl shadow-lg">
							<h3 className="text-xl font-semibold mb-4">Monthly Hiring Costs</h3>
							<ResponsiveContainer width="100%" height={350}>
								<BarChart
									height={300}
									data={costData}
									margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
								>
									<XAxis dataKey="month" />
									<YAxis />
									<Tooltip labelStyle={{ color: '#000' }} />
									<Legend />
									<Bar dataKey="traditional" fill="#8884d8" />
									<Bar dataKey="expertround" fill="#82ca9d" />
								</BarChart>
							</ResponsiveContainer>
						</div>
					</div>
				</div>
			</section>
			{/* How It Works Section */}
			<section className="py-20">
				<div className="container">
					<h2 className="text-4xl font-bold text-center mb-16">How It Works</h2>
					<div className="grid md:grid-cols-3 gap-12">
						<div className="text-center">
							<div className="p-6 bg-primary/10 rounded-full inline-block mb-4">
								<RocketIcon className="h-12 w-12 text-primary" />
							</div>
							<h3 className="text-xl font-semibold mb-2">Step 1: Upload a Job Description</h3>
							<p className="text-muted-foreground">
								Define your job requirements and upload the job description to get started.
							</p>
						</div>
						<div className="text-center">
							<div className="p-6 bg-primary/10 rounded-full inline-block mb-4">
								<FileTextIcon className="h-12 w-12 text-primary" />
							</div>
							<h3 className="text-xl font-semibold mb-2">Step 2: Invite Candidates</h3>
							<p className="text-muted-foreground">
								Send a unique AI interview link—no scheduling required.
							</p>
						</div>
						<div className="text-center">
							<div className="p-6 bg-primary/10 rounded-full inline-block mb-4">
								<StarIcon className="h-12 w-12 text-primary" />
							</div>
							<h3 className="text-xl font-semibold mb-2">Step 3: Interview & Hire</h3>
							<p className="text-muted-foreground">
								Conduct AI-driven interviews and hire the best candidates efficiently.
							</p>
						</div>
					</div>
				</div>
			</section>
			<section className="py-20 bg-muted/50">
				<div className="container">
					<motion.div
						initial={{ opacity: 0 }}
						whileInView={{ opacity: 1 }}
						viewport={{ once: true }}
						className="relative rounded-2xl flex justify-center items-stretch py-5 flex-col sm:flex-col md:flex-col lg:flex-row"
					>
						<div className="container mb-3 sm:mb-3 md:mb-3 lg:mb-0">
							<Image src={report} alt="Sample Report" />
						</div>
						<div className="container">
							<h2 className="text-2xl font-semibold mb-4">Sample Interview Report</h2>
							<p className=" mb-4">
								At <span className="font-medium text-blue-600">ExpertRound</span>, we deliver
								structured, AI-powered interview evaluations that help hiring teams make faster,
								data-backed decisions. Here&apos;s a real example of a candidate assessment generated
								through our platform.
							</p>

							<ul className="list-disc pl-5  mb-4">
								<li>
									<span className="font-medium">Technical Skills</span>
								</li>
								<li>
									<span className="font-medium">Problem Solving</span>
								</li>
								<li>
									<span className="font-medium">Communication</span>
								</li>
								<li>
									<span className="font-medium">Cultural Fit</span>
								</li>
							</ul>

							<p className=" mb-4">Each evaluation includes:</p>
							<ul className="list-disc pl-5  mb-4">
								<li>Clear scores and comments from expert reviewers</li>
								<li>AI-suggested insights for quick decision-making</li>
								<li>A detailed Q&A section to understand the candidate’s mindset</li>
							</ul>

							<div className="bg-gray-50 p-4 rounded-xl border border-gray-200 mb-4">
								<p className="text-gray-700 italic">
									“ExpertRound saves you hours of manual interviewing and shortlisting. Our reports
									give your hiring team the confidence to say{' '}
									<span className="text-green-600 font-medium">yes</span>,{' '}
									<span className="text-red-500 font-medium">no</span>, or{' '}
									<span className="text-blue-500 font-medium">next steps</span> — quickly and
									consistently.”
								</p>
							</div>
						</div>
						<div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
					</motion.div>
				</div>
			</section>
			{/* Hiring Timeline Section */}
			<section className="py-20">
				<div className="container">
					<h2 className="text-4xl font-bold text-center mb-16">Accelerated Hiring Timeline</h2>
					<div className="max-w-4xl mx-auto">
						<ResponsiveContainer width="100%" height={350}>
							<LineChart
								height={400}
								data={hiringTimelineData}
								margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
							>
								<CartesianGrid strokeDasharray="3 3" />
								<XAxis dataKey="stage" />
								<YAxis unit="days" />
								<Tooltip labelStyle={{ color: '#000' }} />
								<Legend />
								<Line type="monotone" dataKey="traditional" stroke="#8884d8" strokeWidth={2} />
								<Line type="monotone" dataKey="expertround" stroke="#82ca9d" strokeWidth={2} />
							</LineChart>
						</ResponsiveContainer>
					</div>
				</div>
			</section>
			{/* Features Section */}
			<section className="py-20 bg-muted/50">
				<div className="container">
					<h2 className="text-4xl font-bold text-center mb-16">Platform Features</h2>

					<div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
						<FeatureCard
							icon={<FileTextIcon className="h-8 w-8" />}
							title="JD-Based Interviews"
							description="AI generates tailored questions based on job description and candidate CV"
							svg={<AnimatedProcess className="w-full h-48" />}
						/>

						{/* New: AI Resume Screening */}
						<FeatureCard
							icon={<UsersIcon className="h-8 w-8" />}
							title="AI Screening"
							description="Automatically interviewes and shortlists candidates based on job requirements"
							svg={
								<svg viewBox="0 0 500 200" className="w-full h-48">
									<motion.path
										d="M50 150 L150 50 L250 150 L350 50 L450 150"
										stroke="currentColor"
										strokeWidth="2"
										fill="none"
										initial={{ pathLength: 0 }}
										whileInView={{ pathLength: 1 }}
										transition={{ duration: 2 }}
									/>
									<motion.g initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}>
										<rect x="30" y="130" width="40" height="40" fill="currentColor" opacity="0.2" />
										<rect x="130" y="30" width="40" height="40" fill="currentColor" opacity="0.4" />
										<rect
											x="230"
											y="130"
											width="40"
											height="40"
											fill="currentColor"
											opacity="0.6"
										/>
										<rect x="330" y="30" width="40" height="40" fill="currentColor" opacity="0.8" />
										<rect x="430" y="130" width="40" height="40" fill="currentColor" />
									</motion.g>
								</svg>
							}
						/>

						{/* AI Chatbot */}
						<FeatureCard
							dim={true}
							icon={<MessageSquareIcon className="h-8 w-8" />}
							title="Intergrated Career Page - Coming Soon"
							description="Integrate our career page and interview only shortlisted candidate"
							svg={
								<svg viewBox="0 0 500 200" className="w-full h-48">
									<motion.path
										d="M50 100 Q150 20 250 100 Q350 180 450 100"
										stroke="currentColor"
										strokeWidth="2"
										fill="none"
										initial={{ pathLength: 0 }}
										whileInView={{ pathLength: 1 }}
										transition={{ duration: 2 }}
									/>
									<motion.g initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}>
										<circle cx="100" cy="80" r="15" fill="currentColor" />
										<circle cx="150" cy="80" r="15" fill="currentColor" />
										<circle cx="200" cy="80" r="15" fill="currentColor" />
										<circle cx="250" cy="80" r="15" fill="currentColor" />
										<circle cx="300" cy="80" r="15" fill="currentColor" />
										<circle cx="350" cy="80" r="15" fill="currentColor" />
										<circle cx="400" cy="80" r="15" fill="currentColor" />
									</motion.g>
								</svg>
							}
						/>

						{/*Performance Tracking */}
						<FeatureCard
							dim={true}
							icon={<TrendingUpIcon className="h-8 w-8" />}
							title="Interview Ops - Coming Soon"
							description="Handle all your interview needs on expertRound"
							svg={
								<svg viewBox="0 0 500 200" className="w-full h-48">
									<motion.path
										d="M50 150 L100 120 L150 130 L200 100 L250 80 L300 110 L350 70 L400 90 L450 50"
										stroke="currentColor"
										strokeWidth="2"
										fill="none"
										initial={{ pathLength: 0 }}
										whileInView={{ pathLength: 1 }}
										transition={{ duration: 2 }}
									/>
									<motion.g initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}>
										<circle cx="50" cy="150" r="5" fill="currentColor" />
										<circle cx="100" cy="120" r="5" fill="currentColor" />
										<circle cx="150" cy="130" r="5" fill="currentColor" />
										<circle cx="200" cy="100" r="5" fill="currentColor" />
										<circle cx="250" cy="80" r="5" fill="currentColor" />
										<circle cx="300" cy="110" r="5" fill="currentColor" />
										<circle cx="350" cy="70" r="5" fill="currentColor" />
										<circle cx="400" cy="90" r="5" fill="currentColor" />
										<circle cx="450" cy="50" r="5" fill="currentColor" />
									</motion.g>
								</svg>
							}
						/>
					</div>
				</div>
			</section>
			<footer className="border-t py-8 mt-20">
				<div className="container text-center text-sm text-muted-foreground">
					© 2025 expertRound.com. All rights reserved.
				</div>
			</footer>
		</div>
	);
}

const AnimatedBackground = () => (
	<motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="absolute inset-0 -z-10 overflow-hidden">
		<svg className="absolute inset-0 w-full h-full opacity-15 dark:opacity-10">
			<pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
				<path d="M40 0H0V40" fill="none" stroke="currentColor" strokeWidth="1" />
			</pattern>
			<rect width="100%" height="100%" fill="url(#grid)" />
		</svg>
		<motion.div
			animate={{
				x: ['-50%', '50%', '-50%'],
				y: ['-50%', '50%', '-50%'],
			}}
			transition={{
				duration: 20,
				repeat: Infinity,
				ease: 'linear',
			}}
			className="absolute top-1/2 left-1/2 w-[200%] h-[200%] bg-gradient-radial from-primary/20 to-transparent"
		/>
	</motion.div>
);

const MetricItem = ({
	icon,
	title,
	value,
	description,
}: {
	icon: React.ReactNode;
	title: string;
	value: string;
	description: string;
}) => {
	const ref = useRef(null);
	const isInView = useInView(ref, { once: true });

	return (
		<motion.div
			ref={ref}
			initial={{ opacity: 0, x: -20 }}
			animate={isInView ? { opacity: 1, x: 0 } : {}}
			className="flex items-start gap-4 p-6 bg-background rounded-xl shadow-sm"
		>
			<div className="p-3 bg-primary/10 rounded-lg text-primary">{icon}</div>
			<div>
				<div className="text-2xl font-bold text-primary">{value}</div>
				<h3 className="text-lg font-semibold">{title}</h3>
				<p className="text-muted-foreground">{description}</p>
			</div>
		</motion.div>
	);
};

const AnimatedProcess = ({ className }: { className?: string }) => (
	<svg viewBox="0 0 500 200" className={className}>
		<motion.path
			d="M20 100 Q 250 20 480 100"
			stroke="currentColor"
			strokeWidth="2"
			fill="none"
			initial={{ pathLength: 0 }}
			whileInView={{ pathLength: 1 }}
			transition={{ duration: 2 }}
		/>
		<motion.g initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}>
			<circle cx="20" cy="100" r="8" fill="currentColor" />
			<circle cx="250" cy="30" r="8" fill="currentColor" />
			<circle cx="480" cy="100" r="8" fill="currentColor" />
		</motion.g>
	</svg>
);
