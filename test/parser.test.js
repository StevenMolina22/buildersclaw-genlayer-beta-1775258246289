import assert from 'node:assert/strict'
import { parseInvoice } from '../src/parser.js'

const parsed = parseInvoice('hello')
assert.equal(parsed.raw, 'hello')
assert.equal(parsed.length, 5)
console.log('basic parser test passed')
