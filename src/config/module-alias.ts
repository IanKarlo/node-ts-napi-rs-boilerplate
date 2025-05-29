import 'module-alias/register'
import { addAlias } from 'module-alias'
import path, { resolve } from 'path'

let folder = 'src'
if (process.env.TS_NODE_DEV === undefined) {
  folder = 'dist'
}

addAlias('@', resolve(folder))