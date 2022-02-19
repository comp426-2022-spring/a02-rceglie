import minimist from 'minimist'
import { coinFlip, coinFlips, countFlips } from './modules/coin.mjs'

const args = minimist(process.argv.slice(2))
args["number"]
const num = args.number || 1
/*
if (number == 1){
    console.log(coinFlips(number))
} else {
    var allFlips = coinFlips(number)
    console.log(allFlips)
    console.log(countFlips(allFlips))
}*/
if (num != 1){
    var allFlips = coinFlips(num)
    console.log(allFlips)
    console.log(countFlips(allFlips))
} else{
    var res = coinFlip()
    console.log("{ " + res + ": 1 }")
}

