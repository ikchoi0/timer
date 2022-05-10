process.stdout.write("enter a number between 1-9 to set an alarm: ");
process.stdin.on("data", (key) => {
  // \u0003 maps to ctrl+c input
  if (key === "\u0003") {
    console.log("Thanks for using me, ciao!");
    process.exit();
  }
  let num = Number(key);
  if (num === NaN || num > 9 || num < 1) {
    console.log(`Please enter a number between 1-9`);
  }
  console.log(`stting timer for ${num} seconds`);
  setTimeout(() => {
    console.log("beeeeeeeep " + num + "seconds has passed!");
  }, num * 1000);
});
5