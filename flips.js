import minimist from 'minimist'
import { coinFlips, countFlips } from './modules/coin.mjs'

const args = minimist(process.argv.slice(2))
args["number"]
const number = args.number || 1

var allFlips = coinFlips(number)

console.log(allFlips)
console.log(countFlips(allFlips))
