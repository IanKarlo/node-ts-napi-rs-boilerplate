import 'module-alias/register'
import { addAlias } from 'module-alias'
import { resolve } from 'path'

let folder = 'src'
if (process.env.TS_NODE_DEV === undefined && process.env.NODE_ENV !== 'test') {
  folder = 'dist'
}

addAlias('@', resolve(folder))
addAlias('@native', resolve(folder, 'native', 'index.js'))
