console.log("hello from inside main.js");

//let myVar;

const myVar = "Noah";
const myVarType = typeof(myVar);

console.log("myVarType " + myVarType);
console.log(`myVarType ${myVarType}`);

function runNow () {
    if (myVarType === "number") {
        console.log(`will this line (12) run`);
    } else {
        console.log(`will this line (14) run`);
    }
}

runNow();
runNow();