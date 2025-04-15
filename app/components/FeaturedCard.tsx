import { Card } from '@/components/ui/card';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
export const FeatureCard = ({
	icon,
	title,
	description,
	svg,
	dim,
}: {
	icon: React.ReactNode;
	title: string;
	description: string;
	svg?: React.ReactNode;
	dim?: boolean;
}) => {
	const ref = useRef(null);
	const isInView = useInView(ref, { once: true, margin: '-100px' });

	return (
		<motion.div
			ref={ref}
			initial={{ opacity: 0, y: 20 }}
			animate={isInView ? (dim ? { opacity: 0.5, y: 0 } : { opacity: 1, y: 0 }) : {}}
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
