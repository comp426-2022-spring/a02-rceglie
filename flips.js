import { coinFlips, countFlips } from './modules/coin.mjs';

var num = process.argv.length == 2 ? 1 : process.argv.slice(2);

var allFlips = coinFlips(num);

console.log(allFlips);
console.log(countFlips(allFlips));
