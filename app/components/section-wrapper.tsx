// components/section-wrapper.tsx
'use client';

import { motion } from 'framer-motion';

export function SectionWrapper({ children }: { children: React.ReactNode }) {
	return (
		<motion.div
			initial={{ opacity: 0, y: 20 }}
			whileInView={{ opacity: 1, y: 0 }}
			viewport={{ once: true, margin: '-100px' }}
			transition={{ duration: 0.6 }}
		>
			{children}
		</motion.div>
	);
}
