import minimist from 'minimist'
import { coinFlip, coinFlips, countFlips } from './modules/coin.mjs'

const args = minimist(process.argv.slice(2))
args["number"]
const number = args.number || 1

if (number == 1){
    console.log(coinFlip())
} else {
    var allFlips = coinFlips(number)
    console.log(allFlips)
    console.log(countFlips(allFlips))
}

