'use strict'

const assert = require('assert')
const random = require('../index')

describe('legacy default export', () => {
  it('should be the same as fair dice roll', () => {
    assert.equal(random.fairDiceRoll, random)
  })
})
