import 'module-alias/register'
import { addAlias } from 'module-alias'
import { resolve } from 'path'

let folder = 'src'
if (process.env.TS_NODE_DEV === undefined) {
  folder = 'dist'
}

addAlias('@', resolve(__dirname, '..', '..', folder))
addAlias('@native', resolve(__dirname, '..', '..', folder, 'native', 'index.js'))