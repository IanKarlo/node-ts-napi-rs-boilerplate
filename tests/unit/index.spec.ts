import { test, expect } from 'vitest'

import { main } from "@/index";

test('Should execute main', () => {
    expect(main()).toBe(0)
})