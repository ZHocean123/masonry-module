import { join } from 'node:path'
import { defineNuxtModule, createResolver, addComponentsDir } from '@nuxt/kit'

// Module options TypeScript interface definition
// eslint-disable-next-line @typescript-eslint/no-empty-object-type
export interface ModuleOptions {}

export default defineNuxtModule<ModuleOptions>({
  meta: {
    name: 'nuxt-masonry',
    configKey: 'masonry',
  },
  // Default configuration options of the Nuxt module
  defaults: {},
  setup(_options, _nuxt) {
    const resolver = createResolver(import.meta.url)

    const runtimeDir = resolver.resolve('./runtime')
    _nuxt.options.build.transpile.push(runtimeDir)
    addComponentsDir({ path: join(runtimeDir, 'components') })
  },
})
