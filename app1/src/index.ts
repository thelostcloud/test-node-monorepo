#!/usr/bin/env node

import { minimatch } from 'minimatch'

function main(): void {
  const pattern = '**/a/**/a/**/a/**/a/**/a/**/a/**/a/**/a/**/a/b'
  const path    = 'a/a/a/a/a/a/a/a/a/a/a/a/a/a/a/a/a/a/a/a/a/a/a/a/a/a/a/a/a/a'

  const start = Date.now()
  minimatch(path, pattern)
  console.log(Date.now() - start + 'ms') // ~1200ms
}

main();
