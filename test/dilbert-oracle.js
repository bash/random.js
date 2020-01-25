'use strict'

const assert = require('assert')
const { dilibertOracle } = require('../index')

describe('dilibert oracle', () => {
  it('always returns the same number', () => {
    assert.equal(9, dilibertOracle())
  })
})
