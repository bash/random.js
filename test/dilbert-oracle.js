'use strict'

const assert = require('assert')
const { dilbertOracle } = require('../index')

describe('dilbert oracle', () => {
  it('always returns the same number', () => {
    assert.equal(9, dilbertOracle())
  })
})
