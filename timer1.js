const alramArr = process.argv.slice(2);

for (let i = 0; i < alramArr.length; i++) {
  if (!alramArr[i] || Number(alramArr[i]) < 0 || Number(alramArr[i]) === NaN) {
    continue;
  }
  setTimeout(() => {
    process.stdout.write("\x07");
    process.stdout.write(`alram at ${alramArr[i]} seconds\n`);
  }, 1000 * Number(alramArr[i]));
}
