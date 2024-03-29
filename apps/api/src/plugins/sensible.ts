import fp from 'fastify-plugin'
import type { SensibleOptions } from '@fastify/sensible'
import sensible from '@fastify/sensible'

export default fp<SensibleOptions>(async fastify => {
  fastify.register(sensible)
})