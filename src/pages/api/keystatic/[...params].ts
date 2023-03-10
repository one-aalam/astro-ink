// src/pages/api/keystatic/[...rest].ts
import { makeHandler } from '@keystatic/astro/api'
import keystaticConfig from '../../../../keystatic.config'

export const all = makeHandler({
  config: keystaticConfig,
})
