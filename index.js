const fairDiceRoll = require('./algorithms/fair-dice-roll')
const dilibertOracle = require('./algorithms/dilbert-oracle')
module.exports = Object.assign(fairDiceRoll, { fairDiceRoll, dilibertOracle })
