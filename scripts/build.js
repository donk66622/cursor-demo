#!/usr/bin/env node
import { spawnSync } from 'child_process'
import { exit } from 'process'

const runCommand = (command, args) => {
  const result = spawnSync(command, args, {
    stdio: 'inherit',
    shell: true
  })
  return result.status === 0
}

console.log('Building project...')

console.log('Step 1: Running vue-tsc...')
if (!runCommand('vue-tsc', [])) {
  console.error('Error: vue-tsc failed')
  exit(1)
}

console.log('Step 2: Running vite build...')
if (!runCommand('vite', ['build'])) {
  console.error('Error: vite build failed')
  exit(1)
}

console.log('Build completed successfully!')
exit(0)