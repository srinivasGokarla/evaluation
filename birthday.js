function runProgram(input) {
input = input.trim().split("\n")
var[N,K] = input[0].trim().split(" ").map(Number)
for(var i = 1;  i <= N; i++) {
    for(var j =  2; j <= N; j++) {
        if(i != j) {
            console.log(i +  " " + j)
        }
    }
}
}

if (process.env.USERNAME === "USER") {
  runProgram(`4 2`);
} else {
  process.stdin.resume();
  process.stdin.setEncoding("ascii");
  let read = "";
  process.stdin.on("data", function (input) {
    read += input;
  });
  process.stdin.on("end", function () {
    read = read.replace(/\n$/, "");
    read = read.replace(/\n$/, "");
    runProgram(read);
  });
  process.on("SIGINT", function () {
    read = read.replace(/\n$/, "");
    runProgram(read);
    process.exit(0);
  });
}
