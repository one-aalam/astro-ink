import React, { Suspense } from 'react'
import { fetch$, server$ } from '@tanstack/bling'
import { Outlet, type RouteObject } from 'react-router-dom'

import { manifestContext } from './manifest'

const rpcHello = fetch$(async (payload: {name: string}) => console.log(payload), { method: 'GET'})

function RPCHello() {
    return <button onClick={ () => rpcHello({ name: "aftab" })}>Call rpcHello</button>
}

function ScriptsDev() {
    return (
      <>
        <script type="module" src="/@vite/client"></script>
        <script type="module" src="/src/app/entry-client.tsx"></script>
      </>
    )
}

function Scripts() {
    const manifest = React.useContext(manifestContext)
    return (
      <script type="module" src={manifest['entry-client']}></script>
    )
}

const inlineSecret = server$('inline server-only secret!')

export function App() {
    console.log('Do you know the inline server secret?', inlineSecret ?? 'Not even.')

    return (
      <html>
        <head>
          <title>Astro + Bling</title>
        </head>
        <body>
          <Suspense>
            <Outlet/>
          </Suspense>
          <ScriptsDev />
        </body>
      </html>
    )
  }

  const ChildRoute = function() {
    const [state, setState] = React.useState(0)

    return (
      <>
        <RPCHello />
        <button onClick={() => setState((state) => state + 1)}>Click</button>
        {state}
      </>
    )
  }

  export const routes: RouteObject[] = [
    {
        path: '/admin',
        element: <App/>,
        children: [
            {
                index: true,
                element: <ChildRoute/>
            }
        ]
    }
  ]
