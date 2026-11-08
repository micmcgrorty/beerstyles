import { rangeGradient } from "../catalogue/colours.ts";
import { scaleOf, scalePercent, type ChartedStat } from "../catalogue/stats.ts";
import type { Stat } from "../catalogue/stats.ts";
import styles from "./range-track.module.css";

/** The bar(s) for one stat on its scale. Used by the charts and the style page. */
export function RangeTrack({
	kind,
	stat,
	large = false,
}: {
	kind: ChartedStat;
	stat: Stat;
	large?: boolean;
}) {
	let scale = scaleOf(kind);
	let className = [styles.track, large && styles.large, stat.ranges.length === 0 && styles.varies]
		.filter(Boolean)
		.join(" ");

	return (
		<div className={className} aria-hidden="true">
			{scale.spectrum ? (
				<div className={styles.spectrum} style={{ background: scale.spectrum }} />
			) : null}
			<div
				className={styles.grid}
				style={{ backgroundSize: `${(scale.step / scale.max) * 100}% 100%` }}
			/>
			{stat.ranges.map((range) => {
				let left = scalePercent(kind, range.min);
				let width = scalePercent(kind, range.max) - left;
				return (
					<div
						key={`${range.min}-${range.max}`}
						className={styles.bar}
						title={range.label}
						style={{
							left: `${left}%`,
							width: `max(8px, ${width}%)`,
							background: rangeGradient(range, scale.colourAt),
						}}
					/>
				);
			})}
		</div>
	);
}
