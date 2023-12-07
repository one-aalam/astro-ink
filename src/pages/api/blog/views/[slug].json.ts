import type { APIRoute } from 'astro'
// import Redis from 'ioredis'
// In development/HMR, you can accidentally make this call numerous times and exceed your quota...
// const client = new Redis(import.meta.env.REDIS_URI)
// so you can replace the above line with...
const client = new Map<string, number>()
// the API surface we've used is largely equal

// PostgreSQL, Redis
// Supabase,
const getViewsBySlug = async (slug: string): Promise<number> =>  {
    if(slug) {
        const prevValue = await client.get(slug)
        let newValue = 1
        if(prevValue) {
            newValue = parseInt(prevValue) + 1
            await client.set(slug, newValue)
        } else {
            await client.set(slug, 1)
        }
        return newValue
    } else {
        return 0
    }
}

export const GET: APIRoute = async ({ params, request }) => {
    return new Response(
        JSON.stringify({
            views: await getViewsBySlug(params.slug!)
        })
    )
}
