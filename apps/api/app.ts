import path from 'node:path'
import AutoLoad from '@fastify/autoload'
import { FastifyPluginAsync } from 'fastify'

export const app: FastifyPluginAsync = async (fastify, opts) => {
  fastify.register(AutoLoad, {
    dir: path.join(__dirname, 'plugins'),
    options: Object.assign({}, opts)
  })

  fastify.register(AutoLoad, {
    dir: path.join(__dirname, 'routes'),
    options: Object.assign({}, opts)
  })
}
