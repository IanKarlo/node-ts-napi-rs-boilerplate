import './config/module-alias'

import { sayHello, sayHelloTo } from '@native'

export function main() {
  console.log(sayHello())
  console.log(sayHelloTo('John'))

  return 0
}

main()