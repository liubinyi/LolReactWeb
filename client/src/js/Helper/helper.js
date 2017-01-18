export function applyPercentageItemEffect(oldStats, num) {
		let newStats = oldStats * (1 + num);
		return newStats;
}

export function applyFlatItemEffect(oldStats, num) {
		if (oldStats == null) {
			return num;
		} else {
			return oldStats + num;
		}
}