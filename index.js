const fairDiceRoll = require('./algorithms/fair-dice-roll')
const dilbertOracle = require('./algorithms/dilbert-oracle')
module.exports = Object.assign(fairDiceRoll, { fairDiceRoll, dilbertOracle })
