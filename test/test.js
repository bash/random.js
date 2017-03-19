'use strict'

const assert = require('assert')
const random = require('../index')

describe('random', () => {
  it('should return a random number', () => {
    assert.equal(4, random())
  })

  it('should be a function', () => {
    assert.equal('function', typeof random)
  })
})
