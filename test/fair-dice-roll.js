'use strict'

const assert = require('assert')
const { fairDiceRoll } = require('../index')

describe('fair dice roll', () => {
  it('always returns the same number', () => {
    assert.equal(4, fairDiceRoll())
  })
})
