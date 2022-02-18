import { coinFlips } from './modules/coin.mjs';

var num = process.argv.length == 2 ? 1 : process.argv.slice(2);

console.log(coinFlips(num));
