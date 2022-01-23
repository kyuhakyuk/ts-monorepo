import glob from 'glob'
import { Router } from 'express'

export default function createRouter(dirname: string) {
  return glob
    .sync('**/*.{ts,js}', { cwd: `${dirname}/` })
    .map(filename => require(`${dirname}/${filename}`))
    .filter(router => Object.getPrototypeOf(router) === Router)
    .reduce((root, router) => root.use(router), Router({ mergeParams: true }))
}
