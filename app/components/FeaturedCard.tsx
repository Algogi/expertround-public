import { Card } from '@/components/ui/card';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
export const FeatureCard = ({
	icon,
	title,
	description,
	svg,
}: {
	icon: React.ReactNode;
	title: string;
	description: string;
	svg?: React.ReactNode;
}) => {
	const ref = useRef(null);
	const isInView = useInView(ref, { once: true, margin: '-100px' });

	return (
		<motion.div
			ref={ref}
			initial={{ opacity: 0, y: 20 }}
			animate={isInView ? { opacity: 1, y: 0 } : {}}
			transition={{ duration: 0.6 }}
		>
			<Card className="p-6 hover:shadow-lg transition-shadow h-full">
				<div className="flex flex-col items-start gap-4">
					<div className="p-3 rounded-lg bg-primary/10 text-primary">{icon}</div>
					<h3 className="text-xl font-semibold">{title}</h3>
					<p className="text-muted-foreground mb-4">{description}</p>
					{svg && (
						<motion.div
							initial={{ opacity: 0 }}
							animate={isInView ? { opacity: 1 } : {}}
							className="w-full mt-auto"
						>
							{svg}
						</motion.div>
					)}
				</div>
			</Card>
		</motion.div>
	);
};

// Add AnimatedGraphics components
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

const AnimatedStars = ({ className }: { className?: string }) => (
	<svg viewBox="0 0 100 100" className={className}>
		{[...Array(5)].map((_, i) => (
			<motion.path
				key={i}
				d="M${10 + i*20} 50l5.9-17.3 17.3-5.9-17.3-5.9L${10 + i*20} 2l-5.9 17.3L2 25.9l17.3 5.9L${10 + i*20} 50z"
				fill="currentColor"
				initial={{ scale: 0 }}
				animate={{ scale: 1 }}
				transition={{
					delay: i * 0.2,
					type: 'spring',
					stiffness: 260,
					damping: 20,
				}}
			/>
		))}
	</svg>
);

const AnimatedFlow = ({ className }: { className?: string }) => (
	<svg viewBox="0 0 100 100" className={className}>
		<motion.path
			d="M10 50h80"
			stroke="currentColor"
			strokeWidth="2"
			initial={{ pathLength: 0 }}
			whileInView={{ pathLength: 1 }}
			transition={{ duration: 1 }}
		/>
		<motion.circle cx="10" cy="50" r="5" fill="currentColor" initial={{ scale: 0 }} whileInView={{ scale: 1 }} />
		<motion.circle
			cx="50"
			cy="50"
			r="5"
			fill="currentColor"
			initial={{ scale: 0 }}
			whileInView={{ scale: 1 }}
			transition={{ delay: 0.3 }}
		/>
		<motion.circle
			cx="90"
			cy="50"
			r="5"
			fill="currentColor"
			initial={{ scale: 0 }}
			whileInView={{ scale: 1 }}
			transition={{ delay: 0.6 }}
		/>
	</svg>
);
