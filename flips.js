import { coinFlips } from './modules/coin.mjs';

const args = require("minimist")(process.argv.slice(2));
args["number"]

var num = args.number || 1;

console.log(coinFlips(num));
