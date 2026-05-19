#!/usr/bin/env node
import { spawnSync } from 'child_process'
import { exit } from 'process'

const runCommand = (command, args, cwd) => {
  console.log(`Running: ${command} ${args.join(' ')}`)
  const result = spawnSync(command, args, {
    stdio: 'inherit',
    shell: true,
    cwd: cwd || process.cwd(),
    env: {
      ...process.env,
      PATH: `${process.cwd()}/node_modules/.bin:${process.env.PATH}`
    }
  })
  return result.status === 0
}

console.log('=== Building project ===')
console.log(`Node version: ${process.version}`)
console.log(`Working directory: ${process.cwd()}`)

console.log('\n=== Step 1: Running vue-tsc ===')
if (!runCommand('./node_modules/.bin/vue-tsc', [], process.cwd())) {
  console.error('\n❌ Error: vue-tsc failed')
  exit(1)
}

console.log('\n=== Step 2: Running vite build ===')
if (!runCommand('./node_modules/.bin/vite', ['build'], process.cwd())) {
  console.error('\n❌ Error: vite build failed')
  exit(1)
}

console.log('\n✅ Build completed successfully!')
exit(0)