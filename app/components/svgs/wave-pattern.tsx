// components/svgs/wave-pattern.tsx
export function WavePattern() {
	return (
		<svg className="absolute inset-0 -z-10 opacity-10 dark:opacity-5">
			<pattern id="wave" width="120" height="120" patternUnits="userSpaceOnUse">
				<path d="M0 60L60 0 120 60 60 120 0 60" fill="none" stroke="currentColor" strokeWidth="1" />
			</pattern>
			<rect width="100%" height="100%" fill="url(#wave)" />
		</svg>
	);
}
