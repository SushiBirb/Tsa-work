const staticint = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"]
const input = "54673829574892"

var output = ""
for(var ps=0; ps < input.length; ps++) {
    var num1 = Number(input.charAt(ps))
    output = output + ` ${staticint[num1]}`
}

console.log(output);