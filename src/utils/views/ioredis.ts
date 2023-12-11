import Redis from 'ioredis'
const client = new Redis(import.meta.env.REDIS_URI)

export const getViewsBySlug = async (slug: string) => {
	if (slug) {
		const prevValue = await client.get(slug);
		let newValue = 1;
		if (prevValue) {
			newValue = parseInt(`${prevValue}`) + 1;
			await client.set(slug, newValue);
		} else {
			await client.set(slug, 1);
		}
		return newValue;
	}
	return 0;
};