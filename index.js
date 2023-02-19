// 3.

let classGroup = "Arts"; 

if (classGroup === "Science") {
  console.log("Your science subjects are: Physics, Chemistry, Biology, Technical Drawing");
} else if (classGroup === "Social Science") {
  console.log("Your social science subjects are: Accounting, Commerce, Marketing, Geography");
} else if (classGroup === "Arts") {
  console.log("Your arts subjects are: Government, Economics, Literature, History");
} else {
  console.log("Invalid class group. Your general subjects are: English, Mathematics");
}

// 5.

function nearestPowerOf2(num) {
    let power = Math.pow(2, Math.round(Math.log2(num)));
    console.log(`The number ${power} is the power of 2 nearest to ${num}.`);
  }
  
  // Example usage:
  nearestPowerOf2(40);
  nearestPowerOf2(50);