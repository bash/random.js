declare namespace random {
    // Troll: Nine nine nine nine nine nine
    function dilbertOracle(): number;
    // chosen by fair dice roll. guaranteed to be random.
    function fairDiceRoll(): number;
}
// Legacy default export
declare function random(): number;
export = random;
