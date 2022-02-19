import minimist from 'minimist'
import { coinFlip, coinFlips, countFlips } from './modules/coin.mjs'

const args = minimist(process.argv.slice(2))
args["call"]
const guess = args.call || "err1"

if (guess == "err1"){
    console.log("Error: no input.")
} else if (guess != "heads" && guess != "tails"){
    console.log("Error: invalid input.")
} else {
    var res = coinFlip()
    console.log({call:guess, flip:res, result: (guess == res ? "win":"lose")})
}