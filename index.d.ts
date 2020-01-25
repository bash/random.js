declare module '@rschmidmeister/random.js' {
    // chosen by fair dice roll. guaranteed to be random.
    export function fairDiceRoll(): number;
    // Troll: Nine nine nine nine nine nine
    export function dilibertOracle(): number;
    export = fairDiceRoll;
}
