const alramArr = process.argv.slice(2);

for (let i = 0; i < alramArr.length; i++) {
  if (!alramArr[i]) {
    process.stdout.write('beep');
    continue;
  }
  if (alramArr[i] < 0) {
    continue;
  }
  if (typeof Number(alramArr[i]) !== 'number') {
    continue;
  }
  setTimeout(() => {
    process.stdout.write('\x07');
    process.stdout.write(`alram at ${alramArr[i]} seconds\n`);
  }, 1000 * Number(alramArr[i]));
}