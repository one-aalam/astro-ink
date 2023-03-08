import { hasHandler, handleEvent } from "@tanstack/bling/server";
import type { APIContext } from "astro";
import * as ReactDOM from 'react-dom/server.browser'

import { createStaticHandler } from "@remix-run/router";
import { createStaticRouter, StaticRouterProvider } from 'react-router-dom/server'

import { manifest } from 'astro:ssr-manifest'
import { manifestContext } from './manifest'
import { routes } from './root'

export async function handle({ request }: APIContext) {
    // API handling
    if (hasHandler(new URL(request.url).pathname)) {
        return await handleEvent({
          request,
        })
    }

    let { query } = createStaticHandler(routes)
    let context = await query(request)

    if (context instanceof Response) {
        throw context
    }

    let router = createStaticRouter(routes, context)
    // or SSR
    return new Response(
        await ReactDOM.renderToReadableStream(
            <manifestContext.Provider value={manifest}>
                <StaticRouterProvider
                    router={router}
                    context={context}
                    nonce="the-nonce"
                />
            </manifestContext.Provider>,
        ), {
            headers: {
                'content-type': 'text/html'
            }
        }
    )
}
