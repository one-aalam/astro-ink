const client = new Map<string, number>();

export const getViewsBySlug = async (slug: string) => {
	if (slug) {
		const prevValue = client.get(slug);
		let newValue = 1;
		if (prevValue) {
			newValue = parseInt(`${prevValue}`) + 1;
			client.set(slug, newValue);
		} else {
			client.set(slug, 1);
		}
		return newValue;
	}
	return 0;
};