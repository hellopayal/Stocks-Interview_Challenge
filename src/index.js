
import Portfolio from "./Portfolio.js";
import MaxProfit from "./MaxProfit.js";


const args=process.argv.slice(2);

if (args.length !== 2) {
    throw new Error("Invalid arguments.");
}

const [part, input] = args;

if (part !== "-part1" && part !== "-part2") {
    throw new Error("Invalid arguments.");
}
if (typeof input !== "string") {
    throw new Error("Invalid arguments.");
}

switch(part){
    case '-part1' : {
        console.log(Portfolio(input));
    }
    break;
    case '-part2' : {
        console.log(MaxProfit(input));
    }
    break;
}
