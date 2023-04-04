import { defineMarkdocConfig } from '@astrojs/markdoc/config'
import { config as markdocConfig } from './src/utils/mdoc/mdoc.config'

export default defineMarkdocConfig(markdocConfig)
